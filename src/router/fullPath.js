/**
 * Created by dave on 2018/5/14.
 */

const fullPath = [
  {
    path: '/',
    name: '高级用法',
    icon: 'el-icon-message',
    component: () => import('@/components/common/Home.vue'),
    children: [
      {
        path: '/watch',
        name: 'vue观察',
        component: () => import('@/components/view/watch.vue'),
        meta: {permission: ['high-watch']},
      },
      {
        path: '/render',
        name: 'render渲染',
        component: () => import('@/components/view/render.vue'),
        meta: {permission: ['high-render']},
      },
    ],
  },
  {
    path: '/',
    name: '权限管理',
    icon: 'el-icon-tickets',
    component: () => import('@/components/common/Home.vue'),
    children: [
      {
        path: '/allocation',
        name: '权限',
        component: () => import('@/components/view/allocation.vue'),
        meta: {permission: ['root-allocation']},
      },
    ],
  },
];

export default fullPath;

