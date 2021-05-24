<template>
  <div class="container">
    <div class="row d-flex">
      <div 
      v-for="movie in movies" 
      :key="movie.id"
      class="col-lg-3 col-sm-5 w-80 my-3 mx-4"
      >
        <MovieCard :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/Movies/MovieCard'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Movies',
  components: {
  MovieCard,
  },
  data: function () {
    return {
      movies: null,
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

<style>

</style>