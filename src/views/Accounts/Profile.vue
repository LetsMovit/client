<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-md-8 mt-3 my-5">
        <div class="card card-widget widget-user">
          <button class="d-flex justify-content-end m-2" style="border: 0; outline: 0; background-color: white;"
          data-bs-toggle="modal" data-bs-target="#profilemodal" 
          ><i class="fas fa-edit"></i></button>
          <!-- Modal -->
          <div class="modal fade" id="profilemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog d-flex justify-content-center">
              <div class="modal-content p-4 mt-3" style="width: 50vw;">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit Profile
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                  <!-- image 수정 -->
                  <h3>Profile Image</h3>
                  <!-- file upload start -->
                  <div class="form-group">
                    <form>
                      <div class="form-group d-flex flex-column align-items-start">
                        <label for="exampleFormControlFile1">Update Your Image</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" 
                        @change="handleFileChange"/>
                      </div>
                    </form>
                  </div>
                  <!-- file upload end -->

                  <hr>
                  <!-- genre 수정 -->
                  <h3>Like Genre</h3>
                  <!-- {{ genres }} -->
                    <div v-for="genre in genres"
                    :key="genre.genre_id"                    
                    class="form-check form-check-inline">
                      <input class="form-check-input"
                       type="checkbox" 
                       id="inlineCheckbox1"
                       v-model="like_genres"
                       :value="genre.id"
                       >
                      <label class="form-check-label" for="inlineCheckbox1">{{ genre.genre_name }}</label>
                    </div>
                    
                
                  <hr>
                  <!-- place 수정 -->
                  <h3>Like Place</h3>
                  <div>
                    <!-- {{ profile.user.like_locations }} -->
                    <p v-for="location in profile.user.like_locations"
                    :key="location.id">
                      {{ location.name }}
                      <button v-if="location in profile.user.like_locations" class="border-0 bg-transparent" 
                      @click="clickUnlike(location)">
                        🤍
                      </button>
                      <button v-else class="border-0 bg-transparent" 
                      @click="clickUnlike(location)">
                        ❤️
                      </button>
                    </p>
                  </div>  
                  <!-- <div v-if="profile.user.like_locations" :v-for="location in profile.user.like_locations"
                  :key="location.id"
                  > -->
                  <!-- {{ location.name }} -->
                  <!-- </div> -->
                  <!-- <div v-else>
                    No Like Locations!
                  </div> -->
                  <hr>
                  <div class="d-flex flex-column">
                    <button class="btn btn-primary"
                    data-bs-dismiss="modal" aria-label="Close"
                    @click="editProfile(profile.user)"
                    >Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <!-- <div class="widget-user-header" style="background-image:url('@/assets/user-cover.jpg')">
          </div> -->
          <div class="widget-user-image">
            <img class="my-3 rounded-circle" style="width: 18rem; height: 18rem;" :src="profile.image" alt="User Avatar">
            <p>{{ profile.user.username }}</p>
            <p><i class="far fa-envelope"></i> {{ profile.user.email}}</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-6 border-right">
                <div class="description-block">
                  <h5 class="description-header">{{ profile.user.like_genres.length }}</h5>
                  <span class="description-text">Like Genre</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <div class="description-block">
                  <h5 class="description-header">{{ profile.user.like_locations.length }}</h5>
                  <span class="description-text">Like Place</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <!-- <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">{{ profile.user.like_comments.length }}</h5>
                  <span class="description-text">My Comments</span>
                </div> -->
                <!-- /.description-block -->
              <!-- </div> -->
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
      genres: null,
      image: null,
      like_genres: [],
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
    editProfile: function(user) {
      if (this.image !== null) {      
        let formData = new FormData();
        let imagefile = this.image
        formData.append('image', imagefile)
        axios({
          method: 'put',
          url: `${SERVER_URL}/accounts/${user.username}/profile/`,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `JWT ${this.$store.state.userToken}`          
          },
        })
          .then(res => {
            const modal = document.querySelector('.modal')
            console.log('we change')
            console.log(res)
            modal.classList.add('hidden')
            this.getProfile()
          })
          .catch(err => {
            console.log(err)
          })
      }
      // if (this.like_genres !== []) {

      //   for (let index = 0; index < this.like_genres.length; index++) {
      //     const element = this.like_genres[index];
      //     console.log(element)          
      //   }

      //   let formData = new FormData();
      //   let genres = this.like_genres
      //   formData.append('like_genres', genres)
      //   axios({
      //     method: 'put',
      //     url: `${SERVER_URL}/accounts/${user.username}/`,
      //     data: formData,
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `JWT ${this.$store.state.userToken}`          
      //     },
      //   })
      //     .then(res => {
      //       const modal = document.querySelector('.modal')
      //       console.log('we change')
      //       console.log(res)
      //       modal.classList.add('hidden')
      //       this.getProfile()
      //       this.like_genres = []
      //       alert('수정완료되었습니다!')
      //     })
      //     .catch(err => {
      //       console.log(err)
      //     })
      // }
    },

    getGenres: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/movies/genre/`,
        headers: this.setToken()
      })
        .then(res=> {
          this.genres = res.data
        })
        .catch(err=> {
          console.log(err)
        })
    },
    handleFileChange(e) {
      this.image = e.target.files[0]
      console.log(this.image)       
    },
    clickUnlike(location) {
      axios({
        method: 'post',
        url: `${SERVER_URL}/movies/${location.id}/like/`,
        headers: this.setToken(),
      })
        .then( res =>{
          console.log(res)
          this.getProfile()
        })
        .catch( err =>{
          console.log(err)
        })
    },
  },
  created: function () {
    this.getGenres()
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