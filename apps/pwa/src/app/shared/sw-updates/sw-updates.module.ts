/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';

import { SwUpdatesService } from './sw-updates.service';

/**
 * The `NGMODULE` for `SwUpdatesService`.
 */
@NgModule({
    providers: [
        SwUpdatesService
    ]
})
export class SwUpdatesModule { }
