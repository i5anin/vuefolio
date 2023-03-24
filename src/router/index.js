import { createRouter, createWebHistory } from 'vue-router';
import HelloPage from '@/vue/pages/HelloPage.vue';
import AboutPage from '@/vue/pages/AboutPage.vue';
import ProjectPage from '@/vue/pages/ProjectPage.vue';
// Error404
import ErrorPage from '@/vue/pages/error/ErrorPage.vue';

const routes = [
  { path: '/', name: 'Hello', component: HelloPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/projects', name: 'Projects', component: ProjectPage },
  // Error404
  { path: '/:pathMatch(.*)', name: 'Error404', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
