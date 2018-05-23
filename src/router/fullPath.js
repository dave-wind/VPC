/**
 * Created by dave on 2018/5/14.
 */
import Home from '@/components/common/Home';

const fullPath = [
  {
    path: '/',
    name: '高级用法',
    icon: 'el-icon-message',
    component: Home,
    children: [
      {
        path: '/watch',
        meta: {permission: 'high-watch'},
        component: () => import('@/components/view/watch.vue'),
        name: 'vue观察',
      },
      {
        path: '/render',
        meta: {permission: 'high-render'},
        component: () => import('@/components/view/render.vue'),
        name: 'render渲染',
      },
    ],
  },
  {
    path: '/',
    name: '权限管理',
    icon: 'el-icon-tickets',
    component: Home,
    children: [
      {
        path: '/allocation',
        meta: {permission: 'root-allocation'},
        component: () => import('@/components/view/allocation.vue'),
        name: '权限',
      },
    ],
  },
];

export default fullPath;

