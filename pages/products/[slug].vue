<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:px-8 py-8">
    <div v-if="loading" class="text-center py-20"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto text-gray-400" /></div>
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <!-- Images -->
      <div>
        <div class="aspect-square bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-100 p-8">
          <img v-if="product.images?.[selectedImage]" :src="product.images[selectedImage]" :alt="product.name" class="w-full h-full object-contain" />
          <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-16 h-16 text-gray-300" /></div>
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
        <NuxtLink to="/products" class="text-sm text-gray-400 hover:text-gray-600 mb-2">{{ $t('common.back_to_shop') }}</NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
        <div class="flex items-center gap-3 mt-3">
          <span class="text-2xl font-bold text-gray-900">{{ formatPrice(product.price) }}</span>
          <span v-if="product.compareAtPrice" class="text-lg text-gray-400 line-through">{{ formatPrice(product.compareAtPrice) }}</span>
          <span v-if="product.compareAtPrice" class="badge bg-red-50 text-red-600 text-xs">{{ $t('common.save') }} {{ savings }}%</span>
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
          <div v-if="product.sku" class="flex justify-between text-sm"><span class="text-gray-400">SKU</span><span class="text-gray-700">{{ product.sku }}</span></div>
          <div class="flex justify-between text-sm"><span class="text-gray-400">{{ $t('common.category') }}</span><span class="text-gray-700">{{ typeof product.category === 'object' ? (product.category as any)?.name : '—' }}</span></div>
          <div v-if="product.tags?.length" class="flex gap-2 flex-wrap mt-2">
            <span v-for="tag in product.tags" :key="tag" class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Related Products -->
    <section v-if="recommendations.length" class="mt-20 border-t border-gray-100 pt-16">
      <div class="mb-8">
        <h2 class="text-2xl font-black text-gray-900">{{ $t('common.related_snacks') }}</h2>
        <p class="text-gray-500 font-medium text-sm mt-1">{{ $t('common.buy_other_related') }}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <NuxtLink v-for="p in recommendations" :key="p._id" :to="`/products/${p.slug}`" class="group">
          <div class="aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-3 border border-gray-100 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4">
            <img v-if="p.images?.[0]" :src="p.images[0]" :alt="p.name" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h3 class="text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{{ p.name }}</h3>
          <p class="text-sm font-extrabold text-[#033958] mt-1">{{ formatPrice(p.price) }}</p>
        </NuxtLink>
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

const savings = computed(() => {
  if (!product.value?.compareAtPrice) return 0
  return Math.round((1 - product.value.price / product.value.compareAtPrice) * 100)
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

useHead(() => ({
  title: product.value ? `${product.value.name} — WiseKings` : 'Product — WiseKings',
  meta: [{ name: 'description', content: product.value?.description?.slice(0, 155) || '' }],
}))
</script>
