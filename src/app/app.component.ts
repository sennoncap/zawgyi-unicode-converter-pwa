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
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

import { concat, interval, Observable, Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';

import { CacheService } from '@dagonmetric/ng-cache';
import { ConfigService } from '@dagonmetric/ng-config';
import { LogService } from '@dagonmetric/ng-log';

import { environment } from '../environments/environment';
import { LinkService } from '../modules/seo';

import { AppConfig } from './shared/app-config';
import { NavLinkItem } from './shared/nav-link-item';
import { PageTitleService } from './shared/page-title';
import { SocialSharingSheetComponent } from './shared/social-sharing-sheet';
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
    isHomePage = true;

    @ViewChild('sidenav', { static: false })
    sidenav?: MatSidenav;

    @HostBinding('class') componentClass?: string;

    get isDarkMode(): boolean {
        return this._isDarkMode == null ? false : this._isDarkMode;
    }
    set isDarkMode(value: boolean) {
        this.setDarkMode(value);

        this._logService.trackEvent({
            name: value ? 'change_dark_mode' : 'change_light_mode',
            properties: {
                app_version: this._appConfig.appVersion,
                app_platform: 'web'
            }
        });
    }

    get appTitle(): string {
        return this._appConfig.appName;
    }

    get appTitleFull(): string {
        return `${this.appTitle} | Myanmar Tools`;
    }

    get appVersion(): string {
        return this._appConfig.appVersion;
    }

    get appDescription(): string {
        return this._appConfig.appDescription;
    }

    get logoUrl(): string {
        return environment.production ? this._urlHelper.toAbsoluteUrl(this._logoUrl) : this._logoUrl;
    }

    get communityLinks(): NavLinkItem[] {
        if (this._isBrowser && this._appUsedCount > 0) {
            return this._appConfig.navLinks;
        } else {
            return this._appConfig.navLinks.filter(navLink => navLink.expanded === true);
        }
    }

    get aboutSectionVisible(): boolean {
        return this._appUsedCount < 1 && this.isHomePage && !this._aboutPageNavigated ? true : false;
    }

    private readonly _logoUrl = 'assets/appicons/logo.png';
    private readonly _isBrowser: boolean;
    private readonly _appUsedCount: number = 0;
    private readonly _checkInterval = 1000 * 60 * 60 * 6;
    private readonly _appConfig: AppConfig;
    private readonly _onDestroy = new Subject<void>();
    private _isFirstNavigation = true;
    private _pageClass?: string;
    private _themeClass?: string;
    private _isDarkMode?: boolean | null = null;
    private _aboutPageNavigated = false;

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private readonly _logService: LogService,
        private readonly _snackBar: MatSnackBar,
        private readonly _appRef: ApplicationRef,
        private readonly _swUpdate: SwUpdate,
        private readonly _cacheService: CacheService,
        private readonly _overlayContainer: OverlayContainer,
        private readonly _urlHelper: UrlHelper,
        private readonly _pageTitleService: PageTitleService,
        private readonly _linkService: LinkService,
        private readonly _metaService: Meta,
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _bottomSheet: MatBottomSheet,
        configService: ConfigService,
        breakpointObserver: BreakpointObserver) {
        this._isBrowser = isPlatformBrowser(platformId);
        this._appConfig = configService.getValue<AppConfig>('app');

        if (this._isBrowser) {
            const appUsedCountStr = this._cacheService.getItem<string>(`appUsedCount-v${this._appConfig.appVersion}`);
            if (appUsedCountStr) {
                this._appUsedCount = parseInt(appUsedCountStr, 10);
            }

            this.detectDarkTheme();
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
                        return {};
                    }

                    return {
                        pagePath: event.urlAfterRedirects,
                        pageType: child.snapshot.data.pageType,
                        meta: child.snapshot.data.meta
                    };
                }),
                takeUntil(this._onDestroy)
            )
            .subscribe((routeData: { pagePath?: string; pageType?: string; meta?: { [key: string]: string } }) => {
                this.isHomePage = routeData.pageType === 'home-page' ? true : false;
                this.updateMeta(routeData);

                if (routeData) {
                    this._pageClass = routeData.pageType;
                    this.updateComponentClass();
                }

                this._logService.trackPageView({
                    name: this._pageTitleService.title,
                    uri: !this._isFirstNavigation && routeData.pagePath ? routeData.pagePath : undefined,
                    page_type: routeData.pageType ? routeData.pageType : undefined,
                    properties: {
                        app_version: this._appConfig.appVersion
                    }
                });

                if (!this._aboutPageNavigated && this._isBrowser && routeData.pageType === 'about-page') {
                    this._aboutPageNavigated = true;
                }

                if (this._isBrowser && this.isHomePage &&
                    this._isFirstNavigation && this.isNewAppUpdated()) {
                    this._isFirstNavigation = false;
                    this.increaseAppUsedCount();

                    // tslint:disable-next-line: no-floating-promises
                    this._router.navigate(['/about'], { relativeTo: this._activatedRoute });
                } else if (this._isBrowser && this.isHomePage &&
                    this._isFirstNavigation && this.shouldShowSocialSharingSheet()) {
                    this._isFirstNavigation = false;
                    this.increaseAppUsedCount();

                    this._cacheService.setItem('socialSharingSheetShownIn', this._appUsedCount);

                    this._bottomSheet.open(SocialSharingSheetComponent);
                } else if (this._isFirstNavigation) {
                    this._isFirstNavigation = false;
                    this.increaseAppUsedCount();
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
                name: drawerResult === 'open' ? 'open_drawer_menu' : 'close_drawer_menu',
                properties: {
                    app_version: this._appConfig.appVersion,
                    app_platform: 'web'
                }
            });
        });
    }

    private updateMeta(routeData: { pagePath?: string; pageType?: string; meta?: { [key: string]: string } }): void {
        if (routeData.pagePath) {
            const url = this._urlHelper.toAbsoluteUrl(routeData.pagePath);

            this._linkService.updateTag({
                rel: 'canonical',
                href: url
            });

            this._metaService.updateTag({
                property: 'og:url',
                content: url
            });
        }

        const pageTitle = routeData.meta && routeData.meta.title ? routeData.meta.title : this.appTitleFull;
        this._pageTitleService.setTitle(pageTitle, undefined, true);

        const socialTitle = routeData.meta && routeData.meta.socialTitle ? routeData.meta.socialTitle : pageTitle;
        this._metaService.updateTag({
            name: 'twitter:title',
            content: socialTitle
        });
        this._metaService.updateTag({
            property: 'og:title',
            content: socialTitle
        });

        const metaDescription = routeData.meta && routeData.meta.description ? routeData.meta.description : this._appConfig.appDescription;
        this._metaService.updateTag({
            name: 'description',
            content: metaDescription
        });

        const socialDescription = routeData.meta && routeData.meta.socialDescription ? routeData.meta.socialDescription : metaDescription;
        this._metaService.updateTag({
            name: 'twitter:description',
            content: socialDescription
        });
        this._metaService.updateTag({
            property: 'og:description',
            content: socialDescription
        });

        const keywords = routeData.meta && routeData.meta.keywords ? routeData.meta.keywords : this._appConfig.appName;
        this._metaService.updateTag({
            name: 'keywords',
            content: keywords
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
                                app_platform: 'web',
                                current_hash: evt.current.hash,
                                available_hash: evt.available.hash
                            }
                        });

                        // tslint:disable-next-line: no-floating-promises
                        this._swUpdate.activateUpdate()
                            .then(() => {
                                document.location.reload();
                            });
                    });
            });
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

    private detectDarkTheme(): void {
        const isDarkModeStr = this._cacheService.getItem('isDarkMode');
        this.detectDarkThemeChange(isDarkModeStr == null ? true : isDarkModeStr === 'true', true);
    }

    private detectDarkThemeChange(defaultValue: boolean, forceDefaultValue?: boolean): void {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (forceDefaultValue) {
                this.setDarkMode(defaultValue);
            } else {
                this.setDarkMode(darkModeMediaQuery.matches);
            }

            if (darkModeMediaQuery.addEventListener) {
                darkModeMediaQuery.addEventListener('change', (mediaQuery) => {
                    this.setDarkMode(mediaQuery.matches);
                });
            }
        } else {
            this.setDarkMode(defaultValue);
        }
    }

    private setDarkMode(value: boolean): void {
        this._isDarkMode = value;
        this._cacheService.setItem('isDarkMode', `${value}`.toLowerCase());
        this.toggleDarkTheme(value);
        this.updateComponentClass();
    }

    private toggleDarkTheme(isDark: boolean): void {
        this._themeClass = isDark ? 'dark' : '';
        this._overlayContainer.getContainerElement().classList.toggle('dark', isDark);
    }

    private isNewAppUpdated(): boolean {
        if (!this._isBrowser) {
            return false;
        }

        let foundOldVer = false;
        const oldVersions = [
            '3.3.0',
            '3.2.0',
            '3.1.0',
            '3.0.0',
            '2.0.7',
            '2.0.6',
            '2.0.5',
            '2.0.4',
            '2.0.3',
            '2.0.2',
            '2.0.1',
            '2.0.0',
            '2.0.0-preview1',
            '1.1.5',
            '1.1.4',
            '1.1.3',
            '1.1.2',
            '1.1.1',
            '1.0.1',
            '1.0.0'

        ];

        for (const ver of oldVersions) {
            const str = this._cacheService.getItem<string>(`appUsedCount-v${ver}`);
            if (str) {
                foundOldVer = true;
                break;
            }
        }

        const cachedCurVer = this._cacheService.getItem<string>(`appUsedCount-v${this._appConfig.appVersion}`);

        return foundOldVer && !cachedCurVer ? true : false;
    }

    private increaseAppUsedCount(): void {
        if (!this._isBrowser) {
            return;
        }

        this._cacheService.setItem(`appUsedCount-v${this._appConfig.appVersion}`, `${this._appUsedCount + 1}`);
    }

    private shouldShowSocialSharingSheet(): boolean {
        if (this._appUsedCount < 3 || typeof navigator !== 'object' || !navigator.onLine) {
            return false;
        }

        const socialSharingYesButtonPressed = this._cacheService.getItem<boolean>('socialSharingYesButtonPressed');
        if (socialSharingYesButtonPressed) {
            return false;
        }

        const socialSharingNoButtonPressed = this._cacheService.getItem<boolean>('socialSharingNoButtonPressed');
        if (socialSharingNoButtonPressed) {
            return false;
        }

        const socialSharingSheetShownIn = this._cacheService.getItem<number>('socialSharingSheetShownIn');

        if (socialSharingSheetShownIn && this._appUsedCount < socialSharingSheetShownIn + 7) {
            return false;
        }

        return true;
    }

    // private shouldShowSponsorSheet(): boolean {
    //     if (this._appUsedCount < 1000) {
    //         return false;
    //     }

    //     const sponsoredLinkPressed = this._cacheService.getItem<boolean>('sponsoredLinkPressed');
    //     if (sponsoredLinkPressed) {
    //         return false;
    //     }

    //     const sponsoredLinkDismissed = this._cacheService.getItem<boolean>('sponsoredLinkDismissed');
    //     if (sponsoredLinkDismissed) {
    //         return false;
    //     }

    //     const sponsorSheetShownIn = this._cacheService.getItem<number>('sponsorSheetShownIn');

    //     if (sponsorSheetShownIn && this._appUsedCount < sponsorSheetShownIn + 10) {
    //         return false;
    //     }

    //     return true;
    // }
}
