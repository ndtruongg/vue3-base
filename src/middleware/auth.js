import Cookies from 'js-cookie';

export default ({ next, router }) => {
  if (!Cookies.get('access_token')) {
    return router.push({ name: 'Login' });
  }

  return next();
};
