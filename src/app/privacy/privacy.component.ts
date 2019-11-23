/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { ConfigService } from '@dagonmetric/ng-config';

import { AppConfig } from '../shared/app-config';

/**
 * App privacy statement component.
 */
@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PrivacyComponent {
    get privacyUrl(): string | undefined {
        return this._appConfig.privacyUrl;
    }

    private readonly _appConfig: AppConfig;

    constructor(configService: ConfigService) {
        this._appConfig = configService.getValue<AppConfig>('app');
    }
}
