<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-md-8 mt-3 my-5">
        <div class="card card-widget widget-user">
          <button class="d-flex justify-content-end m-2" style="border: 0; outline: 0; background-color: white;"
          @click.prevent="editProfile"><i class="fas fa-edit"></i></button>
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div class="widget-user-header" style="background-image:url('@/assets/user-cover.jpg')">
          </div>
          <div class="widget-user-image">
            <img class="img-circle my-3" :src="profile.image" alt="User Avatar">
            <p>{{ profile.user.username }}</p>
            <p><i class="far fa-envelope"></i> {{ profile.user.email}}</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">{{ profile.user.like_genres.length }}</h5>
                  <span class="description-text">Genre</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">{{ profile.user.like_locations.length }}</h5>
                  <span class="description-text">Place</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">{{ profile.user.like_comments.length }}</h5>
                  <span class="description-text">Comments</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Profile',
  data: function () {
    return {
      profile: this.getProfile(),
    }
  },
  methods: {
    setToken: function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
    getProfile: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/accounts/${this.$store.getters.decodedToken.username}/profile/`,
        headers: this.setToken(),
      })
        .then(res=> {
          console.log(res)
          res.data.image = `${SERVER_URL}${res.data.image}`
          this.profile = res.data
        })
        .catch(err=> {
          console.log(err)
        })
    },
    editProfile: function () {
      axios({
        method: 'put',
        url: `${SERVER_URL}/accounts/${this.$store.getters.decodedToken.username}/profile/`,
        headers: this.setToken(),
      })
        .then(res => {
          console.log('요청 보낸다!')
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
}
</script>

<style>
.widget-user-header{
  background-position: center center;
  background-size: cover;
  height: 250px;
}
</style>