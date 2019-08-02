const TableColumn = new Vue({
  data: {
    info: '这是通过el属性获取挂载元素的outerHTML方式渲染。'
  },
  template: '<div>这是template属性模板渲染。</div>'
  // render: function (h) {
  //   return h('div', {}, '这是render属性方式渲染。')
  // }
})

export default TableColumn
