<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             unique-opened router
             :default-active="$route.path"
             :collapse="collapse">
      <!--菜单栏 规定都要有子集 :index 必填index is string-->
      <template v-for="(item,index) in menus">
        <template v-if=item.children>
          <el-submenu :index="index+''" :key="index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item
              v-for="(jtem,j) in item.children"
              :index="jtem.path"
              :key="j">{{jtem.name}}
            </el-menu-item>
          </el-submenu>
        </template>
        <!--无子集结构 此项目并不需要-->
        <template v-else>
          <el-menu-item :index="index+''" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import EventBus from '@/bus';

  export default {
    data() {
      return {
        collapse: false,
      };
    },
    computed: {
      ...mapGetters({
        menus: 'getMenus',
      }),
    },
    mounted() {
      EventBus.$on('collapse', (val) => {
        this.collapse = val;
      });
    },
  };
</script>
<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
