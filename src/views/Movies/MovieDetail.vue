<template>
  <div id="movie">
    <h3>Movie</h3>
    <MovieInfo/>
    <hr>
    <div id="loc">
      <h3>Place</h3>
    </div>
    <Location/>
  </div>
</template>

<script>
import Location from '@/components/MovieDetail/Location'
import MovieInfo from '@/components/MovieDetail/MovieInfo'

export default {
  name: 'MovieDetail',
  components: {
    MovieInfo,
    Location,
  },
}
</script>

<style>
#loc, #movie {
  text-align: start;
}
</style>