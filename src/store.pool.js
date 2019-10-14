import { vmKey } from './constants'
import VNode from 'vue'
import VNodeDirective from 'vue'
/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */

export default class Store extends VNode {
  constructor (vue) {
    super()
    this.vue = vue
  }

  /**
     * create cache
     * 创建缓存
     */
  createCache () {
    this.data.keepAlive = true
    this.componentInstance = this.vue
    if (this.data) {
      this.cache = this.data.directives[0]
    } else {
      this.cache = new Map()
      const direct = new VNodeDirective()
      direct.value = this.cache
      this.data.directives.push(direct)
    }
  }

  /**
     * save value
     * 储存value
     */
  save (key, value) {
    this.cache.set(key, value)
    this.data.directives[0] = this.cache
  }

  /**
     * find one value
     * 获取某个值
     */
  getValue (key) {
    if (this.data.directives[0]) {
      return this.data.directives[0].get(key)
    } else {
      return this.cache.get(key)
    }
  }

  /**
     * delete one value
     * 删除某个值
     */
  remove (key) {
    if (this.data.directives[0]) {
      this.data.directives[0].delete(key)
    } else {
      this.cache.delete(key)
      this.data.directives[0] = this.cache
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
      this.data.directives[0] = this.cache
    } else {
      console.error(
        'no use RxVuex'
      )
    }
  }
}
