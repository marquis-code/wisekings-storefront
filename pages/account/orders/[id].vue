<template>
  <div class="space-y-10">
    <div class="flex items-center gap-4">
      <NuxtLink to="/account/orders" class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-[#033958]/80 hover:text-gray-900 transition-all border border-gray-100">
        <Icon name="lucide:arrow-left" class="w-5 h-5" />
      </NuxtLink>
      <div class="space-y-1">
        <h1 class="text-3xl font-black text-gray-900 tracking-tight">Order Manifest</h1>
        <p class="text-sm font-medium text-[#033958]/80 uppercase tracking-widest">Transaction Status & Details</p>
      </div>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <Icon name="lucide:loader-2" class="w-10 h-10 animate-spin text-[#033958]/20" />
      <p class="mt-4 text-xs font-black uppercase tracking-widest text-[#033958]/80">Opening manifest...</p>
    </div>

    <div v-else-if="order" class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Manifest Content -->
      <div class="lg:col-span-12 space-y-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
          <div class="space-y-1">
            <span class="text-xs font-black text-[#033958]/80 uppercase tracking-[0.2em] block">Reference</span>
            <code class="text-xl font-black text-[#033958] tracking-widest">{{ order.orderNumber }}</code>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right">
              <span class="text-xs font-black text-[#033958]/80 uppercase tracking-[0.2em] block">Status</span>
              <p class="text-xs font-black uppercase tracking-widest" :class="order.status === 'delivered' ? 'text-emerald-500' : 'text-amber-500'">{{ order.status }}</p>
            </div>
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-100" :class="order.status === 'delivered' ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'">
              <Icon :name="order.status === 'delivered' ? 'lucide:check-circle' : 'lucide:clock'" class="w-6 h-6" />
            </div>
          </div>
        </div>

        <!-- Items Table -->
        <div class="space-y-4">
           <h3 class="text-xs font-black uppercase tracking-[0.2em] text-[#033958]/80 px-2">Purchase List</h3>
           <div class="bg-gray-50/50 rounded-[32px] border border-gray-50 overflow-hidden">
             <div v-for="item in order.items" :key="item.productId" class="p-6 flex items-center justify-between border-b border-gray-50 last:border-0 hover:bg-white transition-colors">
               <div class="flex items-center gap-5">
                 <div class="w-16 h-16 bg-white rounded-2xl border border-gray-100 overflow-hidden">
                   <img v-if="item.image" :src="item.image" class="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p class="text-sm font-black text-gray-900">{{ item.name }}</p>
                   <p class="text-xs font-black text-[#033958]/80 uppercase tracking-widest mt-1">₦{{ item.price.toLocaleString() }} · Qty: {{ item.quantity }}</p>
                 </div>
               </div>
               <p class="text-sm font-black text-gray-900">₦{{ (item.price * item.quantity).toLocaleString() }}</p>
             </div>
           </div>
        </div>

        <!-- Summary Footer -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="p-8 bg-[#033958] rounded-[40px]  /20 relative overflow-hidden group">
            <div class="absolute -right-4 -top-4 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <Icon name="lucide:receipt" size="120" />
            </div>
            <div class="relative z-10 space-y-6 text-white/50">
              <div class="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                <span>Subtotal</span>
                <span class="text-white">₦{{ order.totalAmount.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                <span>Shipping Fee</span>
                <span class="text-white">₦{{ (order.shippingFee || 0).toLocaleString() }}</span>
              </div>
              <div class="pt-6 border-t border-white/10 flex justify-between items-center">
                <span class="text-xs font-black uppercase tracking-[0.2em] text-white">Grand Total</span>
                <span class="text-3xl font-black text-white tracking-tighter">₦{{ (order.totalAmount + (order.shippingFee || 0)).toLocaleString() }}</span>
              </div>
            </div>
          </div>

          <div v-if="order.orderingCustomer || order.recipientDetails || order.shippingAddress" class="p-8 bg-gray-50 rounded-[40px] border border-gray-100 flex flex-col justify-between">
            <div>
              <template v-if="order.orderingCustomer">
                <div class="flex items-center gap-3 mb-6">
                  <Icon name="lucide:user" class="text-[#033958]" />
                  <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-900">Ordering Customer</h3>
                </div>
                <div class="space-y-4 mb-8">
                  <div>
                    <p class="text-xs font-black text-[#033958]/80 uppercase tracking-widest">Name & Contact</p>
                    <p class="text-sm font-black text-gray-900">{{ order.orderingCustomer.firstName }} {{ order.orderingCustomer.surname }} <span v-if="order.orderingCustomer.whatsapp" class="text-xs text-gray-500 font-bold ml-2">({{ order.orderingCustomer.whatsapp }})</span></p>
                  </div>
                  <div>
                    <p class="text-xs font-black text-[#033958]/80 uppercase tracking-widest">Address</p>
                    <p class="text-sm font-bold text-gray-600 leading-relaxed">{{ order.orderingCustomer.address }}, {{ order.orderingCustomer.city }}, {{ order.orderingCustomer.country }}</p>
                  </div>
                </div>
              </template>

              <template v-if="order.deliveryMethod !== 'pickup'">
                <div class="flex items-center gap-3 mb-6 pt-6 border-t border-gray-200">
                  <Icon name="lucide:truck" class="text-[#033958]" />
                  <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-900">Destination Details</h3>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="text-xs font-black text-[#033958]/80 uppercase tracking-widest">Recipient</p>
                    <p class="text-sm font-black text-gray-900">{{ order.recipientDetails?.firstName || order.shippingAddress?.fullName }}</p>
                  </div>
                  <div>
                    <p class="text-xs font-black text-[#033958]/80 uppercase tracking-widest">Address</p>
                    <p class="text-sm font-bold text-gray-600 leading-relaxed">{{ order.recipientDetails?.address || order.shippingAddress?.address }}, {{ order.recipientDetails?.city || order.shippingAddress?.city }}, {{ order.recipientDetails?.country || order.shippingAddress?.state }}</p>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="flex items-center gap-3 mb-6 pt-6 border-t border-gray-200">
                  <Icon name="lucide:store" class="text-[#033958]" />
                  <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-900">Pickup Location</h3>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="text-xs font-black text-[#033958]/80 uppercase tracking-widest">Factory Location</p>
                    <p class="text-sm font-bold text-gray-600 leading-relaxed">13, Sonubi street, off Bakare street ketu, Lagos</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchOrderById } from '@/composables/modules/orders/useFetchOrderById'

definePageMeta({ layout: 'account' })
const route = useRoute()
const { order, loading, fetchOrder } = useFetchOrderById()

onMounted(() => {
  fetchOrder(route.params.id as string)
})
</script>
