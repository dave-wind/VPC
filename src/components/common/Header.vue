<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">{{project}}</div>
    <div class="header-right">
      <div class="header-user-con">
        <div class="user-avator">
          <img src="static/img/dave.jpg"></div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name"
                     @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{userInfo.name}} <i class="el-icon-caret-bottom"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import EventBus from '@/bus';

  export default {
    data() {
      return {
        project: 'dave admin',
      };
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo',
      }),
    },
    methods: {
      handleCommand(command) {
        if (command === 'logout') {
          console.log(command);
        }
      },
      logout() {
        this.$confirm('确认退出吗？', '提示', {}).then(() => {
          EventBus.$emit('logOut');
          window.location.reload();
        }).catch(() => {
        });
      },
      collapseChage() {
        this.collapse = !this.collapse;
        EventBus.$emit('collapse', this.collapse);
      },
    },
  };
</script>
<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    background-color: #56bc8a;
  }

  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }

  .header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }

  .header-right {
    float: right;
    padding-right: 50px;
    height: 100%;
  }

  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
  }

  .btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
  }

  .btn-bell, .btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }

  .btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
  }

  .btn-bell .el-icon-bell {
    color: #fff;
  }

  .user-name {
    margin-left: 10px;
  }

  .user-avator {
    display: inline-block;
    margin-left: 20px;
  }

  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
