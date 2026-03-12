import { ref } from "vue"
import { payments_api } from "@/api_factory/modules/payments"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useInitializePayment = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const initializePaystack = async (payload: any) => {
        loading.value = true
        try {
            const res = await payments_api.initializePaystack(payload) as any
            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Payment initialization failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    const initializeStripe = async (payload: any) => {
        loading.value = true
        try {
            const res = await payments_api.initializeStripe(payload) as any
            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Payment initialization failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    const initializePayment = async (payload: any) => {
        loading.value = true
        try {
            const res = await payments_api.initializePayment(payload) as any
            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Payment initialization failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, initializePaystack, initializeStripe, initializePayment }
}
