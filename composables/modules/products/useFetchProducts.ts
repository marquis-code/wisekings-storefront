import { ref } from "vue"
import { products_api } from "@/api_factory/modules/products"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useFetchProducts = () => {
    const loading = ref(false)
    const products = ref<any[]>([])
    const total = ref(0)
    const { showToast } = useCustomToast()

    // Deterministic key for localStorage based on params
    const getStorageKey = (params?: any) => `wk_cache_products_${JSON.stringify(params || {})}`;

    const fetchProducts = async (params?: any) => {
        const cacheKey = getStorageKey(params);
        
        // 1. Aggressive Hydration: Check localStorage first for instant UI
        if (typeof window !== 'undefined') {
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                try {
                    const parsed = JSON.parse(cached);
                    products.value = parsed.data || [];
                    total.value = parsed.total || 0;
                    // We don't set loading=false here to allow the background fetch to proceed
                } catch (e) {
                    console.warn("Failed to parse product cache", e);
                }
            }
        }

        loading.value = true
        try {
            const res = await products_api.get(params) as any
            const data = res.data || []
            const totalCount = res.total || 0

            // 2. Update state with fresh data
            products.value = data
            total.value = totalCount

            // 3. Persist fresh data to localStorage for next time
            if (typeof window !== 'undefined') {
                localStorage.setItem(cacheKey, JSON.stringify({ 
                    data, 
                    total: totalCount, 
                    timestamp: Date.now() 
                }));
            }
        } catch (err: any) {
            // Only show toast if we don't have cached data (to be less intrusive)
            if (products.value.length === 0) {
                showToast({ title: "Error", message: err.message || "Failed to fetch products", toastType: "error" })
            }
        } finally {
            loading.value = false
        }
    }

    return { loading, products, total, fetchProducts }
}
