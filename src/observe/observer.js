/**
 *  观察者
 *  @author like
 */
export default class Observer {
    constructor() {
        this.on = true
    }

    init(store) {
        this.store = store
    }

    next(value, callback) {
        if (this.store.vue.$router && this.on) {
            this.on = false
            this.store.vue.$router.beforeEach((to, from, next) => {
                this.routeKey = to.name
                this.store.save(this.routeKey, value)
                if (callback(value)) { next() }
            })
        }
    }

    close() {
        this.store.remove(this.routeKey)
    }

    complete() {
        return this.store.getValue(this.routeKey)
    }

    toString() {
        const json = this.store.toJson()
        const value = JSON.stringify(json)
        localStorage.setItem(LOCAL_KEY, value)
    }

    fakerMap() {
        const jsonString = localStorage.getItem(LOCAL_KEY)
        return this.store.toMap(jsonString)
    }
}