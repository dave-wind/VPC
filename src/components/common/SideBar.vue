<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             unique-opened router
             :default-active="$route.path"
             :collapse="collapse">
      <!--菜单栏 规定都要有子集-->
      <template>
        <div v-for="(item,index) in list"
             :key="index">
          <el-submenu v-if=item.children :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i><span slot-scope="title">{{item.name}}</span>
            </template>
            <el-menu-item
              v-for="(jtem,j) in item.children"
              :index="jtem.path"
              :key="j">{{jtem.name}}
            </el-menu-item>
          </el-submenu>
          <!--无子集的 结构-->
          <!--<el-menu-item :index="item.path" v-else>-->
          <!--<i :class="item.icon"></i>-->
          <!--<span slot="title">{{item.name}}</span>-->
          <!--</el-menu-item>-->
        </div>
      </template>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message">
          </i><span slot="title">导航</span>
        </template>
        <el-menu-item index="/watch">
          内容1
        </el-menu-item>
        <el-menu-item index="/render">
          内容2
        </el-menu-item>
      </el-submenu>
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
        list: [],
      };
    },
    computed: {
      ...mapGetters({
        menus: 'getMenus',
      }),
    },
    mounted() {
      this.$nextTick(() => {
        this.list = this.menus;
      });
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
