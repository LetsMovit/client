<template>
  <div class="card justify-content-between" style="width: 18rem;">
    <img :src="movie.poster_path" class="card-img-top p-3" alt="..." width="100">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.vote_average }}</p>
      <button class="btn" style="background-color: white; color: gray;" @click="goDetail(movie)">Movit to {{ movie.title }}</button>
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