import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

const routes = [
  { path: '/favorites', component: Favorites },

  { path: '/', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
