/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { ConfigService } from '@dagonmetric/ng-config';
import { LogService } from '@dagonmetric/ng-log';

import { NavLinkItem } from './shared/nav-link-item';

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

    get appTitle(): string {
        return this._configService.getValue<string>('appName');
    }

    get appTitleFull(): string {
        const appTitleSuffix = this._configService.getValue<string>('appTitleSuffix');

        return `${this.appTitle} | ${appTitleSuffix}`;
    }

    get privacyUrl(): string {
        return this._configService.getValue<string>('privacyUrl');
    }

    get navLinks(): NavLinkItem[] {
        return this._configService.getValue<NavLinkItem[]>('navLinks', []);
    }

    private readonly _onDestroy = new Subject<void>();

    constructor(
        private readonly _configService: ConfigService,
        private readonly _logService: LogService,
        private readonly _snackBar: MatSnackBar,
        router: Router,
        breakpointObserver: BreakpointObserver) {
        router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._onDestroy)
            )
            .subscribe((data: NavigationEnd) => {
                const urlAfterRedirects = data.urlAfterRedirects;
                this._logService.trackPageView({
                    name: urlAfterRedirects
                });
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
        const socialSharingSubject = this._configService.getValue<string>('socialSharingSubject');
        const socialSharingLink = this._configService.getValue<string>('socialSharingLink');
        const socialSharingMessage = this._configService.getValue<string>('socialSharingMessage');

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
        const socialSharingLink = this._configService.getValue<string>('socialSharingLink');
        const appId = this._configService.getValue<string>('facebookAppId');
        const socialSharingMessage = this._configService.getValue<string>('socialSharingMessage');

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
