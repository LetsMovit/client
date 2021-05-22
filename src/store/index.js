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
    movies: [],
    locs: [],
    movieInfo: null,
    titleflag: [],
  },
  mutations: {
    saveJWT: function (state, token) {
      state.userToken = token
    },
    deleteJWT: function (state) {
      state.userToken = null
    },
    saveMovie (state, movie) {
      if (state.titleflag.indexOf(movie.title) === -1) {
        state.titleflag.push(movie.title)
        state.movies.push(movie)
        console.log('새로운 movie 생성')
      } else {
        console.log('이미 있음')
      }
    },
    saveLocation: function (state, location) {
      state.locs.push(location)
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
    saveMovieList: function (context, movie) {
      context.commit('saveMovie', movie)
    },
    saveLocationList: function (context, location) {
      context.commit('saveLocation', location)
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
