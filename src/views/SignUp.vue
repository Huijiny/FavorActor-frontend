<template>
  <div class="bgimg d-flex justify-content-center align-items-center">
    <div class="auth-size">
      <div class="d-flex justify-content-left">
        <h2>Signup</h2>
      </div>
      <div class="input-group">
        <input v-model="credentials.username" type="text" class="form-control block" placeholder="이름(2자 이상)">
      </div>
      <div class="input-group">
        <input v-model="credentials.password" type="password" class="form-control" placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상">
      </div>
      <div class="input-group">
        <input v-model="credentials.passwordConfirmation" type="password" class="form-control" placeholder="위 비밀번호를 그대로 쳐주세요.">
      </div>
      <button @click="signup" class="btn-grad btn-size btn-text m-3">회원가입</button>
      <p >저희 서비스는 무료입니다. 회원가입이 간단하죠.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
        passwordConfirmation: null,
      },
    }
  },
  methods: {
    signup: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: this.credentials,
      })
        .then(res => {
          console.log(res)
          this.credentials.username = null
          this.credentials.password = null
          this.credentials.passwordConfirmation = null
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    isDisabled: function () {
      if (this.credentials === false) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

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
.btn-grad:disabled {
  /* background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%) */
  background-color: black;
}
.bgimg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
    
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
    
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;

  background-image: url('~@/assets/Joker.png');
  background-size: 100% 100%;

}
.auth-size {
  width: 20%;
}
p {
  color: #DBDBDB;
}

h2 {
  color: #FFFFFF;
}
</style>