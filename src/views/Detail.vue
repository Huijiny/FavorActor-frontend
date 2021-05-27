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
      :liked="isLiked"
      @change-like="modifyLiked"
    />
    <ActorDetailKnownFor
      :actor-known-for="actorKnownFor"
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
      liked: false,
    }
  },
  methods: {
    routeToMain: function () {
      this.$router.push({ name: 'Main' })
    },
    modifyLiked: function (likestatus) {
      if (likestatus == true) {
        this.liked = false
      } else {
        this.liked = true
      }
      this.modifyFavoriteActors()
    },
    modifyFavoriteActors: function () {
      axios({
        url: `http://127.0.0.1:8000/movies/actor/${this.actor.actor.actor_id}/fav/`,
        method: 'POST',
        headers: this.getToken
      })
        .then(res => {
          this.$store.dispatch('modifyUserData', res.data.user)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
      'getUser',
    ]),
    actorKnownFor: function () {
      return this.actor.actor.known_for.slice().sort((a,b) =>  b.vote_average - a.vote_average);
    },
    isLiked: function () {
      return this.liked
    }
  },
  created: function () {
    axios({
      url: `http://127.0.0.1:8000/movies/actor/${ this.$route.query }/`,
      method: 'GET',
      headers: this.getToken
    })
    .then(res => {
      this.actor = res.data
      if (this.getUser.favoriteActors.includes(this.actor.actor.actor_id)) {
        this.liked = true
      } else {
        this.liked = false
      }
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