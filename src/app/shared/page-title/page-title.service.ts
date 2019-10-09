/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfigService } from '@dagonmetric/ng-config';

/**
 * App page title service.
 */
@Injectable()
export class PageTitleService {
    private _pageTitle = '';

    get title(): string { return this._pageTitle; }

    set title(title: string) {
        if (title) {
            this._pageTitle = `${this.appName} - ${title}`;
        } else {
            this._pageTitle = this.defaultHomeTitle;
        }

        this._titleService.setTitle(this._pageTitle);
    }

    constructor(private readonly _titleService: Title, private readonly _configService: ConfigService) { }

    private get defaultHomeTitle(): string {
        const appTitleSuffix = this._configService.getValue<string>('appTitleSuffix');

        return `${this.appName} | ${appTitleSuffix}`;
    }

    private get appName(): string {
        return this._configService.getValue<string>('appName');
    }
}
