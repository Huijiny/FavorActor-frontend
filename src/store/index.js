import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router"; 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usertoken: '',
    user: {
      username: '',
      favoriteActors: [],
      favoriteMovies: [],
    },
  },
  mutations: {
    SET_USER_TOKEN: function (state, token) {
      state.usertoken = token
    },
    SET_USER_DATA: function (state, userdata) {
      state.user.username = userdata.username
      state.user.favoriteActors = userdata.favor_actors_id
      state.user.favoriteMovies = userdata.wish_movies_id
    },
    SET_FAVOR_ACTORS: function (state, actor) {
      state.user.favoriteActors.push(actor)
    },
    REMOVE_FAVOR_ACTORS: function (state, actor) {
      state.user.favoriteActors = state.user.favoriteActors.filter(act => {
        return act !== actor
      })
    },
    SET_FAVOR_MOVIES: function (state, movie) {
      console.log(state.user)
      state.user.favoriteMovies.push(movie)
    },
    REMOVE_FAVOR_MOVIES: function (state, movie) {
      state.user.favoriteMovies = state.user.favoriteMovies.filter(mov => {
        return mov !== movie
      })
    }
  },
  actions: {
    setUserToken: function ({ commit }, token) {
      commit('SET_USER_TOKEN', token)

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/login/',
        headers: { Authorization: `JWT ${token}` },
      })
        .then(res => {
          commit('SET_USER_DATA', res.data)
          return res.data
        })
        .then(res => {
          if (res.favor_actors_id.length == 0) {
            router.push({ name: 'Select' })
          } else {
            router.push({ name: 'Main'})
          }
        })
        .catch(err => {
          console.log(err)
        })      
    },
    setFavoriteActors: function ({ commit }, actor) {
      commit('SET_FAVOR_ACTORS', actor)
    },
    removeFavoriteActors: function ({ commit }, actor) {
      commit('REMOVE_FAVOR_ACTORS', actor)
    },
    setFavoriteMovies: function ({ commit }, movie) {
      commit('SET_FAVOR_MOVIES', movie)
    },
    removeFavoriteMovies: function ({ commit }, movie) {
      commit('REMOVE_FAVOR_MOVIES', movie)
    },
  },
  getters: {
    getToken: function (status) {
      const token = { Authorization: `JWT ${status.usertoken}` }
      return token
    },
    getUser: function (status) {
      return status.user
    }
  },
  modules: {
  }
})
