// import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
// import store from './store'
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);
app.use(router);

// Используем Vuetify в качестве плагина
app.use(Vuetify);

app.mount('#app');
