/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { ConfigService } from '@dagonmetric/ng-config';

import { environment } from '../../environments/environment';

import { AppConfig } from '../shared/app-config';
import { UrlHelper } from '../shared/url-helper';

/**
 * App sponsor component.
 */
@Component({
    selector: 'app-sponsor',
    templateUrl: './sponsor.component.html',
    styleUrls: ['./sponsor.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SponsorComponent {
    private readonly _imageUrl = 'assets/images/sponsor-vac.jpg';

    get appName(): string | undefined {
        return this._appConfig.appName;
    }

    get imageUrl(): string {
        return environment.production ? this._urlHelper.toAbsoluteUrl(this._imageUrl) : this._imageUrl;
    }

    private readonly _appConfig: AppConfig;

    constructor(
        private readonly _urlHelper: UrlHelper,
        configService: ConfigService) {
        this._appConfig = configService.getValue<AppConfig>('app');
    }
}
