/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { ModuleWithProviders, NgModule, Optional } from '@angular/core';

import { LOGGER_PROVIDER } from '@dagonmetric/ng-log';

import { FirebaseAnalyticsLoggerProvider } from './firebase-analytics-logger-provider';
import { FIREBASE_APP } from './firebase-app';
import { FIREBASE_APP_NAME_TOKEN, FIREBASE_OPTIONS_TOKEN, FirebaseOptions } from './firebase-options';

import { firebaseAppFactory } from './firebase-app-factory';

// tslint:disable-next-line: no-import-side-effect
import 'firebase/analytics';

/**
 * The `NGMODULE` for providing `LOGGER_PROVIDER` with `FirebaseAnalyticsLoggerProvider`.
 */
@NgModule({
    providers: [
        {
            provide: FIREBASE_APP,
            useFactory: (firebaseAppFactory),
            deps: [
                FIREBASE_OPTIONS_TOKEN,
                [new Optional(), FIREBASE_APP_NAME_TOKEN]
            ]
        },
        {
            provide: LOGGER_PROVIDER,
            useClass: FirebaseAnalyticsLoggerProvider,
            multi: true
        }
    ]
})
export class FirebaseAnalyticsLoggerModule {
    static initialize(options: FirebaseOptions, appNname?: string): ModuleWithProviders {
        return {
            ngModule: FirebaseAnalyticsLoggerModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS_TOKEN,
                    useValue: options
                },
                {
                    provide: FIREBASE_APP_NAME_TOKEN,
                    useValue: appNname
                }
            ]
        };
    }
}
