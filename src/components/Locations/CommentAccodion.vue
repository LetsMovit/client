<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div v-for="(comment, index) in comments" :key="index">
        <div class="accordion-item">
          <!-- 0번째일때 start -->
          <div v-if="index === 0">
            <h2 class="accordion-header" :id="'heading' + index">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="index">
                {{ comment.title }}
              </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse show" :aria-labelledby="'heading' + index"
            data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <img :src="comment.image" alt="" style="max-width: 15vw;">
              </div>
            </div>
          </div>
          <!-- 0번째일때 end -->
          <!-- 0번째가 아닐때 start -->
          <div v-else>
            <h2 class="accordion-header" :id="'heading' + index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="index">
                {{ comment.title }}
              </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index"
            data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <img :src="comment.image" alt="" style="max-width: 15vw;">
              </div>
            </div>
          </div>
          <!-- 0번째가 아닐때 end -->
        </div>
      </div>
    </div>
    <button class="btn btn-primary mt-4 offset-10 col-2 p-1"
        data-bs-toggle="modal" data-bs-target="#commentformmodal" >New Comment</button>
    <!-- Modal -->
      <div class="modal fade" id="commentformmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog d-flex justify-content-center" style="all:initial; text-align: center;">
          <div class="modal-content p-4 mt-3" style="width: 50vw;">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New Comment
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <CommentForm
              :currentLoc="currentLoc"
              @trigger="trigger"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- modal end -->
  </div>
</template>

<script>
import axios from 'axios'
import CommentForm from '@/components/MovieDetail/CommentForm'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CommentAccodion',
  components: {
    CommentForm,
  },
  props: {
    currentLoc: Object,
    reviews: Object,
  },
  data: function () {
    return {
      comments: null,
    }
  },
  watch: {
    currentLoc: function () {
      this.getReviews()
    },
    reviews: function () {
      this.getReviews()
    }
  },
  methods: {
    setToken : function () { // header 내용에 토큰 붙여주기
      const config = {
         Authorization : `JWT ${this.$store.state.userToken}`
      }
      return config
    },
    getReviews: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/movies/${this.currentLoc.id}/comments/`,
        headers: this.setToken()
      })
        .then(res => {
          for (let index = 0; index < res.data.length; index++) {
            const element = res.data[index];
            element.image = `${SERVER_URL}${element.image}`
          }
          this.comments = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    trigger: function () {
      setTimeout(()=>{
        this.getReviews()
      }, 1000)
    },
  },
  created: function () {
    setTimeout(()=>{
      this.getReviews()
    }, 2000)
  },
}
</script>

<style>


</style>