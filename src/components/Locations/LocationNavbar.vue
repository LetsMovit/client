<template>
  <div class="row">
    <div class="col-5">
      <span class="fs-2 fw-bolder"> Related locations </span>
    </div>
    <div class="col-7 d-flex">
    <LocationNavbarItem
    v-for="location in locations"
    :key="location.id"
    :location="location"
    />
    </div>
  </div>
</template>

<script>
import LocationNavbarItem from '@/components/Locations/LocationNavbarItem'

export default {
  name: 'LocationList',
  components: {
    LocationNavbarItem
  },
  props: {
    locations: Array,
  }
}
</script>

<style>

</style>