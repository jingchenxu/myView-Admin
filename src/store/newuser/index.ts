import { State, CurrentUser } from './interface'
import { Commit } from 'vuex'

const currentUser: CurrentUser = {
  user: {},
  menu: [],
  dept: {}
}

const state: State = {
  currentUser,
  isLogin: false
}

const getters = {
  getUser: (state: State) => state.currentUser.user,
  getMenu: (state: State) => state.currentUser.menu,
  getMenuTree: (state: State) => {
    const { menu } = { ...state.currentUser }
    // 找到一级菜单
    const menuTree = menu.filter(_menu => _menu.mlevel === 1)
    // FIXME 先只管二级菜单
    for (let i = 0; i < menuTree.length; i++) {
      menuTree[i].child = menu.filter(_menu => _menu.mpid === menuTree[i].mid && _menu.mpid !== _menu.mid)
    }
    return menuTree
  },
  getDept: (state: State) => state.currentUser.dept,
  getLogin: (state: State) => state.isLogin
}

const mutations = {
  updateCurrentUser: (state: State, currentUser: CurrentUser) => {
    state.currentUser = currentUser
  },
  changeLogin: (state: State) => {
    const { isLogin } = { ...state }
    state.isLogin = !isLogin
  }
}

const actions = {
  UPDATECURRENTUSER (context: {commit: Commit}, currentUser: CurrentUser) {
    context.commit('updateCurrentUser', currentUser)
    context.commit('changeLogin', currentUser)
  },
  CHANGELOGIN (context: {commit: Commit}) {
    context.commit('changeLogin')
  }
}

const newuser = {
  state,
  getters,
  mutations,
  actions
}

export default newuser
