/**
 * 注册监听
 * @author like
 */
import { cache } from '../store.pool'
import { vmKey, dataKey } from '../constants'

const vm = cache.get(vmKey)
let singleSubject = null
export class Subject {
    /**
     * for route easy post
     * 用来处理路由的传输数据
     */
    routeKey = null
    constructor() {
        if (singleSubject == null) {
            singleSubject = new Subject()
        }
        initSingle()
    }
    initSingle() {
        if (singleSubject == null) {
            return
        }

        /**
         * subscribe router
         * 注册路由
         */
        singleSubject.prototype.subscribe = function subscribe(vue) {
            routeKey = vue.$route.name
            const changeData = {
                routeKey: routeKey
            }
            cache.set(dataKey, changeData)
        }

        /**
         * save value
         * 储存value
         */
        singleSubject.prototype.next = function next(key, value) {
            cache.set(key, value)
        }

        /**
         * clean cache
         * 清理缓存
         */
        singleSubject.prototype.clear = function clear() {
            cache.clear()
            cache.set(vmKey, vm)
        }

        /**
         * delete one value
         * 删除某个值
         */
        singleSubject.prototype.remove = function remove(key) {
            cache.delete(key)
        }

        /**
         * find one value
         * 获取某个值
         */
        singleSubject.prototype.getValue = function getValue(key) {
            cache.get(key)
        }

        /**
         * to test Api
         * 供给测试API
         */
        singleSubject.prototype.getJson = function getJson() {
            return cache.toJSON()
        }
    }
}

const subject = singleSubject

export default {
    subject
}