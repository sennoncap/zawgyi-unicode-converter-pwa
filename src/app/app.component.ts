/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { isPlatformBrowser } from '@angular/common';
import {
    ApplicationRef,
    Component,
    HostBinding,
    Inject,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

import { concat, interval, Observable, Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';

import { CacheService } from '@dagonmetric/ng-cache';
import { ConfigService } from '@dagonmetric/ng-config';
import { LogService } from '@dagonmetric/ng-log';

import { LinkService } from '../modules/seo';

import { AppConfig } from './shared/app-config';
import { PageTitleService } from './shared/page-title';
import { UrlHelper } from './shared/url-helper';

const SMALL_WIDTH_BREAKPOINT = 720;

/**
 * Core app component.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
    isScreenSmall?: Observable<boolean>;

    @ViewChild('sidenav', { static: false })
    sidenav?: MatSidenav;

    @HostBinding('class') componentClass?: string;

    get isDarkMode(): boolean {
        this._isDarkMode = this._cacheService.getItem<boolean>('isDarkMode');

        return this._isDarkMode == null ? false : this._isDarkMode;
    }
    set isDarkMode(value: boolean) {
        this._isDarkMode = value;
        this._cacheService.setItem('isDarkMode', value);
        this.updateTheme();
        this.updateComponentClass();

        this._logService.trackEvent({
            name: 'change_dark_mode',
            properties: {
                is_dark: value,
                app_version: this._appConfig.appVersion
            }
        });
    }

    get appTitle(): string | undefined {
        return this._appConfig.appName;
    }

    get appTitleFull(): string {
        return `${this.appTitle} | Myanmar Tools`;
    }

    private readonly _isBrowser: boolean;
    private readonly _checkInterval = 1000 * 60 * 60 * 6;
    private readonly _appConfig: AppConfig;
    private readonly _onDestroy = new Subject<void>();
    private _isFirstNavigation = true;
    private _pageClass?: string;
    private _themeClass?: string;
    private _isDarkMode?: boolean | null = null;

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private readonly _logService: LogService,
        private readonly _snackBar: MatSnackBar,
        private readonly _appRef: ApplicationRef,
        private readonly _swUpdate: SwUpdate,
        private readonly _cacheService: CacheService,
        private readonly _overlayContainer: OverlayContainer,
        configService: ConfigService,
        pageTitleService: PageTitleService,
        linkService: LinkService,
        metaService: Meta,
        urlHelper: UrlHelper,
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        breakpointObserver: BreakpointObserver) {
        this._isBrowser = isPlatformBrowser(platformId);
        this._appConfig = configService.getValue<AppConfig>('app');

        if (this._isBrowser) {
            this.updateTheme();
            this.updateComponentClass();
        }

        this.checkUpdate();

        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map((event: NavigationEnd) => {
                    let child = this._activatedRoute.firstChild;
                    while (child && child.firstChild) {
                        child = child.firstChild;
                    }

                    if (!child) {
                        return undefined;
                    }

                    return {
                        pagePath: event.urlAfterRedirects,
                        screenName: child.snapshot.data.screenName,
                        pageType: child.snapshot.data.pageType
                    };
                }),
                takeUntil(this._onDestroy)
            )
            .subscribe((routeData?: { pagePath: string; screenName?: string; pageType?: string }) => {
                if (routeData && routeData.screenName && routeData.pageType !== 'home-page') {
                    pageTitleService.setTitle(routeData.screenName, '-');
                } else {
                    pageTitleService.setTitle(this.appTitleFull, undefined, true);
                }

                if (routeData && routeData.pagePath) {
                    const urlAbs = urlHelper.toAbsoluteUrl(routeData.pagePath);

                    // Set canonical link
                    linkService.updateTag({
                        rel: 'canonical',
                        href: urlAbs
                    });

                    metaService.updateTag({
                        property: 'og:url',
                        content: urlAbs
                    });
                }

                if (routeData) {
                    this._pageClass = routeData.pageType;
                    this.updateComponentClass();
                }

                const currentTitle = pageTitleService.title;

                this._logService.trackPageView({
                    name: currentTitle,
                    uri: !this._isFirstNavigation && routeData && routeData.pagePath ? routeData.pagePath : undefined,
                    page_type: routeData && routeData.pageType ? routeData.pageType : undefined,
                    properties: {
                        app_version: this._appConfig.appVersion
                    }
                });

                if (this._isFirstNavigation && this._isBrowser && routeData && routeData.pageType === 'home-page') {
                    this._isFirstNavigation = false;
                    const prevVerCountStr = this._cacheService.getItem<string>(`appUsedCount-v${this._appConfig.previousAppVersion}`);
                    const curVerCountStr = this._cacheService.getItem<string>(`appUsedCount-v${this._appConfig.appVersion}`);
                    const appUpdated = this._cacheService.getItem<string>('appUpdated');
                    if (appUpdated === 'true' || (prevVerCountStr && !curVerCountStr)) {
                        if (appUpdated === 'true') {
                            this._cacheService.setItem('appUpdated', 'false');
                        }

                        this.increaseAppUsedCount();

                        // tslint:disable-next-line: no-floating-promises
                        this._router.navigate(['about'], { relativeTo: this._activatedRoute });
                    } else {
                        this.increaseAppUsedCount(curVerCountStr);
                    }
                }
            });

        this.isScreenSmall = breakpointObserver.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(
                // tslint:disable-next-line: no-unsafe-any
                map(breakpoint => breakpoint.matches)
            );
    }

    ngOnInit(): void {
        // Do nothing
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();

        this._logService.flush();
    }

    toggleSideNav(): void {
        if (!this.sidenav) {
            return;
        }

        // tslint:disable-next-line: no-floating-promises
        this.sidenav.toggle().then(drawerResult => {
            this._logService.trackEvent({
                name: 'toggle_drawer_menu',
                properties: {
                    action: drawerResult === 'open' ? 'open' : 'close',
                    app_version: this._appConfig.appVersion
                }
            });
        });
    }

    openSharing(): void {
        this._appConfig.socialSharing = this._appConfig.socialSharing || {};

        const socialSharingSubject = this._appConfig.socialSharing.subject;
        const socialSharingLink = this._appConfig.socialSharing.linkUrl;
        const socialSharingMessage = this._appConfig.socialSharing.message;

        // tslint:disable-next-line: no-any
        if (typeof navigator === 'object' && (navigator as any).share) {
            // tslint:disable-next-line: no-any no-unsafe-any
            (navigator as any).share({
                title: socialSharingSubject,
                text: socialSharingMessage,
                url: socialSharingLink
            }).then(() => {
                this._logService.trackEvent({
                    name: 'share',
                    properties: {
                        method: 'Web Share API',
                        app_version: this._appConfig.appVersion
                    }
                });
                this.showThankYouMessage();
            }).catch((err: Error) => {
                const errMsg = err && err.message ? ` ${err.message}` : '';
                this._logService.error(`An error occurs when sharing via Web API.${errMsg}`, {
                    properties: {
                        app_version: this._appConfig.appVersion
                    }
                });

                this.shareTofacebook();
            });
        } else {
            this.shareTofacebook();
        }
    }

    private updateTheme(): void {
        if (this.isDarkMode) {
            this._themeClass = 'dark-theme';
            this._overlayContainer.getContainerElement().classList.add(this._themeClass);
        } else {
            this._themeClass = '';
            this._overlayContainer.getContainerElement().classList.remove('dark-theme');
        }
    }

    private updateComponentClass(): void {
        this.componentClass = '';
        if (this._pageClass) {
            this.componentClass += this._pageClass;
        }
        if (this._themeClass) {
            if (this.componentClass) {
                this.componentClass += ' ';
            }
            this.componentClass += this._themeClass;
        }
    }

    private shareTofacebook(): void {
        this._appConfig.socialSharing = this._appConfig.socialSharing || {};

        const appId = this._appConfig.facebookAppId || '';
        const socialSharingLink = this._appConfig.socialSharing.linkUrl || '';
        const socialSharingMessage = this._appConfig.socialSharing.message || '';

        let urlString = 'https://www.facebook.com/dialog/share?';
        urlString += `&app_id=${encodeURIComponent(appId)}`;
        // urlString += `&redirect_uri=${encodeURIComponent(socialSharingLink)}`;
        urlString += `&href=${encodeURIComponent(socialSharingLink)}`;
        urlString += `&quote=${encodeURIComponent(socialSharingMessage)}`;
        // urlString += `&display=${encodeURIComponent('popup')}`;

        const winWidth = 557;
        const winHeight = 690;
        const winTop = (window.innerHeight - winHeight) / 2; // (screen.height / 2) - (winHeight / 2);
        const winLeft = (window.innerWidth - winWidth) / 2; // (screen.width / 2) - (winWidth / 2);

        window.open(
            urlString,
            'Facebook',
            `toolbar=0,status=0,resizable=yes,width=${winWidth},height=${winHeight},top=${winTop},left=${winLeft}`);

        this._logService.trackEvent({
            name: 'share',
            properties: {
                method: 'Facebook Share Dialog',
                app_version: this._appConfig.appVersion
            }
        });

        this.showThankYouMessage();
    }

    private showThankYouMessage(): void {
        this._snackBar.open('Thank you for sharing 😄.', undefined, {
            duration: 3000
        });
    }

    private checkUpdate(): void {
        if (!this._swUpdate.isEnabled) {
            return;
        }

        const appIsStable = this._appRef.isStable.pipe(first(isStable => isStable === true));
        concat(appIsStable, interval(this._checkInterval))
            .pipe(
                takeUntil(this._onDestroy),
            )
            .subscribe(() => this._swUpdate.checkForUpdate());

        this._swUpdate.available
            .pipe(
                takeUntil(this._onDestroy),
            )
            .subscribe((evt) => {
                const snackBarRef = this._snackBar.open('Update available.', 'RELOAD');
                snackBarRef
                    .onAction()
                    .subscribe(() => {
                        this._logService.trackEvent({
                            name: 'reload_update',
                            properties: {
                                app_version: this._appConfig.appVersion,
                                current_hash: evt.current.hash,
                                available_hash: evt.available.hash
                            }
                        });

                        this._cacheService.setItem('appUpdated', 'true');

                        // tslint:disable-next-line: no-floating-promises
                        this._swUpdate.activateUpdate()
                            .then(() => {
                                document.location.reload();
                            });
                    });
            });
    }

    private increaseAppUsedCount(curVerCountStr?: string | null): void {
        if (!this._isBrowser) {
            return;
        }

        try {
            let count = curVerCountStr ? parseInt(curVerCountStr, 10) : 0;
            ++count;

            this._cacheService.setItem(`appUsedCount-v${this._appConfig.appVersion}`, `${count}`);
        } catch (err) {
            // Do nothing
        }
    }
}
