import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/watch',
      component: () => import('@/components/watch.vue'),
    },
    {
      path: '/render',
      component: () => import('@/components/render.vue'),
    },
    {
      path: '/404',
      component: () => import('@/404.vue'),
    },
    {
      path: '*',
      hidden: true,
      redirect: {path: '/404'},
    },
  ],
});
