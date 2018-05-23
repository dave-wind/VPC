// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import './globar';
import Tools from './tools';
import NProgress from 'nprogress';
import './assets/theme-dave/index.css';


NProgress.configure({showSpinner: false});

Vue.use(Tools);
Vue.config.productionTip = false;

Vue.prototype.$store = store;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
