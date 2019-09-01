/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslitModule } from '@dagonmetric/ng-translit';
import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { environment } from '../environments/environment';

import { CdkTextareaSyncSizeModule } from '../cdk-extensions';

import { AppComponent } from './app.component';

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
        HttpClientModule,

        BrowserTransferStateModule,

        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,

        CdkTextareaSyncSizeModule,

        // ng-translit module
        TranslitModule,

        // ng-zawgyi-detector module
        ZawgyiDetectorModule,

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
