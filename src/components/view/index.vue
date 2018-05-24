<template>
  <div>
    <el-col :span="6">
      <!--无需import 引入 详情看 globar.js-->
      <BaseButton type="success"
                  :txt="text"
                  :icon="icon"
                  round="true"
                  @click="check('welcome to VPC')">
      </BaseButton>
    </el-col>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        icon: 'el-icon-check',
        text: '首页',
      };
    },
    methods: {
      check(msg) {
        this.$notify.info(msg);
      },
    },
  };
</script>
<style>
</style>
