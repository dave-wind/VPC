<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu">
      <div
        v-for="(item,index) in columns"
        :key="index">
        <div v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item
              v-for="(jtem,j) in item.subs"
              :index="jtem.index"
              :key="j">{{jtem.title}}
            </el-menu-item>
          </el-submenu>
        </div>
        <!--俩部分 无子集的-->
        <el-menu-item :index="item.index" v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {
            icon: 'el-icon-message',
            index: '1',
            title: '导航一',
            subs: [
              {
                index: 'form',
                title: '页面一',
              },
              {
                index: 'editor',
                title: '页面二',
              },
            ],
          },
          {
            icon: 'el-icon-tickets',
            index: '2',
            title: '导航二',
          },
        ],
      };
    },
    computed: {
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
