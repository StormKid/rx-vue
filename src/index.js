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
    /**
     * options:
     * {
     *    isAsync : boolean   //是否使用异步（默认false）
     *    // TODO 二级缓存与三级缓存
     * 
     * }
     */
RxVuex.install = function install(Vue, options) {
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
    const subject = new Subject(store, options)
    const observer = new Observer(store, options)
    const rxvuex = {
        subject,
        observer
    }
    Vue.prototype.RxVuex = rxvuex
    store.save(vmKey, Vue)
}

export default RxVuex