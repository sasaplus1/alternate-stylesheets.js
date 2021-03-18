import { terser } from 'rollup-plugin-terser';
import ts from '@wessberg/rollup-plugin-ts';

import meta from './package.json';

const config = [];

if (process.env.build === 'esm') {
  config.push({
    input: './index.ts',
    output: {
      file: './dist/esm/index.mjs',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      ts({
        tsconfig(resolvedConfig) {
          return {
            ...resolvedConfig,
            declaration: false,
            module: 'ESNext',
            outDir: './dist/esm'
          };
        }
      })
    ]
  });
}

if (process.env.build === 'umd') {
  const banner = [
    '/*!',
    ' * @license Copyright(c) 2013 sasa+1',
    ' * https://github.com/sasaplus1/alternate-stylesheets.js',
    ' * Released under the MIT license.',
    ' */'
  ].join('\n');

  const terserOptions = {
    compress: {
      passes: 2
    },
    output: {
      preamble: banner
    }
  };

  config.push(
    {
      input: './index.ts',
      output: {
        banner,
        file: `./dist/umd/${meta.name}.js`,
        format: 'umd',
        name: meta.name.replace(/[_-](.)/, (match, p1) => p1.toUpperCase()),
        sourcemap: true
      },
      plugins: [
        ts({
          tsconfig(resolvedConfig) {
            return {
              ...resolvedConfig,
              declaration: false,
              module: 'ESNext',
              outDir: './dist/umd'
            };
          }
        })
      ]
    },
    {
      input: './index.ts',
      output: {
        file: `./dist/umd/${meta.name}.min.js`,
        format: 'umd',
        name: meta.name.replace(/[_-](.)/, (match, p1) => p1.toUpperCase())
      },
      plugins: [
        ts({
          tsconfig(resolvedConfig) {
            return {
              ...resolvedConfig,
              declaration: false,
              module: 'ESNext',
              outDir: './dist/umd'
            };
          }
        }),
        terser(terserOptions)
      ]
    }
  );
}

export default config;
