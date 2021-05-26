<template>
  <div class="wrapper-detail" :class="{'scroll-fixed': isModalView }">
    <button class="button-icon" @click="routeToMain">
      <img src="~@/assets/BackButton.png">
    </button>
    <MovieDatailModal :class="{ 'modal-opened': isModalView }" v-if="isModalView" @close-modal="isModalView=false">
      <MovieDetailContent 
        :movie="modalMovie"
        :actor_id="actor.actor.actor_id"
      />
    </MovieDatailModal>
    <ActorDetail
      :actor="actor"
    />
    <ActorDetailKnownFor
      :actor-known-for="actor.actor.known_for"
      @show-modal="isModalView=true"
      @modal-movie-data="movie => modalMovie=movie"
    />
  </div>
</template>

<script>
import ActorDetail from '../components/ActorDetail.vue'
import ActorDetailKnownFor from '../components/ActorDetailKnownFor.vue'
import MovieDatailModal from '../components/MovieDetailModal.vue'
import MovieDetailContent from '../components/MovieDetailContent.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    ActorDetail,
    ActorDetailKnownFor,
    MovieDatailModal,
    MovieDetailContent,
  },
  data: function () {
    return {
      isModalView: false,
      modalMovie: null,
      actor: {
        actor: {
          actor_id: null,
          id: null,
          known_for: [],
          name: null,
          popularity: null,
          profile_path: null,
        },
        birth: null,
      },
    }
  },
  methods: {
    routeToMain: function () {
      this.$router.push({ name: 'Main' })
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
    ]),
  },
  created: function () {
    axios({
      url: `http://127.0.0.1:8000/movies/actor/${ this.$route.query }/`,
      method: 'GET',
      headers: this.getToken
    })
    .then(res => {
      this.actor = res.data
    })
    .catch(err => {
      console.log(err)
    })
  },
}
</script>

<style>
.wrapper-detail {
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.scroll-fixed {
  position: fixed;
}

.button-icon {
  border: none;
  background: none;
  margin-bottom: 35px;
}
</style>