<template>
  <div class="comment-list">
    <div v-for="(comment, idx) in comments" :key="idx">
      {{ comment.content }} {{ comment.rating }}
      <p>{{ comment.user.username }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommentList',
  props: {
    comments: {
      type: Array,
    },
  },
     
}
</script>

<style>

</style>