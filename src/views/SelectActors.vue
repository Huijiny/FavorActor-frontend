<template>
<div class="container">
  <div class="navi mt-5 mb-3">
    <div class="guide-text">
      <h5><span>{{ user.username }}</span>님, 당신의 취향을 알고싶어요! </h5>
      <h5>좋아하는 배우를 선택해주세요.</h5>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
    <ImageButtonItem 
      v-for="(actor, idx) in actorList"
      :key="idx"
      :item="actor"
    />
  </div>
</div>
</template>

<script>
import ImageButtonItem from '../../src/components/ImageButtonItem.vue'

export default {
  name: 'SelectActors',
  components: {
    ImageButtonItem,
  },
  data: function () {
    return {
      user: {
        usertoken: '',
        username: '꼬꼬',
        favorActors: [],
      },
      actorList: [
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
        {
          'actorname': '김수현',
          'actor_poster_path': 'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg'
        },
      ]
    }
    
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
  .navi {
    position: sticky;
  }
</style>