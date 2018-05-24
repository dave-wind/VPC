<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view @login="login" @clearData="clearData"></router-view>
    </transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import fullPath from './router/fullPath';
  import request from '@/api/request';

  export default {
    name: 'App',
    created() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push({path: '/login', query: {from: this.$router.currentRoute.path}});
      } else {
        this.$store.dispatch('GET_USER_INFO', this.signin);
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo',
      }),
    },
    methods: {
      login(newPath) {
        this.loading = true;
        this.$store.dispatch('GET_USER_INFO', () => {
          this.loading = false;
          this.signin(() => {
            this.$router.push({path: newPath || '/index'});
          });
        });
      },
      // 获取用户有效 菜单
      signin(cb) {
        // 接口数据返回空数组 直接 403
        if (Array.isArray(this.userInfo.permis) && this.userInfo.permis.length === 0) {
          this.$router.push({path: '/403'});
          return false;
        }
        const menus = this.getAllowRoute(fullPath, this.userInfo.permis);
        this.$router.addRoutes(menus.concat([{
          path: '*',
          redirect: '/404',
        }]));
        this.$store.commit('SET_MENUS', menus);
        if (typeof cb === 'function' && cb) {
          cb();
        }
      },
      getAllowRoute(allRoutes, userRoutes) {
        const arr = [];
        allRoutes.forEach((route) => {
          // 最高权限
          if (userRoutes.indexOf('*') > -1) {
            arr.push(route);
            return false;
          }
          // 第一层结构
          if (Array.isArray(route.children)) {
            route.children = this.getAllowRoute(route.children, userRoutes);
            if (route.children.length > 0) {
              arr.push(route);
            }
          } else {
            // 第二层结构
            if (route.meta.permit || userRoutes.indexOf(route.meta.permission) > -1) {
              arr.push(route);
            }
          }
        });
        return arr;
      },
      // 清除所有数据
      clearData() {
        delete request.config.headers['Authorization'];
        localStorage.removeItem('token');
        this.$store.dispatch('CLEAR_STORE');
      },
    },
  };
</script>

<style type="text/scss" lang="scss">
  @import "../static/css/main.css";
</style>
