// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
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
