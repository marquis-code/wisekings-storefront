<template>
  <transition name="drawer">
    <div v-if="isOpen" class="fixed inset-0 z-[200] overflow-hidden">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-gray-950/40 backdrop-blur-sm transition-opacity" @click="close"></div>

      <!-- Drawer Panel -->
      <div class="absolute inset-y-0 right-0 max-w-full flex">
        <div class="relative w-screen max-w-md bg-white  flex flex-col">
          <!-- Header -->
          <div class="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-[#033958] flex items-center justify-center text-white">
                <Icon name="lucide:shopping-bag" size="20" />
              </div>
              <h2 class="text-xl font-black text-gray-950 tracking-tight">Your Cart</h2>
            </div>
            <button @click="close" class="p-2 hover:bg-gray-100 rounded-xl transition-all">
              <Icon name="lucide:x" size="24" class="text-[#033958]/80" />
            </button>
          </div>

          <!-- Items List -->
          <div class="flex-1 overflow-y-auto px-6 py-8 no-scrollbar">
            <div v-if="items.length > 0" class="space-y-8">
              <div v-for="item in items" :key="item.productId" class="flex gap-6 group">
                <div class="w-24 h-24 rounded-3xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100 group-hover:border-[#033958]/20 transition-all">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 class="font-black text-gray-950 tracking-tight leading-tight mb-1">{{ item.name }}</h3>
                    <p class="text-amber-500 font-bold text-sm">{{ formatPrice(item.price) }}</p>
                  </div>
                  
                  <div class="flex items-center justify-between pt-2">
                    <div class="flex items-center bg-gray-50 rounded-xl border border-gray-100 p-1">
                      <button @click="updateQuantity(item.productId, item.quantity - 1)" class="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-[#033958]/80 hover:text-gray-950">
                        <Icon name="lucide:minus" size="14" />
                      </button>
                      <span class="w-10 text-center text-xs font-black text-gray-950">{{ item.quantity }}</span>
                      <button @click="updateQuantity(item.productId, item.quantity + 1)" class="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-[#033958]/80 hover:text-gray-950">
                        <Icon name="lucide:plus" size="14" />
                      </button>
                    </div>
                    <button @click="removeItem(item.productId)" class="text-xs font-black uppercase tracking-widest text-red-400 hover:text-red-500 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div v-else class="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div class="w-24 h-24 rounded-[2.5rem] bg-gray-50 flex items-center justify-center text-gray-200">
                <Icon name="lucide:shopping-cart" size="48" />
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-black text-gray-950 tracking-tight">Your cart is empty</h3>
                <p class="text-[#033958]/80 text-sm font-medium">Looks like you haven't added anything yet.</p>
              </div>
              <button @click="close" class="bg-[#033958] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-950 transition-all  /20">Start Shopping</button>
            </div>
          </div>

          <!-- Footer -->
          <div v-if="items.length > 0" class="px-6 py-8 border-t border-gray-100 bg-gray-50/50 space-y-6">
            <div class="flex items-center justify-between">
              <span class="text-sm font-black text-[#033958]/80 uppercase tracking-widest">Subtotal</span>
              <span class="text-2xl font-black text-gray-950 tracking-tight">{{ formatPrice(totalPrice) }}</span>
            </div>
            <p class="text-xs text-[#033958]/80 font-bold uppercase tracking-widest text-center italic">Taxes and shipping calculated at checkout</p>
            <NuxtLink to="/checkout" @click="close" class="w-full bg-[#033958] text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-gray-950 transition-all  /20 flex items-center justify-center gap-4 group">
              Checkout Now
              <Icon name="lucide:arrow-right" size="20" class="group-hover:translate-x-2 transition-transform" />
            </NuxtLink>
            <button @click="close" class="w-full text-xs font-black text-[#033958]/80 uppercase tracking-widest hover:text-gray-950 transition-colors">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useCart } from '@/composables/useCart'
import { useCurrency } from '@/composables/useCurrency'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const { items, totalPrice, removeItem, updateQuantity } = useCart()
const { formatPrice } = useCurrency()

function close() {
  emit('close')
}
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active {
  transition: opacity 0.5s ease;
}
.drawer-enter-from, .drawer-leave-to {
  opacity: 0;
}

.drawer-enter-active .Drawer-Panel, .drawer-leave-active .Drawer-Panel {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-enter-from .Drawer-Panel, .drawer-leave-to .Drawer-Panel {
  transform: translateX(100%);
}

/* Customize scrollbar if needed, but no-scrollbar is usually enough */
</style>
