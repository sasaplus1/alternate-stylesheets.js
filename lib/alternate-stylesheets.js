/*!
 * alternate-stylesheets.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/alternate-stylesheets.js
 * Released under the MIT license.
 */


(function() {

  var isWebKit = (!document.all && navigator.taintEnabled === void 0);

  /**
   * get alternate styleSheets.
   *
   * return link tags if document.styleSheets not found.
   * return link tags if rendering engine is WebKit/Blink.
   *
   * @return {StyleSheetList|Element[]} alternate stylesheets.
   */
  function get() {
    var links, styleSheets, i, len;

    // drop code when compressing
    if (typeof Mocha !== 'undefined' && window.mock) {
      return window.mock.styleSheets;
    }

    // drop code of `typeof Mocha` when compressing
    if (typeof Mocha === 'undefined' && document.styleSheets && !isWebKit) {
      return document.styleSheets;
    }

    links = document.getElementsByTagName('link');
    styleSheets = [];

    for (i = 0, len = links.length; i < len; ++i) {
      links[i].rel &&
          links[i].rel.toLowerCase().indexOf('stylesheet') !== -1 &&
          links[i].title &&
          styleSheets.push(links[i]);
    }

    return styleSheets;
  }

  /**
   * set enabled with alternate stylesheet for title.
   *
   * @param {String} title alternate stylesheet title.
   */
  function set(title) {
    var styleSheets = get(),
        i, len;

    for (i = 0, len = styleSheets.length; i < len; ++i) {
      styleSheets[i].disabled = (styleSheets[i].title !== title);
      if (isWebKit) {
        styleSheets[i].disabled = !styleSheets[i].disabled;
        styleSheets[i].disabled = !styleSheets[i].disabled;
      }
    }
  }

  this.alternateStyleSheets = {
    get: get,
    set: set
  };

}());
