/**
 * Created by dave on 2018/5/16.
 */
import api from '@/api/common';

export default {
  GET_USER_INFO: ({commit}, cb) => {
    api.getUser((res) => {
      commit('SET_USER_INFO', res);
      // can not write : typeof cb === 'function' && cb();
      // Because Expected an assignment or function call and instead saw an expression
      if (typeof cb === 'function') {
        cb();
      }
    });
  },
};
