import { currencies_api } from '@/api_factory/modules/currencies'

export const useCurrency = () => {
    const selectedCurrency = useState('selected_currency', () => 'NGN')
    const rates = useState<Record<string, number>>('currency_rates', () => ({ NGN: 1, USD: 0.00065, EUR: 0.00060, GBP: 0.00052 }))
    const loading = useState('currency_loading', () => false)
    const symbols: Record<string, string> = {
        NGN: '₦',
        USD: '$',
        EUR: '€',
        GBP: '£'
    }

    const setCurrency = (code: string) => {
        selectedCurrency.value = code
        if (process.client) {
            localStorage.setItem('selected_currency', code)
            localStorage.setItem('wk_currency', code) // For axios interceptor
        }
    }

    const fetchRates = async () => {
        if (loading.value) return
        loading.value = true
        try {
            const res = await currencies_api.getRates() as any
            const data = res.data || res
            if (data) {
                rates.value = data
            }
        } catch (e) {
            console.error('Failed to fetch currency rates', e)
        } finally {
            loading.value = false
        }
    }

    const formatPrice = (amount: number) => {
        if (amount === undefined || amount === null) return 'N/A'
        const rate = (rates.value as any)[selectedCurrency.value] || 1
        const converted = amount * rate
        
        // Use Intl.NumberFormat for proper currency formatting
        try {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: selectedCurrency.value,
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            }).format(converted)
        } catch (e) {
            const symbol = symbols[selectedCurrency.value] || selectedCurrency.value
            return `${symbol}${converted.toLocaleString()}`
        }
    }

    return {
        selectedCurrency,
        setCurrency,
        formatPrice,
        rates,
        fetchRates,
        loading
    }
}
