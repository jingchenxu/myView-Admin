import Vue from 'vue'
import ColumnProps from './ColumnProps'

const Column = Vue.component('Column', {
  functional: true,
  render (createElement, context: {props: {columnItem: any}}) {
    // TODO 更具props中的内容进行各种渲染
    let columnItem = context.props.columnItem
    let _props: any = {}
    for (let key in columnItem) {
      // TODO 看看有哪些属性
      if (columnItem[key]) {
        _props[key] = columnItem[key]
      }
    }
    return createElement('el-table-column', {
      props: _props
    })
  },
  props: {
    'column-item': {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
})

export default Column
