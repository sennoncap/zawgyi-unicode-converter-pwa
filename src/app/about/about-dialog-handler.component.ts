import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { AboutComponent } from './about.component';

/**
 * About dialog handler entry component.
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
