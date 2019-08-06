<template>
  <div class="user-center-tag">
    <div class="title">标签</div>
    <LabelGroup :label-text="labelText"/>
  </div>
</template>

<script>
export default {
  name: 'UserCenterTag',
  data () {
    return {
      labelText: ['测试1', '非常用想法', '测试3', '测试4', '测试5', '专注前端', '测试7', '测试8', '测试9']
    }
  }
}
</script>

<style lang="less" scoped>
.user-center-tag {
  .title {
    margin-bottom: 20px;
  }
}
</style>


