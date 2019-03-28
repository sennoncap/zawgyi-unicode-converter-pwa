// tslint:disable: no-unnecessary-class

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';

import { TextFieldModule } from '@angular/cdk/text-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslitModule } from '@myanmartools/ng-translit';
import { HttpTranslitRuleLoaderModule } from '@myanmartools/ng-translit/http-loader';
import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';
import { HttpZgUniRuleLoaderModule } from '@myanmartools/ng-zawgyi-detector/http-loader';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,

        TextFieldModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,

        TranslitModule,
        HttpTranslitRuleLoaderModule,
        ZawgyiDetectorModule,
        HttpZgUniRuleLoaderModule

        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.serviceWorker })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
