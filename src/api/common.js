/**
 * Created by dave on 2018/5/15.
 */

import request from './request';
const api = {
  getMock: () => request.get('demo'),
  getLogin: (para, cb) => request.post('login', para).then(cb),
  getUser: (cb) => request.get('sign').then(cb),
};
export default api;

