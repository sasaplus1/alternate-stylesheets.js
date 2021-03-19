const path = require('path');

// NOTE: fail build when use @wessberg/rollup-plugin-ts
const typescript = require('@rollup/plugin-typescript');

const meta = require('./package.json');

module.exports = function (config) {
  config.set({
    basePath: path.resolve(__dirname),
    browsers: ['ChromeHeadlessNoSandbox'],
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },
    customLaunchers: {
      // NOTE: https://docs.travis-ci.com/user/chrome#Sandboxing
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        chromeDataDir: path.resolve(__dirname, '.chrome'),
        flags: ['--no-sandbox']
      }
    },
    files: [
      {
        pattern: 'test/**/*.ts',
        type: 'js',
        watched: true
      }
    ],
    frameworks: ['mocha', 'power-assert'],
    mime: {
      'text/x-typescript': ['ts']
    },
    preprocessors: {
      '**/*.ts': ['rollup', 'espower']
    },
    reporters: ['dots'],
    rollupPreprocessor: {
      output: {
        format: 'iife',
        name: meta.name.replace(/[_-](.)/, (match, p1) => p1.toUpperCase()),
        sourcemap: 'inline'
      },
      plugins: [
        typescript({
          module: 'ESNext',
          target: 'ES5',
          tsconfig: false
        })
      ]
    }
  });
};
