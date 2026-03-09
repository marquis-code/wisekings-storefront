// API Factory Plugin for Storefront
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const authState = useAuthState()

    const api = $fetch.create({
        baseURL: config.public.apiBase as string,
        onRequest({ options }) {
            const token = authState.accessToken.value
            if (token) {
                options.headers = { ...options.headers, Authorization: `Bearer ${token}` } as HeadersInit
            }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                const refreshed = await authState.refresh()
                if (!refreshed) { authState.logout(); navigateTo('/login') }
            }
        },
    })

    return { provide: { api } }
})
