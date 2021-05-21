import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Join from '@/views/Accounts/Join.vue'
import Profile from '@/views/Accounts/Profile.vue'
import Movies from '@/views/Movies/Movies.vue'
import MovieDetail from '@/views/Movies/MovieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
