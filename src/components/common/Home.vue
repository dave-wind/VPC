<template>
  <div class="wrapper">
    <d-header></d-header>
    <d-sidebar></d-sidebar>
    <div class="content-wrap" :class="{'content-collapse':collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import dHeader from '../common/Header';
  import dSidebar from '../common/SideBar';
  import EventBus from '@/bus';

  export default {
    components: {
      dHeader, dSidebar,
    },
    data() {
      return {
        collapse: false,
      };
    },
    mounted() {
      EventBus.$on('collapse', (val) => {
        this.collapse = val;
      });
    },
  };
</script>
<style>
</style>
