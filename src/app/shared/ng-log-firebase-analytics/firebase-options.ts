/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { InjectionToken } from '@angular/core';

export interface FirebaseOptions {
    measurementId: string;
    // tslint:disable-next-line: no-any
    [key: string]: any;
}

export const FIREBASE_OPTIONS_TOKEN = new InjectionToken<FirebaseOptions>('FirebaseOptions');
export const FIREBASE_APP_NAME_TOKEN = new InjectionToken<string>('FirebaseAppConfig');
