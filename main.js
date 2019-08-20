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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_pages_index_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/pages/index.pug */ "./src/template/pages/index.pug");
/* harmony import */ var _template_pages_index_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_pages_index_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/main.js */ "./src/scripts/main.js");
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_main_js__WEBPACK_IMPORTED_MODULE_2__);

// Import styles

// Import scripts

console.log('all files loaded');

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/template/pages/index.pug":
/*!**************************************!*\
  !*** ./src/template/pages/index.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>webpack Project</title></head><body><div class=\"wrapper\"><header class=\"header\"><div class=\"header__menu-wrapper\"><div class=\"header__button-wrapper\"><button class=\"header__menu\">Меню</button><div class=\"header__elements\"><span></span><span></span><span></span></div></div><div class=\"dropdown\"><a class=\"dropdown__element\" href=\"#\">Выбор квартир</a><a class=\"dropdown__element\" href=\"#\">Расположение</a><a class=\"dropdown__element\" href=\"#\">архитектура</a><a class=\"dropdown__element\" href=\"#\">квартиры</a><a class=\"dropdown__element\" href=\"#\">благоустройство</a><a class=\"dropdown__element\" href=\"#\">ход строительства</a><a class=\"dropdown__element\" href=\"#\">документы</a><a class=\"dropdown__element\" href=\"#\">Контакты</a></div></div><div class=\"header__right\"><div class=\"header__contacts\"><a class=\"header__element\" href=\"tel:+74953222232\">+7 495 322 22 32</a><a class=\"header__element\" href=\"mailto:sales@4rubel.ru\">e-mail: sales@4rubel.ru</a></div><div class=\"header__callback\"><button class=\"header__btn\">заказать звонок</button></div></div></header><section class=\"main\"><div class=\"main__picture-wrapper\"><img class=\"main__image\" src=\"/../assets/images/logo.png\" alt=\"\" role=\"presentation\"/></div><div class=\"main__logo\"><svg class=\"main__logo-pic\" xmlns=\"http://www.w3.org/2000/svg\" width=\"426.286\" height=\"135.819\" viewbox=\"0 0 426.286 135.819\"><g id=\"Group_4\" data-name=\"Group 4\" transform=\"translate(-82.725 -170.623)\"><g id=\"Group_3\" data-name=\"Group 3\"><path id=\"Path_1\" data-name=\"Path 1\" d=\"M129.524,272.156h-4l-10.2,14.19H108.9v-14.19h-3.689v14.19H98.8l-10.2-14.19h-4l11.259,15.811-12.6,17.588h4.45l11.529-15.963h5.978v15.963H108.9V289.591h5.978l11.529,15.963h4.451l-12.6-17.588Z\"></path><path id=\"Path_2\" data-name=\"Path 2\" d=\"M134.849,298.994V272.156H131.16v33.4h3.119l19.052-26.837v26.837h3.689v-33.4H153.9Z\"></path><path id=\"Path_3\" data-name=\"Path 3\" d=\"M167.111,294.056c-.559,5.418-2.8,8.919-5.7,8.919H158.68v2.986l.893.224a8.862,8.862,0,0,0,1.838.257c2.423,0,8.187-1.183,9.375-12.135l2.1-18.9h12.4v30.153h3.689v-33.4H169.44Z\"></path><path id=\"Path_4\" data-name=\"Path 4\" d=\"M207.726,271.27c-9.547,0-16.477,7.4-16.477,17.586s6.93,17.586,16.477,17.586,16.478-7.4,16.478-17.586S217.274,271.27,207.726,271.27Zm0,3.245c7.41,0,12.788,6.031,12.788,14.341s-5.378,14.34-12.788,14.34-12.789-6.031-12.789-14.34S200.316,274.515,207.726,274.515Z\"></path><path id=\"Path_5\" data-name=\"Path 5\" d=\"M230.167,298.994V272.156h-3.689v33.4H229.6l19.053-26.837v26.837h3.689v-33.4H249.22Z\"></path><path id=\"Path_6\" data-name=\"Path 6\" d=\"M239.409,270.081c5.073,0,7.741-4.315,8.443-6.6l.339-1.1-2.782-.923-.431.987c-.071.161-1.769,3.945-5.569,3.945s-5.5-3.784-5.568-3.941l-.427-1-2.788.93.339,1.1C231.667,265.766,234.335,270.081,239.409,270.081Z\"></path><path id=\"Path_7\" data-name=\"Path 7\" d=\"M293.976,272.156h-4l-10.2,14.19H272.47v-14.19h-3.689v33.4h3.689V289.591h6.865l11.529,15.963h4.451l-12.6-17.588Z\"></path><path id=\"Path_8\" data-name=\"Path 8\" d=\"M308.737,271.27c-9.548,0-16.477,7.4-16.477,17.586s6.929,17.586,16.477,17.586,16.478-7.4,16.478-17.586S318.285,271.27,308.737,271.27Zm0,3.245c7.41,0,12.788,6.031,12.788,14.341s-5.378,14.34-12.788,14.34-12.789-6.031-12.789-14.34S301.327,274.515,308.737,274.515Z\"></path><path id=\"Path_9\" data-name=\"Path 9\" d=\"M344.873,295.581l-13.629-23.425h-3.188v33.4H331.3v-26.02l12.333,21.143h2.015l12.559-21.194v26.072H361.9v-33.4h-3.183Z\"></path><path id=\"Path_10\" data-name=\"Path 10\" d=\"M367.524,305.555h3.689V275.4h18.482v30.153h3.689v-33.4h-25.86Z\"></path><path id=\"Path_11\" data-name=\"Path 11\" d=\"M403.475,294.056c-.559,5.418-2.8,8.919-5.7,8.919h-2.731v2.986l.893.224a8.862,8.862,0,0,0,1.838.257c2.423,0,8.187-1.183,9.375-12.135l2.1-18.9h12.4v30.153h3.69v-33.4H405.8Z\"></path><path id=\"Path_12\" data-name=\"Path 12\" d=\"M433.519,290.035h13.267l.809-3.246H433.519V275.4h18.144l.811-3.245H429.829v33.4h23.2V302.31h-19.51Z\"></path><path id=\"Path_13\" data-name=\"Path 13\" d=\"M480.081,272.156h-4l-10.2,14.19h-7.306v-14.19h-3.689v33.4h3.689V289.591h6.864l11.529,15.963h4.451l-12.6-17.588Z\"></path><path id=\"Path_14\" data-name=\"Path 14\" d=\"M506.372,296.232l-.605,1.171a12.322,12.322,0,0,1-10.925,5.793c-7.411,0-12.789-6.031-12.789-14.34s5.378-14.341,12.789-14.341a12.247,12.247,0,0,1,10.292,5.408l.634,1.07,2.626-1.751-.562-.96a15.408,15.408,0,0,0-12.99-7.012c-9.548,0-16.478,7.4-16.478,17.586s6.93,17.586,16.478,17.586a15.338,15.338,0,0,0,13.685-7.512l.484-.936Z\"></path></g><g id=\"Group_1\" data-name=\"Group 1\"><path id=\"Path_15\" data-name=\"Path 15\" d=\"M207.91,220.916a28.5,28.5,0,0,0,6.957-3.633c4.587-3.3,10.054-9.527,10.054-20.485a24.936,24.936,0,0,0-8-18.757c-5.338-4.852-12.8-7.418-21.574-7.418H165.769v84.1h8.12V222.971h25.895l21.41,30.743.7,1.011h9.738l-2.607-3.714ZM216.8,196.8c0,11.656-8.421,19.188-21.455,19.188H173.889V177.61h21.457C208.38,177.61,216.8,185.141,216.8,196.8Z\"></path><path id=\"Path_16\" data-name=\"Path 16\" d=\"M296.836,170.623h-2.359v52.258c0,16.478-9.98,27.126-25.425,27.126-14.529,0-24.291-10.9-24.291-27.126V170.623h-8.12v52.258c0,10,3.144,18.554,9.093,24.741,5.811,6.043,14.092,9.371,23.318,9.371s17.508-3.328,23.319-9.371c5.948-6.187,9.093-14.742,9.093-24.741V170.623h-4.628Z\"></path><path id=\"Path_17\" data-name=\"Path 17\" d=\"M368.351,210.436a31.8,31.8,0,0,0-5.151-2.459c.631-.371,1.28-.791,1.929-1.264a18,18,0,0,0,7.774-15.019,19.607,19.607,0,0,0-6.833-14.96c-4.58-4-10.876-6.111-18.207-6.111h-30.71v84.1h34.112c8.056,0,15.359-2.554,20.564-7.19a22.921,22.921,0,0,0,7.878-17.284C379.707,221.725,375.78,214.873,368.351,210.436Zm3.236,19.815c0,9.97-8.736,17.487-20.322,17.487H325.273V212.764h25.992C362.851,212.764,371.587,220.282,371.587,230.251Zm-46.314-24.472V177.61h22.59c9.962,0,16.92,5.792,16.92,14.084s-6.958,14.085-16.92,14.085Z\"></path><path id=\"Path_18\" data-name=\"Path 18\" d=\"M396.145,247.738V215.033h34.071l.447-1.786.567-2.268.733-2.931H396.145V177.61H442.69l.447-1.786.567-2.268.733-2.931H388.025v84.1h58.018v-6.986h-49.9Z\"></path><path id=\"Path_19\" data-name=\"Path 19\" d=\"M505.487,247.738H460.213V170.623h-8.12v84.1h54.665l.447-1.786.567-2.268.733-2.931Z\"></path><path id=\"Path_20\" data-name=\"Path 20\" d=\"M143.448,205.337l13.03-31.452,1.351-3.262h-7.945l-.6,1.46-11.973,29.039L119.948,189.2,118,187.866l-1.335,1.945-2,2.906-1.335,1.945L115.282,196,134.1,208.914l-13.252,32.142L92.406,172.083l-.6-1.46H82.725l1.351,3.262,32.887,79.383.6,1.456h5.421l.6-1.456,16.633-40.147,13.145,9.025,1.945,1.335,1.335-1.945,2-2.906,1.335-1.945-1.945-1.335Z\"></path></g></g></svg></div><div class=\"main__descriptions\"><p>коллекция авторских квартир</p></div></section></div></body></html>";

/***/ })

/******/ });
//# sourceMappingURL=main.js.map