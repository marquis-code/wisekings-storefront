import { G as GATEWAY_ENDPOINT } from "./axios.config-BkQMnnZW.js";
const products_api = {
  get: (params) => GATEWAY_ENDPOINT.get("/products", { params }),
  getBySlug: (slug) => GATEWAY_ENDPOINT.get(`/products/slug/${slug}`),
  getById: (id) => GATEWAY_ENDPOINT.get(`/products/${id}`),
  getCategories: () => GATEWAY_ENDPOINT.get("/products/categories/all")
};
export {
  products_api as p
};
//# sourceMappingURL=products-CedEkygp.js.map
