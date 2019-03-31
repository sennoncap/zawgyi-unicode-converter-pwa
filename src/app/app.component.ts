import { Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, take, takeUntil } from 'rxjs/operators';

import { TranslitService } from '@myanmartools/ng-translit';
import { ZawgyiDetector } from '@myanmartools/ng-zawgyi-detector';

export type SourceEncType = 'auto' | 'zg' | 'uni' | 'win' | null | '';
export type TargetEncType = 'zg' | 'uni' | null | '';
export type DetectedEncType = 'zg' | 'uni' | 'win' | null | '';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
    autoEncText = 'AUTO';
    sourceEnc: SourceEncType;
    targetEnc: TargetEncType;

    @ViewChild('outTextAreaAutosize')
    outCdkTextareaAutosize: CdkTextareaAutosize;

    private readonly _translitSubject = new Subject<string>();
    private readonly _detectSubject = new Subject<string>();
    private readonly _destroyed = new Subject<void>();

    private _sourceText = '';
    private _outText = '';

    private _detectedEnc: DetectedEncType;

    get detectedEnc(): DetectedEncType {
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

    constructor(private readonly _translitService: TranslitService,
        private readonly _zawgyiDetector: ZawgyiDetector,
        private readonly _ngZone: NgZone) {

    }

    ngOnInit(): void {
        this._detectSubject.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            filter((input) => input && input.length > 0 && this.sourceEnc === 'auto' || !this.detectedEnc),
            takeUntil(this._destroyed),
            switchMap(input => this._zawgyiDetector.detect(input))
        ).subscribe(result => {
            if (result.detectedEnc === 'zg') {
                this.resetAutoEncText('ZAWGYI DETECTED');
                this.sourceEnc = 'auto';
                this._detectedEnc = 'zg';
                this.targetEnc = 'uni';

                const formattedInput = `${this._detectedEnc},${this.targetEnc}|${this.sourceText}`;
                this._translitSubject.next(formattedInput);
            } else if (result.detectedEnc === 'uni') {
                this.resetAutoEncText('UNICODE DETECTED');
                this.sourceEnc = 'auto';
                this._detectedEnc = 'uni';
                this.targetEnc = 'zg';

                const formattedInput = `${this._detectedEnc},${this.targetEnc}|${this.sourceText}`;
                this._translitSubject.next(formattedInput);
            } else {
                this.resetAutoEncText();
                this.sourceEnc = 'auto';
                this._detectedEnc = null;

                this._outText = this._sourceText;
                this.resizeOutTextArea();

                this._translitSubject.next('');
            }
        });

        this._translitSubject.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            filter((formattedInput) => this.sourceText && this.sourceText.length > 0 &&
                formattedInput && formattedInput.indexOf('|') > 0 &&
                this.detectedEnc && this.targetEnc ? true : false),
            takeUntil(this._destroyed),
            switchMap(formattedInput => {
                const inputPart = formattedInput.substr(formattedInput.indexOf('|'));
                const input = inputPart.length > 1 ? inputPart.substr(1) : '';

                return this._translitService.translit(input, this.detectedEnc as string, this.targetEnc as string)
                    .pipe(
                        takeUntil(this._destroyed)
                    );
            })
        ).subscribe(result => {
            this._outText = result.outputText || '';
            this.resizeOutTextArea();
        });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    onSourceEncChanged(val: SourceEncType): void {
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

    onTargetEncChanged(val: TargetEncType): void {
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

    private resizeOutTextArea(): void {
        this._ngZone.onStable
            .pipe(
                take(1),
                takeUntil(this._destroyed)
            )
            .subscribe(() => {
                this.outCdkTextareaAutosize.resizeToFitContent(true);
            });
    }

    private resetAutoEncText(text?: string): void {
        this.autoEncText = text || 'AUTO';
    }

    private translitNext(): void {
        if (!this.sourceText || !this.sourceText.length || !this.sourceText.trim().length) {
            this._outText = this.sourceText;
            this.resizeOutTextArea();

            this._translitSubject.next('');

            if (this.sourceEnc === 'auto' || !this.detectedEnc) {
                this.resetAutoEncText();
                this._detectSubject.next('');
            }

            return;
        }

        if (this.sourceEnc === 'auto' || !this.detectedEnc) {
            this._detectSubject.next(this.sourceText);

            return;
        }

        const formattedInput = `${this._detectedEnc},${this.targetEnc}|${this.sourceText}`;

        this._translitSubject.next(formattedInput);
    }
}
