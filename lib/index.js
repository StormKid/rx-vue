'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _observer = require('./observe/observer');

var _subject = require('./subject/subject');

var _store = require('./store.pool');

exports.default = {
  Observer: _observer.Observer,
  Subject: _subject.Subject,
  Pool: _store.Pool
}; /**
    * 初始化存储对象
    * @author like
    */