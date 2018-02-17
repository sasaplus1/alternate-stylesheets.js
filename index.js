'use strict';

/**
 * get alternate stylesheet elements.
 *
 * @return {HTMLLinkElement[]} alternate stylesheets.
 */
function get() {
  var links = document.getElementsByTagName('link');
  var styleSheets = [];

  var i, len, link;

  for (i = 0, len = links.length; i < len; ++i) {
    link = links[i];

    if (/stylesheet/i.test(link.rel) && link.title) {
      styleSheets.push(link);
    }
  }

  return styleSheets;
}

/**
 * enable alternate stylesheet by title.
 *
 * @param {string} title
 */
function set(title) {
  var styleSheets = get();

  var i, len, styleSheet;

  for (i = 0, len = styleSheets.length; i < len; ++i) {
    styleSheet = styleSheets[i];
    styleSheet.disabled = (styleSheet.title !== title);
  }
}

module.exports = {
  get: get,
  set: set
};
