<template>
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
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CommentAccodion',
  props: {
    currentLoc: Object,
  },
  data: function () {
    return {
      comments: null,
    }
  },
  watch: {
    currentLoc: function () {
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
      console.log('getReviews 실행!')
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
          console.log(res.data)
          this.comments = res.data
          console.log(this.comments)
        })
        .catch(err => {
          console.log(err)
          console.log(123123123)
        })
    },
  },
  created: function () {
    setTimeout(()=>{
      this.getReviews()
    }, 2000)
  }
}
</script>

<style>


</style>