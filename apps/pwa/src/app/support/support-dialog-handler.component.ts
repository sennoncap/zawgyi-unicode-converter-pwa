import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { SupportComponent } from './support.component';

/**
 * Support dialog handler entry component.
 */
@Component({
    template: '',

})
export class SupportDialogHandlerComponent {
    constructor(
        private readonly _dialog: MatDialog,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute) {
        this.openDialog();
    }

    openDialog(): void {
        const dialogRef = this._dialog.open(SupportComponent);

        dialogRef.afterClosed().subscribe(() => {
            // tslint:disable-next-line: no-floating-promises
            this._router.navigate(['../'], { relativeTo: this._route });
        });
    }
}
