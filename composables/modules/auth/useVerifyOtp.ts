import { ref } from 'vue'
import { auth_api } from '@/api_factory/modules/auth'
import { useCustomToast } from '@/composables/core/useCustomToast'
import { useAuthState } from '@/composables/useAuthState'
import { useRouter } from 'vue-router'

export const useVerifyOtp = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()
    const { setAuth } = useAuthState()
    const router = useRouter()

    const verifyOtp = async (payload: { email: string; otpCode: string }) => {
        loading.value = true
        try {
            const res = await auth_api.verifyOtp(payload) as any
            showToast({ title: 'Success', message: 'Email verified successfully', toastType: 'success' })

            const d = res?.data || res
            if (d?.user && (d?.accessToken || d?.tokens)) {
                const tokens = d.tokens || { accessToken: d.accessToken, refreshToken: d.refreshToken }
                setAuth(d.user, tokens)
                router.push('/')
            } else {
                router.push('/login')
            }
            return true
        } catch (error: any) {
            showToast({ title: 'Error', message: error.message || 'Verification failed', toastType: 'error' })
            return false
        } finally {
            loading.value = false
        }
    }

    return { loading, verifyOtp }
}
