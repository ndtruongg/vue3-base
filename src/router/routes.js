import auth from '@/middleware/auth';
import log from '@/middleware/log';

const views = (path) => {
  return () => import(`@/components/pages/${path}`);
};

export default [
  {
    path: '/',
    component: () => import('@/components/templates/TheMain.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: views('Home.vue'),
        meta: {
          middleware: log
        }
      },
      {
        path: 'about',
        name: 'About',
        component: views('About.vue'),
        meta: {
          middleware: [log, auth]
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: views('Login.vue'),
        meta: {
          middleware: log
        }
      }
    ]
  }
];
