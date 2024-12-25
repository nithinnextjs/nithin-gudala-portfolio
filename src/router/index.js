import { createRouter, createWebHistory } from 'vue-router';
import HomeProfile from '../components/home-profile/home-profile.vue'
import AboutDetails from '../components/about-details/about-details.vue'
import EducationDetails from '../components/education-details/education-details.vue'
import ExperienceDetails from '../components/experience-details/experience-details.vue'
import ContactDetails from '../components/contact-details/contact-details.vue'


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
  },
  {
    path: '/contact',
    name: 'contacteDetails',
    component: ContactDetails
  }
]

const router = createRouter({
    history: createWebHistory(), // Use HTML5 History mode
    routes, // Define your routes here
  });
  
  export default router;