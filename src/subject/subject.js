/**
 * 介入者
 * @author like
 */

import Observer from '../observe/observer'
import { LOCAL_KEY } from '../constants'
export default class Subject {
    /**
     * for easy post
     * 用来管理传输数据
     */
    constructor(store, option) {
            this.store = store
            this.observer = new Observer()
            this.observer.init(store)
            this.option = option
        }
        /**
         * subscribe
         * 注册
         */
    subscribe(vue) {
        this.store.init(vue)
        this.observer.init(this.store)
        return this
    }

    post(key, value) {
        this.postWithCallback(key, value, function action() { return true })
    }

    postWithCallback(key, value, callback) {
        let data = this.observer.complete()
        if (this.option && this.option.store === '1') {
            data = this.observer.fakerMap()
        }
        if (!data) {
            data = new Map()
        }
        data.set(key, value)
        this.observer.next(data, callback)
        if (this.option && this.option.store === '1') {
            this.observer.toString()
        }
    }

    on(key) {
        let data = this.observer.complete()
        if (this.option && this.option.store === '1') {
            data = this.observer.fakerMap()
        }
        const result = data.get(key)
        return result
    }


}