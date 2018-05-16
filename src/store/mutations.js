/** bad js:
 *  There is only a single module export and it's a named export.
 *  export const foo = 'foo';
 */
const SET_DEMO = (state, v) => {
  state.demo = v;
};
const SET_USER_INFO = (state, v) => {
  state.userInfo = {...v};
};

export default {
  SET_DEMO,
  SET_USER_INFO,
};
