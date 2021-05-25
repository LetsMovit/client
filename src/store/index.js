import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userToken: null,
    movieInfo: null,
    locationInfo: null,
  },
  mutations: {
    saveJWT: function (state, token) {
      state.userToken = token
    },
    deleteJWT: function (state) {
      state.userToken = null
    },
    setMovie: function (state, movie) {
      state.movieInfo = movie
    }
  },
  actions: {
    getJWT: function (context, credential) {
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/api-token-auth/`,
        data: credential
      })
        .then(res => {
          context.commit('saveJWT', res.data.token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteJWT: function (context) {
      context.commit('deleteJWT')
    },
    setMovie: function (context, movie) {
      context.commit('setMovie', movie)
    }
  },
  getters: {
    decodedToken: function (state) {
      if (state.userToken) {
        return jwt_decode(state.userToken)
      }
      else {
        return null
      }
    }
  },
  modules: {
  }
})