<template>
  <div class="container" style="position: relative;">
    <img id="map" src="@/assets/map.png" alt="" class="my-5" style="width: 40vw">
  </div>
</template>

<script>
export default {
  name: 'Map',
}
</script>

<style>
#map:hover {
  transform: scale(1.2);
  transition-duration: 1s
}
</style>