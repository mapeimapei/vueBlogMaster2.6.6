// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import "babel-polyfill"
import ut from '@/constants/utils'
Vue.prototype.$ut = ut;
import VueBus from '@/constants/vue-bus'
import store from '@/store'
import router from '@/router'
import axios from '@/axios'
Vue.prototype.$axios = axios
import http from '@/axios/http'
Vue.prototype.$http = http
import api from '@/axios/api'
Vue.prototype.$api = api
import ElementUI from 'element-ui'
import moment from 'moment'
Vue.prototype.$moment = moment
import $ from 'jquery'
import '@/assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
const Base64 = require('js-base64').Base64
if(!!ut.dev){
  require('@/constants/mock.js')
}
Vue.use(VueBus);
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
