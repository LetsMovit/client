<template>
  <div class="row">
    <MovieCard 
    v-for="movie in $store.state.movies" 
    :key="movie.id"
    class="col-4 my-3"
    :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/Movies/MovieCard.vue'

export default {
  name: 'Movies',
  components: {
    MovieCard,
  },
}

</script>

<style>

</style>