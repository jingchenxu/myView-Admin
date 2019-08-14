<template>
  <div class="mis-page-title">
    <div v-if="title !== 'empty'" class="page-title">
      <b>{{title}}</b>
    </div>
    <slot name="title"></slot>
    <p v-if="description !== 'empty'">{{description}}</p>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MisPageTitle extends Vue {
  @Prop({ type: String, default: 'empty' }) private title: String
  @Prop({ type: String, default: 'empty' }) private description: String
}
</script>

<style lang="less" scoped>
.mis-page-title {
  min-height: 100px;
  background-color: white;
  padding: 0 20px;
  .page-title {
    font-size: 16px;
    line-height: 40px;
  }
}
</style>
