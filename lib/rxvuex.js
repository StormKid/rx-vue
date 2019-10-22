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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://rxvuex/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://rxvuex/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://rxvuex/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://rxvuex/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: LOCAL_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL_KEY\", function() { return LOCAL_KEY; });\n/**\r\n * 常量\r\n * @author like\r\n */\nvar LOCAL_KEY = 'RX-VUEX';\n\n//# sourceURL=webpack://rxvuex/./src/constants.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Observer; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/**\r\n *  观察者\r\n *  @author like\r\n */\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Observer);\n\n    this.on = true;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Observer, [{\n    key: \"init\",\n    value: function init(store) {\n      this.store = store;\n    }\n  }, {\n    key: \"next\",\n    value: function next(value, callback) {\n      var _this = this;\n\n      if (this.store.vue.$router && this.on) {\n        this.on = false;\n        this.store.vue.$router.beforeEach(function (to, from, next) {\n          _this.routeKey = to.name;\n\n          _this.store.save(_this.routeKey, value);\n\n          if (callback(value)) {\n            next();\n          }\n        });\n      }\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.store.remove(this.routeKey);\n    }\n  }, {\n    key: \"complete\",\n    value: function complete() {\n      return this.store.getValue(this.routeKey);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var json = this.store.toJson();\n      return JSON.stringify(json);\n    }\n  }, {\n    key: \"fakerMap\",\n    value: function fakerMap(json) {\n      return this.store.toMap(json);\n    }\n  }]);\n\n  return Observer;\n}();\n\n\n\n//# sourceURL=webpack://rxvuex/./src/observe/observer.js?");

/***/ }),

/***/ "./src/store.pool.js":
/*!***************************!*\
  !*** ./src/store.pool.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/**\r\n * 采取多种方式存储防止数据刷新消逝\r\n * @author like\r\n */\nvar Store =\n/*#__PURE__*/\nfunction () {\n  function Store() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Store);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Store, [{\n    key: \"init\",\n    value: function init(vue) {\n      this.vue = vue;\n    }\n    /**\r\n       * create cache\r\n       * 创建缓存\r\n       */\n\n  }, {\n    key: \"createCache\",\n    value: function createCache() {\n      if (this.vue.cache) {\n        this.cache = this.vue.cache;\n      } else {\n        this.cache = new Map();\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n    /**\r\n       * save value\r\n       * 储存value\r\n       */\n\n  }, {\n    key: \"save\",\n    value: function save(key, value) {\n      if (this.vue.cache) {\n        this.vue.cache.set(key, value);\n        this.cache = this.vue.cache;\n      } else {\n        this.cache.set(key, value);\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n    /**\r\n       * find one value\r\n       * 获取某个值\r\n       */\n\n  }, {\n    key: \"getValue\",\n    value: function getValue(key) {\n      if (this.vue.cache) {\n        return this.vue.cache.get(key);\n      } else {\n        return this.cache.get(key);\n      }\n    }\n    /**\r\n       * delete one value\r\n       * 删除某个值\r\n       */\n\n  }, {\n    key: \"remove\",\n    value: function remove(key) {\n      if (this.vue.cache) {\n        this.vue.cache[\"delete\"](key);\n        this.cache = this.vue.cache;\n      } else {\n        this.cache[\"delete\"](key);\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n    /**\r\n       * clean this.cache\r\n       * 清理缓存\r\n       */\n\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      if (this.vue.cache) {\n        this.vue.cache.clear();\n        this.cache = this.vue.cache;\n      } else {\n        this.cache.clear();\n        this.vue.prototype.cache = this.cache;\n      }\n    }\n  }, {\n    key: \"toJson\",\n    value: function toJson() {\n      if (this.vue.cache) {\n        return this.initJson(this.vue.cache);\n      } else {\n        return this.initJson(this.cache);\n      }\n    }\n  }, {\n    key: \"toMap\",\n    value: function toMap(jsonString) {\n      var json = JSON.parse(jsonString);\n      var map = this.initMap(json);\n      this.vue.prototype.cache = map;\n      this.cache = this.vue.cache;\n      return map;\n    }\n  }, {\n    key: \"initJson\",\n    value: function initJson(map) {\n      var json = {};\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step.value, 2),\n              key = _step$value[0],\n              value = _step$value[1];\n\n          json[key] = value;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return json;\n    }\n  }, {\n    key: \"initMap\",\n    value: function initMap(json) {\n      var map = new Map();\n\n      for (var key in json) {\n        map.set(key, json[key]);\n      }\n\n      return map;\n    }\n  }]);\n\n  return Store;\n}();\n\n\n\n//# sourceURL=webpack://rxvuex/./src/store.pool.js?");

/***/ }),

/***/ "./src/subject/subject.js":
/*!********************************!*\
  !*** ./src/subject/subject.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Subject; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _observe_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observe/observer */ \"./src/observe/observer.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\n\n/**\r\n * 介入者\r\n * @author like\r\n */\n\n\n\nvar Subject =\n/*#__PURE__*/\nfunction () {\n  /**\r\n     * for easy post\r\n     * 用来管理传输数据\r\n     */\n  function Subject(store, option) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Subject);\n\n    this.store = store;\n    this.observer = new _observe_observer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.observer.init(store);\n    this.option = option;\n  }\n  /**\r\n         * subscribe\r\n         * 注册\r\n         */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Subject, [{\n    key: \"subscribe\",\n    value: function subscribe(vue) {\n      this.store.init(vue);\n      this.observer.init(this.store);\n      return this;\n    }\n  }, {\n    key: \"post\",\n    value: function post(key, value) {\n      this.postWithCallback(key, value, function action() {\n        return true;\n      });\n    }\n  }, {\n    key: \"postWithCallback\",\n    value: function postWithCallback(key, value, callback) {\n      var data = this.observer.complete();\n\n      if (this.option.store === '1') {\n        data = this.getData();\n      }\n\n      if (!data) {\n        data = new Map();\n      }\n\n      data.set(key, value);\n      this.observer.next(data, callback);\n\n      if (this.option.store === '1') {\n        this.putData();\n      }\n    }\n  }, {\n    key: \"on\",\n    value: function on(key) {\n      var data = this.observer.complete().get(key);\n\n      if (this.option.store === '1') {\n        data = this.getData();\n      }\n\n      var result = data.get(key);\n      return result;\n    } // test() {\n    //     return this.observer.complete()\n    // }\n\n  }, {\n    key: \"getData\",\n    value: function getData() {\n      var jsonString = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_3__[\"LOCAL_KEY\"]);\n      return this.observer.fakerMap(jsonString);\n    }\n  }, {\n    key: \"putData\",\n    value: function putData() {\n      var value = this.observer.toString();\n      localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__[\"LOCAL_KEY\"], value);\n    }\n  }]);\n\n  return Subject;\n}();\n\n\n\n//# sourceURL=webpack://rxvuex/./src/subject/subject.js?");

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