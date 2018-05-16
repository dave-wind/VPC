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
      async login() {
        await this.$store.dispatch('GET_USER_INFO');
        await this.signin();
      },
      signin() {
        const menus = this.getAllowRoute(this.userInfo.permis);
        this.$router.addRoutes(menus.concat([{
          path: '*',
          redirect: '/404',
        }]));
      },
      getAllowRoute(userRoutes) {
        if (!userRoutes) {
          console.warn('user permission is wrong');
          return false;
        }
        const arr = [];
        // 最高权限
        if (userRoutes.indexOf('*') > -1) {
          arr.push(fullPath);
          return arr;
        }
        fullPath.forEach((route) => {
          if (Array.isArray(route.children) && route.children.length > 0) {
            route.children.forEach((child) => {
              if (child.meta.performance.indexOf(userRoutes) > -1) {
                arr.push(route);
              }
            });
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
