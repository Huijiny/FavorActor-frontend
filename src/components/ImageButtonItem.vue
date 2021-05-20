<template>
<div class="col">
  <div class="center-cropped">
    <img :src="item.actor_poster_path"/>
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
  /* .item-wrapper {
      position:relative;
      display:inline-block;
  }
  .item-wrapper:hover:after {
      content:"\asdfasdfasdf";
      width:100%;
      height:100%;
      background:rgba(0, 0, 0, 0.5);
      position:absolute;
      top:0;
      left:0;
  } */
  img {
    width: 300px;
    height: 400px;
    object-fit: cover; 
    object-position: center;
  }
</style>