/**
 *  公共装饰器
 *  @author like
 */
import { Pool, cache } from '../subject/store.pool'
import { dataKey } from '../constants'
export class Observer {

    subscribe(fn) {
        fn(cache.get(dataKey))
    }
}

export class Observable {

}