<template>
  <span class="mis-header-item">
    <slot/>
  </span>
</template>

<style lang="less" scoped>
.mis-header-item {
  min-width: 30px;
  height: 100%;
  background-color: transparent;
  float: right;
  padding: 0 10px;
}
.mis-header-item:hover {
  background-color: #f5f7f9;
}
</style>
