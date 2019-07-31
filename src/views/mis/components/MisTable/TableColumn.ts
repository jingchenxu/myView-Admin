export default interface TableColumn {
  type?: String,
  index?: Number | Function,
  'column-key'?: String,
  label: String,
  prop: String,
  width?: String,
  'min-width'?: String,
  fixed?: String | Boolean,
  'render-header'?: Function,
  sortable?: Boolean | String,
  'sort-method'?: Function,
  'sort-by'?: Function | String | any[]
}