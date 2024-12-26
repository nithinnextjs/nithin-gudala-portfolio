// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import HomeProfile from '../components/home-profile/home-profile.vue'
// @ts-ignore
import AboutDetails from '../components/about-details/about-details.vue'
// @ts-ignore
import EducationDetails from '../components/education-details/education-details.vue'
// @ts-ignore
import ExperienceDetails from '../components/experience-details/experience-details.vue'
import ContactDetails from '../components/contact-details/contact-details.vue';



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
    history: createWebHistory('/nithin-gudala-portfolio/'), // Use HTML5 History mode
    routes, // Define your routes here
  });
  
  export default router;