module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended-module',
        'prettier'
      ],
      files: ['index.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        node: {
          tryExtensions: ['.ts', '.js', '.json', '.node']
        }
      }
    },
    {
      env: {
        es6: true,
        mocha: true,
        node: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended-module',
        'prettier'
      ],
      files: ['test/**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        node: {
          tryExtensions: ['.ts', '.js', '.json', '.node']
        }
      }
    },
    {
      extends: [
        'eslint:recommended',
        'plugin:node/recommended-module',
        'prettier'
      ],
      files: ['rollup.config.js'],
      settings: {
        node: {
          allowModules: ['rollup-plugin-terser', '@wessberg/rollup-plugin-ts']
        }
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  root: true
};
