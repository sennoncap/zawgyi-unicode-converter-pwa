// tslint:disable: no-floating-promises

import { async, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ConfigModule } from '@dagonmetric/ng-config';
import { StaticConfigLoaderModule } from '@dagonmetric/ng-config/static-loader';
import { LogModule } from '@dagonmetric/ng-log';
import { TranslitModule } from '@dagonmetric/ng-translit';

import { ZawgyiDetectorModule } from '@myanmartools/ng-zawgyi-detector';

import { CdkTextareaSyncSizeModule } from '../cdk-extensions';
import { SwUpdatesModule } from '../sw-updates/sw-updates.module';

import { AppComponent } from './app.component';
import { ZgUniTranslitRuleLoaderModule } from './zg-uni-translit-rule-loader.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                NoopAnimationsModule,
                CommonModule,

                FlexLayoutModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatIconModule,
                MatInputModule,
                MatToolbarModule,

                CdkTextareaSyncSizeModule,

                TranslitModule,
                ZgUniTranslitRuleLoaderModule,
                ZawgyiDetectorModule,
                LogModule,
                ConfigModule.init(),
                StaticConfigLoaderModule.withSettings({
                    appVersion: '1.1.5',
                    title: 'Zawgyi Unicode Converter',
                    titleSuffix: ' - Myanmar Tools',
                    baseUrl: 'https://zawgyi-unicode-converter.myanmartools.org/',
                    appImageUrl: 'assets/images/appicons/v1/logo.png',
                    communityLinkItems: [
                        {
                            url: 'https://www.facebook.com/DagonMetric',
                            label: 'Follow Myanmar Tools on Facebook',
                            svgIconName: 'facebook'
                        },
                        {
                            url: 'https://twitter.com/myanmartools',
                            label: 'Follow Myanmar Tools on Twitter',
                            svgIconName: 'twitter'
                        },
                        {
                            url: 'https://medium.com/myanmartools',
                            label: 'Myanmar Tools Blog on Medium',
                            svgIconName: 'medium'
                        }
                    ]
                }),

                SwUpdatesModule,
                ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have title in header', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance as AppComponent;
        expect(app.title).toEqual('Zawgyi Unicode Converter');
    });

    it('should have app version in header', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance as AppComponent;
        expect(app.appVersion).toEqual('1.1.5');
    });
});
