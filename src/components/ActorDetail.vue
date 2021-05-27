<template>
  <div class="container d-flex justify-content-center align-items-center m-5"> 
    <div class="actor-img">
      <img :src="getImage"/>
    </div>
    <div>
      <div class="text-box">
        <button class="btn btn-ov" @click="likeButton">
          <i class="fa-heart like-button" :class="{ 'fas': this.liked, 'far': !this.liked }"></i>
        </button>
        <h1 class="actor-name">{{ this.actor.actor.name }}</h1>
        <br>
        <h4 class="actor-detail">출생: <span>{{ this.actor.birth }}</span></h4>
        <br>
        <h4 class="actor-detail">배우가 출연한 영화의 평균 평점: <span>{{this.voteAverage}}</span></h4>
      </div>
      <br>
      <KProgress 
        id="progress-design"
        :percent="votePercentage" 
        active 
        :color="['#F54370', '#CC338B', '#9C20AA', '#7210C6', '#4A00E0']" 
        bg-color="#434141" 
        :show-text="false"
        :line-height="12"
      />
    </div>
  </div>
</template>

<script>
import KProgress from 'k-progress';
import { mapGetters } from 'vuex'

export default {
  name: 'ActorDetail',
  props: {
    actor: {
      type: Object,
    },
    liked: {
      type: Boolean,
    }
  },
  components: {
    KProgress,
  },
  methods: {
    likeButton: function () {
      this.liked = !this.liked
      this.$emit('change-like', !this.liked)
    },
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getToken'
    ]),
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
      return this.voteAverage * 10
    }
  },

}
</script>

<style scoped>
.actor-img {
  width: 300px;
  margin-right: 50px;
}
.actor-img img {
  width: 100%;
  height: 100%;
}
#progress-bar {
  margin: 20px;
  width: 400px;
  height: 8px;
}
.text-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
}
#progress-design {
  width: 150%
}
.actor-name {
  font-weight: 800;
}
.actor-detail {
  font-weight: 600;
}
.like-button {
  color: #FF89B6;
  font-size: 40px;
}
.btn-ov {
  padding: 0;
  margin-bottom: 10px;
}

</style>