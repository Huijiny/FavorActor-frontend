<template>
  <div>
    <div class="p-5 m-5">
      <button class="button-icon" @click="routeToMain">
        <img src="~@/assets/BackButton.png">
      </button>
      <h1><span class="username">{{ user.username }}</span></h1>
    </div>    
    <div class="m-5">
      <h3 class="title font-face"><span class="username">좋아하는</span> 배우</h3>
       <div class="row row-cols-1 row-cols-md-3  row-cols-lg-4 row-cols-xl-6 d-flex justify-content-center">
        <ImageButtonItem 
          v-for="(actor, idx) in favoriteActorList"
          :key="idx"
          :item="actor"
        />
      </div>
    </div>
    <div class="m-5">
      <h3 class="title"><span class="username">좋아하는</span> 영화</h3>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 d-flex justify-content-center">
        <SelectMoviesItem 
          v-for="(movie, idx) in favoriteMovieList"
          :key="idx"
          :item="movie"
        />
    </div>
    </div>
  </div>
</template>

<script>
import ImageButtonItem from '../components/ImageButtonItem.vue'
import SelectMoviesItem from '../components/SelectMoviesItem.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Profile',
  components: {
    ImageButtonItem,
    SelectMoviesItem,
  },
  data: function () {
    return {
      user: {},
      favoriteActorList: [],
      favoriteMovieList: [],
    }
  },
  methods: {
    routeToMain: function () {
      this.$router.push({ name: 'Main' })
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getToken'
    ]),
  },
  created: function () {
    this.user = this.getUser
    axios({
      url: 'http://127.0.0.1:8000/movies/favorites/',
      method: 'GET',
      headers: this.getToken
    })
      .then(res => {
        console.log(res)
        this.favoriteActorList = res.data.favorite_actors
        this.favoriteMovieList = res.data.favorite_movies
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.profile-header{
  padding: 10px;
}
.title {
  color: #FFFFFF;
  font-family: 'S-CoreDream-9Black';
}
.username {
  color: #FF89B6;
}
.button-icon {
  border: none;
  background: none;
  margin-bottom: 35px;
}
@font-face {
  font-family: 'S-CoreDream-5Medium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>