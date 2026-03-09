import { ref } from "vue"
import { auth_api } from "@/api_factory/modules/auth"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useRegister = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const register = async (payload: any) => {
        loading.value = true
        try {
            const res = await auth_api.register(payload) as any
            showToast({ title: "Success", message: "Registration successful", toastType: "success" })
            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Registration failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, register }
}
