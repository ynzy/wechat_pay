import axios from 'axios'
import router from './router'

//请求拦截
axios.interceptors.request.use(config => {
  //判断本地是否有token
  // if (localStorage.eleToken) {
  //     //设置统一的请求头
  //     config.headers.Authorization = localStorage.eleToken
  // }
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
  //结束加载动画
  return response
}, error => {
  //错误提醒

  //获取错误状态码
  const { status } = error.response;
  if (status == 401) {
    //清除token
    localStorage.removeItem('eleToken')

    // 页面跳转
    router.push('/login')
  }
  return Promise.reject(error)
})



export default axios