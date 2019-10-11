/**
 * 注册监听
 * @author like
 */
import { cache } from '../store.pool'
import { vmKey, dataKey } from '../constants'

const vm = cache.get(vmKey)

export default class Subject {
    subject
    /**
     * for route easy post
     * 用来处理路由的传输数据
     */
    constructor() {
        if (this.subject) {
            this.initSingle()
        } else {
            this.subject = new Subject()
        }
    }
    initSingle() {
        /**
         * subscribe router
         * 注册路由
         */
        this.subject.prototype.subscribe = function subscribe(vue) {
            if (vue.subject) {
                this.subject = vue.subject
            }
            const routeKey = vue.$route.name
            const changeData = {
                routeKey
            }
            cache.set(dataKey, changeData)
            vue.prototype.subject = this.subject // 双向绑定
        }

        /**
         * save value
         * 储存value
         */
        this.subject.prototype.next = function next(key, value) {
            cache.set(key, value)
        }

        /**
         * clean cache
         * 清理缓存
         */
        this.subject.prototype.clear = function clear() {
            cache.clear()
            cache.set(vmKey, vm)
        }

        /**
         * delete one value
         * 删除某个值
         */
        this.subject.prototype.remove = function remove(key) {
            cache.delete(key)
        }

        /**
         * find one value
         * 获取某个值
         */
        this.subject.prototype.getValue = function getValue(key) {
            cache.get(key)
        }

        /**
         * to test Api
         * 供给测试API
         */
        this.subject.prototype.getJson = function getJson() {
            return cache.toJSON()
        }
    }
}