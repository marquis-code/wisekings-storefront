<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar filters -->
      <aside class="w-full md:w-56 flex-shrink-0">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Filters</h2>
        <div class="space-y-4">
          <div>
            <label class="label">Category</label>
            <select v-model="categoryFilter" class="input" @change="page = 1; handleFetch()">
              <option value="">All</option>
              <option v-for="c in categories" :key="c._id" :value="c._id">{{ c.name }}</option>
            </select>
          </div>
          <div>
            <label class="label">Sort by</label>
            <select v-model="sortBy" class="input" @change="handleFetch()">
              <option value="">Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </aside>

      <!-- Products grid -->
      <div class="flex-1">
        <div class="flex items-center justify-between mb-6">
          <input v-model="search" type="text" placeholder="Search products..." class="input max-w-xs" @input="debouncedFetch" />
          <p class="text-sm text-gray-400">{{ total }} products</p>
        </div>
        <div v-if="loading" class="text-center py-20 text-gray-400"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto" /></div>
        <div v-else-if="products.length === 0" class="text-center py-20 text-gray-400">No products found</div>
        <div v-else class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <NuxtLink v-for="p in products" :key="p._id" :to="`/products/${p.slug}`" class="group">
            <div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3">
              <img v-if="p.images?.[0]" :src="p.images[0]" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-10 h-10 text-gray-300" /></div>
            </div>
            <h3 class="text-sm font-semibold text-gray-900 line-clamp-1">{{ p.name }}</h3>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm font-bold text-gray-900">₦{{ p.price.toLocaleString() }}</span>
              <span v-if="p.compareAtPrice" class="text-xs text-gray-400 line-through">₦{{ p.compareAtPrice.toLocaleString() }}</span>
            </div>
            <p v-if="p.stock <= 5 && p.stock > 0" class="text-xs text-amber-600 mt-1">Only {{ p.stock }} left!</p>
          </NuxtLink>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8">
          <button @click="page--; handleFetch()" :disabled="page <= 1" class="btn-secondary btn-sm">Prev</button>
          <span class="px-4 py-2 text-sm text-gray-500">{{ page }} / {{ totalPages }}</span>
          <button @click="page++; handleFetch()" :disabled="page >= totalPages" class="btn-secondary btn-sm">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product, Category } from '~/types'
import { useFetchProducts } from '@/composables/modules/products/useFetchProducts'
import { useFetchCategories } from '@/composables/modules/products/useFetchCategories'

const { products, loading, total, fetchProducts } = useFetchProducts()
const { categories, fetchCategories } = useFetchCategories()

const page = ref(1)
const search = ref('')
const categoryFilter = ref('')
const sortBy = ref('')

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

onMounted(async () => {
  await fetchCategories()
  handleFetch()
})
</script>
