<template>
  <div class="container-fluid">
    <LocationNavbar
    class="border border-5"
    :locations="locations"
    v-on:changeLatLng="changeLatLng"
    />
    <div class="border border-5 row p-4">
      <div class="col-5 d-flex flex-column align-items-center">
        <LocationCard
        style="width: 100%;"
        :currentLoc="currentLoc"
        />
      </div>
      <div class="col-7">
        <CommentAccodion :currentLoc="currentLoc"/>
        <button class="btn btn-primary mt-4 offset-11 col-1"
        data-bs-toggle="modal" data-bs-target="#commentformmodal">write</button>
        <!-- Modal -->
            <div class="modal fade" id="commentformmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content p-5" style="width: 60vw;">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ movieInfo.title }}
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <CommentForm
                    :movie="movie"
                    :currentLoc="currentLoc"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import CommentAccodion from '@/components/Locations/CommentAccodion'
import LocationNavbar from '@/components/Locations/LocationNavbar'
import LocationCard from '@/components/Locations/LocationCard'
import CommentForm from '@/components/MovieDetail/CommentForm'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Location',
  data: function () {
    return {
      movieInfo: this.$store.state.movieInfo,
      locations: null,
      currentLoc: null,
    }
  },
  components: {
    LocationNavbar,
    LocationCard,
    CommentAccodion,
    CommentForm,
  },
  methods: {
    changeLatLng: function(location) {
      this.currentLoc = location
      this.$emit('changeLatLng', location)
    },
    setToken: function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
    getLocations () {
      var movie_id = this.movieInfo.id
      axios({
        method: 'get',
        url: `${SERVER_URL}/movies/${movie_id}/locations/`,
        headers: this.setToken(),
      })
        .then( res => {
          this.locations = res.data
          // console.log(res.data)

          this.$store.dispatch('setCurrentLoc', this.locations[0])
          setTimeout(()=>{
            this.currentLoc = this.$store.state.currentLocation
          }, 1000)
        })
        .catch( err => {
          console.log(err)
        })
    }
    
  },
  created : function () {
    this.getLocations()
  }
}
</script>

<style>

</style>