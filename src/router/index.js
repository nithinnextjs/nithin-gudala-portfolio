import Vue from 'vue';
import Router from 'vue-router';
import HomeProfile from '../components/home-profile/home-profile.vue'
import AboutDetails from '../components/about-details/about-details.vue'
import EducationDetails from '../components/education-details/education-details.vue'
import ExperienceDetails from '../components/experience-details/experience-details.vue'


Vue.use(Router);

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

const router = new Router({
    routes // shorthand for `routes: routes`
  });
  
  export default router;