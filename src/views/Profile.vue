<template>
  <div>
    <div>
      {{ this.user.username }} 의 프로필  
    </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  data: function () {
    return {
      user: {},
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
    ]),
  },
  created: function () {
    this.user = this.getUser
    console.log(this.user)
  }
}
</script>

<style>

</style>