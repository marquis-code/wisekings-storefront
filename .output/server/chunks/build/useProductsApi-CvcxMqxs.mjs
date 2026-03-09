import { e as useNuxtApp } from './server.mjs';

function useProductsApi() {
  const { $api } = useNuxtApp();
  return {
    findAll(params) {
      return $api("/products", { params });
    },
    findBySlug(slug) {
      return $api(`/products/slug/${slug}`);
    },
    findById(id) {
      return $api(`/products/${id}`);
    },
    getCategories() {
      return $api("/products/categories/all");
    }
  };
}

export { useProductsApi as u };
//# sourceMappingURL=useProductsApi-CvcxMqxs.mjs.map
