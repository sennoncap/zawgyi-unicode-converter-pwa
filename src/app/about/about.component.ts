/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { ConfigService } from '@dagonmetric/ng-config';

import { AppConfig } from '../shared/app-config';
/**
 * App about component.
 */
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    get appName(): string | undefined {
        return this._appConfig.appName;
    }

    get appVersion(): string | undefined {
        return this._appConfig.appVersion;
    }

    get appDescription(): string | undefined {
        return this._appConfig.appDescription;
    }

    private readonly _appConfig: AppConfig;

    constructor(configService: ConfigService) {
        this._appConfig = configService.getValue<AppConfig>('app');
    }
}
