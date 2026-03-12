import axios from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/axios/index.js';

const GATEWAY_ENDPOINT = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
GATEWAY_ENDPOINT.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
GATEWAY_ENDPOINT.interceptors.response.use(
  (response) => response.data,
  (error) => {
    var _a, _b;
    const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "An unexpected error occurred";
    return Promise.reject({ ...error, message });
  }
);

const useCustomToast = () => {
  const showToast = (options) => {
    {
      console.error("Toast component not initialized");
      return;
    }
  };
  return {
    showToast
  };
};

export { GATEWAY_ENDPOINT as G, useCustomToast as u };
//# sourceMappingURL=useCustomToast-CwIASTqq.mjs.map
