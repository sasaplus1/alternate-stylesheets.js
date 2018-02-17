'use strict';

const webpack = require('webpack');

// eslint-disable-next-line no-unused-vars
module.exports = function(env) {
  return [
    {
      context: __dirname,
      entry: {
        'alternate-stylesheets': `${__dirname}/index.js`
      },
      output: {
        filename: '[name].js',
        library: ['alternateStylesheets'],
        libraryTarget: 'umd',
        path: `${__dirname}/dist/`,
        publicPath: './',
      },
      plugins: [
        new webpack.BannerPlugin({
          banner: [
            '@license Copyright(c) 2013 sasa+1',
            'https://github.com/sasaplus1/alternate-stylesheets.js',
            'Released under the MIT license.',
          ].join('\n'),
          entryOnly: true,
          raw: false,
        }),
      ],
      target: 'web',
    },
  ];
};
