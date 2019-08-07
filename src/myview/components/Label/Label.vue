<template>
  <div class="label" :class="dashed ? 'dashed' : ''">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    dashed: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.label {
  display: inline-block;
  border: 1px solid #d9d9d9;
  padding: 0 5px;
  border-radius: 3px;
  background-color: #dadada;
  font-size: 12px;
}
.label:hover {
  cursor: pointer;
}
.dashed {
  border: 1px dashed #d9d9d9;
}
</style>
