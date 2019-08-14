<template>
  <div class="not-found">
    <h1>NotFound</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {

}
</script>

<style lang="less" scoped>
.not-found {
  min-height: 75vh;
  margin-top: 44px;
  padding: 0 15px;
  text-align: center;
}
</style>
