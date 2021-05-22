<template>
  <div>
    <div>
      {{ this.user.username }} 의 프로필  
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function () {
    return {
      user: {},
    }
  },
}
</script>

<style>

</style>