/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import * as firebase from 'firebase/app';

import { FirebaseOptions } from './firebase-analytics-logger-options';
import { FirebaseApp } from './firebase-app';

export function firebaseAppFactory(options: FirebaseOptions, appNname?: string): FirebaseApp {
    appNname = appNname || '[DEFAULT]';
    const existingApp = firebase.apps.filter(app => app && app.name === appNname)[0];

    return (existingApp || firebase.initializeApp(options, appNname)) as FirebaseApp;
}
