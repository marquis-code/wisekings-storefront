<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 py-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('common.shopping_cart') }}</h1>
    <div v-if="items.length === 0" class="text-center py-20">
      <Icon name="lucide:shopping-bag" class="w-12 h-12 mx-auto text-gray-300 mb-4" />
      <p class="text-gray-500 mb-4">{{ $t('common.cart_empty') }}</p>
      <NuxtLink to="/products" class="btn-primary">{{ $t('common.continue_shopping') }}</NuxtLink>
    </div>
    <div v-else>
      <div class="space-y-4 mb-8">
        <div v-for="item in items" :key="item.productId" class="flex gap-4 p-4 sm:p-5 border border-gray-100 rounded-[2rem] bg-white shadow-sm hover:shadow-md transition-all group relative">
          <!-- Image -->
          <div class="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-50">
            <img v-if="item.image" :src="item.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div v-else class="w-full h-full flex items-center justify-center">
              <Icon name="lucide:image" class="w-8 h-8 text-gray-200" />
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 flex flex-col justify-between min-w-0 py-1">
            <div>
              <div class="flex justify-between items-start gap-2">
                <NuxtLink :to="`/products/${item.slug}`" class="text-sm sm:text-base font-black text-gray-900 hover:text-[#033958] transition-colors leading-tight line-clamp-2">
                  {{ item.name }}
                </NuxtLink>
                <button @click="removeItem(item.productId)" class="p-2 -mr-2 text-gray-300 hover:text-red-500 transition-colors">
                  <Icon name="lucide:x" class="w-4 h-4" />
                </button>
              </div>
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{{ $t('common.per_unit') }}: {{ formatPrice(item.price) }}</p>
            </div>

            <div class="flex items-center justify-between mt-4">
              <!-- Quantity Switcher -->
              <div class="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                <button @click="updateQuantity(item.productId, item.quantity - 1)" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900">
                  <Icon name="lucide:minus" class="w-3.5 h-3.5" />
                </button>
                <span class="w-8 text-center text-xs font-black text-gray-900">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.productId, item.quantity + 1)" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900">
                  <Icon name="lucide:plus" class="w-3.5 h-3.5" />
                </button>
              </div>
              
              <!-- Subtotal -->
              <p class="text-sm font-black text-[#033958]">{{ formatPrice(item.price * item.quantity) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 pt-4 space-y-3">
        <div class="flex justify-between text-lg font-bold"><span>{{ $t('common.total') }}</span><span>{{ formatPrice(totalPrice) }}</span></div>
        <button @click="handleCheckout" class="btn-primary w-full btn-lg">{{ $t('common.proceed_checkout') }}</button>
        <NuxtLink to="/products" class="btn-secondary w-full">{{ $t('common.continue_shopping') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrency } from '@/composables/useCurrency'

const { items, totalPrice, updateQuantity, removeItem } = useCart()
const { trackEvent } = useAnalytics()
const { selectedCurrency, formatPrice } = useCurrency()

function handleCheckout() {
  trackEvent('begin_checkout', {
    value: totalPrice.value,
    currency: selectedCurrency.value,
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
