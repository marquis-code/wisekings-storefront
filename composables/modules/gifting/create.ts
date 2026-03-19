import { ref } from 'vue'
import { gifting_api } from '@/api_factory/modules/gifting'
import { useCustomToast } from '@/composables/core/useCustomToast'

export const useCreateGifting = () => {
  const loading = ref(false)
  const { showToast } = useCustomToast()

  const createGiftingRequest = async (payload: any) => {
    loading.value = true
    try {
      const response = await gifting_api.$_create_gifting_request(payload)
      showToast({
        title: 'Success!',
        message: 'Your gifting request was submitted. Check your email.',
        toastType: 'success'
      })
      return response
    } catch (error: any) {
      showToast({
        title: 'Action Failed',
        message: error?.response?.data?.message || 'Something went wrong',
        toastType: 'error'
      })
      return null
    } finally {
      loading.value = false
    }
  }

  return { createGiftingRequest, loading }
}
