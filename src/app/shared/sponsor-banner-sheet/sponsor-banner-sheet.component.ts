/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { CacheService } from '@dagonmetric/ng-cache';
import { ConfigService } from '@dagonmetric/ng-config';
import { LogService } from '@dagonmetric/ng-log';

import { AppConfig } from '../app-config';

/**
 * App sponsor component.
 */
@Component({
    selector: 'app-sponsor-banner-sheet',
    templateUrl: './sponsor-banner-sheet.component.html',
    styleUrls: ['./sponsor-banner-sheet.component.scss']
})
export class SponsorBannerSheetComponent {
    sponsoredName = '';
    sponsoredText = '';
    sponsoredLink = '';
    sponsoredLinkText = '';
    sponsoredLogoLink = '';

    private readonly _appConfig: AppConfig;

    constructor(
        private readonly _bottomSheetRef: MatBottomSheetRef<SponsorBannerSheetComponent>,
        private readonly _logService: LogService,
        private readonly _cacheService: CacheService,
        configService: ConfigService, ) {
        this._appConfig = configService.getValue<AppConfig>('app');
    }

    openLink(): void {
        this._cacheService.setItem('sponsoredLinkPressed', true);

        this._logService.trackEvent({
            name: 'click_sponsor_link',
            properties: {
                sponsored_name: this.sponsoredName,
                sponsored_text: this.sponsoredText,
                sponsored_link: this.sponsoredLink,
                app_version: this._appConfig.appVersion,
                app_platform: 'web'
            }
        });

        this._bottomSheetRef.dismiss();
    }

    dismissSheet(): void {
        this._cacheService.setItem('sponsoredLinkDismissed', true);

        this._bottomSheetRef.dismiss();
    }
}
