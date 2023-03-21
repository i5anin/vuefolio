import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import ErrorPage from '@/components/ErrorPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/*', name: 'Error', component: ErrorPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
