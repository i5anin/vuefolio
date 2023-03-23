import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/vue/pages/HomePage.vue';
import AboutPage from '@/vue/pages/AboutPage.vue';
// import TabTest from '@/pages/TabTest.vue';
import ErrorPage from '@/vue/pages/ErrorPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  // { path: '/test', name: 'Test', component: TabTest },
  { path: '/:pathMatch(.*)', name: 'Error404', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
