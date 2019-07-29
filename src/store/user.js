import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentUser: {
    user: {},
    menu: [],
    dept: {}
  },
  isLogin: false
}

const getters = {
  getUser (state) {
    return state.currentUser.user
  },
  getMenu (state) {
    return state.currentUser.menu
  },
  getMenuTree (state) {
    let { menu } = { ...state.currentUser }
    // 找到一级菜单
    let menuTree = menu.filter(_menu => _menu.mlevel === 1)
    // FIXME 先只管二级菜单
    for (let i = 0; i < menuTree.length; i++) {
      menuTree[i]['child'] = menu.filter(_menu => _menu.mpid === menuTree[i].mid && _menu.mpid !== _menu.mid)
    }
    return menuTree
  },
  getDept (state) {
    return state.currentUser.dept
  },
  getLogin (state) {
    return state.isLogin
  }
}

const mutations = {
  updateCurrentUser (state, currentUser) {
    state.currentUser = currentUser
  },
  changeLogin (state) {
    const { isLogin } = { ...state }
    state.isLogin = !isLogin
  }
}

const actions = {
  UPDATECURRENTUSER (context, currentUser) {
    context.commit('updateCurrentUser', currentUser)
    context.commit('changeLogin', currentUser)
  },
  CHANGELOGIN (context) {
    context.commit('changeLogin')
  }
}

const usernew = {
  state,
  getters,
  mutations,
  actions
}

export default usernew
