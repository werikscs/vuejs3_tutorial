import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/product-manager',
    component: () => import('../views/ProductManager.vue')
  },
  {
    path: '/user-guide',
    component: () => import('../views/UserGuide.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router