/**
 * Created by dave on 2018/5/6.
 */
import Vue from 'vue';
import Fly from 'flyio';
import NProgress from 'nprogress';
import {Notification} from 'element-ui';
const request = new Fly();
// 添加全局配置、拦截器等
Vue.prototype.$http = request;

// 非login页面登录 页面刷新 拦截 设置 Author
request.config.headers['Authorization'] = localStorage.getItem('token');

request.config.baseURL = process.env.VPC_API;
// 请求拦截器
request.interceptors.request.use((response) => {
  // 给所有请求添加自定义header
  // request.headers["X-Tag"] = "flyio";
  NProgress.start();
  return response;
});

// 响应拦截器
request.interceptors.response.use((response, promise) => {
  if (response.data.msg) {
    Notification.success(response.data.msg);
  }
  NProgress.done();
  return promise.resolve(response.data);
}, (err, promise) => {
  if (err.response.status === 401) {
    window.location.href = '/login';
  } else {
    Notification.error({title: err.status, message: err.response.data.msg || err.message});
  }
  NProgress.done();
  return promise.resolve();
});
export default request;
