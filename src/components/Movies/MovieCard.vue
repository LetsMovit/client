<template>
  <div class="card" style="width: 18rem;">
    <!-- <img src="" class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary" @click.prevent="goDetail(movie_info)">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie_info: Object,
  },
  methods: {
    goDetail: function (movie_info) {
      this.$router.push({ name: 'MovieDetail', params: {movie_info: movie_info} })
    }
  }
}
</script>

<style>

</style>