import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由模块
import centerRouter from '@/router/routes/center'
import cinemaRouter from "@/router/routes/cinema";
import filmsRouter from "@/router/routes/films";
import detailRouter from "@/router/routes/detail";
import cityRouter from "@/router/routes/city";
import loginRouter from "@/router/routes/login";
import settingRouter from "@/router/routes/setting"
import VuexRouter from "@/router/routes/vuex";
Vue.use(VueRouter)

const routes = [
  filmsRouter,
  cinemaRouter,
  centerRouter,
  detailRouter,
  cityRouter,
  loginRouter,
  settingRouter,
  VuexRouter,
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
// 路由守卫
router.beforeEach((to, from, next) => {
  let arr = [
    // 存需要登录的页面地址
    "/cinema"
  ]
  if (arr.includes(to.path)) {
    //  返回真则在(需要登录判断)
    if (localStorage.getItem("_token")) {
      next()
    } else {
      next({path:'/login',query:{refer:encodeURI(to.fullPath)}})
    }
  } else {
    // 不在(需要登录)
    next()
  }
})

export default router
