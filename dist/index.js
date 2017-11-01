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


__webpack_require__(1);
var colorsFunctions = __webpack_require__(2);
var marginPaddingFunctions = __webpack_require__(3);

module.exports = Object.assign({}, colorsFunctions, marginPaddingFunctions);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Number.prototype.cm = function () {
	return this + "cm";
};

Number.prototype.mm = function () {
	return this + "mm";
};

Number.prototype.inch = function () {
	return this + "in";
};

Number.prototype.px = function () {
	return this + "px";
};

Number.prototype.pt = function () {
	return this + "pt";
};

Number.prototype.pc = function () {
	return this + "pc";
};

Number.prototype.em = function () {
	return this + "em";
};

Number.prototype.ex = function () {
	return this + "ex";
};
Number.prototype.ch = function () {
	return this + "ch";
};

Number.prototype.rem = function () {
	return this + "rem";
};

Number.prototype.vw = function () {
	return this + "vw";
};

Number.prototype.vh = function () {
	return this + "vh";
};

Number.prototype.vMin = function () {
	return this + "vmin";
};

Number.prototype.vMax = function () {
	return this + "vmax";
};

Number.prototype.percents = function () {
	return this + "%";
};

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function toPx(value) {
	if (typeof value === 'string') {
		if (/^\d+$/.test(value)) return value + 'px';else return value;
	} else return value + 'px';
}

function __(a, b, c, d) {
	if (b === undefined) return toPx(a);else if (c === undefined) return toPx(a) + ' ' + toPx(b);else if (d === undefined) return toPx(a) + ' ' + toPx(b) + ' ' + toPx(c);else return toPx(a) + ' ' + toPx(b) + ' ' + toPx(c) + ' ' + toPx(d);
}

module.exports = {
	__: __
};

/***/ })
/******/ ]);