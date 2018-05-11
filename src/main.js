// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import './assets/theme-dave/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './globar';

NProgress.configure({showSpinner: false});

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
