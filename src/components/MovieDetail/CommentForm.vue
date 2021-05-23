<template>
  <div class="container d-flex justify-content-center">
    <div class="border w-50 rounded border-secondary d-flex flex-column align-items-center p-3 mb-2 bg-dark text-white">
      <h2>CommentForm</h2>
      <form>
        <div class="form-group">
          <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Please Select Your Image</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="handleFileChange"/>
            </div>
          </form>
        </div>
        <div class="form-group">
          <label for="Review">Review</label>
          <textarea class="form-control" id="Review" rows="3" v-model="review"></textarea>
          <small id="emailHelp" class="form-text text-muted">Your Review will help our Site More Gorgeous!</small>
        </div>
        <div class="form-group d-flex flex-column align-items-center">
          <label for="Rank">Rank</label>
          <star-rating id="Rank"
          @rating-selected ="setRating" 
          :active-color="['green']"
          :show-rating="false"
          />
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
      review: ''
    }
  },
  methods: {
    setRating: function(rating){
      this.rating= rating
    },
    createComment: function() {
      console.log(this.$store.state.movie_info)

      const loc_pk = this.$store.state.movie_info.id
      axios.post(
        `http://localhost:8000/${loc_pk}/comments/`, {
          review: this.review,
          rank: this.rating,
          img: this.image,
        })
          .then(()=>{
            axios.get(
              `http://localhost:8000/${loc_pk}/comments/`
            )
              .then((res)=> {
                this.$store.Comments_about_Movie = res.data
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