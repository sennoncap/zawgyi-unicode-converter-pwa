/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';

import { ConfigService } from '@dagonmetric/ng-config';
import { LogService } from '@dagonmetric/ng-log';
import { TranslitResult, TranslitService } from '@dagonmetric/ng-translit';

import { DetectedEnc, ZawgyiDetector } from '@myanmartools/ng-zawgyi-detector';

import { CdkTextareaSyncSize } from '../cdk-extensions';

import { environment } from '../environments/environment';

export type SourceEnc = 'auto' | DetectedEnc;

/**
 * Core app component.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
    autoEncText = 'AUTO';
    sourceEnc?: SourceEnc;
    targetEnc?: DetectedEnc;

    @ViewChild('sourceTextareaSyncSize', { static: false })
    sourceTextareaSyncSize?: CdkTextareaSyncSize;

    @ViewChild('outTextareaSyncSize', { static: false })
    outTextareaSyncSize?: CdkTextareaSyncSize;

    get appVersion(): string {
        return this._configService.getValue<string>('appVersion', 'dev');
    }

    get title(): string {
        return this._configService.getValue<string>('title');
    }

    get titleSuffix(): string {
        return this._configService.getValue<string>('titleSuffix');
    }

    get titleWithSuffix(): string {
        return `${this.title}${this.titleSuffix}`;
    }

    get baseUrl(): string {
        return environment.production ? this._configService.getValue<string>('baseUrl') : '/';
    }

    get githubRepoUrl(): string {
        return this._configService.getValue<string>('githubRepoUrl');
    }

    get githubImageAlt(): string {
        return this._configService.getValue<string>('githubImageAlt');
    }

    get appImageUrl(): string {
        return `${this.baseUrl}${this._configService.getValue<string>('appImageUrl')}`;
    }

    get githubImageUrl(): string {
        return `${this.baseUrl}${this._configService.getValue<string>('githubImageUrl')}`;
    }

    private readonly _translitSubject = new Subject<string>();
    private readonly _destroyed = new Subject<void>();

    private _sourceText = '';
    private _outText = '';

    private _detectedEnc: DetectedEnc = null;
    private _curRuleName = '';

    get detectedEnc(): DetectedEnc {
        return this._detectedEnc;
    }

    get sourceText(): string {
        return this._sourceText;
    }
    set sourceText(value: string) {
        this._sourceText = value;
        this.translitNext();
    }

    get outText(): string {
        return this._outText;
    }

    constructor(
        private readonly _translitService: TranslitService,
        private readonly _zawgyiDetector: ZawgyiDetector,
        private readonly _configService: ConfigService,
        private readonly _logService: LogService) { }

    ngOnInit(): void {
        this._translitSubject.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            takeUntil(this._destroyed),
            switchMap(formattedInput => {
                const inputPart = formattedInput.substr(formattedInput.indexOf('|'));
                const input = inputPart.length > 1 ? inputPart.substr(1) : '';
                if (!input || !input.trim().length) {
                    if (this.sourceEnc === 'auto' || !this.detectedEnc) {
                        this.resetAutoEncText();
                        this.sourceEnc = 'auto';
                        this._detectedEnc = null;
                    }

                    return of({
                        outputText: input,
                        replaced: false,
                        duration: 0
                    });
                }

                if (this.sourceEnc === 'auto' || !this.detectedEnc) {
                    const detectorResult = this._zawgyiDetector.detect(input, { detectMixType: false });
                    this._detectedEnc = detectorResult.detectedEnc;

                    if (detectorResult.detectedEnc === 'zg') {
                        this.resetAutoEncText('ZAWGYI DETECTED');
                        this.sourceEnc = 'auto';
                        this._detectedEnc = 'zg';
                        this.targetEnc = 'uni';
                    } else if (detectorResult.detectedEnc === 'uni') {
                        this.resetAutoEncText('UNICODE DETECTED');
                        this.sourceEnc = 'auto';
                        this._detectedEnc = 'uni';
                        this.targetEnc = 'zg';
                    } else {
                        this.resetAutoEncText();
                        this.sourceEnc = 'auto';
                        this._detectedEnc = null;

                        return of({
                            replaced: false,
                            outputText: input,
                            duration: 0
                        });
                    }
                }

                this._curRuleName = this.detectedEnc === 'zg' ? 'zg2uni' : 'uni2zg';

                return this._translitService.translit(input, this._curRuleName)
                    .pipe(
                        takeUntil(this._destroyed)
                    );
            })
        ).subscribe((result: TranslitResult) => {
            this._outText = result.outputText || '';

            if (this._outText.length && this._sourceText.length && this._curRuleName) {
                this._logService.trackEvent({
                    name: `${this._curRuleName}`,
                    event_category: 'convert',
                    properties: {
                        duration: result.duration,
                        replaced: result.replaced,
                        inputLength: this._sourceText.length,
                        outputLength: this._outText.length,
                        inputEnc: this.sourceEnc
                    }
                });
            }
        });
    }

    ngAfterViewInit(): void {
        if (this.sourceTextareaSyncSize) {
            this.sourceTextareaSyncSize.secondCdkTextareaSyncSize = this.outTextareaSyncSize;
        }
        if (this.outTextareaSyncSize) {
            this.outTextareaSyncSize.secondCdkTextareaSyncSize = this.sourceTextareaSyncSize;
        }
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    onSourceEncChanged(val: SourceEnc): void {
        this.sourceEnc = val;

        if (val === 'uni' || val === 'zg') {
            this._detectedEnc = val;
        } else {
            this._detectedEnc = null;
        }

        if (this.sourceEnc === 'zg' && (!this.targetEnc || this.targetEnc === 'zg')) {
            this.targetEnc = 'uni';
            this.resetAutoEncText();
        } else if (this.sourceEnc === 'uni' && (!this.targetEnc || this.targetEnc === 'uni')) {
            this.resetAutoEncText();

            this.targetEnc = 'zg';
        }

        this.translitNext();
    }

    onTargetEncChanged(val: DetectedEnc): void {
        this.targetEnc = val;

        if (this.targetEnc === 'zg' && (!this.sourceEnc || this.sourceEnc === 'zg')) {
            this._detectedEnc = this.sourceEnc = 'uni';
            this.resetAutoEncText();
        } else if (this.targetEnc === 'uni' && (!this.sourceEnc || this.sourceEnc === 'uni')) {
            this._detectedEnc = this.sourceEnc = 'zg';
            this.resetAutoEncText();
        }

        this.translitNext();
    }

    private resetAutoEncText(text?: string): void {
        this.autoEncText = text || 'AUTO';
    }

    private translitNext(): void {
        this._translitSubject.next(`${this.sourceEnc},${this.targetEnc}|${this.sourceText}`);
    }
}
