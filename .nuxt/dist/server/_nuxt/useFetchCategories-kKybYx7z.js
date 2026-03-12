import { ref } from "vue";
import { p as products_api } from "./products-CedEkygp.js";
import { u as useCustomToast } from "./useCustomToast-CwIASTqq.js";
const useFetchProducts = () => {
  const loading = ref(false);
  const products = ref([]);
  const total = ref(0);
  const { showToast } = useCustomToast();
  const fetchProducts = async (params) => {
    loading.value = true;
    try {
      const res = await products_api.get(params);
      products.value = res.data || [];
      total.value = res.total || 0;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Failed to fetch products", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, products, total, fetchProducts };
};
const useFetchCategories = () => {
  const loading = ref(false);
  const categories = ref([]);
  const { showToast } = useCustomToast();
  const fetchCategories = async () => {
    loading.value = true;
    try {
      const res = await products_api.getCategories();
      categories.value = res.data || res || [];
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Failed to fetch categories", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, categories, fetchCategories };
};
export {
  useFetchCategories as a,
  useFetchProducts as u
};
//# sourceMappingURL=useFetchCategories-kKybYx7z.js.map
