/*!
 * @license Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/alternate-stylesheets.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["alternateStylesheets"] = factory();
	else
		root["alternateStylesheets"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isWebKit = (!document.all && navigator.taintEnabled === void 0);

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

    if (isWebKit) {
      styleSheet.disabled = !styleSheet.disabled;
      styleSheet.disabled = !styleSheet.disabled;
    }
  }
}

module.exports = {
  get: get,
  set: set
};


/***/ })
/******/ ]);
});