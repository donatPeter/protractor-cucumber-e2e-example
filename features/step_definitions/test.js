// const expect = require('jest');
const { expect } = require('chai');
const { defineSupportCode } = require('cucumber');
const { browser } = require('protractor');
const MainPage = require('../page_objects/main');

defineSupportCode(({ Given, When, Then, Before }) => {
  let mainPage;
  Before(() => {
    mainPage = new MainPage();
  });

  Given('open the {string} URL', async url => browser.get(url));

  When('I click on the HTML element with {string} ID', async (id) => {
    await mainPage.clickOn(id);
  });

  Then('it navigates to the {string} URL', async (url) => {
    const currURL = await browser.getCurrentUrl();
    expect(currURL).to.equal(url);
    await browser.quit();
  });
});
