<template>
  <div class="label-group">
    <Label :key="index" v-for="(label, index) of labelText" :text="label"/>
  </div>
</template>

<script>
import Label from '../Label'

export default {
  name: 'LabelGroup',
  components: {
    Label
  },
  props: {
    labelText: {
      type: Array,
      default: []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.label-group {
  div {
    margin-right: 5px;
    margin-bottom: 10px;
  }
}
</style>
