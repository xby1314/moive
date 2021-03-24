import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// axios 体验
// import axios from 'axios'
//  配置域名
// axios.defaults.baseURL="https://m.maizuo.com"
// axios.interceptors.request.use(function (config) {
//   返回设置
//   config.headers = {
//     "X-Client-Info": '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "1602854376219502893596675", "bc": "310100" }',
//     "X-Host": 'mall.film-ticket.film.list'
//   }
//   return config
// }, function (err) {
//   // 错误处理
// })
// axios.get("gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9207238")
// 使用懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading:"data:image/png;base64,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"
})
Vue.prototype.eventBus= new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
