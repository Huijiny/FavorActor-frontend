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
      state.user = userdata
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
            router.push({ name: 'SelectActors' })
          } else {
            router.push({ name: 'Main'})
          }
        })
        .catch(err => {
          console.log(err)
        })      
    }
  },
  modules: {
  }
})
