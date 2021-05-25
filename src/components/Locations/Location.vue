<template>
  <div class="container-fluid">
    <LocationNavbar
    class="border border-5"
    :locations="locations"
    />
    <div class="border border-5 row p-4">
      <div class="col-5 d-flex flex-column align-items-center">
        <LocationCard
        :location="this.locations[0]"
        style="width: 100%;"
        />
      </div>
      <div class="col-7">
        <CommentAccodion/>
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
    }
  },
  components: {
    LocationNavbar,
    LocationCard,
    CommentAccodion,
  },
  methods: {
    setToken : function () { // header 내용에 토큰 붙여주기
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
          console.log(res.data)
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