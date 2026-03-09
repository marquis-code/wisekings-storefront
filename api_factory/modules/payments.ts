import { GATEWAY_ENDPOINT } from '../axios.config'

export const payments_api = {
    initializePaystack: (payload: any) => GATEWAY_ENDPOINT.post('/payments/paystack/initialize', payload),
    initializeStripe: (payload: any) => GATEWAY_ENDPOINT.post('/payments/stripe/create-session', payload),
}
