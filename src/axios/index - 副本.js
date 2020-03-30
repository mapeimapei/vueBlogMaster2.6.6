import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'


// axios 配置
axios.defaults.timeout = 50000
axios.defaults.baseURL = 'https://api.github.com'
//axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT)

          // // 只有在当前路由不是登录页面才跳转
          // router.currentRoute.path !== 'login' &&
          //   router.replace({
          //     path: 'login',
          //     query: { redirect: router.currentRoute.path },
          //   })
      }
    }

    return Promise.reject(error.response.data)
  },
)

export default axios
