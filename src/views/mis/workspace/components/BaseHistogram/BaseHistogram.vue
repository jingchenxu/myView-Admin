<template>
  <div id="histogram" class="base-histogram">

  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'BaseHistogram',
  data () {
    return {

    }
  },
  methods: {
    drawArea () {
      // 绘制柱状图区域
      let svgContainer = document.getElementById('histogram')
      
    }
  },
  mounted () {
    this.drawArea()
    window.addEventListener('resize', this.drawArea)
  }
}
</script>

<style lang="less" scoped>
.base-histogram {
  width: 100%;
  min-height: 100px;  
}
</style>


