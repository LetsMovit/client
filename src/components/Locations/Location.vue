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
        <CommentAccodion :currentLoc="currentLoc" :reviews="reviews"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

import CommentAccodion from '@/components/Locations/CommentAccodion'
import LocationNavbar from '@/components/Locations/LocationNavbar'
import LocationCard from '@/components/Locations/LocationCard'

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
      console.log(this.movieInfo, 'asdfasfasdfasdf')
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
    },
  },
  created : function () {
    this.getLocations()
  }
}
</script>

<style>

</style>