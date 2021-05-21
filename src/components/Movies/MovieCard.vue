<template>
  <div class="card" style="width: 18rem;">
    <!-- <img src="" class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.vote_average }}</p>
      <button class="btn btn-primary" @click="goDetail(movie)">Movit to {{ movie.title }}</button>
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
      // this.$router.push({ name: 'MovieDetail', params: {item : movie} })
      this.$router.push({ name: 'MovieDetail' })
      this.$store.dispatch('setMovie', movie)
    }
  }
}
</script>

<style>

</style>