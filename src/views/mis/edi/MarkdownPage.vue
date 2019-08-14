<template>
  <div class="markdown-page">
    <Card>
      <my-markdown/>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'MarkdownPage'
}
</script>

<style lang="less" scoped>
@import '../../../theme.less';
.markdown-page {
  min-height: 75vh;
  padding: 0 @default-gutter;
  margin-top: 44px;
}
</style>
