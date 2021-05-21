<template>
  <div>
    {{ this.$route.params.item }}
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
}
</script>

<style>

</style>