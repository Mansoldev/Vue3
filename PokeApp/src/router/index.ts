import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/shared/views/HomeView.vue'
import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/shared/views/AboutView.vue')
    },
    {
      ...pokemonRoute
    },
    //Rutas que no existen > Te lleva al home
    {
      path: '/:pathmatch(.*)*',
      redirect: () => { 
        console.log('La ruta no existe')
        return { name: 'home' }
      },
    }
  ]
})

export default router
