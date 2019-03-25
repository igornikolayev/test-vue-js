import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    checkUser: false,
    buttonLogin: 'Log in'
  },
  mutations: {
    checker(state) {
      state.checkUser = !state.checkUser
      state.buttonLogin = 'Log out'
    },
    logOut(state) {
      if (state.buttonLogin == 'Log out') {
        state.checkUser = !state.checkUser
        state.buttonLogin = 'Log in'

      }
    }
  },
  actions: {

  }
})
