<template>
  <div class="wang-editor">
    <wang-editor :disabled="false"/>
  </div>
</template>

<script>
export default {
  name: 'WangEditorPage',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../theme.less';
.wang-editor {
  min-height: 75vh;
  padding: 0 @default-gutter;
  margin-top: 44px;
}
</style>
