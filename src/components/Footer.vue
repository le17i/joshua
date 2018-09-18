<template lang="pug">
  .footer
    span.copyright {{logoText}} Copyright &copy; {{copyrightYear}}
</template>
<script>
  export default {
    name: 'footer',
    props: ['logoText'],
    computed: {
      copyrightYear () {
        return (new Date()).getFullYear()
      }
    }
  }
</script>
<style scoped>
  .footer {
    align-items: center;
    background: #444;
    color: #000;
    display: flex;
    height: 32px;
    padding: 0 24px;
    width: 100%;
  }

  .copyright {
    font-size: 12px;
  }
</style>

