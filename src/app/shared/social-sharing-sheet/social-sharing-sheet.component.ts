/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CacheService } from '@dagonmetric/ng-cache';
import { LogService } from '@dagonmetric/ng-log';

import { appSettings } from '../app-settings';

/**
 * App social sharing sheet component.
 */
@Component({
    selector: 'app-social-sharing-sheet',
    templateUrl: './social-sharing-sheet.component.html',
    styleUrls: ['./social-sharing-sheet.component.scss']
})
export class SocialSharingSheetComponent {    

    constructor(
        private readonly _bottomSheetRef: MatBottomSheetRef<SocialSharingSheetComponent>,
        private readonly _logService: LogService,
        private readonly _cacheService: CacheService,
        private readonly _snackBar: MatSnackBar) {}

    openSharing(): void {
        appSettings.socialSharing = appSettings.socialSharing || {};

        const socialSharingSubject = appSettings.socialSharing.subject;
        const socialSharingLink = appSettings.socialSharing.linkUrl;
        const socialSharingMessage = appSettings.socialSharing.message;

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
                        app_version: appSettings.appVersion,
                        app_platform: 'web'
                    }
                });
                this.dismissSheetAndShowThankYouMessage();
            }).catch((err: Error) => {
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

    dismissSheet(): void {
        this._cacheService.setItem('socialSharingNoButtonPressed', true);

        this._bottomSheetRef.dismiss();
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
            `toolbar=0,status=0,resizable=yes,width=${winWidth},height=${winHeight},top=${winTop},left=${winLeft}`);

        this._logService.trackEvent({
            name: 'share',
            properties: {
                method: 'Facebook Share Dialog',
                app_version: appSettings.appVersion,
                app_platform: 'web'
            }
        });

        this.dismissSheetAndShowThankYouMessage();
    }

    private dismissSheetAndShowThankYouMessage(): void {
        this._cacheService.setItem('socialSharingYesButtonPressed', true);

        this._bottomSheetRef.dismiss();

        this._snackBar.open('Thank you for sharing 😄.', undefined, {
            duration: 3000
        });
    }
}
