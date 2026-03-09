<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div v-if="loading" class="text-center py-20"><Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto text-gray-400" /></div>
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <!-- Images -->
      <div>
        <div class="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
          <img v-if="product.images?.[selectedImage]" :src="product.images[selectedImage]" :alt="product.name" class="w-full h-full object-cover" />
          <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-16 h-16 text-gray-300" /></div>
        </div>
        <div v-if="product.images?.length > 1" class="flex gap-2 mt-4">
          <button v-for="(img, i) in product.images as any" :key="i" @click="selectedImage = i"
            :class="['w-16 h-16 rounded-xl overflow-hidden border-2 transition-all', i === selectedImage ? 'border-gray-900' : 'border-transparent hover:border-gray-300']">
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <!-- Details -->
      <div class="flex flex-col">
        <NuxtLink to="/products" class="text-sm text-gray-400 hover:text-gray-600 mb-2">← Back to shop</NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
        <div class="flex items-center gap-3 mt-3">
          <span class="text-2xl font-bold text-gray-900">₦{{ product.price.toLocaleString() }}</span>
          <span v-if="product.compareAtPrice" class="text-lg text-gray-400 line-through">₦{{ product.compareAtPrice.toLocaleString() }}</span>
          <span v-if="product.compareAtPrice" class="badge bg-red-50 text-red-600 text-xs">Save {{ savings }}%</span>
        </div>
        <p class="text-gray-600 mt-4 leading-relaxed">{{ product.description }}</p>

        <div v-if="product.stock > 0" class="mt-6 flex items-center gap-4">
          <div class="flex items-center border border-gray-300 rounded-full">
            <button @click="qty = Math.max(1, qty - 1)" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"><Icon name="lucide:minus" class="w-4 h-4" /></button>
            <span class="w-10 text-center font-medium">{{ qty }}</span>
            <button @click="qty++" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"><Icon name="lucide:plus" class="w-4 h-4" /></button>
          </div>
          <button @click="handleAdd" class="btn-primary btn-lg flex-1">
            <Icon name="lucide:shopping-bag" class="w-5 h-5" /> Add to Cart
          </button>
        </div>
        <p v-else class="mt-6 text-red-600 font-medium">Out of stock</p>

        <div class="mt-8 space-y-3 border-t border-gray-200 pt-6">
          <div v-if="product.sku" class="flex justify-between text-sm"><span class="text-gray-400">SKU</span><span class="text-gray-700">{{ product.sku }}</span></div>
          <div class="flex justify-between text-sm"><span class="text-gray-400">Category</span><span class="text-gray-700">{{ typeof product.category === 'object' ? (product.category as any)?.name : '—' }}</span></div>
          <div v-if="product.tags?.length" class="flex gap-2 flex-wrap mt-2">
            <span v-for="tag in product.tags" :key="tag" class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'
import { useFetchProductBySlug } from '@/composables/modules/products/useFetchProductBySlug'

const route = useRoute()
const { addItem } = useCart()
const toast = useToast()

const { product, loading, fetchProduct } = useFetchProductBySlug()
const selectedImage = ref(0)
const qty = ref(1)

const savings = computed(() => {
  if (!product.value?.compareAtPrice) return 0
  return Math.round((1 - product.value.price / product.value.compareAtPrice) * 100)
})

function handleAdd() {
  if (product.value) {
    addItem(product.value, qty.value)
    toast.success('Added to cart', `${product.value.name} × ${qty.value}`)
  }
}

onMounted(() => {
  fetchProduct(route.params.slug as string)
})

useHead(() => ({
  title: product.value ? `${product.value.name} — WiseKings` : 'Product — WiseKings',
  meta: [{ name: 'description', content: product.value?.description?.slice(0, 155) || '' }],
}))
</script>
