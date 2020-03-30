import Vue from 'vue'
import routers from './routers'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


// let loginUser =  localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : null
// // 页面刷新时，重新赋值token
// if (!!loginUser) {
//   store.commit("setUser", loginUser)
//   store.commit("setToken", loginUser.token)
// }

// 路由配置
const Routers = [...routers]
const RouterConfig = {
  //使用 HTML5 的 History 路由模式
  //mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
  //console.log("router.to",to)
  window.document.title = to.meta.title;
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
       next()
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router
