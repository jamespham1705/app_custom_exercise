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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/app_custom_exercise/cartridge/client/default/js/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/util.js":
/*!***************************************************************************************************************!*\
  !*** ../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/util.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = function (include) {\r\n    if (typeof include === 'function') {\r\n        include();\r\n    } else if (typeof include === 'object') {\r\n        Object.keys(include).forEach(function (key) {\r\n            if (typeof include[key] === 'function') {\r\n                include[key]();\r\n            }\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/util.js?");

/***/ }),

/***/ "./cartridges/app_custom_exercise/cartridge/client/default/js/components/urlUtil.js":
/*!******************************************************************************************!*\
  !*** ./cartridges/app_custom_exercise/cartridge/client/default/js/components/urlUtil.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst urlUtil = {};\r\n\r\n/**\r\n * Remove boolean refinement from URL\r\n * @param {string} url - Current URL\r\n * @param {string} originRefinementAttr - Origin refinement attribute rendered by product search model\r\n * @returns {string} - New URL\r\n */\r\nfunction removeBooleanRefinementFromURL(url, originRefinementAttr) {\r\n    var refineUrl = url;\r\n    var refinementIdx = refineUrl.charAt(refineUrl.indexOf('=' + originRefinementAttr) - 1);\r\n    if (refinementIdx) {\r\n        refineUrl = urlUtil.removeParamFromURL(refineUrl, ('prefn' + refinementIdx));\r\n        refineUrl = urlUtil.removeParamFromURL(refineUrl, ('prefv' + refinementIdx));\r\n    }\r\n    return refineUrl;\r\n}\r\n\r\n/**\r\n * Re-index the prefn and prefv parameteres\r\n * @param {string} url - Current URL\r\n * @returns {string} - URL after re-indexing\r\n */\r\nfunction reIndexRefinementParam(url) {\r\n    var urlParamObj = urlUtil.getUrlParamObject(url);\r\n    var newUrlParamObj = JSON.parse(JSON.stringify(urlParamObj));\r\n    var prefnValues = [];\r\n    var prefvValues = [];\r\n\r\n    if (urlParamObj) {\r\n        Object.keys(urlParamObj).sort().forEach(key => {\r\n            var value = urlParamObj[key];\r\n            if (key.startsWith('prefn')) {\r\n                prefnValues.push(value);\r\n                delete newUrlParamObj[key];\r\n            } else if (key.startsWith('prefv')) {\r\n                prefvValues.push(value);\r\n                delete newUrlParamObj[key];\r\n            }\r\n        });\r\n    }\r\n\r\n    prefnValues.forEach((value, index) => {\r\n        newUrlParamObj[`prefn${index + 1}`] = value;\r\n    });\r\n    prefvValues.forEach((value, index) => {\r\n        newUrlParamObj[`prefv${index + 1}`] = value;\r\n    });\r\n\r\n    var newUrl = url.split('?')[0];\r\n\r\n    Object.keys(newUrlParamObj).forEach(key => {\r\n        newUrl = urlUtil.appendParamToURL(newUrl, key, decodeURIComponent(newUrlParamObj[key]));\r\n    });\r\n\r\n    return newUrl;\r\n}\r\n\r\n/**\r\n * Set weight refinement value to search URL\r\n * @param {string} url - Current URL\r\n * @param {JQuery<HTMLElement>} refinementBarEl - Refinement bar element\r\n * @returns {string} - Return new search URL\r\n */\r\nfunction setWeightRefinementToUrl(url, refinementBarEl) {\r\n    let newUrl = url;\r\n    let weightRefinementElement = $('.weights-refinement .weight-selection', refinementBarEl);\r\n    let currentMinPrice = Number(weightRefinementElement.data('value-weight-from'));\r\n    let currentMaxPrice = Number(weightRefinementElement.data('value-weight-to'));\r\n    if (currentMinPrice && currentMaxPrice) {\r\n        newUrl = urlUtil.setUrlParameter(newUrl, 'wmin', currentMinPrice);\r\n        newUrl = urlUtil.setUrlParameter(newUrl, 'wmax', currentMaxPrice);\r\n    }\r\n    return newUrl;\r\n}\r\n\r\nurlUtil.removeBooleanRefinementFromURL = removeBooleanRefinementFromURL;\r\nurlUtil.reIndexRefinementParam = reIndexRefinementParam;\r\nurlUtil.setWeightRefinementToUrl = setWeightRefinementToUrl;\r\n\r\nmodule.exports = urlUtil;\r\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_exercise/cartridge/client/default/js/components/urlUtil.js?");

/***/ }),

/***/ "./cartridges/app_custom_exercise/cartridge/client/default/js/search.js":
/*!******************************************************************************!*\
  !*** ./cartridges/app_custom_exercise/cartridge/client/default/js/search.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar processInclude = __webpack_require__(/*! base/util */ \"../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/js/util.js\");\r\n\r\n$(document).ready(function () {\r\n    processInclude(__webpack_require__(/*! ./search/search */ \"./cartridges/app_custom_exercise/cartridge/client/default/js/search/search.js\"));\r\n});\r\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_exercise/cartridge/client/default/js/search.js?");

/***/ }),

/***/ "./cartridges/app_custom_exercise/cartridge/client/default/js/search/search.js":
/*!*************************************************************************************!*\
  !*** ./cartridges/app_custom_exercise/cartridge/client/default/js/search/search.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst searchCore = {};\r\nconst urlUtil = __webpack_require__(/*! ../components/urlUtil */ \"./cartridges/app_custom_exercise/cartridge/client/default/js/components/urlUtil.js\");\r\nconst productTile = {};\r\n/**\r\n * Overwrite function from core to appy filter on desktop\r\n */\r\nsearchCore.applyFilter = function () {\r\n    $('.container').on(\r\n        'click.applyFilter',\r\n        '.refinements li a, .refinement-bar a.reset, .filter-value a, .swatch-filter a',\r\n        function (e) {\r\n            e.preventDefault();\r\n            e.stopPropagation();\r\n            let self = $(this);\r\n            let elementToUpdate = [\r\n                '.sort-field',\r\n                '.product-grid',\r\n                '.show-more',\r\n                '.result-count'\r\n            ];\r\n\r\n            let url = e.currentTarget.href;\r\n            url = searchCore.methods.prepareSearchFilterUrl(url, self);\r\n\r\n            $.spinner().start();\r\n            self.trigger('search:filter', e);\r\n\r\n            $.ajax({\r\n                url: url,\r\n                data: {\r\n                    page: $('.grid-footer').data('page-number'),\r\n                    selectedUrl: url\r\n                },\r\n                method: 'GET'\r\n            }).done(function (response) {\r\n                productFilter.parseResults(elementToUpdate, response);\r\n                productTile.carouselAttribute();\r\n                productFilter.removeCommaRefinements();\r\n                productFilter.triggerFilteredSortedSwatches(url);\r\n                $('body').trigger('search:applyFilter', response);\r\n                $.spinner().stop();\r\n            }).fail(function () {\r\n                $.spinner().stop();\r\n            });\r\n        });\r\n};\r\n\r\n/**\r\n * Prepare and parse custom refinement URL before applying filter\r\n * @param {string} url - Refinement target URL\r\n * @param {JQuery<HTMLElement>} refinementEl - Refinement item element\r\n * @returns {string} - New custom refinement URL\r\n */\r\nsearchCore.methods.prepareSearchFilterUrl = function (url, refinementEl) {\r\n    let desktopRefineBar = $('.refinement-wrapper');\r\n    let newUrl = url;\r\n    newUrl = urlUtil.removeBooleanRefinementFromURL(newUrl, 'dimensionExpandableWidth');\r\n    newUrl = urlUtil.reIndexRefinementParam(newUrl);\r\n\r\n    let instock = productFilter.methods.isBooleanRefinementSelected(desktopRefineBar, refinementEl, 'instock-selection');\r\n    newUrl = urlUtil.appendParamToURL(newUrl, 'instock', instock);\r\n\r\n    let expandable = productFilter.methods.isBooleanRefinementSelected(desktopRefineBar, refinementEl, 'expandable-selection');\r\n    newUrl = urlUtil.appendParamToURL(newUrl, 'expandable', expandable);\r\n    return newUrl;\r\n};\r\n\r\n[productFilter].forEach(function (library) {\r\n    Object.keys(library).forEach(function (item) {\r\n        if (typeof library[item] === 'object') {\r\n            searchCore[item] = $.extend({}, searchCore[item], library[item]);\r\n        } else {\r\n            searchCore[item] = library[item];\r\n        }\r\n    });\r\n});\r\n\r\nsearchCore.sortRule = productSort.activateSort;\r\n\r\nmodule.exports = searchCore;\r\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_exercise/cartridge/client/default/js/search/search.js?");

/***/ })

/******/ });