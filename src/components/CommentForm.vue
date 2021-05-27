<template>
  <div class="comment-form"> 
    <div class="rating-input d-flex">
      <star-rating 
        :star-size="25"
        star-rating :increment="0.5"
        :inline="true"
        :show-rating="false"
        v-model="rating"
      />
    <input @keyup.enter="postComment" type="text" v-model="comment">
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'CommentForm',
  components: {
    StarRating,
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
      rating: 0,
      comment: '',
    }
  },
  methods: {
    postComment: function (event) {
      const data = {
       'content': event.target.value,
       'rating': this.rating,
      }

      axios({
        url: `http://127.0.0.1:8000/community/${this.movie_id}/${this.actor_id}/comment/`,
        method: 'POST',
        headers: this.getToken,
        data,
      })
        .then(res => {
          console.log(res)
          this.$emit('comment-added')
        })
        .catch(res => {
          console.log(res)
        })
      this.comment = ''
      this.rating = 0
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
    ]),
  },
}
</script>

<style>

.rating-input {
  width: 100%;
}
.comment-form input {
  background-color: #c4c4c4c9;
  width: 100%;
  border-radius: 8px;
}
</style>