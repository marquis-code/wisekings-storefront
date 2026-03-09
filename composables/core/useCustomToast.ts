import { ref, readonly } from 'vue'

export interface CustomToast {
  id: string
  title: string
  message?: string
  toastType: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

const toasts = ref<CustomToast[]>([])

export const useCustomToast = () => {
  const showToast = (toast: Omit<CustomToast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...toast, id }
    toasts.value.push(newToast)

    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration || 5000)
    }
  }

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return {
    toasts: readonly(toasts),
    showToast,
    removeToast,
  }
}