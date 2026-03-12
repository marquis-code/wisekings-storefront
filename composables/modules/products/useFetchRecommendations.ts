import { ref } from 'vue'

export const useFetchRecommendations = () => {
    const recommendations = ref<any[]>([])
    const loading = ref(false)

    const fetchRecommendations = async (productId: string, limit = 4) => {
        loading.value = true
        const { $api } = useNuxtApp()
        try {
            const res = await ($api as any)(`/products/${productId}/recommendations`, {
                params: { limit }
            })
            recommendations.value = res.data || res
        } catch (error) {
            console.error('Failed to fetch recommendations:', error)
        } finally {
            loading.value = false
        }
    }

    return { recommendations, loading, fetchRecommendations }
}
