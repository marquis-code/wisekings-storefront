<template>
  <div class="space-y-12">
    <!-- Welcome Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div class="space-y-2">
        <h1 class="text-4xl font-black text-gray-900 tracking-tight">Account Overview</h1>
        <div class="flex items-center gap-3">
          <div class="flex -space-x-2">
            <div v-for="i in 3" :key="i" class="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
               <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.fullName}${i}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <p class="text-xs font-bold text-gray-400">Join 2.4k+ Royal Members snacking smarter.</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center gap-3 group hover:border-[#033958]/20 transition-all cursor-default">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
            <Icon name="lucide:crown" class="w-4 h-4" />
          </div>
          <div>
            <p class="text-[9px] font-black uppercase tracking-widest text-gray-400">Tier Status</p>
            <p class="text-xs font-black text-gray-900">ROYAL MEMBER</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Points Card: Glassmorphism -->
      <div class="p-8 bg-gradient-to-br from-[#033958] to-[#022c45] rounded-[40px] shadow-2xl shadow-[#033958]/30 relative overflow-hidden group">
        <div class="absolute -right-6 -top-6 p-12 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000">
          <Icon name="lucide:sparkles" size="160" />
        </div>
        <div class="relative z-10 space-y-8">
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10">
              <Icon name="lucide:zap" class="w-6 h-6 text-amber-400" />
            </div>
            <span class="px-3 py-1 bg-amber-400/20 text-amber-100 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-400/20">+12% this week</span>
          </div>
          <div>
            <h2 class="font-black text-white/40 text-[10px] uppercase tracking-[0.3em]">Available Loyalty</h2>
            <div class="flex items-baseline gap-3 mt-3">
              <span class="text-6xl font-black text-white tracking-tighter">{{ user?.points || 0 }}</span>
              <span class="text-sm font-bold text-white/30 uppercase tracking-[0.2em]">WK Points</span>
            </div>
          </div>
          <button class="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all">
            Redeem Rewards
          </button>
        </div>
      </div>
      
      <!-- Active Orders Card -->
      <div class="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all flex flex-col justify-between group relative overflow-hidden">
         <div class="absolute -right-4 -bottom-4 p-8 opacity-5 text-[#033958] group-hover:scale-110 transition-transform duration-700">
          <Icon name="lucide:package" size="140" />
        </div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-8">
            <div class="w-12 h-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center group-hover:bg-[#033958] group-hover:text-white transition-all duration-500">
              <Icon name="lucide:box" class="w-6 h-6" />
            </div>
          </div>
          <h2 class="font-black text-gray-400 text-[10px] uppercase tracking-[0.3em]">Shipments Pending</h2>
          <p class="text-5xl font-black text-gray-900 mt-3 tracking-tighter">{{ orders.length.toString().padStart(2, '0') }}</p>
        </div>
        <NuxtLink to="/account/orders" class="relative z-10 text-[10px] font-black uppercase tracking-widest text-[#033958] flex items-center gap-2 mt-10 group-hover:gap-3 transition-all border-t border-gray-50 pt-6">
          Track Active Manifests
          <Icon name="lucide:move-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Address Card -->
      <div class="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all flex flex-col justify-between group relative overflow-hidden">
        <div class="absolute -right-4 -bottom-4 p-8 opacity-5 text-amber-600 group-hover:scale-110 transition-transform duration-700">
          <Icon name="lucide:map" size="140" />
        </div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-8">
            <div class="w-12 h-12 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
              <Icon name="lucide:map-pin" class="w-6 h-6" />
            </div>
          </div>
          <h2 class="font-black text-gray-400 text-[10px] uppercase tracking-[0.3em]">Saved Destinations</h2>
          <p class="text-5xl font-black text-gray-900 mt-3 tracking-tighter">01</p>
        </div>
        <NuxtLink to="/account/profile" class="relative z-10 text-[10px] font-black uppercase tracking-widest text-amber-600 flex items-center gap-2 mt-10 group-hover:gap-3 transition-all border-t border-gray-50 pt-6">
          Manage Preferences
          <Icon name="lucide:fingerprint" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>

    <!-- Split Section: Activity & Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <!-- Recent Activity: Real Data -->
      <div class="lg:col-span-8 space-y-6">
        <div class="flex items-center justify-between px-2">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <h3 class="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Transaction Pulse</h3>
          </div>
          <NuxtLink to="/account/orders" class="text-[10px] font-black uppercase tracking-widest text-[#033958] hover:gap-2 transition-all flex items-center gap-1 group">
            History
            <Icon name="lucide:history" class="w-3 h-3 group-hover:rotate-12 transition-transform" />
          </NuxtLink>
        </div>
        
        <div class="bg-gray-50/50 rounded-[40px] border border-gray-100 overflow-hidden">
          <div v-if="loading" class="p-20 text-center">
            <Icon name="lucide:loader-2" class="w-10 h-10 animate-spin mx-auto text-gray-200" />
          </div>
          <div v-else-if="orders.length === 0" class="p-20 text-center space-y-4">
            <div class="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-gray-200 font-black flex items-center justify-center mx-auto text-gray-100 group">
              <Icon name="lucide:shapes" size="40" class="group-hover:scale-110 transition-transform" />
            </div>
            <div class="space-y-1">
              <p class="text-sm font-black text-gray-900 uppercase tracking-widest">No Manifests Found</p>
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your snacking history is currently blank.</p>
            </div>
          </div>
          <div v-else class="divide-y divide-gray-100">
            <NuxtLink v-for="order in orders.slice(0, 3)" :key="order._id" :to="`/account/orders/${order._id}`" 
              class="flex items-center justify-between p-8 hover:bg-white transition-all group"
            >
              <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                  <Icon :name="order.status === 'delivered' ? 'lucide:check-circle-2' : 'lucide:clock-4'" :class="order.status === 'delivered' ? 'text-emerald-500' : 'text-amber-500'" size="24" />
                </div>
                <div>
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 leading-none">{{ order.orderNumber }}</p>
                  <p class="text-sm font-black text-gray-900">{{ order.items?.length }} Snacking Items</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-black text-gray-900">₦{{ order.totalAmount.toLocaleString() }}</p>
                <p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">{{ new Date(order.createdAt).toLocaleDateString() }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Quick Actions / Promo -->
      <div class="lg:col-span-4 space-y-8">
        <h3 class="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 px-2">Ecosystem</h3>
        <div class="space-y-4">
          <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-4 hover:border-[#033958]/20 transition-all group">
            <div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Icon name="lucide:gift" class="w-5 h-5" />
            </div>
            <p class="text-xs font-black uppercase tracking-widest text-gray-900 leading-tight">Refer a Snack Enthusiast</p>
            <p class="text-[10px] font-medium text-gray-400">Give ₦500, Get ₦500 in loyal points for every snack partner you bring.</p>
            <button class="text-[9px] font-black uppercase tracking-[0.2em] text-[#033958] py-2 border-b border-[#033958]/10 w-fit group-hover:border-[#033958] transition-all">Copy Invite Link</button>
          </div>

          <div class="p-6 bg-[#033958]/5 border border-[#033958]/10 rounded-3xl flex items-center gap-4 group cursor-pointer hover:bg-[#033958]/10 transition-all">
             <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#033958]">
              <Icon name="lucide:message-square" class="w-5 h-5" />
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-[#033958]">Concierge</p>
              <p class="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em]">24/7 Support Desk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthState } from '@/composables/useAuthState'
import { useFetchOrders } from '@/composables/modules/orders/useFetchOrders'

definePageMeta({ layout: 'account' })
const { user } = useAuthState()
const { orders, loading, fetchOrders } = useFetchOrders()

onMounted(() => {
  fetchOrders({ limit: 5 })
})
</script>
