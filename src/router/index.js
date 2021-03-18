import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由模块
import centerRouter from '@/router/routes/center'
import cinemaRouter from "@/router/routes/cinema";
import filmsRouter from "@/router/routes/films";
Vue.use(VueRouter)

const routes = [
  filmsRouter,
  cinemaRouter,
  centerRouter,
  {
    path: '/',
    redirect:'/films'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
  base: '/v5',
  routes
})

export default router
