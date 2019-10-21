/**
 * 介入者
 * @author like
 */

import Observer from '../observe/observer'
export default class Subject {
  /**
     * for easy post
     * 用来管理传输数据
     */
  constructor (store, option) {
    this.store = store
    this.observer = new Observer()
    this.observer.init(store)
  }
  /**
         * subscribe
         * 注册
         */
  subscribe (vue) {
    this.store.init(vue)
    this.observer.init(this.store)
    return this
  }

  post (key, value) {
    let data = this.observer.complete()
    if (!data) {
      data = new Map()
    }
    data.set(key, value)
    this.observer.next(data)
  }

  on () {
    return this.observer.complete()
  }
}
