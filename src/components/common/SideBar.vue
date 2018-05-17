<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             unique-opened router
             :default-active="$route.path"
             :collapse="collapse">
      <!--菜单栏 规定都要有子集-->
      <div
        v-for="(item,index) in menus"
        :key="index">
        <!--v-if=item.children-->
        <div v-if=item.children>
          <el-submenu :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item
              v-for="(jtem,j) in item.children"
              :index="jtem.path"
              :key="j">{{jtem.name}}
            </el-menu-item>
          </el-submenu>
        </div>
        <!--无子集的 结构-->
        <!--<el-menu-item :index="item.path" v-else>-->
        <!--<i :class="item.icon"></i>-->
        <!--<span slot="title">{{item.name}}</span>-->
        <!--</el-menu-item>-->
      </div>
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
      onRoutes() {
        return this.$route.path.replace('/', '');
      },
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
