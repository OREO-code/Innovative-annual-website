import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL = 'http://81.70.56.45:8082'
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
