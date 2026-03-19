import { ref } from 'vue'
import { auth_api } from '@/api_factory/modules/auth'
import { useAuthState } from '@/composables/useAuthState'
import { useCustomToast } from '@/composables/core/useCustomToast'

export const useGuestChat = () => {
    const loading = ref(false)
    const { setAuth } = useAuthState()
    const { showToast } = useCustomToast()

    const guestChat = async (payload: { fullName: string; email: string }) => {
        loading.value = true
        try {
            const res = await auth_api.guestChat(payload)
            if (res.data?.data) {
                setAuth(res.data.data.user, res.data.data.tokens)
                return true
            }
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response?.data?.message || "Failed to initiate chat session",
                toastType: "error"
            })
            return false
        } finally {
            loading.value = false
        }
        return false
    }

    return {
        loading,
        guestChat
    }
}
