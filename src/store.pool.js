/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */
import { vmKey } from './constants'
/**
 * 处理根部件
 */
export const cache = new Map()
export default class Pool {
  constructor () {
    if (!cache.get(vmKey) && typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
  }
}

export function install (Vue) {
  if (cache.get(vmKey) && cache.get(vmKey) === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[RxVuex] already installed. Vue.use(RxVuex) should be called only once.'
      )
    }
    return
  }
  cache.set(vmKey, Vue)
}
