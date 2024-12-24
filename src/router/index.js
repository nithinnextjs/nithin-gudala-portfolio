import { createRouter, createWebHistory } from 'vue-router'
import HomeProfile from '../components/home-profile/home-profile.vue'
import AboutDetails from '../components/about-details/about-details.vue'

const routes = [
  {
    path: '/',
    name: 'HomeProfile',
    component: HomeProfile
  },
  {
    path: '/about',
    name: 'AboutDetails',
    component: AboutDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
