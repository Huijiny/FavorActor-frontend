<template>
  <div>
    <div class="d-flex justify-content-between">
      <div>
         {{ comment.user.username }} | 
        <span>
          <star-rating 
            :read-only="true"
            :rating="comment.rating"
            :star-size="10"
            :inline="true"
            :show-rating="false"
          />
        </span> 
      </div>
      <div>
        <p align="left">{{ comment.content }}</p>
      </div>
      <div>
        <button class="button-icon-nomargin" v-if="comment.user.username == current_username" @click="deleteComment(comment.id)">
           <img src="~@/assets/close.png">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import StarRating from 'vue-star-rating'

export default {
  name: 'CommentListItem',
  components: {
    StarRating,
  },
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