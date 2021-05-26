<template>
<div class="wrapper">
    <div class="css-q46ro5">
      <div class="guide-text mt-5 pt-4">
        <h2><span class="username">{{ user.username }}</span>님이 좋아하실 만한 배우들을 찾아왔어요! </h2>
      </div>
    
      <span class="next-btn btn-grad btn-size btn-text" @click="routeToProfile">
       <img src="~@/assets/profile.jpg" height="100px">
      </span>

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
h2 {
  color: #FFFFFF;
  font-weight: 900;
}
.username {
  color: #FF89B6;
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

.next-btn {
  display: inline-block;
  padding: 0 18px;
  position: absolute;
  top: 50px;
  right: 0%;
  -webkit-letter-spacing: -0.2px;
  -moz-letter-spacing: -0.22px;
  -ms-letter-spacing: -0.2px;
  letter-spacing: 0.5px;
  cursor: pointer;
}
</style>