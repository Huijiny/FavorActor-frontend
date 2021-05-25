<template>
  <div>
    <div>
      <p>{{ comment.user.username }} | {{ comment.rating }} | {{ comment.content }} <span><button v-if="comment.user.username == current_username" @click="deleteComment(comment.id)">X</button></span></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'CommentListItem',
  props: {
    comment: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getToken',
    ]),
    current_username: function () {
      return this.getUser.username
    }
  },
  methods: {
    deleteComment: function (comment_pk) {
      axios({
        url: `http://127.0.0.1:8000/community/comment/${comment_pk}/delete/`,
        method: 'POST',
        headers: this.getToken
      })
        .then( res => {
          console.log(res)
          this.$emit('comment-deleted')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
     
}
</script>

<style>

</style>