import request from './request'
import bus from './bus'

const vueplugin = {}

vueplugin.install = function (Vue, options) {
  Vue.prototype.$axios = request()
  Vue.prototype.$bus = bus
}

export default vueplugin
