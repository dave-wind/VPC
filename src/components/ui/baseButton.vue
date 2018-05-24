<template>
  <div>
    <el-button :type="tp"
               :icon="icon"
               :round="round"
               @click="$emit('click',arguments[0])">
      {{txt}}
    </el-button>
  </div>
</template>
<script>
  export default {
    props: {
      tp: {
        type: String,
        default: 'primary',
      },
      icon: {
        type: String,
        default: '',
      },
      txt: {
        type: String,
        default: '',
      },
      round: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
  };
</script>
<style>
</style>
