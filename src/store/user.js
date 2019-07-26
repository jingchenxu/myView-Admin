import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentUser: {
    auth: [],
    dept: {},
    menugroups: [],
    menus: [],
    sessionid: '',
    sets: [],
    user: {}
  },
  isLogin: false
}

const getters = {
  getUserAuths: state => {
    return state.currentUser.auths
  },
  getUserDept: state => {
    return state.currentUser.dept
  },
  getUserMenuGroups: state => {
    return state.currentUser.menugroups
  },
  getMenuJson: state => {
    let { menugroups, menus } = { ...state.currentUser }
    for (let i = 0; i < menugroups.length; i++) {
      menugroups[i]['children'] = menus.filter(item => item.mgid === menugroups[i].mgid)
    }
    return menugroups
  },
  getUserMenus: state => {
    return state.currentUser.menus
  },
  getUserSessionid: state => {
    return state.currentUser.sessionid
  },
  getUserSets: state => {
    return state.currentUser.sets
  },
  getUserInfo: state => {
    return state.currentUser.user
  },
  getLoginStatus: state => {
    return state.isLogin
  }
}

const mutations = {
  updateCurrentUser (state, currentUser) {
    state.currentUser = currentUser
  },
  updateLoginStatus (state, loginStatus) {
    state.isLogin = loginStatus
  }
}

const actions = {
  UPDATECURRENTUSER (context, currentUser) {
    context.commit('updateCurrentUser', currentUser)
  },
  UPDATELOGINSTATUS (context, loginStatus) {
    context.commit('updateLoginStatus', loginStatus)
  }
}

const usernew = {
  state,
  getters,
  mutations,
  actions
}

export default usernew
