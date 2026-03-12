import { ref } from 'vue'
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export const useShipping = () => {
    const loading = ref(false)
    const shippingFee = ref(0)
    const distanceInfo = ref<any>(null)

    const calculateFee = async (lat: number, lng: number, method: string = 'lagos_dispatch') => {
        loading.value = true
        try {
            const res = await GATEWAY_ENDPOINT.get('/shipping/calculate', { params: { lat, lng, method } }) as any
            const data = res.data || res
            shippingFee.value = data.fee
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
