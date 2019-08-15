<template>
  <button class="btn">{{label}}</button>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style scoped>
.btn {
  background-color: #09F;
  border: none;
  border-radius: 6px;
  color: #FFF;
  overflow: hidden;
  padding: 16px 24px;
}
</style>