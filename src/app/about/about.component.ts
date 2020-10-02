/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CacheService } from '@dagonmetric/ng-cache';
import { LogService } from '@dagonmetric/ng-log';

import { environment } from '../../environments/environment';

import { appSettings } from '../shared/app-settings';
import { NavLinkItem } from '../shared/nav-link-item';
import { UrlHelper } from '../shared/url-helper';

/**
 * App about component.
 */
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
    private readonly _imageUrl = 'assets/images/social-image.jpg';

    get appName(): string | undefined {
        return appSettings.appName;
    }

    get appVersion(): string | undefined {
        return appSettings.appVersion;
    }

    get releaseDate(): Date | undefined {
        return new Date(appSettings.releaseDateUtc);
    }

    get navLinks(): NavLinkItem[] {
        return appSettings.navLinks;
    }

    get imageUrl(): string {
        return environment.production ? this._urlHelper.toAbsoluteUrl(this._imageUrl) : this._imageUrl;
    }

    constructor(
        private readonly _dialogRef: MatDialogRef<AboutComponent>,
        private readonly _logService: LogService,
        private readonly _cacheService: CacheService,
        private readonly _snackBar: MatSnackBar,
        private readonly _urlHelper: UrlHelper
    ) {}

    openSharing(): void {
        appSettings.socialSharing = appSettings.socialSharing || {};

        const socialSharingSubject = appSettings.socialSharing.subject;
        const socialSharingLink = appSettings.socialSharing.linkUrl;
        const socialSharingMessage = appSettings.socialSharing.message;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
        if (typeof navigator === 'object' && (navigator as any).share) {
            navigator
                .share({
                    title: socialSharingSubject,
                    text: socialSharingMessage,
                    url: socialSharingLink
                })
                .then(() => {
                    this._logService.trackEvent({
                        name: 'share',
                        properties: {
                            method: 'Web Share API',
                            app_version: appSettings.appVersion,
                            app_platform: 'web'
                        }
                    });
                    this.closeDialogAndShowThankYouMessage();
                })
                .catch((err: Error) => {
                    const errMsg = err && err.message ? ` ${err.message}` : '';
                    this._logService.error(`An error occurs when sharing via Web API.${errMsg}`, {
                        properties: {
                            app_version: appSettings.appVersion
                        }
                    });

                    this.shareTofacebook();
                });
        } else {
            this.shareTofacebook();
        }
    }

    private shareTofacebook(): void {
        appSettings.socialSharing = appSettings.socialSharing || {};

        const appId = appSettings.facebookAppId || '';
        const socialSharingLink = appSettings.socialSharing.linkUrl || '';
        const socialSharingMessage = appSettings.socialSharing.message || '';

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
            `toolbar=0,status=0,resizable=yes,width=${winWidth},height=${winHeight},top=${winTop},left=${winLeft}`
        );

        this._logService.trackEvent({
            name: 'share',
            properties: {
                method: 'Facebook Share Dialog',
                app_version: appSettings.appVersion,
                app_platform: 'web'
            }
        });

        this.closeDialogAndShowThankYouMessage();
    }

    private closeDialogAndShowThankYouMessage(): void {
        this._cacheService.setItem('socialSharingYesButtonPressed', true);

        this._dialogRef.close();

        this._snackBar.open('Thank you for sharing 😄.', undefined, {
            duration: 3000
        });
    }
}
