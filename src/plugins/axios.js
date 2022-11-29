import axios from 'axios';
import jsCookie from 'js-cookie';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

instance.interceptors.request.use(
  (request) => {
    const token = jsCookie.get('access-token');
    request.headers.common['Access-Control-Allow-Origin'] = '*';
    request.headers.common['Access-Control-Allow-Methods'] = 'GET';
    request.headers.common['Cache-Control'] = 'no-store';
    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`;
    }
    const userAccountId = 1;
    if (userAccountId) {
      request.params = {
        ...request.params,
        user_auth_id: userAccountId,
      };
    }

    return request;
  },
  (error) => Promise.reject(error)
);

export default axios;
