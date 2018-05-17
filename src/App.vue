<template>
  <div id="app">
    <router-view @login="login" @logout="logout"></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import fullPath from './router/fullPath';

  export default {
    name: 'App',
    data() {
      return {};
    },
    mounted() {
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
        this.$store.dispatch('GET_USER_INFO', () => {
          this.signin(() => {
            this.$router.push({path: newPath || '/'});
          });
        });
      },
      signin(cb) {
        const menus = this.getAllowRoute(fullPath, this.userInfo.permis);
        // 后端规定 返回权限为 空数组 递归完成 menus 依旧不匹配 直接 403
        if (Array.isArray(menus) && menus.length === 0) {
          this.$router.push({path: '/403'});
          return false;
        }
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
          // 有children 的
          if (Array.isArray(route.children)) {
            route.children = this.getAllowRoute(route.children, userRoutes);
            if (route.children.length > 0) {
              arr.push(route);
            }
          } else {
            if (userRoutes.indexOf(route.meta.permission[0]) > -1) {
              arr.push(route);
            }
          }
        });
        return arr;
      },
      logout() {
      },
    },
  };
</script>

<style type="text/scss" lang="scss">
  @import "../static/css/main.css";
</style>
