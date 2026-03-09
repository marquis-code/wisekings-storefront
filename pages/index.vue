<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
            Premium Quality.<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Delivered Fast.</span>
          </h1>
          <p class="mt-6 text-lg text-gray-600 max-w-lg">Discover our curated collection of premium products. Quality you can trust, prices you'll love.</p>
          <div class="mt-8 flex gap-3">
            <NuxtLink to="/products" class="btn-primary btn-lg">Shop Now</NuxtLink>
            <NuxtLink to="/categories" class="btn-secondary btn-lg">Browse Categories</NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent hidden lg:block"></div>
    </section>

    <!-- Categories -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink v-for="c in categories" :key="c._id" :to="`/categories/${c.slug}`"
          class="group relative bg-gray-100 rounded-2xl p-6 h-40 flex items-end overflow-hidden hover:shadow-lg transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 class="relative text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">{{ c.name }}</h3>
        </NuxtLink>
        <div v-if="categories.length === 0" class="col-span-full text-center py-8 text-gray-400">Loading categories...</div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-gray-900">Featured Products</h2>
        <NuxtLink to="/products" class="text-sm font-medium text-gray-600 hover:text-gray-900">View all →</NuxtLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <NuxtLink v-for="p in products" :key="p._id" :to="`/products/${p.slug}`" class="group">
          <div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3">
            <img v-if="p.images?.[0]" :src="p.images[0]" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-10 h-10 text-gray-300" /></div>
          </div>
          <h3 class="text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{{ p.name }}</h3>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-sm font-bold text-gray-900">₦{{ p.price.toLocaleString() }}</span>
            <span v-if="p.compareAtPrice" class="text-xs text-gray-400 line-through">₦{{ p.compareAtPrice.toLocaleString() }}</span>
          </div>
        </NuxtLink>
      </div>
      <div v-if="products.length === 0" class="text-center py-12 text-gray-400">Loading products...</div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Join the WiseKings Community</h2>
        <p class="text-gray-400 mb-8 max-w-md mx-auto">Earn commissions by referring customers. Become a merchant or partner today.</p>
        <div class="flex justify-center gap-3">
          <NuxtLink to="/register" class="btn bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold">Get Started</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Product, Category } from '~/types'
import { useFetchProducts } from '@/composables/modules/products/useFetchProducts'
import { useFetchCategories } from '@/composables/modules/products/useFetchCategories'

const { products, fetchProducts } = useFetchProducts()
const { categories, fetchCategories } = useFetchCategories()

onMounted(async () => {
  await Promise.allSettled([
    fetchProducts({ limit: 8 }),
    fetchCategories()
  ])
})
</script>
