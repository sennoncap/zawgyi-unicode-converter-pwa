/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { NavLinkItem } from './nav-link-item';
import { SocialSharingOptions } from './social-sharing-options';

export interface AppConfig {
    appId?: string;
    appName?: string;
    appVersion?: string;
    appDescription?: string;
    navLinks?: NavLinkItem[];
    socialSharing?: SocialSharingOptions;
    facebookAppId?: string;
    privacyUrl?: string;
}
