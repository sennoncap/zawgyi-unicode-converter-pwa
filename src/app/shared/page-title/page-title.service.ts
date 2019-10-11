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

import { AppConfig } from '../app-config';

/**
 * App page title service.
 */
@Injectable()
export class PageTitleService {
    private readonly _appConfig: AppConfig;
    private _pageTitle = '';

    get title(): string { return this._pageTitle; }

    constructor(private readonly _titleService: Title, configService: ConfigService) {
        this._appConfig = configService.getValue<AppConfig>('app');
    }

    setTitle(title: string, separator?: string, isFullTitle?: boolean): void {
        if (isFullTitle) {
            this._pageTitle = title;
        } else {
            this._pageTitle = `${this.appName} ${separator || '|'} ${title}`;
        }

        this._titleService.setTitle(this._pageTitle);
    }

    private get appName(): string | undefined {
        return this._appConfig.appName;
    }
}
