import axios from '@/plugins/axios';
import dayjs from '@/plugins/dayjs';

const Functions = {
  install(app) {
    const App = app.config.globalProperties;

    App.$dayjs = dayjs;
    App.$axios = axios;

    App.$formatNumber = (num, type = 'en-US') => {
      if (!num) return 0;
      if (type === 'en-US') {
        return new Intl.NumberFormat(type, {
          style: 'decimal',
          maximumFractionDigits: 20,
        }).format(num);
      }
      return parseFloat(num);
    };

    Object.keys(App).forEach((properties) => {
      app.provide(properties, App[properties]);
    });
  },
};

export default Functions;
