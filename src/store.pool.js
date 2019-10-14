import { vmKey } from './constants'

/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */

export default class Store {
  constructor (vue) {
    this.vue = vue
  }

  /**
     * create cache
     * 创建缓存
     */
  createCache () {
    if (!window.cache) {
      this.cache = new Map()
      window.cache = this.cache
    } else {
      this.cache = window.cache
    }
  }

  /**
     * save value
     * 储存value
     */
  save (key, value) {
    this.cache.set(key, value)
    window.cache = this.cache
  }

  /**
     * find one value
     * 获取某个值
     */
  getValue (key) {
    if (window.cache) {
      return window.cache.get(key)
    } else {
      return this.cache.get(key)
    }
  }

  /**
     * delete one value
     * 删除某个值
     */
  remove (key) {
    if (window.cache) {
      return window.cache.delete(key)
    } else {
      return this.cache.delete(key)
    }
  }

  /**
     * clean this.cache
     * 清理缓存
     */
  clear () {
    this.cache.clear()
    if (this.vue) { this.cache.set(vmKey, this.vue) } else {
      console.error(
        'function subscribe is not be used'
      )
    }
  }
}
