# alternate-stylesheets.js

[![Build Status](https://travis-ci.org/sasaplus1/alternate-stylesheets.js.svg)](https://travis-ci.org/sasaplus1/alternate-stylesheets.js)
[![Dependency Status](https://gemnasium.com/sasaplus1/alternate-stylesheets.js.svg)](https://gemnasium.com/sasaplus1/alternate-stylesheets.js)
[![Try alternate-stylesheets on RunKit](https://badge.runkitcdn.com/alternate-stylesheets.svg)](https://npm.runkit.com/alternate-stylesheets)

get/set Alternate StyleSheets

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
  - `HTMLLinkElement[]` - `<Link />` elements of alternate stylesheet

get alternate stylesheet elements.

### set(title)

- `title`
  - `string` - alternate stylesheet title

set alternate stylesheet.

## Test

```sh
$ npm install
$ npm test
```

## License

The MIT License. Please see LICENSE file.
