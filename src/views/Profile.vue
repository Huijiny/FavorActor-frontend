<template>
  <div class="wrapper-profile">
    <button class="button-icon" @click="routeToMain">
        <img src="~@/assets/BackButton.png">
      </button>
    <div class=" my-5">
      <h1><span class="username ms-3">{{ user.username }}</span>님의 프로필</h1>
      <div v-if="this.getUser.username != this.user.username">
        <button @click="followButtonClick" class="btn-grad btn-size btn-text">
          <span v-if="isFollowed">Unfollow</span>
          <span v-else>Follow</span>
      </button>
      </div>
    </div>    
    <div class="my-5">
      <h3 align="left" class="title ms-3"><span class="username">좋아하는</span> 배우</h3>
      <div class=" d-flex flex-wrap">
        <ImageButtonItem 
          v-for="(actor, idx) in favoriteActorList"
          :key="idx"
          :item="actor"
          class="width-set"
          :is-profile="true"
          :is-my-profile="isMe"
          @delete-actor="deleteActor"
        />
      </div>
      
       
    </div>
    <div class="my-5">
      <h3  align="left" class="title ms-3"><span class="username">좋아하는</span> 영화</h3>
      <div class="d-flex flex-wrap">
        <SelectMoviesItem 
          v-for="(movie, idx) in favoriteMovieList"
          :key="idx"
          :item="movie"
          class="width-set"
          :is-profile="true"
          :is-my-profile="isMe"
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
      isFollowed: false,
    }
  },
  methods: {
    routeToMain: function () {
      this.$router.push({ name: 'Main' })
    },
    deleteActor: function (actorId) {
      axios({
        url: `http://127.0.0.1:8000/movies/actor/${actorId}/fav/`,
        method: 'POST',
        headers: this.getToken
      })
        .then(res => {
          this.getProfileInfo()
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    followButtonClick: function () {
      this.isFollowed = !this.isFollowed
      axios({
        url: `http://127.0.0.1:8000/accounts/${this.user.id}/follow/`,
        method: 'POST',
        headers: this.getToken
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProfileInfo: function () {
      this.user = this.getUser
      axios({
        url: `http://127.0.0.1:8000/accounts/${this.$route.query}/`,
        method: 'GET',
        headers: this.getToken
      })
        .then(res => {
          this.user = res.data.user
          this.favoriteActorList = res.data.favorite_actors
          this.favoriteMovieList = res.data.favorite_movies
          this.isFollowed = this.getUser.followings.includes(this.user.id)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getToken'
    ]),
    isMe: function () {
      return this.getUser.username == this.user.username
    }
  },
  created: function () {
    this.getProfileInfo()
  }
}
</script>

<style scoped>
h1 {
  color: #FFFFFF;
  font-weight: 600;
}
.wrapper-profile {
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.profile-header{
  padding: 10px;
}
.title {
  color: #FFFFFF;
  font-family: 'S-CoreDream-9Black';
  font-weight: 700;
}
.username {
  color: #FF89B6;
  font-weight: 800;
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
.width-set {
  min-width: 200px;
  max-width: 200px;
}
.btn-grad {background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%)}
.btn-grad {
  margin: 10px;
  padding: 10px 45px;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
}
.btn-text {
  text-transform: uppercase;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
}
.btn-size {
  width: 70%;
  border-radius: 30px;
  border: none;
}
.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>