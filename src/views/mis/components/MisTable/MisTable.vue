<template>
  <div class="mis-table">
    <el-table
    :data="tabledata"
    style="width: 100%"
    border
    size="small"
    :stripe="stripe"
    v-loading="loading"
    @select="handleSelect"
    @row-dblclick="handleDbclick">
      <Column :key="index" :column-item="columnItem" v-for="(columnItem, index) of columnList"/>
      <!-- <el-table-column type="index" align="center" width="50"/>
      <el-table-column type="selection" align="center" width="55"/>
      <el-table-column prop="date" :formatter="dataFormat" label="日期" width="180"/>
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column prop="address" label="地址"/> -->
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import moment from 'moment'
import TableColumn from './ColumnProps'
import Column from './Column'

@Component({
  name: 'MisTable',
  components: {
    Column
  }
})
export default class MisTable extends Vue {
  @Prop({ type: Boolean, default: true })
  private stripe: Boolean = true
  @Prop({ type: Boolean, default: false })
  private loading: Boolean = false
  @Prop({})
  private columns: () => []
  @Prop({ default: [] })
  private tabledata: Array<any>

  private columnList = [
    {
      type: 'index',
      align: 'center',
      width: 50
    },
    {
      type: 'selection',
      align: 'center',
      width: 50
    },
    {
      prop: 'date',
      formatter: this.dataFormat,
      label: '日期',
      width: 180
    },
    {
      prop: 'name',
      label: '姓名',
      width: 180
    },
    {
      prop: 'address',
      label: '地址'
    }
  ]

  private handleDbclick (row: any, column: any, event: any) {
    console.log('双击被触发了')
    this.$emit('handleDbclick', row, column, event)
  }
  private handleSelect (selection: any, row: any) {
    this.$emit('handleSelect', selection, row)
  }
  private dataFormat (row: any, column: any, cellValue: any, index: any) {
    return moment(cellValue).format('YYYY-MM-DD')
  }

  private mounted () {
    let tableColumn: TableColumn = {
      prop: 'data',
      label: '日期'
    }
  }
}
</script>

<style lang="less" scoped>
.mis-table {
  width: auto;
  height: auto;
}
</style>
