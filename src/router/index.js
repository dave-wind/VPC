import Router from 'vue-router';
import Vue from 'vue';
import Home from '@/components/common/Home';
import Index from '@/components/view/index';
Vue.use(Router);

const baseRoute = [
  {
    path: '/',
    name: '首页',
    component: Home,
    hidden: true,
    children: [
      {
        path: '/index',
        component: Index,
        meta: {permit: true},
      },
    ],
  },
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
  // github travis 自动部署 路由会刷404
  // mode: 'history',
  routes: baseRoute,
});

router.beforeEach((to, from, next) => {
  const routeName = to.name;
  window.document.title = to.name ? routeName : 'VPC';
  next();
});
export default router;

