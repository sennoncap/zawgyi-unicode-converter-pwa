import { Component } from '@angular/core';

import { ConfigService } from '@dagonmetric/ng-config';

/**
 * App about page component.
 */
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    get appVersion(): string {
        return this._configService.getValue<string>('appVersion');
    }

    get appName(): string {
        return this._configService.getValue<string>('appName');
    }

    get appDescription(): string {
        return this._configService.getValue<string>('appDescription');
    }

    constructor(private readonly _configService: ConfigService) { }
}
