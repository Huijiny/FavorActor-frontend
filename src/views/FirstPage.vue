<template>
  <div class="bgimg d-flex justify-content-center align-items-center">
    <div class="auth-size">
      <div class="d-flex justify-content-left">
        <h2>당신이 좋아하는 배우에 집중해보세요</h2>
      </div>
      <button @click="signup" class="btn-grad btn-size btn-text m-3">시작해보기</button>
      <p >저희와 함께할 준비가 되셨나요?</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Firstpage',
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

  background-image: url('~@/assets/Inception.png');
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
    