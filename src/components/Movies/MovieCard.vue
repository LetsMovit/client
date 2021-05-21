<template>
  <div class="card" style="width: 18rem;">
    <!-- <img src="" class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-primary" @click="goDetail(movie)">Go Detail</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  methods: {
    goDetail: function (movie) {
      this.$router.push({ name: 'MovieDetail', params:movie })
    }
  }
}
</script>

<style>

</style>