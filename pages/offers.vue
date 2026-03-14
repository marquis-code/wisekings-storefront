<template>
  <div class="min-h-screen bg-white">
    <section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-orange-600">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2000&auto=format&fit=crop" 
          class="w-full h-full object-cover opacity-40 animate-ken-burns" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-orange-700 via-orange-600/40 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20 text-center">
        <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 mx-auto">
          <Icon name="lucide:flame" size="14" class="text-amber-400" />
          {{ $t('common.limited_time_deals') }}
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">{{ $t('common.special_offers_deals') }}</h1>
        <p class="text-lg text-white/80 max-w-2xl mx-auto font-medium">{{ $t('common.save_big_snacks') }}</p>
      </div>
    </section>

    <!-- Deals Section -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-2xl font-extrabold text-gray-900">{{ $t('common.todays_deals') }}</h2>
        <CoreSelectInput 
          v-model="sortBy" 
          :label="$t('common.sort_archive')" 
          :options="sortOptions" 
        />
      </div>

      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="animate-pulse">
          <div class="bg-gray-100 rounded-3xl h-56"></div>
          <div class="mt-4 h-5 bg-gray-100 rounded w-3/4"></div>
          <div class="mt-2 h-4 bg-gray-50 rounded w-1/2"></div>
        </div>
      </div>

      <div v-else-if="offers.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink 
          v-for="product in offers" 
          :key="product._id" 
          :to="`/products/${product.slug}`"
          class="group"
        >
          <div class="relative rounded-3xl overflow-hidden h-56 bg-gray-50 border border-gray-100 group-hover:shadow-xl group-hover:shadow-orange-500/5 transition-all duration-300">
            <img 
              v-if="product.images && product.images.length" 
              :src="product.images[0]" 
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div v-else class="flex items-center justify-center h-full">
              <Icon name="lucide:package" size="36" class="text-gray-300" />
            </div>
            <!-- Deal Badge -->
            <div v-if="product.compareAtPrice" class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-lg">
              {{ $t('common.off', { percent: Math.round((1 - product.price / product.compareAtPrice) * 100) }) }}
            </div>
          </div>
          <div class="mt-5 px-1">
            <h3 class="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">{{ product.name }}</h3>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-lg font-extrabold text-gray-900 font-serif">{{ formatPrice(product.price) }}</span>
              <span v-if="product.compareAtPrice" class="text-sm text-gray-400 line-through font-serif">{{ formatPrice(product.compareAtPrice) }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="text-center py-20">
        <div class="w-24 h-24 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Icon name="lucide:tag" size="40" class="text-amber-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('common.no_offers') }}</h3>
        <p class="text-gray-500 mb-6">{{ $t('common.check_back_deals') }}</p>
        <NuxtLink to="/products" class="inline-flex items-center gap-2 bg-[#033958] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#022a45] transition-all shadow-lg shadow-[#033958]/10">
          {{ $t('common.browse_all_snacks') }}
          <Icon name="lucide:arrow-right" size="18" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { products_api } from '@/api_factory/modules/products'

const { locale, t } = useI18n()
const { formatPrice, selectedCurrency } = useCurrency()

const allProducts = ref<any[]>([])
const loading = ref(true)
const sortBy = ref('discount')

const sortOptions = computed(() => [
  { value: 'discount', label: t('common.sort.price_desc') }, // Reuse existing keys
  { value: 'price-asc', label: t('common.sort.price_asc') },
  { value: 'price-desc', label: t('common.sort.price_desc') },
  { value: 'name', label: t('common.sort.name') },
])

const offers = computed(() => {
  let items = allProducts.value.filter(p => p.compareAtPrice && p.compareAtPrice > p.price)
  
  switch (sortBy.value) {
    case 'discount':
      items.sort((a, b) => (1 - b.price / b.compareAtPrice) - (1 - a.price / a.compareAtPrice))
      break
    case 'price-asc':
      items.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      items.sort((a, b) => b.price - a.price)
      break
    case 'name':
      items.sort((a, b) => a.name.localeCompare(b.name))
      break
  }
  return items
})

async function fetchOffers() {
  loading.value = true
  try {
    const res = await products_api.get()
    allProducts.value = res?.data?.data || res?.data || []
  } catch (e) {
    console.error('Error fetching offers:', e)
  } finally {
    loading.value = false
  }
}

watch([locale, selectedCurrency], () => {
    fetchOffers()
})

onMounted(async () => {
  fetchOffers()
})
</script>

<style>
@keyframes ken-burns {
  0% { transform: scale(1) translate(0); }
  50% { transform: scale(1.1) translate(-1%, -1%); }
  100% { transform: scale(1.2) translate(-2%, -2%); }
}
.animate-ken-burns {
  animation: ken-burns 30s ease-in-out infinite alternate;
}
</style>
