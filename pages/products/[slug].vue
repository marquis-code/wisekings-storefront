<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:px-8 py-8">
    <div v-if="loading" class="text-center py-20"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto text-[#033958]/80" /></div>
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <!-- Images -->
      <div>
        <div class="aspect-square bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-100 p-8">
          <img v-if="product.images?.[selectedImage]" :src="product.images[selectedImage]" :alt="product.name" class="w-full h-full object-contain" />
          <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-16 h-16 text-[#033958]/60" /></div>
        </div>
        <div v-if="product.images?.length > 1" class="flex gap-2 mt-4">
          <button v-for="(img, i) in (product.images as any[])" :key="i" @click="selectedImage = (i as number)"
            :class="['w-16 h-16 rounded-xl overflow-hidden border-2 transition-all', (i as number) === selectedImage ? 'border-gray-900' : 'border-transparent hover:border-gray-300']">
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <!-- Details -->
      <div class="flex flex-col">
        <NuxtLink to="/products" class="text-sm text-[#033958]/80 hover:text-gray-600 mb-2">{{ $t('common.back_to_shop') }}</NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
        <div class="flex flex-col gap-6 mt-6">
          <!-- Pricing Section -->
          <div class="flex items-baseline gap-4">
            <div class="flex flex-col">
              <span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Price per Unit</span>
              <div class="flex items-baseline gap-3">
                <span class="text-4xl md:text-5xl font-black text-[#033958] tracking-tighter leading-none">
                  {{ formatPrice(product.unitPrice || product.price) }}
                </span>
                <span v-if="unitCompareAtPrice" class="text-lg md:text-xl font-bold text-gray-300 line-through decoration-amber-500/50">
                  {{ formatPrice(unitCompareAtPrice) }}
                </span>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-6">
            <!-- Carton Info -->
            <div class="flex flex-col">
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Carton ({{ product.quantityPerPack }} Units)</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-bold text-gray-600">{{ formatPrice(product.price) }}</span>
                  <span v-if="product.compareAtPrice" class="text-xs font-medium text-gray-300 line-through decoration-gray-300/50">
                    {{ formatPrice(product.compareAtPrice) }}
                  </span>
                </div>
            </div>

            <!-- Tags -->
            <div v-if="product.unitDescription || product.varietyType" class="flex gap-2">
              <span v-if="product.varietyType" class="px-3 py-1.5 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-amber-100 flex items-center gap-2">
                <Icon name="lucide:layers" size="14" />
                {{ product.varietyType }}
              </span>
              <span v-if="product.unitDescription" class="px-3 py-1.5 bg-[#033958]/5 text-[#033958] text-[10px] font-black uppercase tracking-widest rounded-xl flex items-center gap-2">
                <Icon name="lucide:scale" size="14" />
                {{ product.unitDescription }}
              </span>
            </div>
          </div>
        </div>
        <p class="text-gray-600 mt-4 leading-relaxed">{{ product.description }}</p>

        <div v-if="product.stock > 0" class="mt-6 flex items-center gap-4">
          <div class="flex items-center border border-gray-300 rounded-full">
            <button @click="qty = Math.max(1, qty - 1)" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"><Icon name="lucide:minus" class="w-4 h-4" /></button>
            <span class="w-10 text-center font-medium">{{ qty }}</span>
            <button @click="qty++" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"><Icon name="lucide:plus" class="w-4 h-4" /></button>
          </div>
          <button @click="handleAdd" class="btn-primary btn-lg flex-1">
            <Icon name="lucide:shopping-bag" class="w-5 h-5" /> {{ $t('common.add_to_cart') }}
          </button>
        </div>
        <p v-else class="mt-6 text-red-600 font-medium">{{ $t('common.out_of_stock') }}</p>

        <div class="mt-8 space-y-3 border-t border-gray-200 pt-6">
          <div v-if="product.unitDescription" class="flex justify-between text-sm"><span class="text-[#033958]/80">Unit Weight</span><span class="text-gray-700 font-bold">{{ product.unitDescription }}</span></div>
          <div v-if="product.quantityPerPack" class="flex justify-between text-sm"><span class="text-[#033958]/80">Quantity per Pack</span><span class="text-gray-700 font-bold">{{ product.quantityPerPack }}</span></div>
          <div v-if="product.varietyType" class="flex justify-between text-sm"><span class="text-[#033958]/80">Variety/Type</span><span class="text-gray-700 font-bold">{{ product.varietyType }}</span></div>
          <div v-if="product.sku" class="flex justify-between text-sm"><span class="text-[#033958]/80">SKU</span><span class="text-gray-700 font-bold">{{ product.sku }}</span></div>
          <div class="flex justify-between text-sm"><span class="text-[#033958]/80">{{ $t('common.category') }}</span><span class="text-gray-700 font-bold">{{ typeof product.category === 'object' ? (product.category as any)?.name : '—' }}</span></div>
        </div>
      </div>
    </div>
    <!-- Related Products Section -->
    <section v-if="product?.relatedProducts?.length" class="mt-20 border-t border-gray-100 pt-16">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-black text-gray-900 tracking-tight">Related Products</h2>
          <p class="text-sm text-[#033958]/80 font-medium">Specially selected to complement your choice</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <ProductCard v-for="p in product.relatedProducts" :key="p._id" :product="localizeProduct(p)" />
      </div>
    </section>

    <!-- Aggressive Recommendations Section -->
    <section v-if="recommendations.length" class="mt-20 border-t border-gray-100 pt-16">
      <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 class="text-3xl font-black text-gray-900 tracking-tight">You May Also Love</h2>
          <p class="text-sm text-gray-500 font-medium mt-2">More flavors hand-picked to complement your choice.</p>
        </div>
        <NuxtLink to="/products" class="text-sm font-bold text-[#033958] hover:underline flex items-center gap-1">
          Explore All <Icon name="lucide:arrow-right" size="14" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <ProductCard v-for="p in recommendations" :key="p._id" :product="p" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { useFetchProductBySlug } from '@/composables/modules/products/useFetchProductBySlug'
import { useFetchRecommendations } from '@/composables/modules/products/useFetchRecommendations'
import { useCurrency } from '@/composables/useCurrency'
import { useCustomToast } from '@/composables/core/useCustomToast'

const route = useRoute()
const { addItem } = useCart()
const { showToast } = useCustomToast()
const { trackAddToCart } = useAnalytics()

const { product, loading, fetchProduct } = useFetchProductBySlug()
const { recommendations, fetchRecommendations } = useFetchRecommendations()
const { locale } = useI18n()
const { selectedCurrency, formatPrice } = useCurrency()

const selectedImage = ref(0)
const qty = ref(1)

const unitCompareAtPrice = computed(() => {
  if (!product.value?.compareAtPrice) return 0
  if (product.value.sellPerUnit && product.value.unitPrice) return product.value.compareAtPrice
  return product.value.compareAtPrice / (product.value.quantityPerPack || 1)
})

const savings = computed(() => {
  if (!product.value?.compareAtPrice) return 0
  const priceToUse = product.value.unitPrice || product.value.price
  const compareToUse = product.value.sellPerUnit ? product.value.compareAtPrice : (product.value.compareAtPrice / (product.value.quantityPerPack || 1))
  return Math.round((1 - priceToUse / compareToUse) * 100)
})

function handleAdd() {
  if (product.value) {
    addItem(product.value, qty.value)
    trackAddToCart(product.value)
    showToast({
      title: 'Success',
      message: `${product.value.name} × ${qty.value} added to cart`,
      toastType: 'success'
    })
  }
}

async function refreshData() {
  await fetchProduct(route.params.slug as string)
}

watch([locale, selectedCurrency], () => {
    refreshData()
})

watch(product, (newVal) => {
  if (newVal?._id) {
    fetchRecommendations(newVal._id)
  }
}, { immediate: true })

onMounted(() => {
  refreshData()
})

// Localization helper for individual product objects (used for related products)
function localizeProduct(p: any) {
  if (!p) return null
  return {
    ...p,
    name: p.name?.[locale.value] || p.name?.en || '',
    description: p.description?.[locale.value] || p.description?.en || ''
  }
}

useHead(() => ({
  title: product.value ? `${product.value.name} — WiseKings` : 'Product — WiseKings',
  meta: [{ name: 'description', content: product.value?.description?.slice(0, 155) || '' }],
}))
</script>
