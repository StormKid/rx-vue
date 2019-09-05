/**
 *  公共装饰器
 *  @author like
 */
import { Pool } from '../subject/store.pool'

export class Observer {

    data = {}

    subscribe(fn) {
        fn(this.data)
    }
}