<template>
  <div>
    {{ this.$store.state.movieInfo }}
    <Location/>
  </div>
</template>

<script>
import Location from '@/components/MovieDetail/Location'

export default {
  name: 'MovieDetail',
  components: {
    Location,
  },
}
</script>

<style>

</style>