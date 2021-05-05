<template>
    <div id="tab-bar">
      <span class="tab-item" @click="switchTo('/home')">
        <img :src="$route.path.includes('/home') ? tabBarImgArr[0].active:tabBarImgArr[0].normal">
        <span :class="{on:$route.path.includes('/home')}">Home</span>
      </span>
<!--      <span class="tab-item" @click="switchTo('/movie')">-->
<!--        <img :src="$route.path.includes('/movie') ? tabBarImgArr[1].active:tabBarImgArr[1].normal">-->
<!--        <span :class="{on:$route.path.includes('/movie')}">电影</span>-->
<!--      </span>-->
      <span class="tab-item" @click="switchTo('/user_film?user_id='+user_id+'&wish_movie=1')">
        <img :src="$route.path.includes('/user_film') ? tabBarImgArr[2].active:tabBarImgArr[2].normal">
        <span :class="{on:$route.path.includes('/user_film?user_id='+user_id+'&wish_movie=1')}">Liked</span>
      </span>
      <span class="tab-item" @click="switchTo('/m_check?user_id='+user_id)">
        <img :src="$route.path.includes('/m_check') ? tabBarImgArr[4].active:tabBarImgArr[4].normal">
        <span :class="{on:$route.path.includes('/m_check?user_id='+user_id)}">Ticket</span>
      </span>
      <span class="tab-item" @click="switchTo('/my')">
        <img :src="$route.path.includes('/my') ? tabBarImgArr[3].active:tabBarImgArr[3].normal">
        <span :class="{on:$route.path.includes('/my')}">User</span>
      </span>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data(){
          return{
            tabBarImgArr:[
              {normal:require('./images/home_black.svg'),active:require('./images/home_red.svg')},
              {normal:require('./images/movie_light.svg'),active:require('./images/movie_fill_light.svg')},
              {normal:require('./images/like_black.svg'),active:require('./images/like_red.svg')},
              {normal:require('./images/my_black.svg'),active:require('./images/my_red.svg')},
              {normal:require('./images/ticket_black.svg'),active:require('./images/ticket_red.svg')},
            ],
            user_id:localStorage.getItem('user_id')
          }
        },
        methods:{
          switchTo(path){
            this.$router.replace(path);
          }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #tab-bar
    width 100%
    height 1.041rem
    position fixed
    left 0
    bottom 0
    right 0
    z-index 999
    display flex
    background-color: #fff;
    border-top 1px solid #f1f1f1
    .tab-item
        display flex
        flex 1
        justify-content center
        align-items center
        flex-direction column
        font-size 0.21rem
        margin-bottom 0.041rem
        color #333
        img
          margin-bottom 0.041rem
          width 32%
        .on
          color orange
</style>
