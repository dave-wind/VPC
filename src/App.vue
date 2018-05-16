<template>
  <div id="app">
    <router-view @login="login" @logout="logout"></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'App',
    data() {
      return {};
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo',
      }),
    },
    methods: {
      login(newPath) {
        console.log(233);
        this.$store.dispatch('GET_USER_INFO', () => {
          // 重定向
          console.log(newPath);
          console.log(this.userInfo);
        });
      },
      logout() {
      },
    },
  };
</script>

<style type="text/scss" lang="scss">
  @import "../static/css/main.css";
</style>
