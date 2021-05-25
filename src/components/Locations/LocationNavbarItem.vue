<template>
  <div class="d-inline mx-auto d-flex align-items-center">
    <button class="fs-6 btn btn-primary rounded-3" @click.prevent="selectLocation(location)">{{ location.name }} </button>
  </div>
</template>

<script>
export default {
  name: 'LocationItem',
  props: {
    location: Object
  },
  methods: {
    selectLocation : function (location) {
      this.$store.dispatch('setCurrentLoc', location)
      this.$store.dispatch('change')
    }
  }
}
</script>

<style>

</style>