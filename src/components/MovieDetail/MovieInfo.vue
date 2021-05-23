<template>
  <div class="row">
    <!-- poster start -->
    <div class="offset-1 col-3">
      <img :src="movieInfo.poster_path" alt="" style="width: 20vw;">
    </div>
    <!-- poster end -->
    <!-- info start -->
    <div class="offset-1 col-7">
      <section id="movieInfo">
        <div>
          Movie Info
        </div>
        <hr>
        <div class="my-2">
          <h5 style="line-height: 20px;"><strong>{{ movieInfo.title }}</strong></h5>
        </div>
        <div class="p-3">
          <div class="my-1">
            <p style="font-size: 10px;">장르 | </p>
          </div>
          <div class="my-1">
            <p style="font-size: 10px">평점 | {{ movieInfo.vote_average }}점</p>
          </div>
        </div>
        <div class="my-5">
          Rating
          <hr>
          <div class="p-3">
            <p style="font-size: 10px;">별점</p>
            <p style="font-size: 10px;">내가 작성한 후기</p>
          </div>
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