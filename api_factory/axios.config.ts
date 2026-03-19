import axios from "axios";

const GATEWAY_ENDPOINT = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:3000/api/v1",
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
  async (error) => {
    const originalRequest = error.config;
    const isRefreshRequest = originalRequest.url.includes('/auth/refresh');

    if (error.response?.status === 401 && !originalRequest._retry && !isRefreshRequest) {
      originalRequest._retry = true;
      
      try {
        // Get refresh token from cookie or localStorage
        let refreshToken = document.cookie.split('; ').find(row => row.startsWith('wk_store_refresh='))?.split('=')[1] || '';
        if (!refreshToken) {
          refreshToken = localStorage.getItem('wk_store_refresh') || '';
        }

        if (refreshToken) {
          const res = await axios.post(`${GATEWAY_ENDPOINT.defaults.baseURL}/auth/refresh`, { refreshToken });
          const { accessToken, refreshToken: newRefreshToken } = res.data.data.tokens;

          // Update tokens in cookies (with expiration) and localStorage
          const cookieOptions = "; path=/; max-age=604800; SameSite=Lax"; // 7 days
          document.cookie = `wk_store_token=${accessToken}${cookieOptions}`;
          document.cookie = `wk_store_refresh=${newRefreshToken}${cookieOptions}`;
          localStorage.setItem('wk_store_token', accessToken);
          localStorage.setItem('wk_store_refresh', newRefreshToken);

          // Retry the original request
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return GATEWAY_ENDPOINT(originalRequest);
        }
      } catch (refreshError) {
        console.error("Session expired. Please login again.");
        // Optional: window.location.href = '/login';
      }
    }

    const message = error.response?.data?.message || error.message || "An unexpected error occurred";
    return Promise.reject({ ...error, message });
  }
);

export { GATEWAY_ENDPOINT };
