import CopyRight from './CopyRight'
import WhiteSpace from './WhiteSpace'
import Label from './Label'
import LabelGroup from './LabelGroup'
import Card from './Card'

const components = {
  CopyRight,
  WhiteSpace,
  Label,
  LabelGroup,
  Card
}

const myview = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  // TODO 后期加入多语言
  Object.keys(myview).forEach(key => {
    Vue.component(key, myview[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
