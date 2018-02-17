const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: __dirname,
    browsers: [
      'ChromeHeadlessNoSandbox',
      'FirefoxHeadless',
    ],
    client: {
      mocha: {
        reporter: 'html',
        require: [
          require.resolve('chai/chai'),
          require.resolve('./dist/alternate-stylesheets.js'),
        ],
        ui: 'bdd',
      },
    },
    customLaunchers: {
      // NOTE: https://docs.travis-ci.com/user/chrome#Sandboxing
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        chromeDataDir: path.resolve(__dirname, '.chrome'),
        flags: [
          '--no-sandbox',
        ],
      },
    },
    files: [
      'test/**/*.js',
    ],
    frameworks: [
      'mocha',
    ],
    reporters: [
      'dots',
    ],
  });
};
