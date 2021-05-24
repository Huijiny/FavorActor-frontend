<template>
  <div class="wrapper">
    <button>뒤로가기</button>
    <ActorDetail
      :actor="actor"
    />
  </div>
</template>

<script>
import ActorDetail from '../components/ActorDetail.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    ActorDetail,
  },
  data: function () {
    return {
      actor: '',
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
    ]),
  },
  created: function () {
    axios({
      url: `http://127.0.0.1:8000/movies/actor/${ this.$route.query }/`,
      method: 'GET',
      headers: this.getToken
    })
    .then(res => {
      this.actor = res.data
    })
    .catch(err => {
      console.log(err)
    })
  },
}
</script>

<style>
.wrapper {
  margin: 40px;
}
</style>