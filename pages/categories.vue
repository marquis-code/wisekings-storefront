<template>
  <div class="min-h-screen bg-white">
    <section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-gray-950">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2000&auto=format&fit=crop" 
          class="w-full h-full object-cover opacity-50 animate-ken-burns" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md border border-white/20 mb-6 font-sans mx-auto">
           <Icon name="lucide:grid-3x3" size="14" class="text-amber-400" />
           Curation
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">Explore Categories</h1>
        <p class="text-lg text-white/60 font-medium max-w-2xl mx-auto">Browse our curated collection of snacks by category. Find your favorites faster.</p>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse">
          <div class="bg-gray-100 rounded-3xl h-56"></div>
          <div class="mt-4 h-5 bg-gray-100 rounded w-3/4"></div>
          <div class="mt-2 h-4 bg-gray-50 rounded w-1/2"></div>
        </div>
      </div>

      <div v-else-if="categories.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <NuxtLink 
          v-for="cat in categories" 
          :key="cat._id" 
          :to="`/products?category=${cat._id}`"
          class="group block"
        >
          <div class="relative rounded-[2.5rem] overflow-hidden h-72 bg-gray-50 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-gray-200">
            <!-- Background Image -->
            <img 
              v-if="cat.image" 
              :src="cat.image" 
              :alt="cat.name"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            >
            <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
               <Icon name="lucide:shopping-basket" size="48" class="text-gray-200" />
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#033958] via-[#033958]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            <!-- Floating Indicator -->
            <div class="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
              <Icon name="lucide:arrow-up-right" size="20" class="text-white" />
            </div>

            <!-- Content Overlay -->
            <div class="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
               <h3 class="text-2xl font-black text-white tracking-tight mb-2 uppercase">{{ cat.name }}</h3>
               <p class="text-white/60 text-xs font-bold uppercase tracking-widest line-clamp-1">Explore Collection</p>
            </div>
          </div>
          
          <div class="mt-6 px-4 group-hover:translate-x-1 transition-transform duration-500">
            <h3 class="text-xl font-black text-gray-900 leading-none group-hover:text-[#033958] transition-colors uppercase tracking-tight">{{ cat.name }}</h3>
            <p class="text-sm text-gray-400 mt-2 font-medium line-clamp-2 leading-relaxed">{{ cat.description || 'Discover our exclusively curated selection of premium snacks.' }}</p>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="text-center py-20">
        <div class="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Icon name="lucide:folder-open" size="40" class="text-gray-300" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">No categories yet</h3>
        <p class="text-gray-500">Check back soon — we're adding new snack categories!</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { products_api } from '@/api_factory/modules/products'

const categories = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await products_api.getCategories()
    categories.value = res?.data?.data || res?.data || []
  } catch (e) {
    console.error('Error fetching categories:', e)
  } finally {
    loading.value = false
  }
})

useSeoMeta({
  title: 'Snack Categories | WiseKings Curation',
  description: 'Browse our curated collection of artisan snacks. Find your favorite flavors across our specialized categories.',
  ogTitle: 'Explore Snack Categories | WiseKings',
  ogDescription: 'From gourmet nuts to handcrafted sweets, discover excellence in every category.',
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
