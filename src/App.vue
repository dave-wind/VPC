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
        const menus = this.getAllowRoute(fullPath, this.userInfo.permis);
        console.log(menus);
        this.$router.addRoutes(menus.concat([{
          path: '*',
          redirect: '/404',
        }]));
      },
      getAllowRoute(allRoutes, userRoutes) {
        if (!userRoutes) {
          console.warn('user permission is wrong');
          return false;
        }
        const arr = [];
        if (userRoutes.length === 0) {
          return arr;
        }
        allRoutes.forEach((item) => {
          const route = item;
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
          }
          // 匹配到的
          if (userRoutes.indexOf(route.meta.permission) > -1) {
            arr.push(route);
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
