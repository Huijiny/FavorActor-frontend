<template>
  <div class="d-flex"> 
    <div class="center-cropped actor-img">
      <img :src="getImage"/>
    </div>
    <div>
      <p>출생: {{ this.actor.birth }}</p>
      <p>배우가 출연한 영화의 평균 평점: {{ this.voteAverage }}</p>
      <KProgress :percent="60" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :border="false"></KProgress>
    </div>
  </div>
</template>

<script>
import KProgress from 'k-progress';

export default {
  name: 'ActorDetail',
  props: {
    actor: {
      type: Object
    },
  },
  components: {
    KProgress,
  },
  computed: {
    getImage: function () {
      return `https://image.tmdb.org/t/p/w500${this.actor.actor.profile_path}`
    },
    voteAverage: function () {
      var length = 0
      const sumOfVote = this.actor.actor.known_for.reduce((acc, movie) => {
        length += 1
        return acc + parseFloat(movie.vote_average)
      }, 0)
      console.log(sumOfVote)
      return (sumOfVote / length).toFixed(1)
    },
    votePercentage: function () {
      return this.voteAverage * 100
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
.actor-img {
  width: 100px;
}
#progress-bar {
  margin: 20px;
  width: 400px;
  height: 8px;
}
</style>