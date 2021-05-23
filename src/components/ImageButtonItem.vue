<template>
  <div class="item-wrapper col">
    <div class="center-cropped">
      <img :src="getImage"/>
    </div>
    <div :class="{ 'item-selected ': liked, 'overlay': !liked }">
      <div class="text">
        <h4>{{ item.name }}</h4>
        <button class="btn mt-2" @click="likeButton"><i class="fa-heart like-button" :class="{ 'fas': liked, 'far': !liked }"></i></button>
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
  },
  data: function () {
    return {
      liked: false,
      selected: false,
    }
  },
  methods: {
    likeButton: function () {
      this.liked = !this.liked
      if (this.liked == true) {
        console.log('asfd')
        this.$store.dispatch('setFavoriteActors', this.item.actor_id)
      } else {
        this.$store.dispatch('removeFavoriteActors', this.item.actor_id)
      }
    }
  },
  computed: {
    getImage: function () {
      return `https://image.tmdb.org/t/p/w500${this.item.profile_path}`
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
.item-selected{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(18, 17, 24, 0.5);
  opacity: 1;
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
* ::before, ::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.text {
color: white;
font-size: 20px;
position: absolute;
top: 85%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
text-align: center;
}

.like-button {
  color: #FF89B6;
  font-size: 40px;
}

h5 {
  margin: 0px;
}
</style>