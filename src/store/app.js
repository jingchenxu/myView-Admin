import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentPage: {},
  cachePages: [],
  expandMisMenu: false
}

const getters = {
  getCurrentPage (state) {
    return state.currentPage
  },
  getCachePages (state) {
    return state.cachePages
  },
  getCachePagesKeys (state) {
    // TODO 用于页面缓存
  },
  getExpandMisMenu (state) {
    return state.expandMisMenu
  }
}

const mutations = {
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
