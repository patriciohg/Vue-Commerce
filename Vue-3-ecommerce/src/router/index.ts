import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:categoryId',
      name: 'category',     
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',     
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/about',
      name: 'about',     
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
