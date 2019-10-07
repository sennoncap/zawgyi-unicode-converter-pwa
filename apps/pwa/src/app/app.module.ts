/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ConfigModule } from '@dagonmetric/ng-config';
import { StaticConfigLoaderModule } from '@dagonmetric/ng-config/static-loader';
import { LogModule } from '@dagonmetric/ng-log';
import { GTagLoggerModule } from '@dagonmetric/ng-log-gtag';
import { TranslitModule } from '@dagonmetric/ng-translit';

import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { environment } from '../environments/environment';

import { ZgUniTranslitRuleLoaderModule } from './shared';
import { CdkTextareaSyncSizeModule } from './shared/cdk-extensions';
import { CustomIconRegistry } from './shared/mat-extensions';
import { SwUpdatesModule } from './shared/sw-updates';

import { AboutComponent, AboutDialogHandlerComponent } from './about';
import { HomeComponent } from './home';
import { SupportComponent, SupportDialogHandlerComponent } from './support';

import { AppComponent } from './app.component';
import { appSvgIconProviders } from './app.svg-icons';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // pathMatch: 'full',
        // data: {},
        children: [
            {
                path: 'about',
                component: AboutDialogHandlerComponent
            },
            {
                path: 'support',
                component: SupportDialogHandlerComponent
            }
        ]
    },
    { path: '**', redirectTo: '' }
];

/**
 * App module for both node and web platforms.
 */
@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        AboutDialogHandlerComponent,
        HomeComponent,
        SupportComponent,
        SupportDialogHandlerComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'zawgyi-unicode-converter' }),
        CommonModule,
        FormsModule,
        HttpClientModule,
        BrowserTransferStateModule,
        RouterModule.forRoot(appRoutes),

        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule,

        CdkTextareaSyncSizeModule,

        // ng-translit module
        TranslitModule,

        // ng-translit rule loader
        ZgUniTranslitRuleLoaderModule,

        // ng-zawgyi-detector module
        ZawgyiDetectorModule,

        // ng-log modules
        LogModule,
        GTagLoggerModule.withOptions({
            measurementId: 'UA-137255227-1'
        }),

        // ng-config modules
        ConfigModule.init(),
        StaticConfigLoaderModule.withSettings({
            appVersion: '1.1.5',
            appName: 'Zawgyi Unicode Converter',
            appTitleSuffix: 'Myanmar Tools',
            appDescription: 'Zawgyi Unicode Converter is a free and open source Zawgyi-One and standard Myanmar Unicode online/offline converter created by DagonMetric Myanmar Tools team.',
            baseUrl: 'https://zawgyi-unicode-converter.myanmartools.org/',
            appImageUrl: 'assets/images/appicons/v1/logo.png',
            communityLinks: [
                {
                    url: 'https://www.facebook.com/DagonMetric',
                    label: 'Facebook',
                    iconName: 'logo-facebook'
                },
                {
                    url: 'https://www.youtube.com/channel/UCbJLAOU-kG6vkBOU1TSM5Cw',
                    label: 'YouTube',
                    iconName: 'logo-youtube'
                },
                // {
                //     url: 'https://twitter.com/myanmartools',
                //     label: 'Twitter',
                //     iconName: 'logo-twitter'
                // },
                {
                    url: 'https://medium.com/myanmartools',
                    label: 'Medium',
                    iconName: 'logo-medium'
                },
                {
                    url: 'https://github.com/myanmartools/zawgyi-unicode-converter-angular-pwa',
                    label: 'GitHub',
                    iconName: 'logo-github'
                },
                {
                    url: 'https://myanmartools.org',
                    label: 'Myanmar Tools',
                    iconName: 'logo-myanmartools'
                }
            ],
            facebookAppId: '461163654621837',
            socialSharingSubject: 'Zawgyi Unicode Converter app you may also like',
            socialSharingMessage: 'သူငယ်ချင်းတို့တွေထဲမှာ ဇော်ဂျီ ယူနီကုဒ် အခက်အခဲရှိနေရင်\nZawgyi Unicode Converter app ကိုသုံးပြီး ဇော်ဂျီကနေ ယူနီကုဒ်၊ ယူနီကုဒ်ကနေ ဇော်ဂျီ အပြန်အလှန်ပြောင်းကြည့်လို့ရတယ်နော်။\nDownload link: ',
            socialSharingLink: 'https://zawgyi-unicode-converter.myanmartools.org/',
            privacyUrl: 'https://privacy.dagonmetric.com/privacy-statement/',
        }),

        SwUpdatesModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        {
            provide: MatIconRegistry,
            useClass: CustomIconRegistry
        },
        appSvgIconProviders
    ],
    entryComponents: [
        AboutComponent,
        SupportComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
