<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
    <div v-if="items.length === 0" class="text-center py-20">
      <Icon name="lucide:shopping-bag" class="w-12 h-12 mx-auto text-gray-300 mb-4" />
      <p class="text-gray-500 mb-4">Your cart is empty</p>
      <NuxtLink to="/products" class="btn-primary">Continue Shopping</NuxtLink>
    </div>
    <div v-else>
      <div class="space-y-4 mb-8">
        <div v-for="item in items" :key="item.productId" class="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl">
          <div class="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
            <img v-if="item.image" :src="item.image" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 min-w-0">
            <NuxtLink :to="`/products/${item.slug}`" class="text-sm font-semibold text-gray-900 hover:text-brand-600">{{ item.name }}</NuxtLink>
            <p class="text-sm text-gray-500 mt-0.5">₦{{ item.price.toLocaleString() }}</p>
          </div>
          <div class="flex items-center border border-gray-300 rounded-full">
            <button @click="updateQuantity(item.productId, item.quantity - 1)" class="w-8 h-8 flex items-center justify-center"><Icon name="lucide:minus" class="w-3 h-3" /></button>
            <span class="w-8 text-center text-sm font-medium">{{ item.quantity }}</span>
            <button @click="updateQuantity(item.productId, item.quantity + 1)" class="w-8 h-8 flex items-center justify-center"><Icon name="lucide:plus" class="w-3 h-3" /></button>
          </div>
          <p class="text-sm font-bold text-gray-900 w-24 text-right">₦{{ (item.price * item.quantity).toLocaleString() }}</p>
          <button @click="removeItem(item.productId)" class="p-1 text-gray-400 hover:text-red-500"><Icon name="lucide:x" class="w-4 h-4" /></button>
        </div>
      </div>
      <div class="border-t border-gray-200 pt-4 space-y-3">
        <div class="flex justify-between text-lg font-bold"><span>Total</span><span>₦{{ totalPrice.toLocaleString() }}</span></div>
        <button @click="handleCheckout" class="btn-primary w-full btn-lg">Proceed to Checkout</button>
        <NuxtLink to="/products" class="btn-secondary w-full">Continue Shopping</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { items, totalPrice, updateQuantity, removeItem } = useCart()
const { trackEvent } = useAnalytics()

function handleCheckout() {
  trackEvent('begin_checkout', {
    value: totalPrice.value,
    currency: 'USD',
    items: items.value.map(item => ({
      item_id: item.productId,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity
    }))
  })
  navigateTo('/checkout')
}
</script>
