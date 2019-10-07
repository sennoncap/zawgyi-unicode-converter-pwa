/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import * as firebase from 'firebase/app';

import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

import { LOGGER_PROVIDER } from '@dagonmetric/ng-log';

import { FirebaseLoggerProvider } from './firebase-logger-provider';

export interface FirebaseOptions {
    // tslint:disable-next-line: no-any
    [key: string]: any;
}

export const FIREBASE_OPTIONS_TOKEN = new InjectionToken<FirebaseOptions>('FirebaseOptions');

export type FirebaseAuth = firebase.auth.Auth;
export type FirebaseDatabase = firebase.database.Database;
export type FirebaseMessaging = firebase.messaging.Messaging;
export type FirebaseStorage = firebase.storage.Storage;
export type FirebaseFirestore = firebase.firestore.Firestore;
export type FirebaseFunctions = firebase.functions.Functions;
export type FirebaseInstallations = firebase.installations.Installations;
export type FirebasePerformance = firebase.performance.Performance;
export type FirebaseRemoteConfig = firebase.remoteConfig.RemoteConfig;
export type FirebaseAnalytics = firebase.analytics.Analytics;

// tslint:disable-next-line: completed-docs
export class FirebaseApp {
    name?: string;
    options?: Object;

    auth?: () => FirebaseAuth;
    database?: (databaseURL?: string) => FirebaseDatabase;
    // tslint:disable-next-line: no-any no-reserved-keywords
    delete?: () => Promise<any>;

    installations?: () => FirebaseInstallations;
    messaging?: () => FirebaseMessaging;
    storage?: (storageBucket?: string) => FirebaseStorage;
    firestore?: () => FirebaseFirestore;
    functions?: (region?: string) => FirebaseFunctions;
    performance?: () => FirebasePerformance;
    remoteConfig?: () => FirebaseRemoteConfig;
    analytics?: () => FirebaseAnalytics;
}

export function firebaseAppFactory(options: FirebaseOptions): FirebaseApp {
    const configName = '[DEFAULT]';
    // tslint:disable-next-line: no-any
    const existingApp = firebase.apps.filter(app => app && app.name === configName)[0] as FirebaseApp;

    return (existingApp || firebase.initializeApp(options));
}

/**
 * The `NGMODULE` for providing `LOGGER_PROVIDER` with `FirebaseLoggerProvider`.
 */
@NgModule({
    providers: [
        {
            provide: LOGGER_PROVIDER,
            useClass: FirebaseLoggerProvider,
            multi: true
        }
    ]
})
export class FirebaseLoggerModule {
    // tslint:disable-next-line: no-any
    static initializeApp(options: { [key: string]: any }): ModuleWithProviders {
        // firebaseAppFactory(options);

        return {
            ngModule: FirebaseLoggerModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS_TOKEN,
                    useValue: options
                },
                {
                    provide: FirebaseApp,
                    useFactory: firebaseAppFactory,
                    deps: [
                        FIREBASE_OPTIONS_TOKEN
                    ]
                }
            ]
        };
    }
}
