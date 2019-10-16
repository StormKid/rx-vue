/**
 *  观察者
 *  @author like
 */
export default class Observer {
  constructor (store) {
    this.store = store
  }

  next (value) {
    const routeKey = this.store.vue.$route.name
    this.store.save(routeKey, value)
  }

  close () {
    const routeKey = this.store.vue.$route.name
    this.store.remove(routeKey)
  }

  complete () {
    const routeKey = this.store.vue.$route.name
    const result = this.store.getValue(routeKey)
    return result
  }
}
