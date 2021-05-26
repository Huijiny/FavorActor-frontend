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
      <span class="next-btn btn-grad btn-size btn-text" @click="routeToMovieSelect">
        <span v-if="isActorPage">영화로 고르기</span>
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
    }
  },
  methods: {
    routeToMovieSelect: function () {
      if (this.isActorPage == true) {
        this.isActorPage = false
      } else {
        console.log("asfd")
        this.$store.dispatch('postUserTastes')
      }
      
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
    font-weight: 700;
    color: #FFFFFF;
  }
  .username {
    font-weight: 700;
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
    width: 95%;
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
    height: 40px;
    padding: 0 15px;
    text-align: center;
    border-radius: 40px;
    position: absolute;
    top: 35px;
    right: 3%;
    background-color: #FFFFFF;
    color: #121218;
    font-weight: 700;
    -webkit-letter-spacing: -0.2px;
    -moz-letter-spacing: -0.22px;
    -ms-letter-spacing: -0.2px;
    letter-spacing: 0.5px;
    cursor: pointer;
  }
  .btn-grad {background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%)}
  .btn-grad {
    padding: 10px 5px;
    transition: 0.5s;
    background-size: 200% auto;
    font-weight: 700;
    color: white;            
  }
  .btn-text {
    font-family: 'Noto Sans KR', sans-serif;
  }
  .btn-size {
    width: 130px;
  }
  .btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    font-weight: 700;
    text-decoration: none;
  }
  .btn-grad:disabled {
    /* background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%) */
    background-color: black;
  }
</style>