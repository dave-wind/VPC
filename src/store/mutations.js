/** bad js:
 *  There is only a single module export and it's a named export.
 *  export const foo = 'foo';
 */
const SET_USER_INFO = (state, v) => {
  state.userinfo = {...v};
};

export default {
  SET_USER_INFO,
};
