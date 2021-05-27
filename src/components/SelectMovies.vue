<template>
  <div class="wrapper">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 d-flex justify-content-center">
      <SelectMoviesItem 
        v-for="(movie, idx) in movieList"
        :key="idx"
        :item="movie"
        :is-profile="false"
      />
    </div>
  </div>
</template>

<script>
import SelectMoviesItem from './SelectMoviesItem.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectMovies',
  components: {
    SelectMoviesItem,
  },
  data: function () {
    return {
      movieList: [],
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
    ]),
  },
  created: function () {
    const tokenObject = this.getToken
    console.log(tokenObject)
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/movies/new-movies/`,
      headers: tokenObject
    })
      .then(res => {
        this.movieList = res.data
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  h5 {
    color: #FFFFFF;
  }
  span {
    color: #FF89B6;
  }
  .navi {
    position: sticky;
  }
  .css-q46ro5 {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 400;
    background: linear-gradient( to top, rgba(18,18,18,0), rgba(18,18,18,1) 20% );
    text-align: center;
    width: 100%;
    height: 100px;
  }
  .wrapper {
    margin-top: 100px;
    margin-right: 30px;
    margin-left: 30px;
  }
  .next-btn {
    display: inline-block;
    font-size: 13px;
    line-height: 32px;
    height: 32px;
    padding: 0 18px;
    text-align: center;
    border-radius: 40px;
    position: absolute;
    top: 40px;
    right: 6%;
    background-color: #FFFFFF;
    color: #121218;
    font-weight: 700;
    -webkit-letter-spacing: -0.2px;
    -moz-letter-spacing: -0.2px;
    -ms-letter-spacing: -0.2px;
    letter-spacing: -0.2px;
    cursor: pointer;
  }
</style>