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
        <div class="d-flex align-items-center">
          <h5 class="fw-bold mb-0" style="text-align: center;">
            {{ movieInfo.title }}
          </h5>
          <a href="" @click.prevent="searchYoutube(movieInfo.title)"
          data-bs-toggle="modal" data-bs-target="#youtubemodal">
            <i class="fab fa-youtube fa-2x m-1" style="color: red;"></i></a>
          <!-- Modal -->
            <div class="modal fade" id="youtubemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog d-flex justify-content-center my-5" style="all: initial;">
                <div class="modal-content p-5" style="width: 760px">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ movieInfo.title }}
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="stop"></button>
                  </div>
                  <div class="modal-body">
                    <iframe :src="youtubeId" frameborder="0" style="width: 640px; height: 350px"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->
        </div>
        <div class="p-3">
          <div class="my-1">
            <span >장르 | </span>
            <span class="m-1" v-for="genre in movieInfo.genres"
            :key="genre.id"
            >  {{ genre.genre_name }}   </span>
          </div>
          <div class="my-1">
            <span>평점 |  </span>
            <span class="m-1">{{ movieInfo.vote_average }}점</span>
          </div>
          <div class="my-1">
            <p > 개요 |</p>
            <p>{{ movieInfo.overview }}</p>
            <!-- <button data-bs-toggle="modal" data-bs-target="#exampleModal" style="border: 0; outline: 0;">click</button> -->
          <!-- Modal -->
            <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content p-5">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ movieInfo.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    
                  </div>
                </div>
              </div>
            </div> -->
            <!-- modal end -->
          </div>
        </div>
        
      </section>
    </div>
    <!-- info end -->
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default {
  name: 'MovieInfo',
  data: function () {
    return {
      movieInfo: this.$store.state.movieInfo,
      youtubeId: 'https://www.youtube.com/embed/',
    }
  },
  methods : {
    searchYoutube: function (title) {
      console.log('here')
      const params = {
        part: 'snippet',
        key: API_KEY,
        maxResults: 1,
        type: 'video',
        q: title + '공식 예고편',
      }
      axios({
        methods: 'get',
        url: API_URL,
        params,
      })
        .then(res => {
          this.youtubeId += res.data.items[0].id.videoId
          console.log(this.youtubeId)
        })
        .catch(err => {
          console.log(err)
        })
    },
    stop: function () {
      var iframe = document.getElementsByTagName("iframe")[0];
      var url = iframe.getAttribute('src')
      iframe.setAttribute('src', '')
      iframe.setAttribute('src', url)
    }
  },
}
</script>

<style>
#movieInfo {
  text-align: start;
}
</style>