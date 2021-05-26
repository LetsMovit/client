<template>
  <div class="p-5">
    <div class="m-5">
    <MovieInfo/>
    </div>
    <hr>
    <div class="m-3">
      <Location
      v-on:changeLatLng="changeLatLng"/>
    </div>
    <div>
      <CommentForm
      :movie="movie"
      :currentLoc="currentLoc"
      />
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
  props: {
    movie: Object,
  },
  data: function () {
    return {
      movieInfo: this.$store.state.movieInfo,
      currentLoc: this.$store.state.currentLocation,
    }
  },
  methods: {
    changeLatLng: function (location) {
      this.currentLoc = location
    },
  },
  created : function () {
  }
}
</script>

<style>

</style>