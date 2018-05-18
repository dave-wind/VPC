/**
 * Created by dave on 2018/5/16.
 */
import api from '@/api/common';

/**
 * can not write : typeof cb === 'function' && cb();
 * Because Expected an assignment or function call and instead saw an expression
 * call back you can use cb ,but async is the best method for you example: GET_USER_INFO in APP.vue
 */
const GET_DEMO = async ({commit}, cb) => {
  try {
    const res = await api.getMock();
    commit('SET_DEMO', res.data.msg);
    if (typeof cb === 'function') {
      cb();
    }
  } catch (error) {
    console.log(error);
  }
};
export default {
  GET_DEMO,
  GET_USER_INFO: ({commit}, cb) => {
    api.getUser((res) => {
      commit('SET_USER_INFO', res.userInfo);
      if (typeof cb === 'function') {
        cb();
      }
    });
  },
  CLEAR_STORE: ({commit}, cb) => {
    commit('CLEAR_STORE');
    if (typeof cb === 'function') {
      cb();
    }
  },
};
