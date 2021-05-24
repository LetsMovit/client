<template>
  <div class="p-5">
    <div class="m-5">
    <MovieInfo/>
    </div>
    <hr>
    <div class="m-3">
      <Location/>
    </div>
    <div>
      <CommentForm/>
    </div>
  </div>
</template>

<script>
import Location from '@/components/Locations/Location'
import MovieInfo from '@/components/MovieDetail/MovieInfo'
import CommentForm from '@/components/MovieDetail/CommentForm'

export default {
  name: 'MovieDetail',
  components: {
    MovieInfo,
    Location,
    CommentForm,
  },
}
</script>

<style>

</style>