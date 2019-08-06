<template>
  <div class="mis-simple-list">
    <div class="list-container">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'mis-simple-list'
})
</script>

<style lang="less" scoped>
.mis-simple-list {
  padding: 0 15px;
  min-height: 75vh;
  margin-top: 44px;
  .list-container {
    width: 100%;
    background-color: white;
    padding: 10px;
  }
}
</style>
<style lang="less">
.search-items-container {
  .ivu-form-item {
    margin-bottom: 10px;
  }
}
</style>
