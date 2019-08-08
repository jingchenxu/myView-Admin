import Vue from 'vue'
import Vuex from 'vuex'

import app from './newapp'
import user from './newuser'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {},
  modules: {
    app,
    user
  }
})

export default store
