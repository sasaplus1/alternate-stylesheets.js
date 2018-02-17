'use strict';

/**
 * get alternate stylesheet elements.
 *
 * @return {HTMLLinkElement[]}
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
 * @return {null|HTMLLinkElement}
 */
function set(title) {
  var styleSheets = get();

  var targetStyleSheet = null;
  var len = styleSheets.length;

  var i, styleSheet;

  for (i = 0; i < len; ++i) {
    styleSheet = styleSheets[i];

    if (styleSheet.title === title) {
      targetStyleSheet = styleSheet;
    }
  }

  if (targetStyleSheet === null) {
    return null;
  }

  for (i = 0; i < len; ++i) {
    styleSheet = styleSheets[i];
    styleSheet.disabled = (styleSheet.title !== title);
  }

  return targetStyleSheet;
}

module.exports = {
  get: get,
  set: set
};
