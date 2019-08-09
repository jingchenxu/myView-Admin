<template>
  <div class="work-space">
    <h1>WorkSpace</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class WorkSpace extends Vue {

}
</script>

<style lang="less" scoped>
  .work-space {
    padding: 0 15px;
    min-height: 75vh;
    margin-top: 44px;
  }
</style>
