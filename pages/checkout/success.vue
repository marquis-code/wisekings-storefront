<template>
  <div class="max-w-xl mx-auto px-4 py-20 text-center">
    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Icon name="lucide:check" class="w-10 h-10 text-green-600" />
    </div>
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
    <p class="text-gray-500 mb-8">Thank you for your purchase. We've sent a confirmation email to your inbox.</p>
    <div class="flex flex-col gap-3">
      <NuxtLink to="/account/orders" class="btn-primary">View My Orders</NuxtLink>
      <NuxtLink to="/" class="btn-secondary">Continue Shopping</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { clearCart } = useCart()
const { trackPurchase } = useAnalytics()
const route = useRoute()

onMounted(() => {
  clearCart()
  if (route.query.orderId) {
    trackPurchase({
      id: route.query.orderId,
      totalAmount: 0 // Fetch if needed
    })
  }
})
</script>
