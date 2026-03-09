import { ref } from "vue"
import { products_api } from "@/api_factory/modules/products"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useFetchCategories = () => {
    const loading = ref(false)
    const categories = ref<any[]>([])
    const { showToast } = useCustomToast()

    const fetchCategories = async () => {
        loading.value = true
        try {
            const res = await products_api.getCategories() as any
            categories.value = res.data || res || []
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Failed to fetch categories", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, categories, fetchCategories }
}
