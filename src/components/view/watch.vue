<template>
  <div>
    <h3>Vue 高级用法  (案列：查看天气)</h3>
    <h5>免费天气接口 不支持频繁调用</h5>
    <el-row>
      <el-col :span="6">
        <el-input v-model="cityVal" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left: 10px;">
        <!--无需input 引入 详情看 globar.js-->
        <BaseButton type="info" txt="查看" @click="check('hello world')"></BaseButton>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px;">
      <el-col :span="12" v-if="data">
        <div>城市：{{city}}</div>
        <div>温度：{{data.wendu}} ℃</div>
      </el-col>
      <el-col v-else>
        {{msg}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/weather';

export default {
  name: 'watch',
  data() {
    return {
      cityVal: '',
      data: null,
      city: '',
      msg: '',
    };
  },
  methods: {
    async getWeather() {
      // hack
      if (!this.cityVal || !/[\u4e00-\u9fa5]/.test(this.cityVal)) {
        this.msg = '';
        this.data = null;
        return;
      }
      const res = await api.getWeather(this.cityVal);
      if (!res) {
        return;
      }
      const { city, data } = res;
      this.city = city;
      this.data = data;
      this.msg = '未搜索到相关信息';
    },
    check(msg) {
      this.$notify.info(msg);
    },
  },
  watch: {
    cityVal: {
      handler: 'getWeather',
      immediate: true, // 在生命周期内，将立即以表达式的当前值触发回调
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
