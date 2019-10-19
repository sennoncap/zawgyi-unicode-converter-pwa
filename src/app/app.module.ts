/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ConsoleLoggerModule } from '@dagonmetric/ng-log/console';
import { TranslitModule } from '@dagonmetric/ng-translit';

import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { environment } from '../environments/environment';

import { CdkTextareaSyncSizeModule } from '../modules/cdk-extensions';
import { CustomIconRegistry } from '../modules/mat-extensions';
import { ZgUniTranslitRuleLoaderModule } from '../modules/zg-uni-translit-rule-loader';

import { AppConfig } from './shared/app-config';
import { PageTitleService } from './shared/page-title';

import { AboutComponent, AboutDialogHandlerComponent } from './about';
import { HomeComponent } from './home';
import { SupportComponent, SupportDialogHandlerComponent } from './support';

import { AppComponent } from './app.component';
import { appSvgIconProviders } from './app.svg-icons';

export const appId = 'zawgyi-unicode-converter-angular-pwa';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // pathMatch: 'full',
        data: {
            pageType: 'home-page'
        },
        children: [
            {
                path: 'about',
                component: AboutDialogHandlerComponent,
                data: {
                    pageType: 'about-page',
                    screenName: 'About'
                }
            },
            {
                path: 'support',
                component: SupportDialogHandlerComponent,
                data: {
                    pageType: 'support-page',
                    screenName: 'Support'
                }
            }
        ]
    },
    { path: '**', redirectTo: '' }
];

export const settings: { app: AppConfig } = {
    app: {
        appVersion: '2.0.3',
        appName: 'Zawgyi Unicode Converter',
        appDescription: 'Zawgyi Unicode Converter is a free and open source Zawgyi-One and standard Myanmar Unicode online/offline converter created by DagonMetric Myanmar Tools team.',
        navLinks: [
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
        socialSharing: {
            subject: 'Zawgyi Unicode Converter app you may also like',
            message: 'ဇော်ဂျီ ယူနီကုဒ် အခက်အခဲရှိနေသူများအတွက် ဇော်ဂျီကနေ ယူနီကုဒ်၊ ယူနီကုဒ်ကနေ ဇော်ဂျီ အပြန်အလှန် အလိုအလျောက် ပြောင်းပေးတဲ့ app တစ်ခု မျှဝေလိုက်ပါတယ်။',
            linkUrl: 'https://zawgyi-unicode-converter.myanmartools.org/'
        },
        facebookAppId: '461163654621837',
        privacyUrl: 'https://privacy.dagonmetric.com/privacy-statement'
    }
};

/**
 * App shared module for server, browser and test platforms.
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
        CommonModule,
        FormsModule,
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

        // ng-config modules
        ConfigModule.init(),
        StaticConfigLoaderModule.withSettings(settings),

        // ng-log modules
        LogModule.withConfig({
            minLevel: environment.production ? 'warn' : 'trace'
        }),
        ConsoleLoggerModule.withOptions({
            enableDebug: !environment.production
        }),

        // ng-translit module
        TranslitModule,

        // ng-translit rule loader
        ZgUniTranslitRuleLoaderModule,

        // ng-zawgyi-detector module
        ZawgyiDetectorModule,

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        {
            provide: MatIconRegistry,
            useClass: CustomIconRegistry
        },
        appSvgIconProviders,
        PageTitleService
    ],
    entryComponents: [
        AboutComponent,
        SupportComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
