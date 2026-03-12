import { G as GATEWAY_ENDPOINT } from './useCustomToast-DxEFbjY8.mjs';

const orders_api = {
  create: (payload) => GATEWAY_ENDPOINT.post("/orders", payload),
  getMyOrders: (params) => GATEWAY_ENDPOINT.get("/orders/me", { params }),
  getById: (id) => GATEWAY_ENDPOINT.get(`/orders/${id}`)
};

export { orders_api as o };
//# sourceMappingURL=orders-CBnaFfAv.mjs.map
