<template>
  <div class="row d-flex">
    <div 
    v-for="movie in $store.state.movies" 
    :key="movie.id"
    class="col-lg-3 col-sm-5 w-80 my-3 mx-4"
    >
      <MovieCard :movie="movie"/>
    </div>
    
  </div>
</template>

<script>
import MovieCard from '@/components/Movies/MovieCard'

export default {
  name: 'Movies',
  components: {
  MovieCard,
  },
}

</script>

<style>

</style>