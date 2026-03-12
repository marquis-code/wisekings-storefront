import { ref } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { o as orders_api } from './orders-CBnaFfAv.mjs';
import { u as useCustomToast } from './useCustomToast-CwIASTqq.mjs';

const useFetchOrders = () => {
  const loading = ref(false);
  const orders = ref([]);
  const total = ref(0);
  const { showToast } = useCustomToast();
  const fetchOrders = async (params) => {
    loading.value = true;
    try {
      const res = await orders_api.getMyOrders(params);
      orders.value = res.data || [];
      total.value = res.total || 0;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Failed to fetch orders", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, orders, total, fetchOrders };
};

export { useFetchOrders as u };
//# sourceMappingURL=useFetchOrders-f7F6HpNi.mjs.map
