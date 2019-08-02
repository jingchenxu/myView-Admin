<template>
  <div class="user-center">
    <h1>UserCenter</h1>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import '../../../theme.less';
.user-center {
  min-height: 75vh;
  padding: 0 @default-gutter;
  margin-top: 44px;
}
</style>
