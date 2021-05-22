<template>
  <div class="row">
    <!-- poster start -->
    <div class="offset-1 col-5">
      <img :src="movieInfo.poster_path" alt="" style="width: 30vw;">
    </div>
    <!-- poster end -->
    <!-- info start -->
    <div class="col-5">
      <section id="movieInfo">
        <div>
          <h2>{{ movieInfo.title }}</h2>
        </div>
        <div>
          <h5>장르 | </h5>
        </div>
        <div>
          <h5>평점 | {{ movieInfo.vote_average }}점</h5>
        </div>
        <div>
          <h5>개요 |</h5>
          <p>{{ movieInfo.overview }}</p>
        </div>
      </section>
    </div>
    <!-- info end -->
  </div>
</template>

<script>
export default {
  name: 'MovieInfo',
  data: function () {
    return {
      movieInfo: this.$store.state.movieInfo
    }
  }
}
</script>

<style>
#movieInfo {
  text-align: start;
}
</style>