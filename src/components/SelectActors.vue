<template>
  <div class="wrapper">
    <div class="row row-cols-1 row-cols-md-3  row-cols-lg-4 row-cols-xl-6 d-flex justify-content-center">
      <ImageButtonItem 
        v-for="(actor, idx) in actorList"
        :key="idx"
        :item="actor"
        :is-profile="false"
      />
    </div>
  </div>
</template>

<script>
import ImageButtonItem from './ImageButtonItem.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectActors',
  components: {
    ImageButtonItem,
  },
  data: function () {
    return {
      actorList: [],
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
    ]),
  },
  created: function () {
    const tokenObject = this.getToken
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/movies/new-actors/`,
      headers: tokenObject
    })
      .then(res => {
        this.actorList = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  h5 {
    color: #FFFFFF;
  }
  span {
    color: #FF89B6;
  }

  .wrapper {
    margin-top: 100px;
    margin-right: 30px;
    margin-left: 30px;
  }
  .next-btn {
    display: inline-block;
    font-size: 13px;
    line-height: 32px;
    height: 32px;
    padding: 0 18px;
    text-align: center;
    border-radius: 40px;
    position: absolute;
    top: 40px;
    right: 6%;
    background-color: #FFFFFF;
    color: #121218;
    font-weight: 700;
    -webkit-letter-spacing: -0.2px;
    -moz-letter-spacing: -0.2px;
    -ms-letter-spacing: -0.2px;
    letter-spacing: -0.2px;
    cursor: pointer;
  }
</style>