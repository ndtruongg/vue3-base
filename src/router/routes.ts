import { SCREEN } from './screen'

const getPage = (path: string) => {
  return () => import(`@/pages/${path}.vue`)
}

export const routes = [
  {
    path: SCREEN.home.path,
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: SCREEN.home.name,
        component: getPage('Home'),
        meta: {
          auth: false
        }
      },
      {
        path: SCREEN.login.path,
        name: SCREEN.login.name,
        component: getPage('Login')
      }
    ]
  },
  {
    path: '/loi-he-thong',
    name: 'Internal Server Error',
    component: getPage('Error500')
  },
  {
    path: '/khong-tim-thay',
    name: 'Not Found',
    component: getPage('Error404')
  },
  {
    path: '/:pathMatch(.*)*',
    component: getPage('Error404')
  }
]
