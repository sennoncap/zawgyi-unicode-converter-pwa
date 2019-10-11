/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { AboutComponent } from './about.component';

/**
 * App About dialog handler component.
 */
@Component({
    template: '',

})
export class AboutDialogHandlerComponent {
    constructor(
        private readonly _dialog: MatDialog,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute) {
        this.openDialog();
    }

    openDialog(): void {
        const dialogRef = this._dialog.open(AboutComponent);

        dialogRef.afterClosed().subscribe(() => {
            // tslint:disable-next-line: no-floating-promises
            this._router.navigate(['../'], { relativeTo: this._route });
        });
    }
}
