// tslint:disable-next-line: no-implicit-dependencies
import { browser, by, element } from 'protractor';

/**
 * Shared.
 */
export class AppPage {
    // tslint:disable-next-line: no-any
    async navigateTo(): Promise<any> {
        // tslint:disable-next-line: no-any
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    async getTitleText(): Promise<string> {
        return element(by.css('app-root header mat-toolbar a span')).getText() as Promise<string>;
    }
}