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
      is_staff: false,
    },
    mainActorList: [],
  },
  mutations: {
    SET_USER_TOKEN: function (state, token) {
      state.usertoken = token
    },
    SET_USER_DATA: function (state, userdata) {
      state.user.username = userdata.username
      state.user.favoriteActors = userdata.favorite_actors
      state.user.favoriteMovies = userdata.favorite_movies
      state.user.is_staff = userdata.is_staff
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
    },
  },
  actions: {
    setUserToken: function ({ commit, dispatch }, token) {
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
          if (res.favorite_actors.length == 0) {
            router.push({ name: 'Select' })
          } else {
            dispatch('getMainItems')
          }
        })
        .catch(err => {
          console.log(err)
        })      
    },
    getMainItems: function () {
      axios({
        method: 'GET',
        url: `http://127.0.0.1:8000/movies/main/`,
        headers: { Authorization: `JWT ${this.state.usertoken}` }
      })
      .then(res => {
        this.state.mainActorList = res.data
        router.push({ name: 'Main'})
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
    postUserTastes: function ({ dispatch }) {
      const config = {
        Authorization: `JWT ${this.state.usertoken}`,
      }
      console.log(config)
      const data = {
        'favorite_actors': this.state.user.favoriteActors,
        'favorite_movies': this.state.user.favoriteMovies
      }
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/movies/main/',
        data,
        headers: config,
      })
        .then(res => {
          console.log(res)
          dispatch('getMainItems')
        })
        .catch(err => {
          console.log(err)
        })
        
    }
  },
  getters: {
    getToken: function (state) {
      const token = { Authorization: `JWT ${state.usertoken}` }
      return token
    },
    getUser: function (state) {
      return state.user
    },
    getMainActorList: function (state) {
      return state.mainActorList
    }
  },
  modules: {
  }
})
