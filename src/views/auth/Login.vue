<template>
  <div class="bgimg d-flex justify-content-center align-items-center">
    <div class="auth-size">
      <div class="d-flex justify-content-between align-items-end">
        <h2>Login</h2>
        <a class="m-1" @click="routeToSignUp">3초 가입하러 가기</a>
      </div>
      <div class="input-group">
        <input v-model="credentials.username" type="text" class="form-control block" placeholder="이름(2자 이상)">
      </div>
      <div class="input-group">
        <input v-model="credentials.password" @keyup.enter="login" type="password" class="form-control" placeholder="비밀번호">
      </div>
      <button @click="login" class="btn-grad btn-size btn-text m-3" :disabled="isDisabled">Login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
      },
    }
  },
  methods: {
    login: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: this.credentials,
      })
        .then(res => {
          localStorage.setItem('jwt', res.data.token)
          this.credentials.username = null
          this.credentials.password = null
          this.$store.dispatch('setUserToken', res.data.token)
        })
        .catch(err => {
          alert('아이디와 비밀번호를 확인해주세요')
          console.log(err)
        })
    },
    routeToSignUp: function () {
      this.$router.push({ name: 'SignUp' })
    }
  },
  computed: {
    isDisabled: function () {
      if ( this.credentials.username && this.credentials.password) {
       return false
      } else {
        return  true
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
  font-weight: 700;
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
  font-weight: 700;
  text-decoration: none;
}
.btn-grad:disabled {
  /* background-image: linear-gradient(to left, #FC466B 0%, #4A00E0  50%, #FC466B  100%) */
  background-color: black;
}
.bgimg {
  /* Set up proportionate scaling */
  width: 100%;
  height: 100%;
    
  /* Set up positioning */
  position: fixed;

  background-image: url('~@/assets/Starwars.jpg');
  background-position: center;
  background-size: cover;
}
.auth-size {
  width: 250px;
}
p {
  color: #DBDBDB;
}

h2 {
  font-weight: 900;
  color: #FFFFFF;
}

a {
  color: #DBDBDB;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: grey;
}
.btn-grad:disabled {
  opacity: 0.5;
  background-position: right;
}
</style>