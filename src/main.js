import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import "swiper/swiper-bundle.min.css"
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// const KAKAO_API_KEY = process.env.VUE_APP_KAKAO_API_KEY
// window.Kakao.init(KAKAO_API_KEY)