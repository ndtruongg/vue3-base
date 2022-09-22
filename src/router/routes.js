const views = (path) => {
  return () => import(`@/components/pages/${path}`);
};

export default [
  {
    path: '/',
    name: 'Home',
    component: views('Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: views('About.vue')
  }
];
