import { createRouter, createWebHistory } from 'vue-router'
import HomeProfile from '../components/home-profile/home-profile.vue'
import AboutDetails from '../components/about-details/about-details.vue'
import EducationDetails from '../components/education-details/education-details.vue'
import ExperienceDetails from '../components/experience-details/experience-details.vue'

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
  },
  {
    path: '/education',
    name: 'EducationDetails',
    component: EducationDetails
  },
  {
    path: '/experience',
    name: 'ExperienceDetails',
    component: ExperienceDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
