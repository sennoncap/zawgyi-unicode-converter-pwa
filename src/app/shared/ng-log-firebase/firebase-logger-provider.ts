/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import {
    EventInfo,
    Logger,
    LoggerProvider,
    LogInfo,
    LogLevel,
    PageViewInfo
} from '@dagonmetric/ng-log';

import { FirebaseLogger } from './firebase-logger';

/**
 * Logger provider factory for `FirebaseLogger`.
 */
@Injectable({
    providedIn: 'root'
})
export class FirebaseLoggerProvider extends Logger implements LoggerProvider {
    private _currentLogger?: FirebaseLogger;

    get name(): string {
        return 'firebase';
    }

    get currentLogger(): FirebaseLogger {
        if (this._currentLogger) {
            return this._currentLogger;
        }

        this._currentLogger = new FirebaseLogger(
            '',
            this._platformId);

        return this._currentLogger;
    }

    constructor(
        @Inject(PLATFORM_ID) private readonly _platformId: Object) {
        super();
    }

    createLogger(category: string): Logger {
        return new FirebaseLogger(
            category,
            this._platformId);
    }

    setUserProperties(): void {
        // Not implemented yet.
    }

    clearUserProperties(): void {
        // Not implemented yet.
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
