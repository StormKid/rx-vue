/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */

/**
 * 处理根部件
 */
const cache = new Map()
let rxVue

export class Pool {

}

export function putCache (key, value) {
  cache.set(key, value)
}

export function install (Vue, option) {
  if (rxVue && rxVue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[rxvuex] already installed. Vue.use(RxVuex) should be called only once.'
      )
    }
    return
  }
  rxVue = Vue
}
