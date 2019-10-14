/**
 * 注册监听
 * @author like
 */
import { vmKey, dataKey } from '../constants'
export default class Subject {
    /**
     * for route easy post
     * 用来处理路由的传输数据
     */
    constructor(cache) {
            this.cache = cache
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
        const changeData = {
            routeKey
        }
        this.cache.set(dataKey, changeData)
    }

    /**
     * save value
     * 储存value
     */
    next(key, value) {
        this.cache.set(key, value)
    }

    /**
     * clean this.cache
     * 清理缓存
     */
    clear() {
        this.cache.clear()
        if (this.vm) { this.cache.set(vmKey, this.vm) } else {
            console.error(
                'function subscribe is not be used'
            )
        }
    }

    /**
     * delete one value
     * 删除某个值
     */
    remove(key) {
        this.cache.delete(key)
    }

    /**
     * find one value
     * 获取某个值
     */
    getValue(key) {
        this.cache.get(key)
    }

    /**
     * to test Api
     * 供给测试API
     */
    getJson() {
        return this.cache.toJSON()
    }

}