<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-md-8 mt-3 my-5">
        <div class="card card-widget widget-user">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div class="widget-user-header" style="background-image:url('@/assets/user-cover.jpg')">
            <h3 class="widget-user-username text-right">{{ profile }}</h3>
            <h5 class="widget-user-desc text-right">Web Designer</h5>
          </div>
          <div class="widget-user-image">
            <img class="img-circle my-3" :src="profile.image" alt="User Avatar">
            <p>username: {{ profile.user.username }}</p>
            <p>email: {{ profile.user.email}}</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">like genre's count: {{ profile.user.like_genres | length }}</h5>
                  <span class="description-text">{{ profile.user.like_genres }}</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">like locations' count</h5>
                  <span class="description-text">location</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">comments' count</h5>
                  <span class="description-text">comments</span>
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
    }
  },
  created: function () {
  }
}
</script>

<style>
.widget-user-header{
  background-position: center center;
  background-size: cover;
  height: 250px;
}
</style>