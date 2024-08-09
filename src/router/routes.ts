import { SCREEN } from './screen'

export const routes = [
  {
    path: SCREEN.home.path,
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: SCREEN.home.name,
        redirect: {
          name: SCREEN.dashboard.name
        }
      },
      {
        path: SCREEN.dashboard.path,
        name: SCREEN.dashboard.name,
        component: () => import(`@/pages/dashboard.vue`)
      },

      {
        path: 'icons',
        name: 'Icons',
        component: () => import('@/pages/icons.vue')
      },
      {
        path: 'typography',
        name: 'Typography',
        component: () => import('@/pages/typography.vue')
      },
      {
        path: 'tables',
        name: 'Tables',
        component: () => import('@/pages/tables.vue')
      },
      {
        path: 'form-layouts',
        name: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: SCREEN.login.path,
        name: SCREEN.login.name,
        component: () => import('@/pages/login.vue')
      },
      {
        path: '/loi-he-thong',
        name: 'Internal Server Error',
        component: () => import('@/pages/error500.vue')
      },
      {
        path: '/khong-tim-thay',
        name: 'Not Found',
        component: () => import('@/pages/error404.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/error404.vue')
      }
    ]
  }
]
