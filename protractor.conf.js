exports.config = {
  directConnect: true,
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    '**/features/*.feature',
  ],
  cucumberOpts: {
    require: [
      '**/features/step_definitions/*.js',
    ],
  },

  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600'],
    },
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
};
