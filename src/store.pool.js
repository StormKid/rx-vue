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
      this.cache = this.vue.cache
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
      this.cache = this.vue.cache
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
    if (this.vue.cache) {
      this.vue.cache.clear()
      this.cache = this.vue.cache
    } else {
      this.cache.clear()
      this.vue.prototype.cache = this.cache
    }
  }

  toJson () {
    if (this.vue.cache) {
      return this.initJson(this.vue.cache)
    } else {
      return this.initJson(this.cache)
    }
  }

  toMap (jsonString) {
    const json = JSON.parse(jsonString)
    const map = this.initMap(json)
    if (map) {
      this.vue.prototype.cache = map
      this.cache = this.vue.cache
    }
    return map
  }

  initJson (map) {
    const json = {}
    for (const [key, value] of map) {
      json[key] = value
    }
    return json
  }

  initMap (json) {
    const map = new Map()
    for (const key in json) {
      map.set(key, json[key])
    }
    return map
  }
}
