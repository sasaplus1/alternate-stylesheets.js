# alternate-stylesheets.js

[![Actions Status: test](https://github.com/sasaplus1/alternate-stylesheets.js/workflows/test/badge.svg)](https://github.com/sasaplus1/alternate-stylesheets.js/actions?query=workflow%3A"test")
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![npm version](https://badge.fury.io/js/alternate-stylesheets.svg)](https://badge.fury.io/js/alternate-stylesheets)
[![Try alternate-stylesheets on RunKit](https://badge.runkitcdn.com/alternate-stylesheets.svg)](https://npm.runkit.com/alternate-stylesheets)

switch Alternate StyleSheets

## Installation

```sh
$ npm install alternate-stylesheets
```

## Usage

```js
var alternateStylesheets = require('alternate-stylesheets');
```

or

```html
<script src="alternate-stylesheets.min.js"></script>
```

```js
// <link rel="stylesheet" title="cafe" href="cafe.css">
// <link rel="alternate stylesheet" title="orange" href="orange.css">
// <link rel="alternate stylesheet" title="chocolate" href="chocolate.css">

alternateStyleSheets.get();
// get alternate stylesheets

alternateStyleSheets.set('orange');
// set to disabled for cafe, set to enabled for orange

alternateStyleSheets.set('chocolate');
// set to disabled for orange, set to enabled for chocolate
```

## Functions

### get()

- `return`
  - `HTMLLinkElement[]`
    - `<Link />` elements of alternate stylesheet.

get alternate stylesheet elements.

### set(title)

- `title`
  - `string`
    - alternate stylesheet title
- `return`
  - `null|HTMLLinkElement`
    - return null if passed unknown title, otherwise `<Link />` element of title.

set alternate stylesheet.

## Test

```sh
$ npm install
$ npm test
```

## License

The MIT License. Please see LICENSE file.
