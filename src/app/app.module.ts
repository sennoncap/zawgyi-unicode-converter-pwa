/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { APP_BASE_HREF, CommonModule, DOCUMENT } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CacheModule, MemoryCacheModule } from '@dagonmetric/ng-cache';
import { ConfigModule } from '@dagonmetric/ng-config';
import { StaticConfigLoaderModule } from '@dagonmetric/ng-config/static-loader';
import { LogModule } from '@dagonmetric/ng-log';
import { ConsoleLoggerModule } from '@dagonmetric/ng-log/console';
import { TranslitModule } from '@dagonmetric/ng-translit';

import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { environment } from '../environments/environment';

import { CdkTextareaSyncSizeModule } from '../modules/cdk-extensions';
import { CustomIconRegistry } from '../modules/mat-extensions';
import { LinkService } from '../modules/seo';
import { ZgUniTranslitRuleLoaderModule } from '../modules/zg-uni-translit-rule-loader';

import { AppConfig } from './shared/app-config';
import { PageTitleService } from './shared/page-title';
import { UrlHelper } from './shared/url-helper';

import { SocialSharingSheetComponent } from './shared/social-sharing-sheet';
import { SponsorBannerSheetComponent } from './shared/sponsor-banner-sheet';

import { AboutComponent, AboutDialogHandlerComponent } from './about';
import { HomeComponent } from './home';
import { PrivacyComponent, PrivacyDialogHandlerComponent } from './privacy';
import { SupportComponent, SupportDialogHandlerComponent } from './support';

import { AppComponent } from './app.component';
import { appSvgIconProviders } from './app.svg-icons';

export const appId = 'zawgyi-unicode-converter-web';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // pathMatch: 'full',
        data: {
            pageType: 'home-page',
            meta: {
                keywords: 'zawgyi unicode converter,zawgyi unicode converter online,zawgyi,zawgyi to unicode,unicode to zawgyi,zawgyi unicode,myanmar font converter,myanmar tools,myanmar,unicode,converter,dagonmetric',
                socialTitle: "Let's Convert Zawgyi / Unicode Effortlessly",
                socialDescription: "Free, open source and the world's most intelligent accurate Zawgyi Unicode converter is here!"
            }
        },
        children: [
            {
                path: 'about',
                component: AboutDialogHandlerComponent,
                data: {
                    pageType: 'about-page',
                    meta: {
                        title: 'Zawgyi Unicode Converter - About',
                        description: "The world's most intelligent and accurate Zawgyi Unicode converter like never before!",
                        keywords: 'zawgyi unicode converter,free,open source,intelligent,accurate,about'
                    }
                }
            },
            {
                path: 'support',
                component: SupportDialogHandlerComponent,
                data: {
                    pageType: 'support-page',
                    meta: {
                        title: 'Zawgyi Unicode Converter - Support',
                        description: 'We use the following channels for general feedback and discussions. Facebook Messenger Gitter GitHub Issues',
                        keywords: 'zawgyi unicode converter,support,feedback'
                    }
                }
            },
            {
                path: 'privacy',
                component: PrivacyDialogHandlerComponent,
                data: {
                    pageType: 'privacy-page',
                    meta: {
                        title: 'Zawgyi Unicode Converter - Privacy',
                        description: 'Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or handle your Personally Identifiable Information with this app - Zawgyi Unicode Converter.',
                        keywords: 'zawgyi unicode converter,privacy'
                    }
                }
            }
        ]
    },
    { path: '**', redirectTo: '' }
];

export const settings: { app: AppConfig } = {
    app: {
        appVersion: '3.4.0',
        releaseDateUtc: '2019-11-29T07:30:00Z',
        appName: 'Zawgyi Unicode Converter',
        appDescription: 'Zawgyi Unicode Converter is a free & open source Zawgyi to Unicode or Unicode to Zawgyi online / offline Myanmar font converter by DagonMetric Myanmar Tools.',
        baseUrl: 'https://zawgyi-unicode-converter.myanmartools.org/',
        navLinks: [
            {
                url: 'https://myanmartools.org',
                label: 'Myanmar Tools',
                title: 'Explore more Myanmar Tools',
                iconName: 'logo-myanmartools',
                expanded: true
            },
            {
                url: 'https://www.facebook.com/DagonMetric',
                label: 'Facebook',
                title: 'Learn more on Facebook',
                iconName: 'logo-facebook'
            },
            {
                url: 'https://www.youtube.com/channel/UCbJLAOU-kG6vkBOU1TSM5Cw',
                label: 'YouTube',
                title: 'Watch more on YouTube',
                iconName: 'logo-youtube'
            },
            {
                url: 'https://medium.com/myanmartools',
                label: 'Medium',
                title: 'Articles on Medium',
                iconName: 'logo-medium'
            },
            {
                url: 'https://github.com/myanmartools/zawgyi-unicode-converter-web',
                label: 'GitHub',
                title: 'Source code on GitHub',
                iconName: 'logo-github'
            }
        ],
        socialSharing: {
            subject: 'Zawgyi Unicode Converter app you may also like',
            message: 'ဇော်ဂျီ ယူနီကုဒ် အခက်အခဲရှိနေသူများအတွက် ဇော်ဂျီကနေ ယူနီကုဒ်၊ ယူနီကုဒ်ကနေ ဇော်ဂျီ အပြန်အလှန် အလိုအလျောက် ပြောင်းပေးတဲ့ app တစ်ခု မျှဝေလိုက်ပါတယ်။',
            linkUrl: 'https://myanmartools.org/apps/zawgyi-unicode-converter'
        },
        facebookAppId: '461163654621837',
        privacyUrl: 'https://privacy.dagonmetric.com/privacy-statement'
    }
};

export function baseHrefFactory(doc: Document): string | null | undefined {
    // return document.getElementsByTagName('base')[0].href;

    if (doc && doc.head) {
        const baseEle = doc.head.querySelector('base') as HTMLBaseElement;

        if (baseEle) {
            return baseEle.getAttribute('href');
        }
    }

    return undefined;
}

/**
 * App shared module for server, browser and test platforms.
 */
@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        AboutDialogHandlerComponent,
        HomeComponent,
        PrivacyComponent,
        PrivacyDialogHandlerComponent,
        SupportComponent,
        SupportDialogHandlerComponent,
        SocialSharingSheetComponent,
        SponsorBannerSheetComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),

        OverlayModule,
        FlexLayoutModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatSlideToggleModule,
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

        // ng-cache modules
        CacheModule,
        MemoryCacheModule,

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
            provide: APP_BASE_HREF,
            useFactory: baseHrefFactory,
            deps: [DOCUMENT]
        },
        LinkService,
        UrlHelper,
        {
            provide: MatIconRegistry,
            useClass: CustomIconRegistry
        },
        appSvgIconProviders,
        PageTitleService
    ],
    entryComponents: [
        AboutComponent,
        PrivacyComponent,
        SupportComponent,
        SocialSharingSheetComponent,
        SponsorBannerSheetComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
