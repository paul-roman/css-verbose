module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unitsFunctions = __webpack_require__(1);
var colorsFunctions = __webpack_require__(2);

module.exports = Object.assign({}, unitsFunctions, colorsFunctions);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function cm(n) {
	return n + "cm";
}

function mm(n) {
	return n + "mm";
}

function inch(n) {
	return n + "in";
}

function px(n) {
	return n + "px";
}

function pt(n) {
	return n + "pt";
}

function pc(n) {
	return n + "pc";
}

function em(n) {
	return n + "em";
}

function ex(n) {
	return n + "ex";
}

function ch(n) {
	return n + "ch";
}

function rem(n) {
	return n + "rem";
}

function vw(n) {
	return n + "vw";
}

function vh(n) {
	return n + "vh";
}

function vmin(n) {
	return n + "vmin";
}

function vmax(n) {
	return n + "vmax";
}

function percents(n) {
	return n + "%";
}

module.exports = { cm: cm, mm: mm, inch: inch, px: px, pt: pt, pc: pc, em: em, ex: ex, ch: ch, rem: rem, vw: vw, vh: vh, vmin: vmin, vmax: vmax, percents: percents };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function rgb(red, green, blue) {
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function rgba(red, green, blue, alpha) {
	return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
}

module.exports = {
	rgb: rgb, rgba: rgba
};

/***/ })
/******/ ]);