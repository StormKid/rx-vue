import { vmKey } from './constants'
/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */

export default class Store {
  init (vue) {
    this.vue = vue
  }

  /**
     * create cache
     * 创建缓存
     */
  createCache () {
    if (this.vue.cache) {
      this.cache = this.vue.cache
    } else {
      this.cache = new Map()
      this.vue.prototype.cache = this.cache
    }
  }

  /**
     * save value
     * 储存value
     */
  save (key, value) {
    if (this.vue.cache) {
      this.vue.cache.set(key, value)
    } else {
      this.cache.set(key, value)
      this.vue.prototype.cache = this.cache
    }
  }

  /**
     * find one value
     * 获取某个值
     */
  getValue (key) {
    if (this.vue.cache) {
      return this.vue.cache.get(key)
    } else {
      return this.cache.get(key)
    }
  }

  /**
     * delete one value
     * 删除某个值
     */
  remove (key) {
    if (this.vue.cache) {
      this.vue.cache.delete(key)
    } else {
      this.cache.delete(key)
      this.vue.prototype.cache = this.cache
    }
  }

  /**
     * clean this.cache
     * 清理缓存
     */
  clear () {
    this.cache.clear()
    if (this.vue) {
      this.cache.set(vmKey, this.vue)
      this.vue.prototype.cache = this.cache
    } else {
      console.error(
        'no use RxVuex'
      )
    }
  }

  toJson () {
    if (this.vue.cache) {
      return this.vue.cache.toJSON()
    } else {
      return this.cache.toJSON()
    }
  }
}
