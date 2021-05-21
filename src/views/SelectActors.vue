<template>
<div class="container  navi-margin">
  <div class="navi css-q46ro5 pt-4 pb-5">
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
  .css-q46ro5 {
    /* background: linear-gradient( to top, rgba(18,18,18,0), rgba(18,18,18,0.6) 10%, rgba(18,18,18,0.8) 16%, rgba(18,18,18,1) 29% );
    height: 237px; */
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 400;
    background: linear-gradient( to top, rgba(18,18,18,0), rgba(18,18,18,1) 20% );
    text-align: center;
    width: 100%;
    height: 100px;
  }
  .navi-margin {
    margin-top: 100px;
  }
</style>