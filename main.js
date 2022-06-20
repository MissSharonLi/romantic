import App from './App'
import Vue from 'vue'
import store from './store'
import './assets/css/index.scss'
import commonUtils from './utils'

Vue.config.productionTip = false
Vue.prototype.$toast = commonUtils.toast
Vue.prototype.$loading = commonUtils.loading
Vue.prototype.$hideLoading = commonUtils.hideLoading

App.mpType = 'app'
const app = new Vue({
  store,
  ...App
})
app.$mount()
