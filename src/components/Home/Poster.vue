<template>
  <div>
    <!-- 첫번째 이미지 start -->
    <div id="poster1" class="my-5">
      <h3>지역</h3>
      <p>장소이름</p>
    </div>
    <img id="poster1" class="poster" :src="this.movies[2].poster_path" alt="">
    <!-- 첫번째 이미지 end -->
    <!-- 두번째 이미지 start -->
    <div id="poster2" class="my-5">
      <h3>지역</h3>
      <p>장소이름</p>
    </div>
    <img id="poster2" class="poster" :src="this.movies[5].poster_path" alt="">
    <!-- 두번째 이미지 end -->
    <!-- 세번째 이미지 start -->
    <div id="poster3" class="my-5">
      <h3>지역</h3>
      <p>장소이름</p>
    </div>
    <img id="poster3" class="poster" :src="this.movies[8].poster_path" alt="">
    <!-- 세번째 이미지 end -->
    <!-- 네번째 이미지 start -->
    <div id="poster4" class="my-5">
      <h3>지역</h3>
      <p>장소이름</p>
    </div>
    <img id="poster4" class="poster" :src="this.movies[9].poster_path" alt="">
    <!-- 네번째 이미지 end -->
    <!-- 다섯번째 이미지 start -->
    <div id="poster5" class="my-5">
      <h3>지역</h3>
      <p>장소이름</p>
    </div>
    <img id="poster5" class="poster" :src="this.movies[11].poster_path" alt="">
    <!-- 다섯번째 이미지 end -->
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Poster',
  data: function () {
    return {
      movies: null,
    }
  },
  created: function () {
    axios({
      method: 'get',
      url: `${SERVER_URL}/movies/`,
    })
      .then( res => {
        this.movies = res.data
        console.log(this.movies)
      })
      .catch( err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
#poster1 {
  width: 10vw;
  position: absolute;
  right: 20vw;
  top: 14vw;
}
#poster2 {
  width: 12vw;
  position: absolute;
  left: 12vw;
  top: 20vw;
}
#poster3 {
  width: 11vw;
  position: absolute;
  right: 11vw;
  top: 37vw;
}
#poster4 {
  width: 12vw;
  position: absolute;
  right: vw;
  top: 14vw;
}
#poster5 {
  width: 10vw;
  position: absolute;
  left: 26vw;
  top: 30vw;
}
img {
  border-radius: 4%;
}
.poster:hover {
  opacity: 0;
  transition:opacity 1s
}
</style>