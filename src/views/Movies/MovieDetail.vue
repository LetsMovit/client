<template>
  <div>
    {{ movie }}
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
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>