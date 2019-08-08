import CopyRight from './components/CopyRight'
import WhiteSpace from './components/WhiteSpace'
import Label from './components/Label'
import LabelGroup from './components/LabelGroup'
import Card from './components/Card'

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
