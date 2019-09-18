'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pool = exports.cache = undefined;
exports.install = install;

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * 采取多种方式存储防止数据刷新消逝
                                                                                                                                                           * @author like
                                                                                                                                                           */


/**
 * 处理根部件
 */
var cache = exports.cache = new Map();
/**
 * 根据传入的信息处理变化的data缓存, 单例方便观测对象变化
 */
var changeData = {};

var Pool = exports.Pool = function Pool() {
    _classCallCheck(this, Pool);

    if (!cache.get(_constants.vmKey) && typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }
    cache.set(_constants.dataKey, changeData);
};

function install(Vue, option) {
    if (cache.get(_constants.vmKey) && cache.get(_constants.vmKey) === Vue) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[RxVuex] already installed. Vue.use(RxVuex) should be called only once.');
        }
        return;
    }
    cache.set(_constants.vmKey, Vue);
}