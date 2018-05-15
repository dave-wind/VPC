/**
 * Created by dave on 2018/5/15.
 */

import request from './request';
const api = {
  getLogin: (para) => request.post('login', para),
};
export default api;

