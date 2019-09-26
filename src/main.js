import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

//将axios挂载在Vue扩展上
Vue.prototype.$http=axios
//在其他地方使用只需使用 this.$http来代替axios;
//配置baseUrl
axios.defaults.baseURL = '/api'

Vue.use(VueAxios,axios);
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})