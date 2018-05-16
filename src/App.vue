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
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo',
      }),
    },
    methods: {
      signin() {
        console.log('signed');
      },
      async login() {
        await this.$store.dispatch('GET_USER_INFO');
        await this.signin();
      },
      logout() {
      },
    },
  };
</script>

<style type="text/scss" lang="scss">
  @import "../static/css/main.css";
</style>
