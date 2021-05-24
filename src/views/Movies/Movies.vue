<template>
  <div class="container">
    <div class="example-3d">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="movie in movies" :key="movie.id"><MovieCard :movie="movie"/></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/Movies/MovieCard'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Movies',
  title: '3D Coverflow effect',
  components: {
    MovieCard,
    Swiper,
    SwiperSlide,
  },
  data: function () {
    return {
      movies: null,
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination'
        },
      },
    }
  },
  methods: {
    setToken : function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
  },
  created: function () {
    axios({
      method: 'get',
      url: `${SERVER_URL}/movies/`,
      headers : this.setToken(),
    })
      .then( res => {
        // console.log(res.data)
        this.movies = res.data
      })
      .catch( err => {
        console.log(err)
      })
  }
}

</script>

<style lang="scss" scoped>
  .example-3d {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper {
    height: 100%;
    width: 100%;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 100%;
      text-align: center;
      font-weight: bold;
      // font-size: $font-size-huge * 2;
      background-color: white;
      background-position: center;
      background-size: cover;
      color: white;
    }
    .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: white;
      }
    }
  }
</style>