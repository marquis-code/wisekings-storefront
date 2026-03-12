<template>
  <div class="space-y-10">
    <div class="flex items-center justify-between">
      <div class="space-y-1">
        <h1 class="text-3xl font-black text-gray-900 tracking-tight">Order Archives</h1>
        <p class="text-sm font-medium text-gray-400">Review your past snout-tastic manifests and tracking history.</p>
      </div>
      <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
        <Icon name="lucide:search" class="text-gray-400 w-4 h-4" />
        <input type="text" placeholder="Filter manifest ID..." class="bg-transparent text-xs font-bold outline-none w-32 placeholder:text-gray-300" />
      </div>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <Icon name="lucide:loader-2" class="w-10 h-10 animate-spin text-[#033958]/20" />
      <p class="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Syncing with server...</p>
    </div>

    <div v-else-if="orders.length === 0" class="text-center py-24 bg-gray-50/50 rounded-[40px] border border-dashed border-gray-200">
      <div class="w-20 h-20 bg-white rounded-[32px] shadow-sm flex items-center justify-center mx-auto mb-6 text-gray-200">
        <Icon name="lucide:package-open" size="40" />
      </div>
      <h3 class="text-sm font-black text-gray-900 uppercase tracking-widest">No Manifests Found</h3>
      <p class="text-xs font-medium text-gray-400 mt-2 mb-8 uppercase tracking-widest">Your snacking history is currently blank.</p>
      <NuxtLink to="/products" class="px-8 py-4 bg-[#033958] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#033958]/20 transition-all hover:-translate-y-0.5">
        Start a Manifest
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 gap-4">
      <NuxtLink v-for="o in orders" :key="o._id" :to="`/account/orders/${o._id}`"
        class="group relative bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 hover:border-[#033958]/20 hover:shadow-2xl hover:shadow-gray-200/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div class="flex items-center gap-6">
          <div class="w-16 h-16 rounded-[24px] bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#033958] transition-all duration-500 overflow-hidden shrink-0">
            <template v-if="o.items?.[0]?.image">
               <img :src="o.items[0].image" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </template>
            <Icon v-else name="lucide:package" class="w-8 h-8 text-gray-300 group-hover:text-white" />
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Manifest ID</span>
              <code class="text-xs font-black text-[#033958] tracking-widest">{{ o.orderNumber }}</code>
            </div>
            <p class="text-sm font-black text-gray-900">{{ o.items?.length || 0 }} items · Ready for dispatch</p>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ new Date(o.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0">
          <p class="text-lg font-black text-gray-900 tracking-tighter">₦{{ o.totalAmount.toLocaleString() }}</p>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-full border" 
            :class="o.status === 'delivered' || o.status === 'completed' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-amber-50 border-amber-100 text-amber-600'"
          >
            <div class="w-1.5 h-1.5 rounded-full" :class="o.status === 'delivered' || o.status === 'completed' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'"></div>
            <span class="text-[10px] font-black uppercase tracking-widest">{{ o.status }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchOrders } from '@/composables/modules/orders/useFetchOrders'

definePageMeta({ layout: 'account' })
const { orders, loading, fetchOrders } = useFetchOrders()

onMounted(() => {
  fetchOrders({ limit: 20 })
})
</script>
