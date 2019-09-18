'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subject = undefined;

var _store = require('../store.pool');

var _constants = require('../constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * 注册监听
                                                                                                                                                           * @author like
                                                                                                                                                           */


var observers = [];
var vm = _store.cache.get(_constants.vmKey);
var changeData = _store.cache.get(_constants.dataKey);

var Subject = exports.Subject = function Subject() {
  _classCallCheck(this, Subject);
};