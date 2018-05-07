<template>
  <div>
    <el-button :type="tp" @click="$emit('click',arguments[0])">{{txt}}</el-button>
  </div>
</template>
<script>
  export default {
    props: {
      tp: {
        type: String,
        default: 'primary',
      },
      txt: {
        type: String,
        default: '',
      },
    },
    data() {
      return {};
    },
  };
</script>
<style>
</style>
