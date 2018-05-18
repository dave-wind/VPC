/**
 * Created by dave on 2018/5/15.
 */

import request from './request';
const api = {
  getMock: () => request.get('/mock/demo'),
  getLogin: (para, cb) => request.post('/mock/login', para).then(cb),
  getUser: (cb) => request.get('/mock/sign').then(cb),
};
export default api;

