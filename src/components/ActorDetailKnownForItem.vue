<template>
  <div class="knownfor-item">
    <img :src="getImage" alt="사진이 없습니다.">
  </div>
</template>

<script>
export default {
  name: 'ActorDetailKnownForItem',
  props: {
    movie: {
      type: Object,
    },
  },
  computed: {
    getImage: function () {
  return this.movie.poster_path ? `https://image.tmdb.org/t/p/w300${this.movie.poster_path}` : "http://koreamonitorusa.com/wp-content/uploads/2014/02/No-Poster-Img.jpg"
}
  }
}
</script>

<style>
.knownfor-item {
  position: relative;
  display: block;
  transition: transform 500ms;
}

.knownfor-item img {
  display: block;
  max-width: 100%;
}
</style>