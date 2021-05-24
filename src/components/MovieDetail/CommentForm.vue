<template>
  <div class="container d-flex justify-content-center" style="width: 75vw;">
    <div class="border w-100 rounded border-secondary p-3 mb-2 bg-dark text-white">
      <h2>CommentForm</h2>
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

export default {
  name: 'CommentForm',
  components: {
    StarRating,
  },
  data: function () {
    return {
      rating: 0,
      image: null,
      review: '',
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
      console.log(this.$store.state.movie_info)

      const loc_pk = this.$store.state.movie_info.id
      axios({
        method: 'post',
        url: `http://localhost:8000/${loc_pk}/comments/`,
        headers: this.setToken(),
        data: {
          review: this.review,
          rank: this.rating,
          img: this.image,
          }
        })
          .then(()=>{
            axios.get(
              `http://localhost:8000/${loc_pk}/comments/`
            )
              .then((res)=> {
                this.$store.Comments_about_Movie = res.data
                console.log(res.data)
              })
              .catch((err)=> {
                console.log(err)
              })
          })
      
    },
    handleFileChange(e) {
      // Whenever the file changes, emit the 'input' event with the file data.
      // this.$emit('input', e.target.files[0])
      this.image = e.target.files[0]            
    }
  },
}


</script>

<style>
</style>