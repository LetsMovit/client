<template>
  <div class="d-inline mx-auto d-flex align-items-center">
    <button class="fs-6 btn btn-primary rounded-3" @click.prevent="selectLocation(location)">{{ loc.name }} </button>
  </div>
</template>

<script>

export default {
  name: 'LocationItem',
  props: {
    location: Object
  },
  data: function () {
    return {
      loc: this.location,
    }
  },
  methods: {
    selectLocation: function (location) {
      this.$emit('changeLatLng', location)
    }
  }
}
</script>

<style>

</style>