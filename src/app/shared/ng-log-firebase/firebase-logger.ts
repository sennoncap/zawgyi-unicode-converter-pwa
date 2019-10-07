/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { analytics } from 'firebase/app';

// tslint:disable-next-line: no-import-side-effect
import 'firebase/analytics';

import { isPlatformBrowser } from '@angular/common';

import { EventInfo, Logger, LogInfo, LogLevel, PageViewInfo } from '@dagonmetric/ng-log';

/**
 * Firebase analytics implementation for `Logger`.
 */
export class FirebaseLogger extends Logger {
    private readonly _isBrowser: boolean;
    private readonly _analyticsService?: analytics.Analytics;

    constructor(
        readonly name: string,
        platformId: Object) {
        super();
        this._isBrowser = isPlatformBrowser(platformId);
        if (this._isBrowser) {
            this._analyticsService = analytics();
        }
    }

    log(logLevel: LogLevel, message: string | Error, logInfo?: LogInfo): void {
        if (logLevel === LogLevel.None || !this._isBrowser || !this._analyticsService) {
            return;
        }

        // tslint:disable-next-line: no-any
        const properties: { [key: string]: any } = logInfo && logInfo.properties ? { ...logInfo.properties } : {};

        if (logLevel === LogLevel.Error || logLevel === LogLevel.Critical) {
            properties.description = typeof message === 'string' ? message : `${message}`;
            properties.fatal = logLevel === LogLevel.Critical;

            analytics().logEvent('exception', properties);
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

            this._analyticsService.logEvent('trace', properties);
        }
    }

    startTrackPage(): void {
        // Not implemented yet.
    }

    stopTrackPage(): void {
        // Not implemented yet.
    }

    trackPageView(pageViewInfo?: PageViewInfo): void {
        if (!pageViewInfo || !pageViewInfo.name || !this._isBrowser || !this._analyticsService) {
            return;
        }

        const screenName = pageViewInfo.name;
        this._analyticsService.setCurrentScreen(screenName);
    }

    startTrackEvent(): void {
        // Not implemented yet.
    }

    stopTrackEvent(): void {
        // Not implemented yet.
    }

    trackEvent(eventInfo: EventInfo): void {
        if (!this._isBrowser || !this._analyticsService) {
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

        this._analyticsService.logEvent(eventInfo.name, properties);
    }

    flush(): void {
        // Do nothing
    }
}
