<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             :default-active="$route.path"
             unique-opened router>
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
        <!--&lt;!&ndash;无子集的 结构&ndash;&gt;-->
        <!--<el-menu-item :index="item.path" v-else>-->
          <!--<i :class="item.icon"></i>-->
          <!--<span slot="title">{{item.title}}</span>-->
        <!--</el-menu-item>-->
      </div>
    </el-menu>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
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
