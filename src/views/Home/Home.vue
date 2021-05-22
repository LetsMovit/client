<template>
  <div class="home">
   <Map/>
   </div>
</template>

<script>
import movies from '@/views/Home/info.json'
import axios from 'axios'
import Map from '@/components/Home/Map'

export default {
  name: 'Home',
  components: {
    Map,
  },
  methods: {
    getData: function () {
      for (let index = 0; index < movies.length; index++) {
        const element = movies[index]
        if (element.model === 'movies.movie') {
          const data = element.fields
          // console.log(data)
          axios.post('http://127.0.0.1:8000/movies/', {
            title: data.title,
            overview: data.overview,
            poster_path: data.poster_path,
            backdrop_path: data.backdrop_path,
            vote_average: data.vote_average,
            movie_id: data.movie_id,
          })
            .then((res)=> {
              // store 에 저장
              console.log(res)
              this.$store.dispatch('saveMovieList', res.data)
            })
            .catch((err)=> {
              console.log(err)
            })
        }
        else {
          const data2 = element.fields
          const movie_id = data2.movie_id
          axios.post(`http://127.0.0.1:8000/movies/${movie_id}/locations/`, {
            address: data2.address,
            lat: data2.lat,
            lon: data2.lon,
            name: data2.name,
          })
            .then((res)=>{
              this.$store.dispatch('saveLocationList', res.data)
            })
            .catch((err)=>{
              console.log(err)
            })
        }
      }      
    }
  },
  created: function () {
    this.getData()
  }
  
  
}
</script>
