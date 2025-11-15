import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import views
import Home from './views/Home.vue'
import Kurzy from './views/Kurzy.vue'
import About from './views/About.vue'
import Reviews from './views/Reviews.vue'
import Contact from './views/Contact.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/kurzy', component: Kurzy },
  { path: '/o-mne', component: About },
  { path: '/recenze', component: Reviews },
  { path: '/kontakt', component: Contact }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app')
