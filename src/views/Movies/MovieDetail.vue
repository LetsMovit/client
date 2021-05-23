<template>
  <div class="p-5">
    <div class="m-5">
    <MovieInfo/>
    </div>
    <div class="m-5">
      <Location/>
    </div>
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

</style>