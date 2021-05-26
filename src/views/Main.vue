<template>
<div class="wrapper">
    <div class="css-q46ro5">
      <div class="guide-text mt-5 pt-4">
        <h2 v-if="user.is_staff"> 앗, <span class="username">관리자</span>님 안녕하세요!😆 <br>아래 배우 추천 어떠세요?</h2>
        <h2 v-else><span class="username">{{ user.username }}</span>님이 좋아하실 만한 배우들을 찾아왔어요! </h2>
      </div>
      <div class="next-btn">
        <span v-if="user.is_staff" class="nav-btn m-1">
          <a href="http://127.0.0.1:8000/admin/" target="_blank">admin</a>
        </span>
        <span class="nav-btn m-1" @click="routeToProfile">
          profile
        </span>
        <span class="nav-btn m-1" @click="logout">
          logout
        </span>
      </div>
     
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
      this.$router.push({ name: 'Profile', query: this.user.username })
    },
    logout: function () {
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
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
  height: 300px;
}
.wrapper {
  margin-top: 250px;
}
.next-btn {
  display: inline-block;
  padding: 0 18px;
  position: absolute;
  top: 20px;
  right: 0%;
  -webkit-letter-spacing: -0.2px;
  -moz-letter-spacing: -0.22px;
  -ms-letter-spacing: -0.2px;
  letter-spacing: 0.5px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}
a:hover {
  text-decoration:none; 
  cursor:pointer; 
  color: #FF89B6;

}
.nav-btn {
  color: white;
  font-weight: 600;

}
.nav-btn:hover {
  color: #FF89B6;
}

</style>