import { ref } from "vue"
import { products_api } from "@/api_factory/modules/products"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useFetchProductBySlug = () => {
    const loading = ref(false)
    const product = ref<any>(null)
    const { showToast } = useCustomToast()

    const fetchProduct = async (slug: string) => {
        loading.value = true
        try {
            const res = await products_api.getBySlug(slug) as any
            product.value = res.data || res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Failed to fetch product", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, product, fetchProduct }
}
