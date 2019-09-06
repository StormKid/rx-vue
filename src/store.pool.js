/**
 * 采取多种方式存储防止数据刷新消逝
 * @author like
 */

/**
 * 处理根部件
 */
export const cache = new Map()
let vm
    /**
     * 根据传入的信息变化的data
     */
const changeData = {}
export class Pool {

}


export function install(Vue, option) {
    if (vm && vm === Vue) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(
                '[RxVuex] already installed. Vue.use(RxVuex) should be called only once.'
            )
        }
        return
    }
    vm = Vue
}