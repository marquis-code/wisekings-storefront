<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/account/orders" class="text-gray-400 hover:text-gray-600"><Icon name="lucide:arrow-left" class="w-5 h-5" /></NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Order Details</h1>
    </div>
    <div v-if="loading" class="text-center py-16"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto text-gray-400" /></div>
    <div v-else-if="order" class="space-y-6">
      <div class="flex items-center justify-between">
        <code class="text-lg font-bold text-gray-900">{{ order.orderNumber }}</code>
        <span :class="order.status === 'delivered' || order.status === 'completed' ? 'badge-success' : 'badge-warning'" class="text-sm">{{ order.status }}</span>
      </div>
      <div class="border border-gray-200 rounded-2xl divide-y divide-gray-100">
        <div v-for="item in order.items" :key="item.productId" class="flex items-center gap-4 p-4">
          <div class="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0"><img v-if="item.image" :src="item.image" class="w-full h-full object-cover" /></div>
          <div class="flex-1"><p class="text-sm font-medium text-gray-900">{{ item.name }}</p><p class="text-xs text-gray-500">Qty: {{ item.quantity }}</p></div>
          <p class="text-sm font-medium">₦{{ (item.price * item.quantity).toLocaleString() }}</p>
        </div>
      </div>
      <div class="border border-gray-200 rounded-2xl p-4 space-y-2">
        <div class="flex justify-between text-sm"><span class="text-gray-500">Subtotal</span><span>₦{{ order.totalAmount.toLocaleString() }}</span></div>
        <div class="flex justify-between text-sm"><span class="text-gray-500">Shipping</span><span>₦{{ (order.shippingFee || 0).toLocaleString() }}</span></div>
        <div class="flex justify-between text-sm font-bold border-t pt-2"><span>Total</span><span>₦{{ (order.totalAmount + (order.shippingFee || 0)).toLocaleString() }}</span></div>
      </div>
      <div v-if="order.shippingAddress" class="border border-gray-200 rounded-2xl p-4">
        <h3 class="font-semibold text-gray-900 mb-2">Shipping Address</h3>
        <p class="text-sm text-gray-600">{{ order.shippingAddress.fullName }}</p>
        <p class="text-sm text-gray-500">{{ order.shippingAddress.address }}, {{ order.shippingAddress.city }}, {{ order.shippingAddress.state }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchOrderById } from '@/composables/modules/orders/useFetchOrderById'

const route = useRoute()
const { order, loading, fetchOrder } = useFetchOrderById()

onMounted(() => {
  fetchOrder(route.params.id as string)
})
</script>
