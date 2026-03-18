export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const authState = useAuthState()
    const i18n = nuxtApp.$i18n as any
    const selectedCurrency = useState('selected_currency')

    const api = $fetch.create({
        baseURL: config.public.apiBase as string,
        onRequest({ options }) {
            const token = authState.accessToken.value
            if (token) {
                options.headers = { ...options.headers, Authorization: `Bearer ${token}` }
            }

            // Access values using captured references
            const locale = i18n?.locale?.value || 'en'
            const currency = selectedCurrency.value || 'NGN'

            options.headers = {
                ...options.headers,
                'x-locale': locale,
                'x-currency': currency as any,
            }
        },
        async onResponse({ response }) { },
        async onResponseError({ response }) {
            if (response.status === 401) {
                const refreshed = await authState.refresh()
                if (!refreshed) { authState.logout(); navigateTo('/login') }
            }
        },
    })

    return { provide: { api } }
})
