import { ref } from "vue"
import { orders_api } from "@/api_factory/modules/orders"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useFetchOrderById = () => {
    const loading = ref(false)
    const order = ref<any>(null)
    const { showToast } = useCustomToast()

    const fetchOrder = async (id: string) => {
        loading.value = true
        try {
            const res = await orders_api.getById(id) as any
            order.value = res.data || res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Failed to fetch order", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, order, fetchOrder }
}
