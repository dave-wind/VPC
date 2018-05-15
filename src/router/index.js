import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {path: '/watch'},
    },
    {
      path: '/login',
      component: () => import('@/components/common/Login.vue'),
    },
    {
      path: '/',
      component: () => import('@/components/common/Home.vue'),
      children: [
        {
          path: '/watch',
          component: () => import('@/components/view/watch.vue'),
        },
        {
          path: '/render',
          component: () => import('@/components/view/render.vue'),
        },
      ],
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
