import axios from "axios";
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
    const message = error.response?.data?.message || error.message || "An unexpected error occurred";
    return Promise.reject({ ...error, message });
  }
);
export {
  GATEWAY_ENDPOINT as G
};
//# sourceMappingURL=axios.config-BkQMnnZW.js.map
