<template>
  <NuxtLink :to="`/products/${product.slug}`" class="group flex flex-col h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1">
    <!-- Image Area -->
    <div class="relative aspect-square md:aspect-[4/5] bg-gray-50 flex items-center justify-center p-2 md:p-4 overflow-hidden">
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
      <div v-if="product.compareAtPrice" class="absolute top-2 left-2 md:top-6 md:left-6 px-2 py-0.5 md:px-3 md:py-1 bg-amber-400 text-[#033958] text-[9px] md:text-sm font-black uppercase tracking-widest rounded-full">
        Saving
      </div>
      <div v-if="product.stock <= 5 && product.stock > 0" class="absolute top-2 right-2 md:top-6 md:right-6 px-2 py-0.5 md:px-3 md:py-1 bg-red-50 text-red-500 text-[9px] md:text-sm font-black uppercase tracking-widest rounded-full border border-red-100">
        {{ product.stock }} left
      </div>
    </div>

    <!-- Info Area -->
    <div class="p-2.5 md:p-6 flex flex-col flex-1">
      <!-- Name + Stock -->
      <div class="flex items-start justify-between gap-1 mb-1.5">
        <h3 class="text-xs md:text-base font-black text-gray-900 line-clamp-2 leading-snug group-hover:text-[#033958] transition-colors tracking-tight">
          {{ product.name }}
        </h3>
        <div v-if="product.stock > 0" class="shrink-0 px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-md border border-emerald-100">
          In Stock
        </div>
        <div v-else class="shrink-0 px-1.5 py-0.5 bg-red-50 text-red-600 text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-md border border-red-100">
          Sold Out
        </div>
      </div>

      <!-- Varieties & Specs — inline wrap, compact on mobile -->
      <div class="flex flex-wrap gap-1 mb-2">
        <span v-if="product.varietyType" class="flex items-center gap-0.5 text-[8px] md:text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md uppercase tracking-wide">
          <Icon name="lucide:layers" size="8" class="hidden md:inline" />
          {{ product.varietyType }}
        </span>
        <span v-if="product.unitDescription" class="flex items-center gap-0.5 text-[8px] md:text-[10px] font-bold text-[#033958] bg-[#033958]/5 px-1.5 py-0.5 rounded-md uppercase tracking-wide">
          <Icon name="lucide:scale" size="8" class="hidden md:inline" />
          {{ product.unitDescription }}
        </span>
        <span v-if="product.quantityPerPack" class="flex items-center gap-0.5 text-[8px] md:text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-md uppercase tracking-wide">
          <Icon name="lucide:package-2" size="8" class="hidden md:inline" />
          {{ product.quantityPerPack }}/Ctn
        </span>
      </div>
      
      <!-- Pricing -->
      <div class="mt-auto pt-2 md:pt-4 border-t border-gray-50 flex flex-col gap-2 md:gap-4">
        <div class="flex items-end justify-between gap-1">
          <div class="flex flex-col min-w-0">
            <span class="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Carton</span>
            <span class="text-sm md:text-2xl font-black text-[#033958] tracking-tighter leading-none truncate">{{ formatPrice(product.price) }}</span>
          </div>
          <div v-if="product.unitPrice" class="flex flex-col items-end text-right shrink-0">
            <span class="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Unit</span>
            <span class="text-[10px] md:text-xs font-black text-gray-600 tracking-tight">{{ formatPrice(product.unitPrice) }}</span>
          </div>
        </div>
        
        <button 
          class="w-full py-2 md:py-3 rounded-xl md:rounded-2xl bg-[#033958] text-white flex items-center justify-center gap-1.5 hover:bg-amber-400 hover:text-gray-950 transition-all font-bold text-[9px] md:text-xs uppercase tracking-widest shadow-lg shadow-[#033958]/10" 
          @click.stop.prevent="handleAddToCart"
        >
          <span>Add to Cart</span>
          <Icon name="lucide:shopping-cart" size="12" class="md:hidden" />
          <Icon name="lucide:shopping-cart" size="16" class="hidden md:inline" />
        </button>
      </div>
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