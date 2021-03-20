# alternate-stylesheets.js

[![Actions Status: test](https://github.com/sasaplus1/alternate-stylesheets.js/workflows/test/badge.svg)](https://github.com/sasaplus1/alternate-stylesheets.js/actions?query=workflow%3A"test")
[![npm version](https://badge.fury.io/js/alternate-stylesheets.svg)](https://badge.fury.io/js/alternate-stylesheets)
[![Try alternate-stylesheets on RunKit](https://badge.runkitcdn.com/alternate-stylesheets.svg)](https://npm.runkit.com/alternate-stylesheets)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

switch Alternate Style Sheets

## Installation

### npm

```console
$ npm install alternate-stylesheets
```

### yarn

```console
$ yarn add alternate-stylesheets
```

## Usage

### ES Modules

```ts
import * as alternateStylesheets from 'alternate-stylesheets';
```

### CommonJS

```js
const alternateStylesheets = require('alternate-stylesheets');
```

### browser

```html
<script src="alternate-stylesheets.min.js"></script>
```

### Example

```js
// <link rel="stylesheet" title="cafe" href="cafe.css">
// <link rel="alternate stylesheet" title="orange" href="orange.css">
// <link rel="alternate stylesheet" title="chocolate" href="chocolate.css">

// get alternate stylesheets
const stylesheets = alternateStyleSheets.getAlternateStylesheets();

// enable orange stylesheet
alternateStyleSheets.setAlternateStylesheet('orange');

// enable chocolate stylesheet
alternateStyleSheets.setAlternateStylesheet('chocolate');
```

## Functions

see [documents](https://sasaplus1.github.io/alternate-stylesheets.js/typedoc)

## License

The MIT License.
