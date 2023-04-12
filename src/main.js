// Icons
import '@mdi/font/css/materialdesignicons.css'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
const app = createApp(App)
registerPlugins(app)

app.config.globalProperties.$env = {
  version: import.meta.env.VITE_APP_VERSION,
  commitHash: import.meta.env.VITE_COMMIT_HASH,
}

app.mount('#app')
