import { e as useNuxtApp } from './server.mjs';

function useOrdersApi() {
  const { $api } = useNuxtApp();
  return {
    create(data) {
      return $api("/orders", { method: "POST", body: data });
    },
    getMyOrders(params) {
      return $api("/orders/me", { params });
    },
    findById(id) {
      return $api(`/orders/${id}`);
    }
  };
}

export { useOrdersApi as u };
//# sourceMappingURL=useOrdersApi-oOcSUVnT.mjs.map
