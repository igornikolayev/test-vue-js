import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    checkUser: false,
    buttonLogin: 'Log in',
    userId: null,
    userInformation: {}
  },
  mutations: {
    checker(state, userId) {
      state.checkUser = !state.checkUser;
      state.buttonLogin = 'Log out';
      state.userId = userId

    },

    logOut(state) {
      if (state.buttonLogin == 'Log out') {
        state.checkUser = !state.checkUser
        state.buttonLogin = 'Log in'
      }
    },

    writeUserData(state, userInformation) {
      state.userInformation = userInformation.data;
    }
  },
  actions: {

  }
})
