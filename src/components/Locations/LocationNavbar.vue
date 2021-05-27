<template>
  <div class="row">
    <div class="col-5 my-2">
      <span class="fs-2 fw-bolder"> Related locations </span>
    </div>
    <div class="col-7 d-flex">
    <LocationNavbarItem
    v-for="location in locations"
    :key="location.id"
    :location="location"
    v-on:changeLatLng="changeLatLng"
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
  },
  methods: {
    changeLatLng: function (location) {
      this.$emit('changeLatLng', location)
    }
  }
}
</script>

<style>

</style>