<template>
  <div class="row">
    <router-link :to="{ name: 'MovieDetail' }">
      <div v-for="movie in $store.state.movie_list" :key="movie.movie_id"
        @click="onClick" class="col-4 my-3">
        <MovieCard
          :movie="movie"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
import MovieCard from '@/components/Movies/MovieCard'

export default {
  name: 'Movies',
  components: {
    MovieCard,
  },
  methods: {
    onClick: function () {
      this.$router.push( {name: 'MovieDetail'})
    },
  }
}

</script>

<style>

</style>