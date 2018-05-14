/**
 * Created by dave on 2018/5/14.
 */

const fullPath = [
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
];

export default fullPath;

