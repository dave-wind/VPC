/**
 * Created by chenmingming on 2017/6/17.
 */
import axios from 'axios';
import NProgress from 'nprogress';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.withCredentials = true;

// 添加一个请求拦截器
axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
}, (error) => {
  console.log('');
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use((response) => {
  // Do something with response data
  NProgress.done();
  return response;
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});
export default axios;
