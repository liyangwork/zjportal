import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/',
            name: 'Login',
            component: Login
        },
    ]
})