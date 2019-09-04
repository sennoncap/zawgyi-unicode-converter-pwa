/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ConfigModule } from '@dagonmetric/ng-config';
import { StaticConfigLoaderModule } from '@dagonmetric/ng-config/static-loader';
import { LogModule } from '@dagonmetric/ng-log';
import { GTagLoggerModule } from '@dagonmetric/ng-log-gtag';
import { TranslitModule } from '@dagonmetric/ng-translit';

import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { environment } from '../environments/environment';

import { CdkTextareaSyncSizeModule } from '../cdk-extensions';
import { CustomIconRegistry } from '../mat-extensions';

import { AppComponent } from './app.component';
import { appSvgIconProviders } from './app.svg-icons';
import { ZgUniTranslitRuleLoaderModule } from './zg-uni-translit-rule-loader.module';

/**
 * App module for both node and web platforms.
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'zawgyi-unicode-converter-angular-pwa' }),
        CommonModule,

        BrowserTransferStateModule,

        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,

        CdkTextareaSyncSizeModule,

        // ng-translit module
        TranslitModule,

        // ng-translit rule loader
        ZgUniTranslitRuleLoaderModule,

        // ng-zawgyi-detector module
        ZawgyiDetectorModule,

        // ng-log modules
        LogModule,
        GTagLoggerModule.withOptions({
            measurementId: 'UA-137255227-1'
        }),

        // ng-config modules
        ConfigModule.init(),
        StaticConfigLoaderModule.withSettings({
            appVersion: '1.0.0',
            title: 'Zawgyi Unicode Converter',
            titleSuffix: ' - Myanmar Tools',
            githubRepoUrl: 'https://github.com/myanmartools/zawgyi-unicode-converter-angular-pwa',
            githubImageAlt: 'Zawgyi Unicode Converter GitHub Repo',
            baseUrl: 'https://zawgyi-unicode-converter.myanmartools.org/',
            appImageUrl: 'assets/images/appicons/v1/logo.png',
            githubImageUrl: 'assets/images/appicons/v1/github.svg',
            socialLinks: [
                {
                    url: 'https://www.facebook.com/DagonMetric',
                    label: 'Follow Myanmar Tools on Facebook',
                    svgIconName: 'facebook'
                },
                // {
                //     url: 'https://twitter.com/myanmartools',
                //     label: 'Follow Myanmar Tools on Twitter',
                //     svgIconName: 'twitter'
                // },
                {
                    url: 'https://medium.com/myanmartools',
                    label: 'Myanmar Tools Blog on Medium',
                    svgIconName: 'medium'
                }
            ]
        }),

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        {
            provide: MatIconRegistry,
            useClass: CustomIconRegistry
        },
        appSvgIconProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
