/**
 * 注册监听
 * @author like
 */
import { cache } from '../store.pool'
import { vmKey, dataKey } from '../constants'

const vm = cache.get(vmKey)
const changeData = cache.get(dataKey)
export class Subject {

    /**
     * for route easy post
     * 用来处理路由的传输数据
     */
    routeKey = null
    singleSubject = null
    constructor() {
        if (this.singleSubject == null) {
            this.singleSubject = new Subject()
        }
        this.initSingle()

    }
    initSingle() {
        const self = this
        if (self.singleSubject == null) {
            return
        }

        /**
         * subscribe router
         * 注册路由
         */
        self.singleSubject.prototype.subscribe = function subscribe(vue) {
            self.routeKey = vue.$route.name
            changeData = {
                routeKey: self.routeKey
            }
        }

        /**
         * save value
         * 储存value
         */
        self.singleSubject.prototype.next = function next(key, value) {
            cache.set(key, value)
        }

        /**
         * clean cache
         * 清理缓存
         */
        self.singleSubject.prototype.clear = function clear() {
            cache.clear()
            cache.set(vmKey, vm)
        }


        /**
         * delete one value
         * 删除某个值
         */
        self.singleSubject.prototype.remove = function remove(key) {
            cache.delete(key)
        }

        /**
         * find one value
         * 获取某个值
         */
        self.singleSubject.prototype.getValue = function getValue(key) {
            cache.get(key)
        }

        /**
         * to test Api
         * 供给测试API
         */
        self.singleSubject.prototype.getJson = function getJson() {
            return cache.toJSON()
        }

    }




}