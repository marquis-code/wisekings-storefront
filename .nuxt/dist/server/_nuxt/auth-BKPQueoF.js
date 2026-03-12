import { G as GATEWAY_ENDPOINT } from "./axios.config-BkQMnnZW.js";
const auth_api = {
  login: (payload) => GATEWAY_ENDPOINT.post("/auth/login", payload),
  register: (payload) => GATEWAY_ENDPOINT.post("/auth/register", { ...payload, userType: "customer" }),
  refreshToken: (refreshToken) => GATEWAY_ENDPOINT.post("/auth/refresh", { refreshToken }),
  logout: () => GATEWAY_ENDPOINT.post("/auth/logout"),
  forgotPassword: (email) => GATEWAY_ENDPOINT.post("/auth/forgot-password", { email }),
  resetPassword: (payload) => GATEWAY_ENDPOINT.post("/auth/reset-password", payload),
  verifyOtp: (payload) => GATEWAY_ENDPOINT.post("/auth/verify-otp", payload),
  resendOtp: (payload) => GATEWAY_ENDPOINT.post("/auth/resend-otp", payload),
  verifyLoginOtp: (payload) => GATEWAY_ENDPOINT.post("/auth/verify-login-otp", payload),
  socialLogin: (payload) => GATEWAY_ENDPOINT.post("/auth/social-login", payload),
  updateProfile: (payload) => GATEWAY_ENDPOINT.patch("/auth/profile", payload)
};
export {
  auth_api as a
};
//# sourceMappingURL=auth-BKPQueoF.js.map
