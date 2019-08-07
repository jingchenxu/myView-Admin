<template>
  <div :style="{height: height+'px'}" class="white-sapce">
  </div>
</template>

<script>
export default {
  name: 'WhiteSpace',
  props: {
    height: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="less" scoped>
.white-space {
  background-color: transparent;
}
</style>
