<template>
  <div class="max-w-lg mx-auto px-4 py-20 text-center">
    <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Icon name="lucide:check" class="w-8 h-8 text-emerald-600" />
    </div>
    <h1 class="text-3xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
    <p class="text-gray-500 mb-8">Thank you for your purchase. We'll send you an email with your order details and tracking information.</p>
    <div class="flex flex-col gap-3">
      <NuxtLink to="/account/orders" class="btn-primary btn-lg">View My Orders</NuxtLink>
      <NuxtLink to="/products" class="btn-secondary">Continue Shopping</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { clearCart } = useCart()
onMounted(() => clearCart())
</script>
