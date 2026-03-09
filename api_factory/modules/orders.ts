import { GATEWAY_ENDPOINT } from '../axios.config'

export const orders_api = {
    create: (payload: any) => GATEWAY_ENDPOINT.post('/orders', payload),
    getMyOrders: (params?: any) => GATEWAY_ENDPOINT.get('/orders/me', { params }),
    getById: (id: string) => GATEWAY_ENDPOINT.get(`/orders/${id}`),
}
