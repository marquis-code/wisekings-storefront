<template>
  <div class="min-h-screen bg-white">
    <!-- Hero -->
    <section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-gray-950">
      <div class="absolute inset-0 z-0">
        <img 
          src="@/assets/images/fresh2.jpg" 
          class="w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase backdrop-blur-md border border-white/20 mb-6 font-sans">
             <Icon name="lucide:shopping-bag" size="14" class="text-amber-400" />
             {{ $t('common.full_collection') }}
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            {{ $t('common.shop_royal_vault') }}
          </h1>
          <p class="text-lg text-white/60 font-medium">{{ $t('common.explore_collection_desc') }}</p>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div class="flex flex-col gap-8">
        <!-- Compact Filter Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-8">
          <div class="flex items-center gap-4">
            <button 
              @click="showFilters = !showFilters"
              class="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-100 transition-all text-[#033958] font-bold text-sm group"
            >
              <Icon :name="showFilters ? 'lucide:x' : 'lucide:sliders-horizontal'" size="18" class="group-hover:rotate-12 transition-transform" />
              {{ showFilters ? 'Close Filters' : $t('common.refine_manifest') }}
            </button>
            <div class="h-6 w-px bg-gray-200 hidden sm:block"></div>
            <p class="text-sm font-bold text-gray-500 hidden sm:block">{{ total }} {{ $t('common.products_count').replace('{count}', '') || 'Products' }}</p>
          </div>

          <div class="flex items-center gap-3 flex-1 max-w-md">
            <div class="relative flex-1">
              <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size="18" />
              <input 
                v-model="search" 
                type="text" 
                :placeholder="$t('common.search_products')" 
                class="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#033958]/10 outline-none font-medium transition-all" 
                @input="debouncedFetch" 
              />
            </div>
          </div>
        </div>

        <!-- Toggleable Filter Interface -->
        <transition 
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-4 opacity-0"
        >
          <div v-if="showFilters" class="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="space-y-3">
              <label class="text-xs font-black uppercase tracking-widest text-[#033958]/50 ml-1">{{ $t('common.product_category') }}</label>
              <CoreSelectInput 
                v-model="categoryFilter" 
                :label="''"
                :options="categoryOptions"
                @update:model-value="page = 1; handleFetch()"
              />
            </div>

            <div class="space-y-3">
              <label class="text-xs font-black uppercase tracking-widest text-[#033958]/50 ml-1">{{ $t('common.sort_archive') }}</label>
              <CoreSelectInput 
                v-model="sortBy" 
                :label="''"
                :options="sortOptions"
                @update:model-value="handleFetch()"
              />
            </div>

            <div class="flex items-end">
              <button @click="categoryFilter = ''; sortBy = ''; search = ''; handleFetch()" class="text-xs font-black text-amber-600 uppercase tracking-widest hover:text-amber-700 underline underline-offset-4 ml-1 mb-4">
                Clear All Filters
              </button>
            </div>
          </div>
        </transition>

        <!-- Products grid -->
        <div class="w-full">
          <div v-if="loading" class="text-center py-32">
            <div class="w-12 h-12 border-4 border-[#033958]/10 border-t-[#033958] rounded-full animate-spin mx-auto"></div>
            <p class="mt-4 text-sm font-bold text-[#033958]/60 uppercase tracking-widest">Sourcing Products...</p>
          </div>
          <div v-else-if="products.length === 0" class="text-center py-32 bg-gray-50 rounded-[3rem] border border-gray-100">
            <Icon name="lucide:package-search" size="48" class="text-gray-300 mx-auto mb-4" />
            <p class="text-lg font-black text-gray-900">{{ $t('common.no_products') }}</p>
            <p class="text-sm font-medium text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
          </div>
          <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <ProductCard v-for="p in products" :key="p._id" :product="p" />
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center items-center gap-6 mt-20">
            <button 
              @click="page--; handleFetch()" 
              :disabled="page <= 1" 
              class="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all disabled:opacity-30"
            >
              <Icon name="lucide:chevron-left" />
            </button>
            <div class="flex items-center gap-2">
              <span v-for="n in totalPages" :key="n" 
                @click="page = n; handleFetch()"
                :class="['w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black cursor-pointer transition-all', page === n ? 'bg-[#033958] text-white shadow-lg shadow-[#033958]/20' : 'hover:bg-gray-50 text-gray-400']"
              >
                {{ n }}
              </span>
            </div>
            <button 
              @click="page++; handleFetch()" 
              :disabled="page >= totalPages" 
              class="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all disabled:opacity-30"
            >
              <Icon name="lucide:chevron-right" />
            </button>
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

const route = useRoute()
const page = ref(1)
const search = ref('')
const categoryFilter = ref('')
const sortBy = ref('')
const showFilters = ref(false)

// Watch for URL category changes (e.g. from Home page clicks)
watch(() => route.query.category, (newCat) => {
  categoryFilter.value = newCat as string || '';
  page.value = 1
  handleFetch()
})

const categoryOptions = computed(() => {
  const desired = ['plantain chips', 'potato chips', 'popcorn']
  const options = [...categories.value].sort((a, b) => {
    const aIdx = desired.indexOf(a.name.toLowerCase())
    const bIdx = desired.indexOf(b.name.toLowerCase())
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
    if (aIdx !== -1) return -1
    if (bIdx !== -1) return 1
    return a.name.localeCompare(b.name)
  }).map(c => ({
    label: c.name,
    value: c.slug || c.name.toLowerCase().replace(/ /g, '-')
  }))
  return options
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
  const categoryId = typeof categoryFilter.value === 'object' ? (categoryFilter.value as any).value : categoryFilter.value
  const sortValue = typeof sortBy.value === 'object' ? (sortBy.value as any).value : sortBy.value

  const params: any = { 
    page: page.value, 
    limit: 12, 
    search: search.value || undefined, 
    category: categoryId || undefined 
  }
  
  if (sortValue === 'price-asc') { params.sortBy = 'price'; params.sortOrder = 'asc' }
  else if (sortValue === 'price-desc') { params.sortBy = 'price'; params.sortOrder = 'desc' }
  else if (sortValue === 'name') { params.sortBy = 'name'; params.sortOrder = 'asc' }
  
  await fetchProducts(params)
}

watch([locale, selectedCurrency], () => {
    handleFetch()
})

onMounted(async () => {
  // Initial fetch immediately to ensure products show up
  handleFetch()
  
  await fetchCategories()
  if (route.query.category) {
    categoryFilter.value = route.query.category as string;
    handleFetch()
  }
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
