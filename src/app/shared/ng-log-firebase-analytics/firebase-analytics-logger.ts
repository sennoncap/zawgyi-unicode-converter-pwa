/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { NgZone } from '@angular/core';

import { EventInfo, Logger, LogInfo, LogLevel, PageViewInfo } from '@dagonmetric/ng-log';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { analytics } from 'firebase/app';

import { runOutsideAngular } from './zone-helper';

/**
 * Firebase analytics implementation for `Logger`.
 */
export class FirebaseAnalyticsLogger extends Logger {
    constructor(
        readonly name: string,
        private readonly _zone: NgZone,
        private readonly _analytics$?: Observable<analytics.Analytics>) {
        super();
    }

    log(logLevel: LogLevel, message: string | Error, logInfo?: LogInfo): void {
        if (!this._analytics$ || logLevel === LogLevel.None) {
            return;
        }

        // tslint:disable-next-line: no-any
        const properties: { [key: string]: any } = logInfo && logInfo.properties ? { ...logInfo.properties } : {};

        if (logLevel === LogLevel.Error || logLevel === LogLevel.Critical) {
            properties.description = typeof message === 'string' ? message : `${message}`;
            properties.fatal = logLevel === LogLevel.Critical;

            this._analytics$.pipe(
                tap((analyticsService) => {
                    analyticsService.logEvent('exception', properties);
                }),
                runOutsideAngular(this._zone)
            ).subscribe();
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

            this._analytics$.pipe(
                tap((analyticsService) => {
                    analyticsService.logEvent('trace', properties);
                }),
                runOutsideAngular(this._zone)
            ).subscribe();
        }
    }

    startTrackPage(): void {
        // Not implemented yet.
    }

    stopTrackPage(): void {
        // Not implemented yet.
    }

    trackPageView(pageViewInfo?: PageViewInfo): void {
        if (!this._analytics$) {
            return;
        }

        if (!pageViewInfo) {
            this._analytics$.pipe(
                runOutsideAngular(this._zone)
            ).subscribe();
        } else {
            if (pageViewInfo && pageViewInfo.properties && pageViewInfo.properties.app_name) {
                this.trackScreenView(pageViewInfo);
            } else {
                const pagePath = pageViewInfo.uri && pageViewInfo.uri.startsWith('/') ? pageViewInfo.uri : undefined;

                this._analytics$.pipe(
                    tap((analyticsService) => {
                        // tslint:disable-next-line: no-any
                        analyticsService.logEvent('page_view' as any, {
                            page_title: pageViewInfo.name,
                            page_path: pagePath
                        });
                    }),
                    runOutsideAngular(this._zone)
                ).subscribe();
            }
        }
    }

    startTrackEvent(): void {
        // Not implemented yet.
    }

    stopTrackEvent(): void {
        // Not implemented yet.
    }

    trackEvent(eventInfo: EventInfo): void {
        if (!this._analytics$) {
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

        this._analytics$.pipe(
            tap((analyticsService) => {
                analyticsService.logEvent(eventInfo.name, properties);
            }),
            runOutsideAngular(this._zone)
        ).subscribe();
    }

    flush(): void {
        // Do nothing
    }

    private trackScreenView(pageViewInfo: PageViewInfo): void {
        if (!this._analytics$) {
            return;
        }

        const screenName = pageViewInfo && pageViewInfo.properties && pageViewInfo.properties.screen_name ?
            pageViewInfo.properties.screen_name as string : pageViewInfo.name || '';
        const appName = pageViewInfo && pageViewInfo.properties && pageViewInfo.properties.app_name ?
            pageViewInfo.properties.app_name as string : '';

        this._analytics$.pipe(
            tap((analyticsService) => {
                analyticsService.logEvent('screen_view', {
                    ...pageViewInfo.properties,
                    app_name: appName,
                    screen_name: screenName
                });
            }),
            runOutsideAngular(this._zone)
        ).subscribe();
    }

}
