import { createRouter, createWebHistory } from 'vue-router'
import Counter1Page from '@/counter/Pages/Counter1Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter1Page
    }
  ]
})

export default router
