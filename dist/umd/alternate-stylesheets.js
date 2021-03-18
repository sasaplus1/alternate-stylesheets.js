/*!
 * @license Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/alternate-stylesheets.js
 * Released under the MIT license.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.alternateStylesheets = {}));
}(this, (function (exports) { 'use strict';

  function getAlternateStylesheets() {
      const links = document.getElementsByTagName('link');
      const alternateStylesheets = [];
      for (let i = 0, len = links.length; i < len; ++i) {
          const link = links[i];
          if (/stylesheet/i.test(link.rel) && link.title) {
              alternateStylesheets.push(link);
          }
      }
      return alternateStylesheets;
  }
  function setAlternateStylesheet(title) {
      const links = getAlternateStylesheets();
      const len = links.length;
      let targetStyleSheet = null;
      for (let i = 0, stylesheet; i < len; ++i) {
          stylesheet = links[i];
          if (stylesheet.title === title) {
              targetStyleSheet = stylesheet;
          }
      }
      if (targetStyleSheet === null) {
          return false;
      }
      for (let i = 0, stylesheet; i < len; ++i) {
          stylesheet = links[i];
          stylesheet.disabled = stylesheet.title !== title;
          // HACK: for Google Chrome and Safari
          stylesheet.disabled = !stylesheet.disabled;
          stylesheet.disabled = !stylesheet.disabled;
      }
      return true;
  }

  exports.getAlternateStylesheets = getAlternateStylesheets;
  exports.setAlternateStylesheet = setAlternateStylesheet;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alternate-stylesheets.js.map
