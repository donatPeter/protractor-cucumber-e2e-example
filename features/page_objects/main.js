const {
  browser,
  by,
  until,
} = require('protractor');

class MainPage {
  constructor() {
    this.moreSaladButtonId = 'salad';
    this.loginToOrderButtonId = 'login-to-order';
  }

  async clickOn(id) {
    await browser.wait(until.elementLocated(by.id(id)), 10000, 'Could not locate the child element within the time specified');
    return browser.findElement(by.id(id)).click();
  }

  navigateTo() {
    return browser.get('/');
  }
}

module.exports = MainPage;
