import { State } from './interface'
import { Menu } from '../newuser/interface'
import { Commit } from 'vuex'

const state: State = {
  currentPage: null,
  cachePages: [],
  expandMisMenu: false,
  loading: false
}

const getters = {
  getCurrentPage: (state: State) => state.currentPage,
  getCachePages: (state: State) => state.cachePages,
  getCachePagesKeys: (state: State) => {
    const cachePagesKeys = state.cachePages.map(page => page.mkey)
    return cachePagesKeys
  },
  getExpandMisMenu: (state: State) => state.expandMisMenu,
  getLoading: (state: State) => state.loading
}

const mutations = {
  updateCurrentPage: (state: State, menu: Menu) => {
    state.currentPage = menu
  },
  updateCachePages: (state: State, menu: Menu) => {
    let isHave: Boolean = false
    const { cachePages } = { ...state }
    cachePages.forEach((item: Menu) => {
      if (item.mid === menu.mid) {
        isHave = true
      }
    })
    if (!isHave) {
      state.cachePages.push(menu)
    }
  },
  closeCachePage: (state: State, menu: Menu) => {
    state.cachePages = state.cachePages.filter((item: Menu) => {
      return item.mid !== menu.mid
    })
  },
  changeExpandMisMenu: (state: State) => {
    const { expandMisMenu } = { ...state }
    state.expandMisMenu = !expandMisMenu
  },
  loadingStart: (state: State) => {
    state.loading = true
  },
  loadingFinish: (state: State) => {
    state.loading = false
  }
}

const actions = {
  UPDATECURRENTPAGE: (context: { commit: Commit }, menu: Menu) => {
    console.dir(menu)
    context.commit('updateCurrentPage', menu)
    context.commit('updateCachePages', menu)
  },
  CLOSECACHEPAGE: (context: { commit: Commit }, menu: Menu) => {
    context.commit('closeCachePage', menu)
  },
  CHANGEEXPANDMISMENU: (context: { commit: Commit }) => {
    context.commit('changeExpandMisMenu')
  },
  LOADINGSTART: (context: { commit: Commit }) => {
    context.commit('loadingStart')
  },
  LOADINGFINISHED: (context: { commit: Commit }) => {
    context.commit('loadingFinish')
  }
}

const newapp = {
  state,
  getters,
  mutations,
  actions
}

export default newapp
