<template>
  <NuxtLink :to="`/products/${product.slug}`" class="group flex flex-col h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover: hover:-translate-y-1">
    <!-- Image Area -->
    <div class="relative aspect-[4/5] bg-gray-50 flex items-center justify-center p-2 md:p-4 overflow-hidden">
      <img 
        v-if="product.images?.[0]" 
        :src="product.images[0]" 
        :alt="product.name" 
        class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <Icon name="lucide:image" class="w-12 h-12 text-gray-200" />
      </div>
      
      <!-- Badges -->
      <div v-if="product.compareAtPrice" class="absolute top-6 left-6 px-3 py-1 bg-amber-400 text-[#033958] text-sm font-black uppercase tracking-widest rounded-full">
        Saving
      </div>
      <div v-if="product.stock <= 5 && product.stock > 0" class="absolute top-6 right-6 px-3 py-1 bg-red-50 text-red-500 text-sm font-black uppercase tracking-widest rounded-full border border-red-100">
        Only {{ product.stock }} left
      </div>
    </div>

    <!-- Info Area -->
    <div class="p-3 md:p-8 flex flex-col flex-1">
      <h3 class="text-sm md:text-sm font-black text-gray-900 line-clamp-1 mb-2 md:mb-4 group-hover:text-[#033958] transition-colors tracking-tight">{{ product.name }}</h3>
      
      <div class="flex items-center justify-between mb-3 md:mb-6">
        <div class="flex flex-col">
          <span class="text-base md:text-xl font-black text-[#033958] tracking-tighter">{{ formatPrice(product.price) }}</span>
          <span v-if="product.compareAtPrice" class="text-sm md:text-xs text-[#033958]/80 line-through font-bold">{{ formatPrice(product.compareAtPrice) }}</span>
        </div>
        <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gray-50 flex items-center justify-center text-[#033958]/80 group-hover:bg-[#033958]/5 group-hover:text-[#033958] transition-all shrink-0">
          <Icon name="lucide:arrow-right" size="14" class="group-hover:translate-x-1 transition-transform md:block hidden" />
          <Icon name="lucide:arrow-right" size="12" class="group-hover:translate-x-1 transition-transform md:hidden" />
        </div>
      </div>

      <button 
        @click.prevent="handleAddToCart"
        class="w-full py-2.5 md:py-4 bg-gray-950 text-white rounded-xl md:rounded-2xl font-black text-xs md:text-xs uppercase tracking-wider md:tracking-[0.2em]  hover:bg-amber-400 hover:text-gray-950 transition-all flex items-center justify-center gap-2 md:gap-3 active:scale-95"
      >
        <Icon name="lucide:shopping-cart" size="12" class="md:block hidden" />
        <Icon name="lucide:shopping-cart" size="10" class="md:hidden" />
        {{ $t('common.add_to_cart') || 'Add' }}
      </button>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { useCurrency } from '@/composables/useCurrency'
import { useCart } from '@/composables/useCart'
import { useCustomToast } from '@/composables/core/useCustomToast'

const props = defineProps<{
  product: Product
}>()

const { formatPrice } = useCurrency()
const { addItem } = useCart()
const { showToast } = useCustomToast()

function handleAddToCart() {
  try {
    addItem({
      _id: props.product._id,
      name: props.product.name,
      price: props.product.price,
      images: props.product.images,
      slug: props.product.slug,
      weight: props.product.weight
    }, 1)
    
    showToast({
      title: "Success",
      message: `${props.product.name} added to cart`,
      toastType: "success"
    })
  } catch (error) {
    console.error('Failed to add to cart:', error)
  }
}
</script>
