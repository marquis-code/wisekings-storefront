import { ref } from "vue"
import { auth_api } from "@/api_factory/modules/auth"
import { useCustomToast } from "@/composables/core/useCustomToast"
import { useRouter } from "vue-router"

export const useLogin = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()
    const router = useRouter()

    const login = async (payload: { email: string; password: string }) => {
        loading.value = true
        try {
            const res = await auth_api.login(payload) as any
            const data = res?.data || res

            if (data?.mfaRequired) {
                showToast({
                    title: "OTP Required",
                    message: "Please enter the code sent to your email",
                    toastType: "info",
                })
                router.push(`/otp?email=${encodeURIComponent(payload.email)}`)
                return { mfaRequired: true }
            }

            if (data?.user) {
                showToast({ title: "Success", message: "Login successful", toastType: "success" })
                return { data: data }
            }

            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Login failed", toastType: "error" })

            if (err.message && err.message.toLowerCase().includes('verify your email')) {
                router.push(`/otp?email=${encodeURIComponent(payload.email)}`)
            }

            return null
        } finally {
            loading.value = false
        }
    }

    const socialLogin = async (idToken: string) => {
        loading.value = true
        try {
            const res = await auth_api.socialLogin({ idToken }) as any
            showToast({ title: "Success", message: "Social login successful", toastType: "success" })
            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Social login failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, login, socialLogin }
}
