<template>
<div class="wrapper">
    <div class="navi css-q46ro5 pt-4 pb-5">
      <div class="guide-text">
        <h5><span class="username">{{ user.username }}</span>님, 당신의 취향을 알고싶어요! </h5>
        <h5>좋아하는 
          <span v-if="isActorPage">배우</span>
          <span v-else>영화</span>
          를 선택해주세요.</h5>
      </div>
      <span class="next-btn" @click="routeToMovieSelect">
        <span v-if="isActorPage">건너뛰기</span>
        <span v-else>완료하기</span>
        </span>
    </div>

  <SelectActors v-if="isActorPage"/>
  <SelectMovies v-else/>  
</div>

  
</template>

<script>
import SelectActors from '../components/SelectActors.vue'
import SelectMovies from '../components/SelectMovies.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Select',
  components: {
    SelectActors,
    SelectMovies,
  },
  data: function () {
    return {
      user: {},
      isActorPage: true,
      isMoviePage: false,
    }
  },
  methods: {
    routeToMovieSelect: function () {
      this.isActorPage = false
      this.isMoviePage =  true
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
    ]),
  },
  created: function () {
    this.user = this.getUser
  }
}
</script>

<style scoped>
  h5 {
    color: #FFFFFF;
  }
  .username {
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