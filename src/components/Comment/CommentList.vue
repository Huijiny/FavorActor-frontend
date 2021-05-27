<template>
  <div>
    <comment-list-item
      v-for="(comment, idx) in initialComments" 
      :key="idx"
      :comment="comment"
      @comment-deleted="emitDelete"
    />
    <div v-if="isOpened">
      <comment-list-item
      v-for="(comment, idx) in restComments" 
      :key="idx"
      :comment="comment"
      @comment-deleted="emitDelete"
    />
    </div>
    <button @click="checkOpened" class="button-icon-nomargin mt-3">
      <img src="~@/assets/down.png">
    </button>
    
  </div>
</template>

<script>
import CommentListItem from './CommentListItem.vue'
export default {
  name: 'CommentList',
  components: {
    CommentListItem,
  },
  props: {
    comments: {
      type: Array,
    },
  },
  data: function () {
    return {
      isOpened: false,
      initialComments: [],
      restComments: [],
    }
  },
  methods: {
    checkOpened: function () {
      this.isOpened = !this.isOpened
    },
    sliceShowPart: function () {
      if (this.comments.length < 5) {
        this.initialComments = this.comments.slice(0)
      } else {
        this.initialComments = this.comments.slice(0, 5)
      }
    },
    sliceRestPart: function () {
      if (this.comments.length > 5) {
        this.restComments = this.comments.slice(5)
      } else {
        this.restComments = []
      }
    },
    emitDelete: function () {
      this.$emit('comment-deleted')
    }
  },
  watch: {
    comments:{
      handler: function () { 
        this.sliceShowPart()
        this.sliceRestPart()
      },
      deep: true
    }
    
  }
}
</script>

<style>
.button-icon-nomargin {
    border: none;
    background: none;
}

</style>