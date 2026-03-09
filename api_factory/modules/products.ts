import { GATEWAY_ENDPOINT } from '../axios.config'

export const products_api = {
    get: (params?: any) => GATEWAY_ENDPOINT.get('/products', { params }),
    getBySlug: (slug: string) => GATEWAY_ENDPOINT.get(`/products/slug/${slug}`),
    getById: (id: string) => GATEWAY_ENDPOINT.get(`/products/${id}`),
    getCategories: () => GATEWAY_ENDPOINT.get('/products/categories/all'),
}
