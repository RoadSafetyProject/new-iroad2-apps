import { browser, element, by } from 'protractor';

export class Iroad2AppsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
