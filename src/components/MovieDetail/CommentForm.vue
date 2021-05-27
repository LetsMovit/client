<template>
  <div class="container d-flex justify-content-center">
    <div class="border w-100 rounded border-secondary p-5 mb-2 bg-dark text-white" style="width: 720px;">
      <h2>{{ currentLoc.name }}</h2>
      <br>
      <form>
        <div class="row">
          <div class="col-6">
            <!-- file upload start -->
            <div class="form-group">
              <form>
                <div class="form-group d-flex flex-column align-items-start">
                  <label for="exampleFormControlFile1">Please Select Your Image</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="handleFileChange"/>
                </div>
              </form>
            </div>
            <!-- file upload end -->
          </div>
          <div class="col-6">
            <!-- rank start -->
            <div class="form-group d-flex flex-column align-items-start">
              <label for="Rank">Rank</label>
              <star-rating id="Rank"
              @rating-selected ="setRating" 
              :active-color="['green']"
              :show-rating="false"
              />
            </div>
            <!-- rank end -->
            <!-- review start -->
            <div class="form-group">
              <br>
              <label for="Review" class="d-flex flex-column align-items-start">Title</label>
              <input class="form-control" v-model="title" type="text">

            </div>
            <div class="form-group">
              <br>
              <label for="Review" class="d-flex flex-column align-items-start">Review</label>
              <textarea class="form-control" id="Review" rows="3" v-model="review"
              placeholder="Your Review will help our Site More Gorgeous!"></textarea>
            </div>
            <!-- review end -->
          </div>
        </div>
        <button class="btn btn-primary" @click.prevent="[createComment(), trigger()]"
        data-bs-dismiss="modal" aria-label="Close">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL


export default {
  name: 'CommentForm',
  components: {
    StarRating,
  },
  props: {
    currentLoc: Object,
  },
  data: function () {
    return {
      title: null,
      rating: 0,
      image: null,
      review: '',
      locationInfo: this.currentLoc
    }
  },
  methods: {
    setRating: function(rating){
      this.rating= rating
    },
    setToken: function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
    createComment: function() {
      let formData = new FormData();
      let imagefile = this.image
      formData.append('title', this.title)
      formData.append('image', imagefile)
      formData.append('content', this.review)
      formData.append('rank', this.rating)

      axios({
        method: 'post',
        url: `${SERVER_URL}/movies/${this.currentLoc.id}/comments/`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `JWT ${this.$store.state.userToken}`          
        },
      })
        .then(res => {
          const modal = document.querySelector('.modal')
          console.log('we create')
          console.log(res)
          modal.classList.add('hidden')

        })
        .catch(err => {
          console.log(err)
        })

    },
    handleFileChange(e) {
      this.image = e.target.files[0]
      console.log(this.image)       
    },
    initLocation: function () {
      this.locationInfo = this.$store.state.locationInfo
    },
    trigger: function () {
      this.$emit("trigger")
    },
  },
  created: function () {
    setTimeout(()=>{
      console.log(this.$store.state.locationInfo)
      this.initLocation()
    }, 1000)
  }
}


</script>

<style>
</style>