<template>
  <div class="mis-tab">
    <transition name="slide-fade">
      <div v-show="activeTab === 'list'" class="list-container">
        <slot name="list" />
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-show="activeTab === 'detail'" class="detail-container">
        <slot name="detail" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

@Component({})
export default class MisTab extends Vue {
  @Prop() private activeTab: String = 'list'
}
</script>

<style lang="less" scoped>
.mis-tab {
  padding: 0 15px;
  min-height: 75vh;
  margin-top: 44px;
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
    padding: 10px;
    .action-items-container {
      border-bottom: 1px solid #dadada;
    }
  }
}
</style>

<style lang="less">
.search-items-container {
  .ivu-form-item {
    margin-bottom: 10px;
  }
}
.action-items-container {
  border-bottom: 1px solid #EBEEF5;
  .ivu-form-item {
    margin-bottom: 10px;
  }
}
</style>
