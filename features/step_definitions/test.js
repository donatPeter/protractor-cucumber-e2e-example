// const expect = require('jest');
const { expect } = require('chai');
const { defineSupportCode } = require('cucumber');
const {
  browser,
  by,
  element,
  until,
} = require('protractor');

defineSupportCode(({ Given, When, Then }) => {
  Given('open the {string} URL', async (url) => {
    return browser.get(url);
  });

  When('I click on the HTML element with {string} ID', async (id) => {
    await browser.wait(until.elementLocated(by.id(id)), 10000, 'Could not locate the child element within the time specified');
    return browser.findElement(by.id(id)).click();
  });

  Then('it navigates to the {string} URL', async (url) => {
    const currURL = await browser.getCurrentUrl();
    expect(currURL).to.equal(url);
    // await browser.quit();
  });
});
