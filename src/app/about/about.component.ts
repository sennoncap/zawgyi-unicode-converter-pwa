/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { ConfigService } from '@dagonmetric/ng-config';

/**
 * App about component.
 */
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    get appVersion(): string {
        return this._configService.getValue<string>('appVersion');
    }

    get appName(): string {
        return this._configService.getValue<string>('appName');
    }

    get appDescription(): string {
        return this._configService.getValue<string>('appDescription');
    }

    constructor(private readonly _configService: ConfigService) { }
}
