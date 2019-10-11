/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';

import { LOGGER_PROVIDER } from '@dagonmetric/ng-log';

import { FIREBASE_ANALYTICS_LOGGER_OPTIONS_TOKEN, FirebaseAnalyticsLoggerOptions } from './firebase-analytics-logger-options';
import { FirebaseAnalyticsLoggerProvider } from './firebase-analytics-logger-provider';

/**
 * The `NGMODULE` for providing `LOGGER_PROVIDER` with `FirebaseAnalyticsLoggerProvider`.
 */
@NgModule({
    providers: [
        {
            provide: LOGGER_PROVIDER,
            useClass: FirebaseAnalyticsLoggerProvider,
            multi: true
        }
    ]
})
export class FirebaseAnalyticsLoggerModule {
    static initialize(options: FirebaseAnalyticsLoggerOptions): ModuleWithProviders {
        return {
            ngModule: FirebaseAnalyticsLoggerModule,
            providers: [
                {
                    provide: FIREBASE_ANALYTICS_LOGGER_OPTIONS_TOKEN,
                    useValue: options
                }
            ]
        };
    }
}
