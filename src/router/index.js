import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const baseRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/common/Login.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/view/404.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/view/403.vue'),
  },
];

const router = new Router({
  mode: 'history',
  routes: baseRoute,
});

router.beforeEach((to, from, next) => {
  const routeName = to.name;
  window.document.title = to.name ? routeName : 'VPC';
  next();
});
export default router;

