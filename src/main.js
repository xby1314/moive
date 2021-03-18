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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
