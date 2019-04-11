// tslint:disable: no-unnecessary-class

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

// import { TransferHttpCacheModule } from '@nguniversal/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslitModule } from '@myanmartools/ng-translit';
import { HttpTranslitRuleLoaderModule } from '@myanmartools/ng-translit/http-loader';
import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';
import { HttpZgUniRuleLoaderModule } from '@myanmartools/ng-zawgyi-detector/http-loader';

import { environment } from '../environments/environment';

import { CdkTextareaSyncSizeModule } from '../cdk-extensions';

import { AppComponent } from './app.component';

export function translitEndpointFactory(baseUrl: string, sourceEnc: string, targetEnc: string): string {
    return `${baseUrl}assets/translit-rules/v1/${sourceEnc}2${targetEnc}.json`;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'zawgyi-unicode-converter-angular-pwa' }),
        CommonModule,
        HttpClientModule,

        BrowserTransferStateModule,

        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,

        CdkTextareaSyncSizeModule,

        TranslitModule,
        HttpTranslitRuleLoaderModule.withOptions({
            endpointFactory: translitEndpointFactory
        }),
        ZawgyiDetectorModule,
        HttpZgUniRuleLoaderModule.withOptions({
            endpoint: '/assets/zawgyi-detect-rules/v1/zg-uni-rule.json'
        }),

        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
