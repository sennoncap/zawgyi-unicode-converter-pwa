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

import { environment } from '../environments/environment';

import { CacheLocalStorageModule } from '@dagonmetric/ng-cache';
import { FirebaseRemoteConfigProviderModule } from '@dagonmetric/ng-config-firebase-remote-config';
import { FirebaseAnalyticsLoggerModule } from '@dagonmetric/ng-log-firebase-analytics';

import { AppComponent } from './app.component';
import { AppModule, appId } from './app.module';

/**
 * App module for browser platform.
 */
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId }),
        BrowserTransferStateModule,
        HttpClientModule,
        AppModule,
        BrowserAnimationsModule,

        CacheLocalStorageModule,
        FirebaseRemoteConfigProviderModule.configure({
            firebaseConfig: environment.firebase,
            remoteConfigSettings: {
                minimumFetchIntervalMillis: environment.production ? 43200000 : 30000,
                fetchTimeoutMillis: environment.production ? 30000 : 60000
            },
            throwIfLoadError: environment.production ? false : true
        }),
        FirebaseAnalyticsLoggerModule.configure({
            firebaseConfig: environment.firebase
        })
    ]
})
export class AppBrowserModule {}
