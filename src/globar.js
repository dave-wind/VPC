/**
 * Created by dave on 2018/5/7.
 */

/**
 *  一劳永逸的组件注册
 */

import Vue from 'vue';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// 找到components/ui文件夹下以.vue命名的文件
const requireComponent = require.context('./components/ui', false, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  // 因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  const componentName = capitalizeFirstLetter(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''));
  Vue.component(componentName, componentConfig.default || componentConfig);
});
