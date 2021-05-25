<template>
<div class="wrapper">
    <div class="navi css-q46ro5 pt-4 pb-5">
      <div class="guide-text">
        <h5><span class="username">{{ user.username }}</span>님이 좋아하실 만한 배우들을 찾아왔어요! </h5>
      </div>
    <span class="next-btn btn-grad btn-size btn-text" @click="routeToProfile">프로필</span>
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
  }

.btn-grad {background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%)}
.btn-grad {
  padding: 10px 5px;
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
  width: 10%;
  border-radius: 30px;
  border: none;
}
.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
.btn-grad:disabled {
  /* background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%) */
  background-color: black;
}
</style>