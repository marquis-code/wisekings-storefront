import { ref } from "vue"
import { auth_api } from "@/api_factory/modules/auth"
import { useCustomToast } from "@/composables/core/useCustomToast"
import { useAuthState } from "@/composables/useAuthState"

export const useLogout = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()
    const { logout: clearAuth } = useAuthState()

    const logout = async () => {
        loading.value = true
        try {
            await auth_api.logout()
            clearAuth()
            showToast({ title: "Success", message: "Logged out", toastType: "success" })
            navigateTo('/login')
        } catch (err: any) {
            // Even if API fails, clear local state
            clearAuth()
            navigateTo('/login')
        } finally {
            loading.value = false
        }
    }

    return { loading, logout }
}
