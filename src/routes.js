import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ErrorPage from '@/components/ErrorPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/*', component: ErrorPage },
]

export default routes
