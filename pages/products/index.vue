<template>
  <div class="min-h-screen bg-white">
    <!-- Hero -->
    <section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-gray-950">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2000&auto=format&fit=crop" 
          class="w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md border border-white/20 mb-6 font-sans">
             <Icon name="lucide:shopping-bag" size="14" class="text-amber-400" />
             {{ $t('common.full_collection') }}
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
            {{ $t('common.shop_royal_vault').split(' ')[0] }}<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">{{ $t('common.shop_royal_vault').split(' ').slice(1).join(' ') }}</span>
          </h1>
          <p class="text-lg text-white/60 font-medium">{{ $t('common.explore_collection_desc') }}</p>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar filters -->
      <aside class="w-full md:w-64 flex-shrink-0 space-y-8">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-8 h-8 rounded-lg bg-[#033958]/5 flex items-center justify-center text-[#033958]">
            <Icon name="lucide:sliders-horizontal" size="18" />
          </div>
          <h2 class="text-xl font-black text-gray-950 tracking-tight">{{ $t('common.refine_manifest') }}</h2>
        </div>

        <div class="space-y-6">
          <CoreSelectInput 
            v-model="categoryFilter" 
            :label="$t('common.product_category')"
            :options="categoryOptions"
            @update:model-value="page = 1; handleFetch()"
          />

          <CoreSelectInput 
            v-model="sortBy" 
            :label="$t('common.sort_archive')"
            :options="sortOptions"
            @update:model-value="handleFetch()"
          />
        </div>
      </aside>

      <!-- Products grid -->
      <div class="flex-1">
        <div class="flex items-center justify-between mb-6">
          <input v-model="search" type="text" :placeholder="$t('common.search_products')" class="input max-w-xs" @input="debouncedFetch" />
          <p class="text-sm text-gray-400">{{ $t('common.products_count', { count: total }) }}</p>
        </div>
        <div v-if="loading" class="text-center py-20 text-gray-400"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto" /></div>
        <div v-else-if="products.length === 0" class="text-center py-20 text-gray-400">{{ $t('common.no_products') }}</div>
        <div v-else class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <NuxtLink v-for="p in products" :key="p._id" :to="`/products/${p.slug}`" class="group">
            <div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3">
              <img v-if="p.images?.[0]" :src="p.images[0]" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-10 h-10 text-gray-300" /></div>
            </div>
            <h3 class="text-sm font-semibold text-gray-900 line-clamp-1">{{ p.name }}</h3>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm font-bold text-gray-900">{{ formatPrice(p.price) }}</span>
              <span v-if="p.compareAtPrice" class="text-xs text-gray-400 line-through">{{ formatPrice(p.compareAtPrice) }}</span>
            </div>
            <p v-if="p.stock <= 5 && p.stock > 0" class="text-xs text-amber-600 mt-1">{{ $t('common.only_left', { count: p.stock }) }}</p>
          </NuxtLink>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8">
          <button @click="page--; handleFetch()" :disabled="page <= 1" class="btn-secondary btn-sm">{{ $t('common.prev') }}</button>
          <span class="px-4 py-2 text-sm text-gray-500">{{ page }} / {{ totalPages }}</span>
          <button @click="page++; handleFetch()" :disabled="page >= totalPages" class="btn-secondary btn-sm">{{ $t('common.next') }}</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product, Category } from '~/types'
import { useFetchProducts } from '@/composables/modules/products/useFetchProducts'
import { useFetchCategories } from '@/composables/modules/products/useFetchCategories'

import { useCurrency } from '@/composables/useCurrency'

const { products, loading, total, fetchProducts } = useFetchProducts()
const { categories, fetchCategories } = useFetchCategories()
const { locale, t } = useI18n()
const { selectedCurrency, formatPrice } = useCurrency()

const page = ref(1)
const search = ref('')
const categoryFilter = ref('')
const sortBy = ref('')

const categoryOptions = computed(() => {
  const options = categories.value.map(c => ({
    label: c.name,
    value: c._id
  }))
  return [{ label: t('common.all_categories'), value: '' }, ...options]
})

const sortOptions = computed(() => [
  { label: t('common.sort.default'), value: '' },
  { label: t('common.sort.price_asc'), value: 'price-asc' },
  { label: t('common.sort.price_desc'), value: 'price-desc' },
  { label: t('common.sort.name'), value: 'name' },
])

const totalPages = computed(() => Math.ceil(total.value / 12))

let dt: ReturnType<typeof setTimeout>
function debouncedFetch() {
  clearTimeout(dt)
  dt = setTimeout(() => { page.value = 1; handleFetch() }, 400)
}

async function handleFetch() {
  const params: any = { page: page.value, limit: 12, search: search.value || undefined, category: categoryFilter.value || undefined }
  if (sortBy.value === 'price-asc') { params.sortBy = 'price'; params.sortOrder = 'asc' }
  else if (sortBy.value === 'price-desc') { params.sortBy = 'price'; params.sortOrder = 'desc' }
  else if (sortBy.value === 'name') { params.sortBy = 'name'; params.sortOrder = 'asc' }
  await fetchProducts(params)
}

watch([locale, selectedCurrency], () => {
    handleFetch()
})

onMounted(async () => {
  await fetchCategories()
  handleFetch()
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
