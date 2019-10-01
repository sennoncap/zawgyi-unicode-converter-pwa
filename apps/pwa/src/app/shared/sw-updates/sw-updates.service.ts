/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { ApplicationRef, Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { concat, interval, NEVER, Observable, Subject } from 'rxjs';

import { first, map, takeUntil } from 'rxjs/operators';

/**
 * SwUpdates service.
 */
@Injectable()
export class SwUpdatesService implements OnDestroy {
    updateActivated: Observable<string>;

    private readonly _checkInterval = 1000 * 60 * 60 * 6;
    private readonly _onDestroy = new Subject<void>();

    constructor(appRef: ApplicationRef, private readonly _swu: SwUpdate) {
        if (!_swu.isEnabled) {
            this.updateActivated = NEVER.pipe(takeUntil(this._onDestroy));

            return;
        }

        const appIsStable = appRef.isStable.pipe(first(v => v));
        concat(appIsStable, interval(this._checkInterval))
            .pipe(
                takeUntil(this._onDestroy),
            )
            .subscribe(() => this._swu.checkForUpdate());

        this._swu.available
            .pipe(
                takeUntil(this._onDestroy),
            )
            .subscribe(() => this._swu.activateUpdate());

        this.updateActivated = this._swu.activated.pipe(
            map(evt => evt.current.hash),
            takeUntil(this._onDestroy),
        );
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
    }
}
