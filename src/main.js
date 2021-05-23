import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import { createApp } from 'vue'
// import Movies from '@/views/Movies/Movies.vue'

// createApp(Movies).mount('#movies')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// const KAKAO_API_KEY = process.env.VUE_APP_KAKAO_API_KEY
// window.Kakao.init(KAKAO_API_KEY)