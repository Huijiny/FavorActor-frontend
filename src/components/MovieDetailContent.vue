<template>
  <div>
    <iframe :src="this.selectVideoSrc" frameborder="0" gesture=media allow="accelerometer;"></iframe>
    <div class="movie-detail m-3 d-flex-col justify-content-start align-items-start">
      <h1>{{ movie.title }}</h1> 
      <h5> {{ releaseDate + '  |  ' +  voteAverage }} </h5>
      <h4> {{ tagline }} </h4>
    </div>
    <div>
      <Comments 
        :movie_id="movieId"
        :actor_id="actor_id"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Comments from './Comments.vue'

export default {
  name: 'MovieDetailContent',
  components: {
    Comments,
  },
  props: {
    movie: {
      type: Object,
    },
    actor_id: {
      type: Number,
    }
  },
  data: function () {
    return {
      overview: '',
      tagline: '',
      releaseDate: '',
      voteAverage: 0,
      trailer: {
        id: null,
        iso_639_1: null,
        iso_3166_1: null,
        key: null,
        name: null,
        site: null,
        size: null,
        type: null,
      },
    }
  },
  methods: {
    
  },
  created: function () {
      const api_key = '5b8a67ef224314f921c11001410c0bd7'
      axios({
        url:`https://api.themoviedb.org/3/movie/${this.movie.movie_id}/videos?api_key=${api_key}`,
        method: 'GET',
      })
      .then(res => {
        this.trailer = res.data.results[0]
      })
      .catch(res => {
        console.log(res)
      })
      axios({
        url: `https://api.themoviedb.org/3/movie/${this.movie.movie_id}?api_key=${api_key}&language=en-US`,
        method: 'GET',
      })
        .then(res => {
          this.overview = res.data.overview
          this.tagline = res.data.tagline
          this.voteAverage = res.data.vote_average
          this.releaseDate = res.data.release_date
        })
        .catch(res => {
          console.log(res)
        })
  },
  computed: {
    selectVideoSrc: function () {
      return `https://www.youtube.com/embed/${this.trailer.key}`
    },
    movieId: function () {
      return this.movie.movie_id
    }
  }
}
</script>

<style>
iframe {
  width: 100%;
  height: 300px;
}
.movie-detail {
  color: #FFFFFF;
}
</style>