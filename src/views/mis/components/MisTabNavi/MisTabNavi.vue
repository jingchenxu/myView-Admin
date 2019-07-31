<template>
  <div class="mis-tab-navi">
    <div class="tab-item">测试菜单1</div>
    <div class="tab-item">测试菜单1</div>
    <div class="tab-item">测试菜单1</div>
    <div class="tab-item">测试菜单1</div>
    <div class="tab-item">测试菜单1</div>
  </div>
</template>

<script>
export default {
  name: 'MisTabNavi'
}
</script>

<style lang="less" scoped>
.mis-tab-navi {
  width: 100%;
  height: 44px;
  background-color: transparent;;
  padding: 6px 10px;
  .tab-item {
    width: 100px;
    margin-right: 10px;
    height: 32px;
    line-height: 32px;
    background-color: white;
    float: left;
    padding: 0 10px;
  }
}
</style>
