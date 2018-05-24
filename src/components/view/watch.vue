<template>
  <div>
    <h3 class="title">Vue 高级用法 (案列：翻译)</h3>
    <el-row>
      <el-col :span="6">
        <el-input v-model="config.q" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left: 100px;">
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px;">
      <el-col :span="12" v-if="English">
        <div>{{English}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Md5 from 'md5';

  const $ = require('jquery');
  export default {
    name: 'watch',
    data() {
      return {
        English: '',
        config: {
          appKey: '3124a8d08c4cb840',
          key: '8KhfwfVSUqZ8HOVoBsb5Lw5Y9flzzYdm',
          salt: (new Date()).getTime(),
          from: 'auto',
          to: 'en',
          q: '',
        },
      };
    },
    methods: {
      getWeather() {
        if (!this.config.q) {
          this.English = '';
          return false;
        }
        const para = {...this.config};
        const str = this.config.appKey + this.config.q + this.config.salt + this.config.key;
        para.sign = Md5(str);
        $.ajax({
          url: 'http://openapi.youdao.com/api',
          type: 'post',
          dataType: 'jsonp',
          data: para,
          success: (data) => {
            this.English = data.translation[0];
          },
        });
      },
    },
    watch: {
      'config.q': {
        handler: 'getWeather',
        immediate: true, // 在生命周期内，将立即以表达式的当前值触发回调
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-bottom: 10px;
  }

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
