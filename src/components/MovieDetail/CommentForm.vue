<template>
  <div class="container d-flex justify-content-center" style="width: 75vw;">
    <div class="border w-100 rounded border-secondary p-3 mb-2 bg-dark text-white">
      <h2>CommentForm</h2>
      {{ $store.state.currentLocation.id }}
      <br>
      <form>
        <div class="row">
          <div class="offset-1 col-5 p-5">
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
          </div>
          <div class="col-5">
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
            <!-- review start -->
            <div class="form-group">
              <br>
              <label for="Review" class="d-flex flex-column align-items-start">Review</label>
              <textarea class="form-control" id="Review" rows="3" v-model="review"
              placeholder="Your Review will help our Site More Gorgeous!"></textarea>
            </div>
            <!-- review end -->
          </div>
        </div>
        <button class="btn btn-primary" @click.prevent="createComment">Submit</button>
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
    movie: Object,
  },
  data: function () {
    return {
      rating: 0,
      image: null,
      review: '',
      locationInfo: this.$store.state.currentLocation
    }
  },
  methods: {
    setRating: function(rating){
      this.rating= rating
    },
    setToken : function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
    createComment: function() {

      let formData = new FormData();
      let imagefile = this.image
      formData.append('image', imagefile)
      formData.append('content', this.review)
      formData.append('rank', this.rating)

      axios({
        method: 'post',
        url: `${SERVER_URL}/movies/${this.locationInfo.id}/comments/`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `JWT ${this.$store.state.userToken}`          
        },
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })

    },
    handleFileChange(e) {
      this.image = e.target.files[0]
      console.log(this.image)       
    }
  },
}


</script>

<style>
</style>