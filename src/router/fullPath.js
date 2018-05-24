/**
 * Created by dave on 2018/5/14.
 */
import Home from '@/components/common/Home';
import Index from '@/components/view/index';
import Watch from '@/components/view/watch';
import Render from '@/components/view/render';
import Allocation from '@/components/view/allocation';

const fullPath = [
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
    path: '/',
    name: '高级用法',
    icon: 'el-icon-message',
    component: Home,
    children: [
      {
        path: '/watch',
        component: Watch,
        meta: {permission: 'high-watch'},
        name: 'vue观察',
      },
      {
        path: '/render',
        name: 'render渲染',
        component: Render,
        meta: {permission: 'high-render'},
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
        name: '权限',
        component: Allocation,
        meta: {permission: 'root-allocation'},
      },
    ],
  },
];

export default fullPath;

