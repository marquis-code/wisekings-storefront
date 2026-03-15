import axios from "axios";

const GATEWAY_ENDPOINT = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

GATEWAY_ENDPOINT.interceptors.request.use(
  (config) => {
    if (typeof document !== 'undefined') {
      let token = document.cookie.split('; ').find(row => row.startsWith('wk_store_token='))?.split('=')[1] || '';
      if (!token) {
        token = localStorage.getItem('wk_store_token') || '';
      }
      if (token) config.headers.Authorization = `Bearer ${decodeURIComponent(token)}`;

      // Add i18n and currency headers
      const locale = localStorage.getItem('nuxt-color-mode') === 'null' ? 'en' : localStorage.getItem('i18n_redirected') || 'en';
      const currency = localStorage.getItem('wk_currency') || 'NGN';
      
      config.headers['x-locale'] = locale;
      config.headers['x-currency'] = currency;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

GATEWAY_ENDPOINT.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || "An unexpected error occurred";
    return Promise.reject({ ...error, message });
  }
);

export { GATEWAY_ENDPOINT };
