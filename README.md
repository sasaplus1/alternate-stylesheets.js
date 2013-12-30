# alternate-stylesheets.js

[![Build Status](https://travis-ci.org/sasaplus1/alternate-stylesheets.js.png)](https://travis-ci.org/sasaplus1/alternate-stylesheets.js)
[![Dependency Status](https://gemnasium.com/sasaplus1/alternate-stylesheets.js.png)](https://gemnasium.com/sasaplus1/alternate-stylesheets.js)

library for Alternate StyleSheets

## Installation

```sh
$ bower install alternate-stylesheets
```

## Usage

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

- `return` StyleSheetList|Element[] - alternate stylesheets

get alternate stylesheets.

return link tags if document.styleSheets not found.
return link tags if rendering engine is WebKit or Blink.

### set(title)

- `title` String - alternate stylesheet title

set enabled with alternate stylesheet for title.

## Test

```sh
$ npm install
$ npm test
```

## License

The MIT License. Please see LICENSE file.
