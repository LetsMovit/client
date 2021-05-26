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
    currentLocation: null,
    change: false,
    liked: null,
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
    },
    setCurrentLoc: function (state, location) {
      state.currentLocation = location
    },
    changeLike: function (state, liked) {
      state.liked = liked
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
    },
    setCurrentLoc: function (context, location) {
      // console.log(location, 'asdfsdfasdf')
      context.commit('setCurrentLoc', location)
    },
    changeLike: function (context, liked) {
      context.commit('changLike', liked)
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
    },
    changeLatLng: function (state) {
      return state.currentLocation
    },
  },

  modules: {
  }
})