import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

import './assets/css/base.css'
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
axios.interceptors.request.use(function (request) {
  //loading、请求地址替换、修改
  return request;
});
// { code:0,data:'',message:'' }
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.code != 0) {
    alert(res.message);
  }
  return response;
}, function (error) {
  return Promise.reject(error);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
