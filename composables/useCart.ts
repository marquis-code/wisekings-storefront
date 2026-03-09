// Cart composable (replaces Pinia store) — uses localStorage for persistence

interface CartItem {
    productId: string
    name: string
    price: number
    image: string
    quantity: number
    slug: string
}

const items = ref<CartItem[]>([])
let hydrated = false

function hydrateCart() {
    if (hydrated || !import.meta.client) return
    hydrated = true
    try {
        const saved = localStorage.getItem('wk_cart')
        if (saved) items.value = JSON.parse(saved)
    } catch { }
}

function persist() {
    if (import.meta.client) localStorage.setItem('wk_cart', JSON.stringify(items.value))
}

export function useCart() {
    hydrateCart()

    const totalItems = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))
    const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0))

    function addItem(product: { _id: string; name: string; price: number; images: string[]; slug: string }, qty = 1) {
        const existing = items.value.find((i) => i.productId === product._id)
        if (existing) { existing.quantity += qty }
        else { items.value.push({ productId: product._id, name: product.name, price: product.price, image: product.images?.[0] || '', quantity: qty, slug: product.slug }) }
        persist()
    }

    function removeItem(productId: string) {
        items.value = items.value.filter((i) => i.productId !== productId)
        persist()
    }

    function updateQuantity(productId: string, qty: number) {
        const item = items.value.find((i) => i.productId === productId)
        if (item) { item.quantity = Math.max(1, qty); persist() }
    }

    function clearCart() { items.value = []; persist() }

    return { items: readonly(items), totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart }
}
