import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import TabTest from '@/components/TabTest.vue';
import ErrorPage from '@/components/ErrorPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/test', name: 'Test', component: TabTest },
  { path: '/:pathMatch(.*)', name: 'Error404', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
