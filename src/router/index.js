import Vue from 'vue';
import Router from 'vue-router';

// Import components
import HomeProfile from '../components/home-profile/home-profile.vue';
import AboutDetails from '../components/about-details/about-details.vue';
import EducationDetails from '../components/education-details/education-details.vue';
import ExperienceDetails from '../components/experience-details/experience-details.vue';
import ContactDetails from '../components/contact-details/contact-details.vue';

// Use Vue Router
Vue.use(Router);

const routes = [
  {
    path: '/',  // Home path is correct
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
    name: 'ContactDetails',
    component: ContactDetails
  }
];

export default new Router({
  mode: 'history',  // Enable history mode
  routes
});
