import { createRouter, createWebHistory } from 'vue-router'
import TempView from '@/views/TempView.vue'
import HomeView from '@/views/HomeView.vue'
import FireAnimationView from '@/views/FireAnimationView.vue'
import HeroAnimationView from '@/views/HeroAnimationView.vue'
import RegisterAnimationView from '@/views/RegistrationAnimationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fire-animation',
      name: 'fire',
      component: FireAnimationView
    },
    {
      path: '/hero-animation',
      name: 'hero',
      component: HeroAnimationView
    },
    {
      path: '/registration-animation',
      name: 'registration',
      component: RegisterAnimationView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
