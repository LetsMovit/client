<template>
  <div class="row">
    <MovieCard 
    v-for="movie in $store.state.movies" 
    :key="movie.id"
    :movie="movie"
    class="col-lg-4 col-sm-6 my-3"
    />
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