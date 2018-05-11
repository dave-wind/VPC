<script>
  export default {
    render(h) {
      return h('el-button', {
        class: {
          'el-button--success': this.type === 'success',
          'el-button--info': this.type === 'info',
          'el-button--warning': this.type === 'warning',
          'el-button--primary': this.type === 'primary',
          'el-button--danger': this.type === 'danger',
        },
        domProps: {
          innerHTML: this.$slots.default[0].text,
        },
        on: {
          click: this.clickHandle,
        },
      });
    },
    methods: {
      clickHandle() {
        // dosomething
      },
    },
    props: {
      type: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
    },
  };
</script>
<style>
</style>
