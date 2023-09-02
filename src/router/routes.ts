const getView = (path: string) => {
  return () => import(`@/views/${path}.vue`)
}

export const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Home',
        component: getView('HomeView'),
        meta: {
          auth: true
        }
      },
      {
        path: 'auth/login',
        name: 'Login',
        component: getView('LoginView')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: getView('AboutView')
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
