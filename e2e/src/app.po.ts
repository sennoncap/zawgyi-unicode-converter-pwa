import { browser, by, element } from 'protractor';

/**
 * Shared.
 */
export class AppPage {
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    async getTitleText(): Promise<string> {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }
}
