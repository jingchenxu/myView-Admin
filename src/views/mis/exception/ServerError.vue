<template>
  <div class="server-error">
    <div class="content">
      <h1>ServerError</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ServerError extends Vue {

}
</script>

<style lang="less" scoped>
.server-error {
  min-height: 75vh;
  margin-top: 44px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  .content {
    text-align: center;
  }
}
</style>
