(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rxvuex"] = factory();
	else
		root["rxvuex"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://rxvuex/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://rxvuex/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: vmKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vmKey\", function() { return vmKey; });\n/**\r\n * 常量\r\n * @author like\r\n */\nvar vmKey = 'VM_KEY';\n\n//# sourceURL=webpack://rxvuex/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subject_subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject/subject */ \"./src/subject/subject.js\");\n/* harmony import */ var _store_pool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.pool */ \"./src/store.pool.js\");\n/**\r\n * 初始化存储对象\r\n * @author like\r\n */\n\n\n/**\r\n * 处理根部件\r\n */\n\nvar RxVuex = {};\n/**\r\n     * options:\r\n     * {\r\n     *    // TODO 二级缓存与三级缓存\r\n     *    // TODO worker浏览器同步【针对大文件数据同步加载】\r\n     *\r\n     * }\r\n     */\n\nRxVuex.install = function install(Vue, options) {\n  var store = new _store_pool__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  store.init(Vue);\n  store.createCache();\n  var subject = new _subject_subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"](store, options);\n  var rxvuex = subject;\n  Vue.prototype.RxVuex = rxvuex;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RxVuex);\n\n//# sourceURL=webpack://rxvuex/./src/index.js?");

/***/ }),

/***/ "./src/observe/observer.js":
/*!*********************************!*\
  !*** ./src/observe/observer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Observer; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/**\r\n *  观察者\r\n *  @author like\r\n */\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Observer);\n\n    this.on = true;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Observer, [{\n    key: \"init\",\n    value: function init(store) {\n      this.store = store;\n    }\n  }, {\n    key: \"next\",\n    value: function next(value) {\n      var _this = this;\n\n      if (this.store.vue.$router && this.on) {\n        this.on = false;\n        this.store.vue.$router.beforeEach(function (to, from, next) {\n          _this.routeKey = to.name;\n\n          _this.store.save(_this.routeKey, value);\n\n          next();\n        });\n      }\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.store.remove(this.routeKey);\n    }\n  }, {\n    key: \"complete\",\n    value: function complete() {\n      var result = this.store.getValue(this.routeKey);\n      return result;\n    }\n  }]);\n\n  return Observer;\n}();\n\n\n\n//# sourceURL=webpack://rxvuex/./src/observe/observer.js?");

/***/ }),

/***/ "./src/store.pool.js":
/*!***************************!*\
  !*** ./src/store.pool.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n/**\r\n * 采取多种方式存储防止数据刷新消逝\r\n * @author like\r\n */\n\nvar Store =\n/*#__PURE__*/\nfunction () {\n  function Store() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Store);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Store, [{\n    key: \"init\",\n    value: function init(vue) {\n      this.vue = vue;\n    }\n    /**\r\n       * create cache\r\n       * 创建缓存\r\n       */\n\n  }, {\n    key: \"createCache\",\n    value: function createCache() {\n      if (this.vue.cache) {\n        this.cache = this.vue.cache;\n      } else {\n        this.cache = new Map();\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n    /**\r\n       * save value\r\n       * 储存value\r\n       */\n\n  }, {\n    key: \"save\",\n    value: function save(key, value) {\n      if (this.vue.cache) {\n        this.vue.cache.set(key, value);\n      } else {\n        this.cache.set(key, value);\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n    /**\r\n       * find one value\r\n       * 获取某个值\r\n       */\n\n  }, {\n    key: \"getValue\",\n    value: function getValue(key) {\n      if (this.vue.cache) {\n        return this.vue.cache.get(key);\n      } else {\n        return this.cache.get(key);\n      }\n    }\n    /**\r\n       * delete one value\r\n       * 删除某个值\r\n       */\n\n  }, {\n    key: \"remove\",\n    value: function remove(key) {\n      if (this.vue.cache) {\n        this.vue.cache[\"delete\"](key);\n      } else {\n        this.cache[\"delete\"](key);\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n    /**\r\n       * clean this.cache\r\n       * 清理缓存\r\n       */\n\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.cache.clear();\n\n      if (this.vue) {\n        this.cache.set(_constants__WEBPACK_IMPORTED_MODULE_2__[\"vmKey\"], this.vue);\n        this.vue.prototype.cache = this.cache;\n      } else {\n        console.error('no use RxVuex');\n      }\n    }\n  }, {\n    key: \"toJson\",\n    value: function toJson() {\n      if (this.vue.cache) {\n        return this.vue.cache.toJSON();\n      } else {\n        return this.cache.toJSON();\n      }\n    }\n  }]);\n\n  return Store;\n}();\n\n\n\n//# sourceURL=webpack://rxvuex/./src/store.pool.js?");

/***/ }),

/***/ "./src/subject/subject.js":
/*!********************************!*\
  !*** ./src/subject/subject.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Subject; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _observe_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observe/observer */ \"./src/observe/observer.js\");\n\n\n\n/**\r\n * 介入者\r\n * @author like\r\n */\n\n\nvar Subject =\n/*#__PURE__*/\nfunction () {\n  /**\r\n     * for easy post\r\n     * 用来管理传输数据\r\n     */\n  function Subject(store, option) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Subject);\n\n    this.store = store;\n    this.observer = new _observe_observer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.observer.init(store);\n  }\n  /**\r\n         * subscribe\r\n         * 注册\r\n         */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Subject, [{\n    key: \"subscribe\",\n    value: function subscribe(vue) {\n      this.store.init(vue);\n      this.observer.init(this.store);\n      return this;\n    }\n  }, {\n    key: \"post\",\n    value: function post(key, value) {\n      var data = this.observer.complete();\n\n      if (!data) {\n        data = new Map();\n      }\n\n      data.set(key, value);\n      this.observer.next(data);\n    }\n  }, {\n    key: \"on\",\n    value: function on() {\n      return this.observer.complete();\n    }\n  }]);\n\n  return Subject;\n}();\n\n\n\n//# sourceURL=webpack://rxvuex/./src/subject/subject.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://rxvuex/multi_./src/index.js?");

/***/ })

/******/ });
});