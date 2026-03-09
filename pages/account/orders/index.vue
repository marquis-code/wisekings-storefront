<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/account" class="text-gray-400 hover:text-gray-600"><Icon name="lucide:arrow-left" class="w-5 h-5" /></NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">My Orders</h1>
    </div>
    <div v-if="loading" class="text-center py-16"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto text-gray-400" /></div>
    <div v-else-if="orders.length === 0" class="text-center py-16 text-gray-400">
      <Icon name="lucide:package" class="w-12 h-12 mx-auto mb-4 opacity-50" />
      <p class="mb-4">No orders yet</p>
      <NuxtLink to="/products" class="btn-primary">Start Shopping</NuxtLink>
    </div>
    <div v-else class="space-y-4">
      <NuxtLink v-for="o in orders" :key="o._id" :to="`/account/orders/${o._id}`"
        class="block p-4 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors">
        <div class="flex items-center justify-between mb-2">
          <code class="text-sm font-medium text-gray-900">{{ o.orderNumber }}</code>
          <span :class="o.status === 'delivered' || o.status === 'completed' ? 'badge-success' : 'badge-warning'">{{ o.status }}</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-500">{{ o.items?.length || 0 }} items</span>
          <span class="font-medium text-gray-900">₦{{ o.totalAmount.toLocaleString() }}</span>
        </div>
        <p class="text-xs text-gray-400 mt-1">{{ new Date(o.createdAt).toLocaleDateString() }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchOrders } from '@/composables/modules/orders/useFetchOrders'

const { orders, loading, fetchOrders } = useFetchOrders()

onMounted(() => {
  fetchOrders({ limit: 20 })
})
</script>
