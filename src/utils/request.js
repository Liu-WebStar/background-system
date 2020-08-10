import axios from 'axios';

const BASE_URI=process.env.VUE_APP_BASE_API;

const request=axios.create({
  // baseURL:'/dev-api',  // 请求路径前缀
  baseURL:BASE_URI,  // 请求路径前缀
  timeout:15000, //请求超时 15000毫秒
})
// 请求拦截器
request.interceptors.request.use(config=>{
  // 请求拦截
  return config;
},error=>{
  // 出现异常
  return Promise.reject(error); // 抛出异常
})

// 响应拦截器
request.interceptors.response.use(response=>{
  // 响应拦截
  return response;
},error=>{
  // 出现异常
  return Promise.reject(error); // 抛出异常
})

export default request; // 导出自定义axios对象