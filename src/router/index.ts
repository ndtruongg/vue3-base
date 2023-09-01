import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import middlewareAuth from '@/middlewares/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    middlewareAuth(to, from, next)
  }
  next()
})

export default router
