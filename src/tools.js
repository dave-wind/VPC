/**
 * Created by dave on 2018/5/15.
 */
const install = (Vue) => {
  // airbnb-base can't use arguments directly, you know ?
  const Dave = Vue;
  Dave.prototype.disabledDate = {
    disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7;
    },
  };
};

export default {
  install,
};

