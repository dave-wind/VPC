/**
 * Created by dave on 2018/5/14.
 */

const fullPath = [
  {
    path: '/',
    name: '高级用法',
    component: () => import('@/components/common/Home.vue'),
    children: [
      {
        path: '/watch',
        component: () => import('@/components/view/watch.vue'),
        meta: {permission: ['high-watch']},
      },
      {
        path: '/render',
        component: () => import('@/components/view/render.vue'),
        meta: {permission: ['high-render']},
      },
    ],
  },
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/common/Home.vue'),
    children: [
      {
        path: '/allocation',
        component: () => import('@/components/view/allocation.vue'),
        meta: {permission: ['root-allocation']},
      },
    ],
  },
];

export default fullPath;

