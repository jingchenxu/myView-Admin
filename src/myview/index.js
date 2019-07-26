import CopyRight from './CopyRight'
import WhiteSpace from './WhiteSpace'

const components = {
  CopyRight,
  WhiteSpace
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
