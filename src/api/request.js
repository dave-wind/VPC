/**
 * Created by dave on 2018/5/6.
 */
import Fly from 'flyio';
import NProgress from 'nprogress';
import { Notification } from 'element-ui';
const request = new Fly();

// 请求拦截器
request.interceptors.request.use((response) => {
  const res = response;
  // 给所有请求添加自定义header
  // request.headers["X-Tag"] = "flyio";
  res.baseURL = 'https://www.easy-mock.com/mock/5af52ce18efab658654cbbfa/dave/';
  res.url += request.baseURL;
  NProgress.start();
  return response;
});

// 响应拦截器
request.interceptors.response.use((response, promise) => {
  Notification.success(response.data.msg);
  NProgress.done();
  return promise.resolve(response.data);
}, (err, promise) => {
  Notification.error(err.response.data.msg);
  NProgress.done();
  return promise.resolve();
});
export default request;
