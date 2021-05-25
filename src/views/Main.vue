<template>
<div class="wrapper">
    <div class="navi css-q46ro5 pt-4 pb-5">
      <div class="guide-text">
        <h5><span class="username">{{ user.username }}</span>님이 좋아하실 만한 배우들을 찾아왔어요! </h5>
      </div>
    <button class="profile-button" @click="routeToProfile">
      <img src="~@/assets/profile.jpg" height="100px">
    </button>
    </div>
    <MainPage/>
</div>


</template>

<script>
import MainPage from '../components/MainPage.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    MainPage,
  },
  data: function () {
    return {
      user: {},
    }
  },
  methods: {
    routeToProfile: function () {
      this.$router.push({ name: 'Profile' })
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
    height: 300px;
  }
  .wrapper {
    margin-top: 250px;
    margin-right: 30px;
    margin-left: 30px;
  }
  /* .next-btn {
    display: inline-block;
    font-size: 16px;
    line-height: 32px;
    height: 50px;
    padding: 5px 18px;
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
  } */
  .profile-button {
  border: none;
  background: none;
  margin-bottom: 35px;
  float: right;
  margin: 10px;
  }
</style>