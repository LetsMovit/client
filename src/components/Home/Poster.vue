<template>
  <div>
    <!-- 첫번째 이미지 start -->
    <div id="poster1" class="my-2 py-5">
      <h3>{{ movies[2].title | getLoc }}</h3>
      <p>장소이름</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster1" class="poster" :src="this.movies[2].poster_path" @click="move(movies[2])">
    <!-- 첫번째 이미지 end -->
    <!-- 두번째 이미지 start -->
    <div id="poster2" class="my-2 py-5">
      <h3>지역</h3>
      <p>장소이름</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster2" class="poster" :src="this.movies[5].poster_path" @click="move(movies[5])">
    <!-- 두번째 이미지 end -->
    <!-- 세번째 이미지 start -->
    <div id="poster3" class="my-2 py-5">
      <h3>지역</h3>
      <p>장소이름</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster3" class="poster" :src="this.movies[8].poster_path" @click="move(movies[8])">
    <!-- 세번째 이미지 end -->
    <!-- 네번째 이미지 start -->
    <div id="poster4" class="my-2 py-5">
      <h3>지역</h3>
      <p>장소이름</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster4" class="poster" :src="this.movies[9].poster_path" @click="move(movies[9])">
    <!-- 네번째 이미지 end -->
    <!-- 다섯번째 이미지 start -->
    <div id="poster5" class="my-2 py-5">
      <h3>지역</h3>
      <p>장소이름</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster5" class="poster" :src="this.movies[11].poster_path" @click="move(movies[11])">
    <!-- 다섯번째 이미지 end -->
    <!-- 여섯번째 이미지 start -->
    <div id="poster6" class="my-2 py-5">
      <h3>지역</h3>
      <p>장소이름</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster6" class="poster" :src="this.movies[4].poster_path" @click="move(movies[4])">
    <!-- 여섯번째 이미지 end -->
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
      locs: null,
    }
  },
  methods: {
    getMovies: function () {
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
    },
    getLocations : function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/movies/locations/`,
      })
        .then( res => {
          this.locs = res.data
          console.log(this.locs)
        })
        .catch( err => {
          console.log(err)
        })
    },
    move: function (movie) {
      // this.$router.push({ name: 'MovieDetail', params: {item : movie} })
      this.$store.dispatch('setMovie', movie)
      this.$router.push({ name: 'MovieDetail' })
    },
  },
  created: function () {
    this.getMovies(),
    this.getLocations()
  },
}
</script>

<style scoped>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);

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
  width: 15vw;
  position: absolute;
  left: 9vw;
  top: 45vw;
}
#poster5 {
  width: 10vw;
  position: absolute;
  left: 26vw;
  top: 30vw;
}
#poster6 {
  width: 13vw;
  position: absolute;
  right: 26vw;
  top: 48vw;
}
img {
  border-radius: 4%;
}
.poster:hover {
  opacity: 0;
  transition:opacity 1s
}
</style>