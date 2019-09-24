import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/index'
import Home from '@/components/Home'
import Home1 from '@/components/Home1'
import Home2 from '@/components/Home2'
import Home3 from '@/components/Home3'

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
            component: Index,
            children: [
                {path: 'home', component: Home,name: 'Home'},
                {path: 'home1', component: Home1,name: 'Home1'},
                {path: 'home2', component: Home2,name: 'Home2'},
                {path: 'home3', component: Home3,name: 'Home3'},
            ]
        },
        {
            path: '/',
            name: 'Login',
            component: Login
        },
    ]
})