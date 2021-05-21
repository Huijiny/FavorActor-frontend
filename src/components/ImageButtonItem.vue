<template>
  <div class="item-wrapper col">
    <div class="center-cropped">
      <img :src="item.actor_poster_path"/>
    </div>
    <div class="overlay">
      <div class="text">
        <h5>{{ item.actorname }}</h5>
        <button class="btn btn-link"><i class="fas fa-heart like-button"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageButtonItem',
  props: {
    item: {
      type: Object,
    }
  }
}
</script>

<style scoped>

.item-wrapper {
  position: relative;
  margin: 1% 1%;
}
  div {
    display: block
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .3s ease;
    background-color: rgba(18, 17, 24, 0.5);
}
.item-wrapper:hover .overlay {
  opacity: 1;
}
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover; 
    object-position: center;
  }
  /* * ::before, ::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  } */
  .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.like-button {
  color: #FF89B6;
  font-size: 30px;
}
</style>