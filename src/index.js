/**
 * 初始化存储对象
 * @author like
 */
import Observer from './observe/observer'
import Subject from './subject/subject'
import Store from './store.pool'
import { vmKey } from './constants'
/**
 * 处理根部件
 */
const RxVuex = {}

RxVuex.install = function install (Vue, options) {
  const store = new Store(Vue)
  store.createCache()
  if (store.getValue(vmKey) && store.getValue(vmKey) === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[RxVuex] already installed. Vue.use(RxVuex) should be called only once.'
      )
    }
    return
  }
  const subject = new Subject(store)
  const observer = new Observer(store)
  const rxvuex = {
    subject,
    observer,
    store
  }
  Vue.prototype.RxVuex = rxvuex
  store.save(vmKey, Vue)
}

export default RxVuex
