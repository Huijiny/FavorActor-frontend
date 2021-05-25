<template>
  <div class="comments">
    <CommentForm
      :movie_id="movieId"
      :actor_id="actor_id"
      @comment-added="getComments"
    />
    <CommentList
      :comments="commentList"
      @comment-deleted="getComments"
    />
  </div>
</template>

<script>
import CommentForm from './CommentForm.vue'
import CommentList from './CommentList.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Comments',
  components: {
    CommentForm,
    CommentList,
  },
  props: {
    movie_id: {
      type: Number,
    },
    actor_id: {
      type: Number,
    }
  },
  data: function () {
    return {
      comments: [],
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
    ]),
    commentList: function () {
      return this.comments
    },
    movieId: function () {
      return this.movie_id
    }
  },
  methods: {
    getComments: function () {
      axios({
        url: `http://127.0.0.1:8000/community/${this.movie_id}/${this.actor_id}/comment/`,
        method: 'GET',
        headers: this.getToken,
      })
        .then(res => {
          console.log(res)
          this.comments = res.data
        })
        .catch(res => {
          console.log(res)
        })
    }
  },
  created: function () {
    this.getComments()
  }
}
</script>

<style>
.comments {
  color: #FFFFFF;
}
</style>