import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SponsorsView from '@/views/SponsorsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsView
    },
    // Wildcard route for handling non-existent routes
    {
      path: '/:catchAll(.*)', // Matches any path that hasn't been matched by other routes
      redirect: '/' // Redirect to the home route
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
