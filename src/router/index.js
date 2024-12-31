import { createRouter, createWebHistory } from 'vue-router';  // Import Vue Router functions
import HomeProfile from '../components/home-profile/home-profile.vue';  // Import components
import AboutDetails from '../components/about-details/about-details.vue';
import EducationDetails from '../components/education-details/education-details.vue';
import ExperienceDetails from '../components/experience-details/experience-details.vue';
import ContactDetails from '../components/contact-details/contact-details.vue';

// Define your routes
const routes = [
  { path: '/', name: 'HomeProfile', component: HomeProfile },
  { path: '/about', name: 'AboutDetails', component: AboutDetails },
  { path: '/education', name: 'EducationDetails', component: EducationDetails },
  { path: '/experience', name: 'ExperienceDetails', component: ExperienceDetails },
  { path: '/contact', name: 'ContactDetails', component: ContactDetails },
];

// Create a router instance using createRouter
const router = createRouter({
  history: createWebHistory(), // Using HTML5 history mode
  routes
});

export default router;  // Export the router to be used in the app
