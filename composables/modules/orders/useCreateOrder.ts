import { ref } from "vue"
import { orders_api } from "@/api_factory/modules/orders"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useCreateOrder = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const createOrder = async (payload: any) => {
        loading.value = true
        try {
            const res = await orders_api.create(payload) as any
            showToast({ title: "Success", message: "Order created successfully", toastType: "success" })
            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Failed to create order", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, createOrder }
}
