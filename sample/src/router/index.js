import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inner from '@/components/Inner'
import Other from '@/components/other'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/inner',
            name: 'inner',
            component: Inner
        },
        {
            path: '/other',
            name: 'other',
            component: Other
        }
    ]
})