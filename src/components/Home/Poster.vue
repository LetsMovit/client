<template>
  <div>
    <!-- 첫번째 이미지 start -->
    <div id="poster1" class="my-2 py-5">
      <h3>{{ MainLocs[0].name }}</h3>
      <p>{{ MainLocs[0].address[0] + ' ' + MainLocs[0].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster1" class="poster" :src="this.movies[MainLocs[0].movie - 1].poster_path" @click="move(movies[MainLocs[0].movie - 1])">
    <!-- 첫번째 이미지 end -->
    <!-- 두번째 이미지 start -->
    <div id="poster2" class="my-2 py-5">
      <h3>{{ MainLocs[1].name }}</h3>
      <p>{{ MainLocs[1].address[0] + ' ' + MainLocs[1].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster2" class="poster" :src="this.movies[MainLocs[1].movie - 1].poster_path" @click="move(movies[MainLocs[1].movie - 1])">
    <!-- 두번째 이미지 end -->
    <!-- 세번째 이미지 start -->
    <div id="poster3" class="my-2 py-5">
      <h3>{{ MainLocs[2].name }}</h3>
      <p>{{ MainLocs[2].address[0] + ' ' + MainLocs[2].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster3" class="poster" :src="this.movies[MainLocs[2].movie - 1].poster_path" @click="move(movies[MainLocs[2].movie - 1])">
    <!-- 세번째 이미지 end -->
    <!-- 네번째 이미지 start -->
    <div id="poster4" class="my-2 py-5">
      <h4>{{ MainLocs[3].name }}</h4>
      <p>{{ MainLocs[3].address[0] + ' ' + MainLocs[3].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster4" class="poster" :src="this.movies[MainLocs[3].movie - 1].poster_path" @click="move(movies[MainLocs[3].movie - 1])">
    <!-- 네번째 이미지 end -->
    <!-- 다섯번째 이미지 start -->
    <div id="poster5" class="my-2 py-5">
      <h3>{{ MainLocs[4].name }}</h3>
      <p>{{ MainLocs[4].address[0] + ' ' + MainLocs[4].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster5" class="poster" :src="this.movies[MainLocs[4].movie - 1].poster_path" @click="move(movies[MainLocs[4].movie - 1])">
    <!-- 다섯번째 이미지 end -->
    <!-- 여섯번째 이미지 start -->
    <div id="poster6" class="my-2 py-5">
      <h3>{{ MainLocs[5].name }}</h3>
      <p>{{ MainLocs[5].address[0] + ' ' + MainLocs[5].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster6" class="poster" :src="this.movies[MainLocs[5].movie - 1].poster_path" @click="move(movies[MainLocs[5].movie - 1])">
    <!-- 여섯번째 이미지 end -->
    <!-- 일곱번째 이미지 start -->
    <div id="poster7" class="my-2 py-5">
      <h5>{{ MainLocs[6].name }}</h5>
      <p>{{ MainLocs[6].address[0] + ' ' + MainLocs[6].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster7" class="poster" :src="this.movies[MainLocs[6].movie - 1].poster_path" @click="move(movies[MainLocs[6].movie - 1])">
    <!-- 일곱번째 이미지 end -->
    <!-- 여덟번째 이미지 start -->
    <div id="poster8" class="my-2 py-5">
      <h3>{{ MainLocs[7].name }}</h3>
      <p>{{ MainLocs[7].address[0] + ' ' + MainLocs[7].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster8" class="poster" :src="this.movies[MainLocs[7].movie - 1].poster_path" @click="move(movies[MainLocs[7].movie - 1])">
    <!-- 여덟번째 이미지 end -->
    <!-- 아홉번째 이미지 start -->
    <div id="poster9" class="my-2 py-5">
      <h5>{{ MainLocs[8].name }}</h5>
      <p>{{ MainLocs[8].address[0] + ' ' + MainLocs[8].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster9" class="poster" :src="this.movies[MainLocs[8].movie - 1].poster_path" @click="move(movies[MainLocs[8].movie - 1])">
    <!-- 아홉번째 이미지 end -->
    <!-- 열번째 이미지 start -->
    <div id="poster10" class="my-2 py-5">
      <h5>{{ MainLocs[9].name }}</h5>
      <p>{{ MainLocs[9].address[0] + ' ' + MainLocs[9].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster10" class="poster" :src="this.movies[MainLocs[9].movie - 1].poster_path" @click="move(movies[MainLocs[9].movie - 1])">
    <!-- 열번째 이미지 end -->
    <!-- 열한번째 이미지 start -->
    <div id="poster11" class="my-2 py-5">
      <h5>{{ MainLocs[10].name }}</h5>
      <p>{{ MainLocs[10].address[0] + ' ' + MainLocs[10].address[1] }}</p>
      <i class="ion-ios-arrow-right" style="color: black">Go!</i>
    </div>
    <img id="poster11" class="poster" :src="this.movies[MainLocs[10].movie - 1].poster_path" @click="move(movies[MainLocs[10].movie - 1])">
    <!-- 열한번째 이미지 end -->
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
      numbers: [2, 5, 8, 6, 11, 4, 3, 1, 9, 7, 10],
      MainLocs: []
    }
  },
  methods: {
    setToken : function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
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
    move: function (movie) {
      // this.$router.push({ name: 'MovieDetail', params: {item : movie} })
      this.$store.dispatch('setMovie', movie)
      this.$router.push({ name: 'MovieDetail' })
    },
    getLocations: function () {
      let temp = []
      for (let index = 0; index < this.numbers.length; index++) {
        const movie_id = this.numbers[index];
        axios({
          method: 'get',
          url: `${SERVER_URL}/movies/${movie_id}/locations/`,
          headers: this.setToken()
        })
          .then(res =>{
            res.data[0].address = res.data[0].address.split(' ')
            temp.push(res.data[0])
            console.log('temp')
            console.log(temp)
          })
          .catch(err =>{
            console.log(err)
          })
      this.MainLocs = temp
      }
    },

  },
  created: function () {
    this.getMovies(),
    this.getLocations()
  }
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
  left: 9vw;
  top: 20vw;
}
#poster3 {
  width: 11vw;
  position: absolute;
  right: 9vw;
  top: 37vw;
}
#poster4 {
  width: 15vw;
  position: absolute;
  left: 6vw;
  top: 45vw;
}
#poster5 {
  width: 13vw;
  position: absolute;
  left: 23vw;
  top: 30vw;
}
#poster6 {
  width: 15vw;
  position: absolute;
  right: 22vw;
  top: 48vw;
}
#poster7 {
  width: 9vw;
  position: absolute;
  right: 24vw;
  top: 32vw;
}
#poster8 {
  width: 9vw;
  position: absolute;
  left: 25vw;
  top: 14vw;
}
#poster9 {
  width: 8vw;
  position: absolute;
  right: 10vw;
  top: 22vw;
}
#poster10 {
  width: 10vw;
  position: absolute;
  right: 40vw;
  top: 55vw;
}
#poster11 {
  width: 8vw;
  position: absolute;
  left: 25vw;
  top: 53vw;
}
img {
  border-radius: 4%;
  box-shadow: 5px 5px 5px #000;
}
.poster:hover {
  opacity: 0;
  transition:opacity 1s
}
</style>