/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { FirebaseAnalyticsLoggerModule } from './shared/ng-log-firebase-analytics';

import { AppComponent } from './app.component';
import { appId, AppModule } from './app.module';

/**
 * App module for browser platform.
 */
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: appId }),
        BrowserTransferStateModule,
        HttpClientModule,

        AppModule,

        BrowserAnimationsModule,

        FirebaseAnalyticsLoggerModule.initialize({
            firebase: environment.firebase,
            appName: appId,
            logError: !environment.production
        }),

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ]
})
export class AppBrowserModule { }
