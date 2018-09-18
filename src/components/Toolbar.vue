<template lang="pug">
  .toolbar
    span.logo-text {{logoText}}
  </div>
</template>
<script>
  export default {
    name: 'toolbar',
    props: ['logoText']
  }
</script>
<style scoped>
  .toolbar {
    align-items: center;
    background: #444;
    color: #000;
    display: flex;
    height: 64px;
    padding: 0 24px;
    width: 100%;
  }

  .logo-text {
    font-size: 32px;
  }
</style>

