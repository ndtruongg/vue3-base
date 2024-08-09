import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import middlewareAuth from '@/middleware/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  await middlewareAuth(to, from, next)
  document.title = import.meta.env.VITE_APP_NAME || ''
})

export default router
