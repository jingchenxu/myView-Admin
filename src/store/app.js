import Vue from 'vue'
import Vuex from 'vuex'

const indexNavi = {
  mid: 9000,
  mname: '首页',
  mpid: 9000,
  mgid: 90,
  mgname: '工作台',
  mdepth: 1,
  mdisp: 9000,
  mauth: 1,
  mtip: 'index',
  mfunction: '#/mis/workspace/index',
  isline: false,
  issub: false,
  mnormalicon: ' iconfont mhome',
  mhoticon: '',
  mdisableicon: 'ios-radio-button-off',
  isbase: false,
  mcode: '9000',
  mstatus: '1',
  mstatusname: '',
  mshortcut: 'ios-radio-button-off',
  istab: true,
  ismutil: false,
  menukey: '',
  auths: [] }

Vue.use(Vuex)

const state = {
  cachePages: [],
  activePage: 'index',
  openPages: [indexNavi],
  currentMenu: {},
  expandMisMenu: false
}

const getters = {
  getCachePages (state) {
    let cachePages = state.openPages.map(menu => menu.mtip)
    return cachePages
  },
  getActivePage (state) {
    return state.activePage
  },
  getOpenPages (state) {
    return state.openPages
  },
  getCurrentMenu (state) {
    return state.currentMenu
  },
  getExpandMisMenu (state) {
    return state.expandMisMenu
  }
}

const mutations = {
  updateCachePages (state, cachePages) {
    state.cachePages = cachePages
  },
  updateActivePage (state, activePage) {
    state.activePage = activePage
  },
  updateOpenPages (state, openPages) {
    state.openPages = openPages
  },
  deleteOpenPagesByMenukey (state, menukey) {
    let openPages = state.openPages.filter(menu => {
      if (menu.mtip !== menukey) {
        return menu
      }
    })
    state.openPages = openPages
  },
  deleteOpenPages (state) {
    state.openPages = [indexNavi]
  },
  deleteOtherOpenPages (state) {
    let { currentMenu } = { ...state }
    state.openPages = [indexNavi, currentMenu]
  },
  updateCurrentMenu (state, currentMenu) {
    state.currentMenu = currentMenu
  },
  changeExpandMisMenu (state) {
    let { expandMisMenu } = { ...state }
    state.expandMisMenu = !expandMisMenu
  }
}

/**
 * @description actions 当中包含异步操作
 * @type {{UPDATECACHEPAGES(*, *=): void}}
 */
const actions = {
  UPDATECACHEPAGES (context, cachePages) {
    context.commit('updateCachePages', cachePages)
  },
  UPDATEACTIVEPAGE (context, activePage) {
    context.commit('updateActivePage', activePage)
  },
  UPDATEOPENPAGES (context, openPages) {
    context.commit('updateOpenPages', openPages)
  },
  DELETEOPENPAGESBYMENUKEY (context, menukey) {
    context.commit('deleteOpenPagesByMenukey', menukey)
  },
  DELETEOPENPAGES (context) {
    context.commit('deleteOpenPages')
  },
  DELETEOTHEROPENPAGES (context) {
    context.commit('deleteOtherOpenPages')
  },
  UPDATECURRENTMENU (context, currentMenu) {
    context.commit('updateCurrentMenu', currentMenu)
  },
  CHANGEEXPANDMISMENU (context) {
    context.commit('changeExpandMisMenu')
  }
}

const appnew = {
  state,
  getters,
  mutations,
  actions
}

export default appnew
