const getView = (path: string) => {
  return () => import(`@/views/${path}.vue`)
}

export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: getView('Home'),
        meta: {
          auth: false
        }
      },
      {
        path: '/about',
        name: 'about',
        component: getView('AboutView')
      },
      {
        path: 'auth/login',
        name: 'Login',
        component: getView('LoginView')
      }
    ]
  },
  {
    path: '/internal-error',
    name: 'Internal Server Error',
    component: getView('InternalError')
  },
  {
    path: '/not-found',
    name: 'Not Found',
    component: getView('NotFound')
  },
  {
    path: '/:pathMatch(.*)*',
    component: getView('NotFound')
  }
]
