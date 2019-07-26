import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import iView from 'iview'
import { Aside, Main, Header, Container, RadioButton, RadioGroup, Submenu, MenuItemGroup, MenuItem, Menu } from 'element-ui'
import myView from './myview'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(myView)

Vue.component('el-aside', Aside)
Vue.component('el-main', Main)
Vue.component('el-header', Header)
Vue.component('el-container', Container)
Vue.component('el-radio-button', RadioButton)
Vue.component('el-radio-group', RadioGroup)
Vue.component('el-submenu', Submenu)
Vue.component('el-menu-item-group', MenuItemGroup)
Vue.component('el-menu-item', MenuItem)
Vue.component('el-menu', Menu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
