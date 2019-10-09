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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/readOnlyError.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/readOnlyError.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: dataKey, vmKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataKey", function() { return dataKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmKey", function() { return vmKey; });
/**
 * 常量
 * @author like
 */
var dataKey = "DATA_KEY";
var vmKey = "VM_KEY";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observe_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe/observer */ "./src/observe/observer.js");
/* harmony import */ var _subject_subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject/subject */ "./src/subject/subject.js");
/* harmony import */ var _store_pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.pool */ "./src/store.pool.js");
/**
 * 初始化存储对象
 * @author like
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  Observer: _observe_observer__WEBPACK_IMPORTED_MODULE_0__["Observer"],
  Subject: _subject_subject__WEBPACK_IMPORTED_MODULE_1__["Subject"],
  Pool: _store_pool__WEBPACK_IMPORTED_MODULE_2__["Pool"]
});

/***/ }),

/***/ "./src/observe/observer.js":
/*!*********************************!*\
  !*** ./src/observe/observer.js ***!
  \*********************************/
/*! exports provided: Observer, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


/**
 *  公共装饰器
 *  @author like
 */
var observers = [];
var Observer = function Observer() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Observer);
};
var Observable = function Observable() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Observable);
};

/***/ }),

/***/ "./src/store.pool.js":
/*!***************************!*\
  !*** ./src/store.pool.js ***!
  \***************************/
/*! exports provided: cache, Pool, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pool", function() { return Pool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */

/**
 * 处理根部件
 */

var cache = new Map();
/**
 * 根据传入的信息处理变化的data缓存, 单例方便观测对象变化
 */

var changeData = {};
var Pool = function Pool() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pool);

  if (!cache.get(_constants__WEBPACK_IMPORTED_MODULE_1__["vmKey"]) && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};
function install(Vue) {
  if (cache.get(_constants__WEBPACK_IMPORTED_MODULE_1__["vmKey"]) && cache.get(_constants__WEBPACK_IMPORTED_MODULE_1__["vmKey"]) === Vue) {
    if (true) {
      console.error('[RxVuex] already installed. Vue.use(RxVuex) should be called only once.');
    }

    return;
  }

  cache.set(_constants__WEBPACK_IMPORTED_MODULE_1__["vmKey"], Vue);
}

/***/ }),

/***/ "./src/subject/subject.js":
/*!********************************!*\
  !*** ./src/subject/subject.js ***!
  \********************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_pool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store.pool */ "./src/store.pool.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





/**
 * 注册监听
 * @author like
 */


var vm = _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].get(_constants__WEBPACK_IMPORTED_MODULE_5__["vmKey"]);
var changeData = _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].get(_constants__WEBPACK_IMPORTED_MODULE_5__["dataKey"]);
var Subject =
/*#__PURE__*/
function () {
  /**
   * for route easy post
   * 用来处理路由的传输数据
   */
  function Subject() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Subject);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "routeKey", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "singleSubject", null);

    if (this.singleSubject == null) {
      this.singleSubject = new Subject();
    }

    this.initSingle();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Subject, [{
    key: "initSingle",
    value: function initSingle() {
      var self = this;

      if (self.singleSubject == null) {
        return;
      }
      /**
       * subscribe router
       * 注册路由
       */


      self.singleSubject.prototype.subscribe = function subscribe(vue) {
        self.routeKey = vue.$route.name;
        changeData = (_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_3___default()("changeData"), {
          routeKey: self.routeKey
        });
      };
      /**
       * save value
       * 储存value
       */


      self.singleSubject.prototype.next = function next(key, value) {
        _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].set(key, value);
      };
      /**
       * clean cache
       * 清理缓存
       */


      self.singleSubject.prototype.clear = function clear() {
        _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].clear();
        _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].set(_constants__WEBPACK_IMPORTED_MODULE_5__["vmKey"], vm);
      };
      /**
       * delete one value
       * 删除某个值
       */


      self.singleSubject.prototype.remove = function remove(key) {
        _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"]["delete"](key);
      };
      /**
       * find one value
       * 获取某个值
       */


      self.singleSubject.prototype.getValue = function getValue(key) {
        _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].get(key);
      };
      /**
       * to test Api
       * 供给测试API
       */


      self.singleSubject.prototype.getJson = function getJson() {
        return _store_pool__WEBPACK_IMPORTED_MODULE_4__["cache"].toJSON();
      };
    }
  }]);

  return Subject;
}();

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=rxvuex.js.map