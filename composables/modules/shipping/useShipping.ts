import { ref } from 'vue'
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export const useShipping = () => {
    const loading = ref(false)
    const shippingFee = ref(0)
    const distanceInfo = ref<any>(null)

    const calculateFee = async (lat: number, lng: number, method: string = 'lagos_dispatch', country: string = 'Nigeria', weight: number = 0, isHomeDelivery: boolean = false) => {
        loading.value = true
        try {
            const res = await GATEWAY_ENDPOINT.get('/shipping/calculate-public', { 
                params: { lat, lng, method, country, weight, isHomeDelivery, _t: Date.now() } 
            }) as any
            const data = res.data || res
            
            // Aggressively force 0 for lagos_dispatch regardless of backend response
            // to match the "To be communicated" UI logic
            if (method === 'lagos_dispatch') {
                shippingFee.value = 0
                return { ...data, fee: 0 }
            }

            shippingFee.value = data.fee || 0
            distanceInfo.value = data
            return data
        } catch (error) {
            console.error('Fee calculation error:', error)
            return null
        } finally {
            loading.value = false
        }
    }

    const getShippingConfig = async () => {
        try {
            const res = await GATEWAY_ENDPOINT.get('/shipping/config') as any
            return res.data || res
        } catch (error) {
            console.error('Fetch shipping config error:', error)
            return null
        }
    }

    return { loading, shippingFee, distanceInfo, calculateFee, getShippingConfig }
}
