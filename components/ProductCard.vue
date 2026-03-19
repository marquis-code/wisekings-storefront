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
      <div v-if="product.compareAtPrice && product.compareAtPrice > (product.sellPerUnit ? (product.unitPrice || product.price) : product.price)" class="absolute top-2 left-2 md:top-6 md:left-6 px-2 py-0.5 md:px-3 md:py-1 bg-amber-400 text-[#033958] text-[9px] md:text-sm font-black uppercase tracking-widest rounded-full">
        Saving
      </div>
      <div v-if="product.stock > 0" class="absolute top-2 right-2 md:top-6 md:right-6 px-2 py-0.5 md:px-3 md:py-1 bg-emerald-50 text-emerald-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 shadow-sm z-10">
        In Stock
      </div>
      <div v-else class="absolute top-2 right-2 md:top-6 md:right-6 px-2 py-0.5 md:px-3 md:py-1 bg-red-50 text-red-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full border border-red-100 shadow-sm z-10">
        Sold Out
      </div>
      <!-- Low Stock Notice -->
      <div v-if="product.stock <= 5 && product.stock > 0" class="absolute bottom-2 right-2 md:bottom-6 md:right-6 px-2 py-0.5 md:px-3 md:py-1 bg-amber-50 text-amber-600 text-[9px] md:text-[10px] font-black text-center uppercase tracking-widest rounded-full border border-amber-100 z-10">
        {{ product.stock }} left
      </div>
    </div>

    <!-- Info Area -->
    <div class="p-2.5 md:p-6 flex flex-col flex-1">
      <!-- Name -->
      <div class="mb-1.5 min-h-[40px] md:min-h-[48px]">
        <h3 class="text-xs md:text-base font-black text-gray-900 line-clamp-2 md:line-clamp-3 leading-snug group-hover:text-[#033958] transition-colors tracking-tight">
          {{ product.name }}
        </h3>
      </div>
      
      <!-- Pricing Area -->
      <div class="mt-auto pt-3 border-t border-gray-50 space-y-3">
        <!-- Main Price Section -->
        <div class="flex items-baseline justify-between gap-2">
          <div class="flex flex-col">
            <span class="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">Price per Unit</span>
            <div class="flex items-baseline gap-2">
              <span class="text-xl md:text-2xl font-black text-[#033958] tracking-tighter leading-none">
                {{ formatPrice(product.unitPrice || product.price) }}
              </span>
              <span v-if="unitCompareAtPrice" class="text-[10px] font-bold text-gray-300 line-through decoration-amber-500/50">
                {{ formatPrice(unitCompareAtPrice) }}
              </span>
            </div>
          </div>
          
          <!-- Carton Info Badge -->
          <div v-if="product.quantityPerPack" class="flex flex-col items-end shrink-0">
             <div class="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-lg border border-amber-100">
               <Icon name="lucide:package" size="10" class="text-amber-600" />
               <span class="text-[9px] font-black text-amber-700 uppercase tracking-tight">{{ product.quantityPerPack }} Units/Ctn</span>
             </div>
          </div>
        </div>

        <!-- Secondary Price (Carton) -->
        <div class="flex items-center justify-between text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1">
          <div class="flex items-center gap-1.5">
            <span>Carton:</span>
            <span class="text-gray-900 font-black">{{ formatPrice(product.price) }}</span>
          </div>
          <span v-if="product.varietyType" class="text-emerald-600 font-black">{{ product.varietyType }}</span>
        </div>
        
        <!-- Add to Cart -->
        <button 
          class="w-full py-2.5 rounded-xl bg-[#033958] text-white flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-gray-950 transition-all duration-300 font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-lg shadow-[#033958]/10 group/btn" 
          @click.stop.prevent="handleAddToCart"
        >
          <span>Add to cart</span>
          <Icon name="lucide:shopping-cart" size="14" class="group-hover/btn:scale-110 transition-transform" />
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

const unitCompareAtPrice = computed(() => {
  if (!props.product.compareAtPrice) return 0
  if (props.product.sellPerUnit && props.product.unitPrice) {
     // If it's already a unit product, just return compareAtPrice
     return props.product.compareAtPrice
  }
  // Otherwise calculate unit compare price from carton compare price
  return props.product.compareAtPrice / (props.product.quantityPerPack || 1)
})

function handleAddToCart() {
  try {
    addItem({
      _id: props.product._id,
      name: props.product.name,
      price: props.product.price,
      images: props.product.images,
      slug: props.product.slug,
      weight: props.product.weight,
      sellPerUnit: props.product.sellPerUnit,
      unitPrice: props.product.unitPrice,
      quantityPerPack: props.product.quantityPerPack
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