import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import middlewarePipeline from '@/middleware/middlewarePipeline';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = Array.isArray(to.meta.middleware)
    ? to.meta.middleware
    : [to.meta.middleware];

  const context = {
    from,
    next,
    router,
    to,
  };
  const nextMiddleware = middlewarePipeline(context, middleware, 1);

  return middleware[0]({ ...context, next: nextMiddleware });
});

export default router;
