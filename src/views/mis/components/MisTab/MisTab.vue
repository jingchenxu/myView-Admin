<template>
  <div class="mis-tab">
    <div v-if="activeTab === 'list'" class="list-container">
      <slot name="list"/>
    </div>
    <div v-if="activeTab === 'detail'" class="detail-container">
      <slot name="detail"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MisTab',
  props: {
    activeTab: {
      type: String,
      default: 'list'
    }
  }
}
</script>

<style lang="less" scoped>
.mis-tab {
  width: 100%;
  padding: 15px;
  .list-container {
    width: 100%;
    background-color: white;
    padding: 10px;
    .search-items-container {
      border-bottom: 1px solid #dadada;
    }
  }
  .detail-container {
    width: 100%;
    background-color: white;
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
