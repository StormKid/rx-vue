/**
 *  观察者
 *  @author like
 */
export default class Observer {
  constructor () {
    this.on = true
  }

  init (store) {
    this.store = store
  }

  next (value) {
    if (this.store.vue.$router && this.on) {
      this.on = false
      this.store.vue.$router.beforeEach((to, from, next) => {
        this.routeKey = to.name
        this.store.save(this.routeKey, value)
        next()
      })
    }
  }

  close () {
    this.store.remove(this.routeKey)
  }

  complete () {
    const result = this.store.getValue(this.routeKey)
    return result
  }
}
