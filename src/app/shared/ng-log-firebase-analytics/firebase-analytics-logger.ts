/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { analytics } from 'firebase/app';

import { EventInfo, Logger, LogInfo, LogLevel, PageViewInfo } from '@dagonmetric/ng-log';

/**
 * Firebase analytics implementation for `Logger`.
 */
export class FirebaseAnalyticsLogger extends Logger {
    constructor(readonly name: string, private readonly _analytics?: analytics.Analytics) {
        super();
    }

    log(logLevel: LogLevel, message: string | Error, logInfo?: LogInfo): void {
        if (!this._analytics || logLevel === LogLevel.None) {
            return;
        }

        // tslint:disable-next-line: no-any
        const properties: { [key: string]: any } = logInfo && logInfo.properties ? { ...logInfo.properties } : {};

        if (logLevel === LogLevel.Error || logLevel === LogLevel.Critical) {
            properties.description = typeof message === 'string' ? message : `${message}`;
            properties.fatal = logLevel === LogLevel.Critical;

            this._analytics.logEvent('exception', properties);
        } else {
            let level: string;
            if (logLevel === LogLevel.Trace) {
                level = 'trace';
            } else if (logLevel === LogLevel.Debug) {
                level = 'debug';
            } else if (logLevel === LogLevel.Info) {
                level = 'info';
            } else {
                level = 'warn';
            }

            properties.message = typeof message === 'string' ? message : `${message}`;
            properties.level = level;

            this._analytics.logEvent('trace', properties);
        }
    }

    startTrackPage(): void {
        // Not implemented yet.
    }

    stopTrackPage(): void {
        // Not implemented yet.
    }

    trackPageView(pageViewInfo?: PageViewInfo): void {
        if (!this._analytics) {
            return;
        }

        // TODO:
        const screenName = pageViewInfo && pageViewInfo.name ? pageViewInfo.name : '';
        this._analytics.setCurrentScreen(screenName);
    }

    startTrackEvent(): void {
        // Not implemented yet.
    }

    stopTrackEvent(): void {
        // Not implemented yet.
    }

    trackEvent(eventInfo: EventInfo): void {
        if (!this._analytics) {
            return;
        }

        // tslint:disable-next-line: no-any
        const properties: { [key: string]: any } = {
            ...eventInfo.properties
        };
        if (eventInfo.event_category) {
            properties.event_category = eventInfo.event_category;
        }
        if (eventInfo.event_label) {
            properties.event_label = eventInfo.event_label;
        }

        this._analytics.logEvent(eventInfo.name, properties);
    }

    flush(): void {
        // Do nothing
    }
}
