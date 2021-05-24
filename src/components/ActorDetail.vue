<template>
  <div> 
    <div class="center-cropped">
      <img :src="getImage"/>
    </div>
    <div>
      <p>출생: {{ this.actor.birth }}</p>
      <p>배우가 출연한 영화의 평균 평점: {{ this.voteAverage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActorDetail',
  props: {
    actor: {
      type: Object
    },
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
    }
  }
}
</script>

<style>

</style>