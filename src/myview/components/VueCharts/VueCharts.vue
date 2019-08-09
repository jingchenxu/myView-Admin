<template>
  <div :id="chartId" class="vue-charts">

  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import 'echarts/extension/bmap/bmap'

// getRandomString (len) {
//   len = len || 32
//   var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'/** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
//   var maxPos = $chars.length
//   var pwd = ''
//   for (let i = 0; i < len; i++) {
//     pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
//   }
//   return pwd
// }

export default {
  name: 'VueCharts',
  props: {
    option: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
