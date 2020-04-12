import Vue from 'vue'
import App from './App'
import request from './utils/request.js'
Vue.prototype.request=request
Vue.config.productionTip = false
//定义全局数据，通过Vue的原型实现
Vue.prototype.baseurl="www.baidu.com"
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
