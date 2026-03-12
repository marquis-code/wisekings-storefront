import { logEvent } from 'firebase/analytics'

export const useAnalytics = () => {
    const { $fbAnalytics } = useNuxtApp() as any

    const trackEvent = (eventName: string, params?: object) => {
        if ($fbAnalytics) {
            logEvent($fbAnalytics, eventName, params)
        }
    }

    const trackPageView = (pagePath: string) => {
        trackEvent('page_view', { page_path: pagePath })
    }

    const trackAddToCart = (product: any) => {
        trackEvent('add_to_cart', {
            items: [{
                item_id: product.id || product._id,
                item_name: product.name,
                price: product.price,
                quantity: 1
            }]
        })
    }

    const trackPurchase = (order: any) => {
        trackEvent('purchase', {
            transaction_id: order.id || order._id,
            value: order.totalAmount,
            currency: 'USD',
            items: order.items?.map((item: any) => ({
                item_id: item.productId,
                item_name: item.name,
                price: item.price,
                quantity: item.quantity
            }))
        })
    }

    return { trackEvent, trackPageView, trackAddToCart, trackPurchase }
}
