/**
 * 初始化存储对象
 * @author like
 */
import Observer from './observe/observer'
import Subject from './subject/subject'
import Pool from './store.pool'
import { vmKey } from './constants'
/**
 * 处理根部件
 */
const RxVuex = {}

RxVuex.install = function install (Vue, options) {
  const cache = new Map()
  if (cache.get(vmKey) && cache.get(vmKey) === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[RxVuex] already installed. Vue.use(RxVuex) should be called only once.'
      )
    }
    return
  }
  const subject = new Subject(cache)
  const observer = new Observer(cache)
  const pool = new Pool(cache)
  const rxvuex = {
    subject,
    observer,
    pool
  }
  Vue.prototype.RxVuex = rxvuex
  cache.set(vmKey, Vue)
}

export default RxVuex
