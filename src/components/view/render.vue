<template>
  <div>
    <btn-render
      v-for="(btn, index) in testData"
      :type="btn.type"
      :text="btn.text"
      :key="index">{{btn.text}}
    </btn-render>
  </div>
</template>
<script>
  import btnRender from '../render/btn-render';

  export default {
    components: {
      btnRender,
    },
    data() {
      return {
        testData: [
          {type: 'success', text: '成功'},
          {type: 'info', text: '信息'},
          {type: 'warning', text: '警告'},
          {type: 'primary', text: '默认'},
          {type: 'danger', text: '危险'},
        ],
      };
    },
  };
</script>
<style>
</style>
