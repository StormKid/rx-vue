/**
 * 注册监听
 * @author like
 */
import { dataKey } from '../constants'
export default class Subject {
    /**
     * for route easy post
     * 用来处理路由的传输数据
     */
    constructor(store, option) {
            this.store = store
            this.isAsync = option.isAsync
        }
        /**
         * subscribe router
         * 注册路由
         */
    subscribe(vue) {
        this.vm = vue
        if (vue.subject) {
            this.subject = vue.subject
        }
        const routeKey = vue.$route.name
        this.changeData = {
            routeKey
        }
        this.store.init(vue)
    }

    /**
     * save value
     * 储存value
     */
    next(key, value) {
        this.store.save(key, value)

    }
}