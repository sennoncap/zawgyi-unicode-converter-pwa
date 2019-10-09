/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import {
    EventInfo,
    Logger,
    LoggerProvider,
    LogInfo,
    LogLevel,
    PageViewInfo
} from '@dagonmetric/ng-log';

import { analytics } from 'firebase/app';

import { FirebaseApp } from './firebase-app';
import { firebaseAppFactory } from './firebase-app-factory';
import { FIREBASE_APP_NAME_TOKEN, FIREBASE_OPTIONS_TOKEN, FirebaseOptions } from './firebase-options';

import { FirebaseAnalyticsLogger } from './firebase-analytics-logger';

/**
 * Logger provider factory for `FirebaseAnalyticsLogger`.
 */
@Injectable({
    providedIn: 'root'
})
export class FirebaseAnalyticsLoggerProvider extends Logger implements LoggerProvider {
    private readonly _app?: FirebaseApp;
    private readonly _isBrowser: boolean;

    private _analytics?: analytics.Analytics;
    private _currentLogger?: FirebaseAnalyticsLogger;

    get name(): string {
        return 'firebaseAnalytics';
    }

    get currentLogger(): FirebaseAnalyticsLogger {
        if (this._currentLogger) {
            return this._currentLogger;
        }

        if (this._isBrowser && this._app && !this._analytics) {
            this._analytics = this._app.analytics();
        }

        this._currentLogger = new FirebaseAnalyticsLogger(
            '',
            this._analytics);

        return this._currentLogger;
    }

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        @Inject(FIREBASE_OPTIONS_TOKEN) options: FirebaseOptions,
        @Inject(FIREBASE_APP_NAME_TOKEN) appName?: string) {
        super();

        this._isBrowser = isPlatformBrowser(platformId);

        if (this._isBrowser && options && options.measurementId) {
            this._app = firebaseAppFactory(options, appName);
        }
    }

    createLogger(category: string): Logger {
        if (this._isBrowser && this._app && !this._analytics) {
            this._analytics = this._app.analytics();
        }

        return new FirebaseAnalyticsLogger(
            category,
            this._analytics);
    }

    setUserProperties(userId: string, accountId?: string): void {
        if (this._isBrowser && this._app && !this._analytics) {
            this._analytics = this._app.analytics();
        }

        if (this._analytics) {
            this._analytics.setUserId(userId);
            if (accountId) {
                this._analytics.setUserProperties({
                    account_id: accountId
                });
            }

        }
    }

    clearUserProperties(): void {
        if (this._isBrowser && this._app && !this._analytics) {
            this._analytics = this._app.analytics();
        }

        if (this._analytics) {
            // tslint:disable-next-line: no-any
            this._analytics.setUserId(null as any);
        }
    }

    log(logLevel: LogLevel, message: string | Error, logInfo?: LogInfo): void {
        this.currentLogger.log(logLevel, message, logInfo);
    }

    startTrackPage(): void {
        this.currentLogger.startTrackPage();
    }

    stopTrackPage(): void {
        this.currentLogger.stopTrackPage();
    }

    trackPageView(pageViewInfo?: PageViewInfo): void {
        this.currentLogger.trackPageView(pageViewInfo);
    }

    startTrackEvent(): void {
        this.currentLogger.startTrackEvent();
    }

    stopTrackEvent(): void {
        this.currentLogger.stopTrackEvent();
    }

    trackEvent(eventInfo: EventInfo): void {
        this.currentLogger.trackEvent(eventInfo);
    }

    flush(): void {
        this.currentLogger.flush();
    }
}
