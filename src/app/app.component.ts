/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { ConfigService } from '@dagonmetric/ng-config';
import { LogService, PageViewInfo } from '@dagonmetric/ng-log';

import { AppConfig } from './shared/app-config';
import { NavLinkItem } from './shared/nav-link-item';
import { PageTitleService } from './shared/page-title';

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
export class AppComponent implements OnDestroy {
    isScreenSmall?: Observable<boolean>;

    @ViewChild('sidenav', { static: false })
    sidenav?: MatSidenav;

    get appTitle(): string | undefined {
        return this._appConfig.appName;
    }

    get appTitleFull(): string {
        return `${this.appTitle} | Myanmar Tools`;
    }

    get appVersion(): string | undefined {
        return this._appConfig.appVersion;
    }

    get privacyUrl(): string | undefined {
        return this._appConfig.privacyUrl;
    }

    get navLinks(): NavLinkItem[] {
        return this._appConfig.navLinks || [];
    }

    private readonly _appConfig: AppConfig;
    private readonly _onDestroy = new Subject<void>();
    private _isFirstNavigation = true;

    constructor(
        private readonly _logService: LogService,
        private readonly _snackBar: MatSnackBar,
        configService: ConfigService,
        pageTitleService: PageTitleService,
        router: Router,
        activatedRoute: ActivatedRoute,
        breakpointObserver: BreakpointObserver) {
        this._appConfig = configService.getValue<AppConfig>('app');
        router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map((event: NavigationEnd) => {
                    let child = activatedRoute.firstChild;
                    while (child && child.firstChild) {
                        child = child.firstChild;
                    }

                    if (!child) {
                        return undefined;
                    }

                    return {
                        name: child.snapshot.data.title,
                        uri: event.urlAfterRedirects,
                        page_type: child.snapshot.data.pageType
                    };
                }),
                takeUntil(this._onDestroy)
            )
            .subscribe((pageViewInfo?: PageViewInfo) => {
                if (pageViewInfo && pageViewInfo.name) {
                    pageTitleService.setTitle(pageViewInfo.name, '-');
                } else {
                    pageTitleService.setTitle(this.appTitleFull, undefined, true);
                }

                if (pageViewInfo) {
                    pageViewInfo.properties = pageViewInfo.properties || {};
                    pageViewInfo.properties.app_name = this.appTitle;
                    pageViewInfo.properties.app_version = this.appVersion;
                    pageViewInfo.properties.app_id = this._appConfig.appId;

                    pageViewInfo.name = pageTitleService.title;
                }

                this._logService.trackPageView(this._isFirstNavigation ? undefined : pageViewInfo);
                this._isFirstNavigation = false;
            });

        this.isScreenSmall = breakpointObserver.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(
                // tslint:disable-next-line: no-unsafe-any
                map(breakpoint => breakpoint.matches)
            );
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
                event_category: 'engagement',
                name: 'toggle_drawer_menu',
                properties: {
                    action: drawerResult === 'open' ? 'open' : 'close',
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
                    event_category: 'engagement',
                    name: 'share',
                    properties: {
                        method: 'Web Share API'
                    }
                });
                this.showThankYouMessage();
            }).catch((err: Error) => {
                const errMsg = err && err.message ? ` ${err.message}` : '';
                this._logService.warn(`An error occurs when sharing via Web API.${errMsg}`);

                this.shareTofacebook();
            });
        } else {
            this.shareTofacebook();
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
            event_category: 'engagement',
            name: 'share',
            properties: {
                method: 'Facebook Share Dialog'
            }
        });

        this.showThankYouMessage();
    }

    private showThankYouMessage(): void {
        this._snackBar.open('Thank you for sharing 😄.', undefined, {
            duration: 3000
        });
    }
}
