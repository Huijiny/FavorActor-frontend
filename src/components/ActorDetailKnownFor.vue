<template>
  <div>
    <h2>이 배우 추천작🔥</h2>
    <div class="knownfor-wrapper row row-cols-1 row-cols-md-3  row-cols-lg-4 row-cols-xl-6 d-flex justify-content-center"> 
      <ActorDetailKnownForItem
        v-for="(movie, idx) in actorKnownFor"
        :key=idx
        :movie="movie"
      />
    </div>
  </div>
  
</template>

<script>
import ActorDetailKnownForItem from './ActorDetailKnownForItem'
export default {
  name: 'ActorDetailKnownFor',
  props: {
    actorKnownFor: {
      type: Array,
    },
  },
  components: {
    ActorDetailKnownForItem,
  }
}
</script>

<style>
.knownfor-wrapper {
  display: flex;
  margin-top: 50px;
}

.knownfor-wrapper .knownfor-item:focus,
.knownfor-wrapper .knownfor-item:hover {
  transform: scale(1.3);
  z-index: 1;
}
</style>