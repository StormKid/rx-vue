/**
 * 初始化存储对象
 * @author like
 */
import Subject from './subject/subject'
import Store from './store.pool'
/**
 * 处理根部件
 */
const RxVuex = {}
/**
     * options:
     * {
     *    // TODO 二级缓存与三级缓存
     *    // TODO worker浏览器同步【针对大文件数据同步加载】
     *
     * }
     */
RxVuex.install = function install (Vue, options) {
  const store = new Store()
  store.init(Vue)
  store.createCache()
  const subject = new Subject(store, options)
  const rxvuex = subject
  Vue.prototype.RxVuex = rxvuex
}

export default RxVuex
