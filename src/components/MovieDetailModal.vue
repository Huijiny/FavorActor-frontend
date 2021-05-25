<template>
  <div class="movie-modal"> 
    <div class="overlay" @click="$emit('close-modal')"></div> 
    <div class="modal-card"> 
     <slot /> 
    </div> 
  </div>

</template>

<script>
export default {
  name: 'MovieDetailModal',
  created: function () {
    console.log("createdModal")
  }
}
</script>

<style scoped>
.movie-modal, 
.overlay { 
  width: 100%; 
  height: 100%; 
  position: fixed; 
  left: 0; 
  top: 0; 
  z-index: 5; 
} 
.overlay { 
  opacity: 0.5; 
  background-color: black;
} 
.modal-card { 
  position: relative; 
  max-width: 80%; 
  margin: auto; 
  margin-top: 200px; 
  padding: 20px; 
  background-color: white; 
  min-height: 500px; 
  z-index: 5; 
  opacity: 1; 
}

</style>