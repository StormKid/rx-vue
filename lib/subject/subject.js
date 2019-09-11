/**
 * 注册监听
 * @author like
 */
import { cache } from '../store.pool'
import { vmKey, dataKey } from '../constants'
const observers = []
const vm = cache.get(vmKey)
const changeData = cache.get(dataKey)
export class Subject {




}