/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';

import { from, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import {
    EventInfo,
    Logger,
    LoggerProvider,
    LogInfo,
    LogLevel,
    PageViewInfo
} from '@dagonmetric/ng-log';

import { analytics } from 'firebase/app';

import { FirebaseAnalyticsLogger } from './firebase-analytics-logger';
import { FIREBASE_ANALYTICS_LOGGER_OPTIONS_TOKEN, FirebaseAnalyticsLoggerOptions } from './firebase-analytics-logger-options';
import { firebaseAppFactory } from './firebase-app-factory';
import { runOutsideAngular } from './zone-helper';

/**
 * Logger provider factory for `FirebaseAnalyticsLogger`.
 */
@Injectable({
    providedIn: 'root'
})
export class FirebaseAnalyticsLoggerProvider extends Logger implements LoggerProvider {
    private _currentLogger?: FirebaseAnalyticsLogger;
    private readonly _analytics$?: Observable<analytics.Analytics>;

    get name(): string {
        return 'firebaseAnalytics';
    }

    get currentLogger(): FirebaseAnalyticsLogger {
        if (this._currentLogger) {
            return this._currentLogger;
        }

        this._currentLogger = new FirebaseAnalyticsLogger(
            '',
            this._zone,
            this._analytics$);

        return this._currentLogger;
    }

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private readonly _zone: NgZone,
        @Inject(FIREBASE_ANALYTICS_LOGGER_OPTIONS_TOKEN) private readonly _options: FirebaseAnalyticsLoggerOptions) {
        super();
        const isBrowser = isPlatformBrowser(platformId);
        if (isBrowser && this._options.firebase && this._options.firebase.measurementId) {
            const firebaseOptions = this._options.firebase;
            const appName = this._options.appName;

            const analyticsModule = from(import('firebase/analytics'));

            this._analytics$ = analyticsModule.pipe(
                map(() => this._zone.runOutsideAngular(() => {
                    const app = firebaseAppFactory(firebaseOptions, appName);

                    return app.analytics();
                })),
                shareReplay(1)
            );
        }
    }

    createLogger(category: string): Logger {
        return new FirebaseAnalyticsLogger(
            category,
            this._zone,
            this._analytics$);
    }

    setUserProperties(userId: string, accountId?: string): void {
        if (!this._analytics$) {
            return;
        }

        this._analytics$.pipe(
            tap((analyticsService) => {
                analyticsService.setUserId(userId);
                if (accountId) {
                    analyticsService.setUserProperties({
                        account_id: accountId
                    });
                }

            }),
            runOutsideAngular(this._zone)
        ).subscribe();
    }

    clearUserProperties(): void {
        if (!this._analytics$) {
            return;
        }

        this._analytics$.pipe(
            tap((analyticsService) => {
                // tslint:disable-next-line: no-any
                analyticsService.setUserId(null as any);
            }),
            runOutsideAngular(this._zone)
        ).subscribe();
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
