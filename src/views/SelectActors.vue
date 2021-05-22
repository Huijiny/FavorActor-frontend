<template>
  <div class="wrapper ">
    <div class="navi css-q46ro5 pt-4 pb-5">
      <div class="guide-text">
        <h5><span>{{ user.username }}</span>님, 당신의 취향을 알고싶어요! </h5>
        <h5>좋아하는 배우를 선택해주세요.</h5>
      </div>
      <span class="next-btn" @click="routeToMovieSelect">건너뛰기</span>
    </div>
    <div class="row row-cols-1 row-cols-md-3  row-cols-lg-4 row-cols-xl-6 d-flex justify-content-center">
      <ImageButtonItem 
        v-for="(actor, idx) in actorList"
        :key="idx"
        :item="actor"
      />
    </div>
  </div>
</template>

<script>
import ImageButtonItem from '../../src/components/ImageButtonItem.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectActors',
  components: {
    ImageButtonItem,
  },
  data: function () {
    return {
      user: {},
      actorList: [],
    }
  },
  methods: {
    routeToMovieSelect: function () {
      this.$router.push({ name: 'SelectMovies' })
    },
  },
  computed: {
    ...mapGetters([
      'getToken',
      'getUser',
    ]),
  },
  created: function () {
    const tokenObject = this.getToken
    this.user = this.getUser
    console.log(tokenObject)
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/movies/new-actors/`,
      headers: tokenObject
    })
      .then(res => {
        this.actorList = res.data
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  h5 {
    color: #FFFFFF;
  }
  span {
    color: #FF89B6;
  }
  .navi {
    position: sticky;
  }
  .css-q46ro5 {
    /* background: linear-gradient( to top, rgba(18,18,18,0), rgba(18,18,18,0.6) 10%, rgba(18,18,18,0.8) 16%, rgba(18,18,18,1) 29% );
    height: 237px; */
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