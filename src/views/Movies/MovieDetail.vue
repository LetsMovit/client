<template>
  <div>
    {{ movie_info }}
    <Location/>
  </div>
</template>

<script>
import Location from '@/components/MovieDetail/Location.vue'

export default {
  name: 'MovieDetail',
  components: {
    Location,
  },
  props: {
    movie_info: Object,
  },
}
</script>

<style>

</style>