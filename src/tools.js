/**
 * Created by dave on 2018/5/15.
 */

const install = (Vue) => {
  /**
   * 全局变量
   */
  Vue.prototype.flag = false;
  // airbnb-base can't use arguments directly, but I close this you know ?
  /**
   * 全局函数
   */
  Vue.prototype.disabledDate = {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    },
  };
  Vue.prototype.verifyPhone = (value) => {
    return /^1[3-9][0-9]{9}$/.test(value);
  };
};

export default {
  install,
};

