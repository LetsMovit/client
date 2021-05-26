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
  </div>
</template>

<script>
import Location from '@/components/Locations/Location'
import MovieInfo from '@/components/MovieDetail/MovieInfo'

export default {
  name: 'MovieDetail',
  components: {
    MovieInfo,
    Location,
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