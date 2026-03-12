export const useCurrency = () => {
    const selectedCurrency = useState('selected_currency', () => 'NGN')
    const rates = useState('currency_rates', () => ({ NGN: 1, USD: 0.00065, EUR: 0.00060, GBP: 0.00052 }))
    const symbols: Record<string, string> = {
        NGN: '₦',
        USD: '$',
        EUR: '€',
        GBP: '£'
    }

    const setCurrency = (code: string) => {
        selectedCurrency.value = code
        localStorage.setItem('selected_currency', code)
    }

    const formatPrice = (amount: number) => {
        const rate = (rates.value as any)[selectedCurrency.value] || 1
        const converted = amount * rate
        const symbol = symbols[selectedCurrency.value] || selectedCurrency.value

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: selectedCurrency.value,
            minimumFractionDigits: 2,
        }).format(converted)
    }

    return {
        selectedCurrency,
        setCurrency,
        formatPrice,
        rates
    }
}
