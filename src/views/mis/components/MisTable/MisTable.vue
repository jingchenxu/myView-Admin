<template>
  <div class="mis-table">
    <el-table
    :data="data"
    style="width: 100%"
    border
    size="small"
    :stripe="stripe"
    v-loading="loading"
    @select="handleSelect"
    @row-dblclick="handleDbclick">
      <!-- <el-table-column v-for="(column, index) of columns" type="index" align="center" width="50">
      </el-table-column> -->
      <el-table-column type="index" align="center" width="50"/>
      <el-table-column type="selection" align="center" width="55"/>
      <el-table-column prop="date" :formatter="dataFormat" label="日期" width="180"/>
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column prop="address" label="地址"/>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableColumn from './TableColumn'
import moment from 'moment'

export default Vue.extend({
  name: 'mis-table',
  props: {
    stripe: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => {}
    },
    data: {
      type: Array,
      default: () => {
        return [
        ]
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    handleDbclick (row, column, event) {
      console.log('双击被触发了')
      this.$emit('handleDbclick', row, column, event)
    },
    handleSelect (selection, row) {
      this.$emit('handleSelect', selection, row)
    },
    dataFormat (row, column, cellValue, index) {
      return moment(cellValue).format('YYYY-MM-DD')
    }
  },
  mounted () {
    let tableColumn: TableColumn = {
      prop: 'data',
      label: '日期'
    }
  }
})
</script>

<style lang="less" scoped>
.mis-table {
  width: auto;
  height: auto;
}
</style>
