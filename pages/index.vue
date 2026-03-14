<template>
  <div>
    <!-- Hero Banner Carousel -->
    <section class="relative h-[95vh] min-h-[700px] flex items-center overflow-hidden bg-gray-950">
      <!-- Animated Background Layers -->
      <div class="absolute inset-0 z-0">
        <transition name="slide-fade" mode="out-in">
          <div :key="currentSlide" class="absolute inset-0">
             <img 
               :src="slides[currentSlide].image" 
               alt="Hero Background" 
               class="w-full h-full object-cover opacity-60 animate-ken-burns"
             >
             <div class="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent"></div>
             <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>
        </transition>
        
        <!-- Dynamic Accents -->
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-[#033958]/30 rounded-full blur-[150px] animate-pulse"></div>
        <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/20 rounded-full blur-[150px] animate-pulse-slow"></div>
      </div>

      <div class="max-w-7xl mx-auto px-8 lg:px-12 w-full relative z-10 pt-44">
        <div class="max-w-3xl">
          <transition name="slide-up" mode="out-in">
            <div :key="currentSlide" class="space-y-8">
              <div class="inline-flex items-center gap-3 bg-white/10 text-white/90 px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase backdrop-blur-md border border-white/20">
                <Icon :name="slides[currentSlide].icon" size="18" class="text-amber-400" />
                {{ $t(slides[currentSlide].badge) }}
              </div>
              
              <h1 class="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                {{ $t(slides[currentSlide].title).split(',')[0] }}<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-amber-400">
                  {{ $t(slides[currentSlide].title).split(',')[1] || '' }}
                </span>
              </h1>

              <p class="text-lg md:text-2xl text-white/60 max-w-xl font-medium leading-relaxed">
                {{ $t(slides[currentSlide].subtitle) }}
              </p>

              <div class="flex flex-col sm:flex-row gap-5 pt-4">
                <NuxtLink :to="slides[currentSlide].cta.link" class="bg-white text-gray-950 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-2xl flex items-center gap-4 justify-center group/btn">
                  {{ $t(slides[currentSlide].cta.text) }}
                  <Icon name="lucide:chevron-right" size="18" class="group-hover/btn:translate-x-1 transition-transform" />
                </NuxtLink>
                <NuxtLink to="/categories" class="bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 justify-center">
                  <Icon name="lucide:aperture" size="20" class="text-amber-400" />
                  {{ $t('explore_luxury') }}
                </NuxtLink>
              </div>
            </div>
          </transition>

          <!-- Navigation Controls -->
          <div class="flex items-center gap-6 mt-16">
            <div class="flex gap-3">
              <button 
                v-for="(_, i) in slides" 
                :key="i" 
                @click="currentSlide = i"
                :class="['h-1 rounded-full transition-all duration-700', currentSlide === i ? 'bg-amber-400 w-12' : 'bg-white/20 w-6 hover:bg-white/40']"
              ></button>
            </div>
            <div class="h-px flex-1 bg-white/10 max-w-[100px]"></div>
            <div class="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
              0{{ currentSlide + 1 }} / 0{{ slides.length }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Banners (from API) -->
    <section v-if="banners.length" class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 -mt-8 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a v-for="b in banners.slice(0, 3)" :key="b._id" :href="b.link || '#'" class="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <img :src="b.image" :alt="b.title" class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500">
        </a>
      </div>
    </section>

    <!-- Categories -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-extrabold text-gray-900">{{ $t('shop_by_category') }}</h2>
        <NuxtLink to="/categories" class="text-sm font-bold text-[#033958] hover:underline flex items-center gap-1">
          {{ $t('view_all') }} <Icon name="lucide:arrow-right" size="14" />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <NuxtLink v-for="c in categories" :key="c._id" :to="`/products?category=${c._id}`"
          class="group relative h-48 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200">
          <!-- Background Image -->
          <div class="absolute inset-0 z-0">
            <img 
              v-if="c.image" 
              :src="c.image" 
              :alt="c.name" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <Icon name="lucide:image" class="w-10 h-10 text-gray-200" />
            </div>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent group-hover:from-[#033958]/90 transition-colors duration-500"></div>
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full p-6 flex flex-col justify-end">
            <h3 class="text-lg font-black text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500">{{ c.name }}</h3>
            <div class="w-8 h-1 bg-amber-400 mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        </NuxtLink>
        <div v-if="categories.length === 0" class="col-span-full py-20 text-center">
          <div class="w-16 h-16 border-4 border-gray-100 border-t-[#033958] rounded-full animate-spin mx-auto mb-4"></div>
          <p class="text-sm font-bold text-gray-400 uppercase tracking-widest">Sourcing Categories...</p>
        </div>
      </div>
    </section>

    <!-- Promotions & Special Sections -->
    <section v-if="promotions.length" class="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="flex items-center justify-between mb-10">
          <div>
            <h2 class="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
              <Icon name="lucide:flame" size="24" class="text-orange-500" /> Hot Deals & Promotions
            </h2>
            <p class="text-gray-500 mt-1 font-medium">Limited time offers on your favourite snacks</p>
          </div>
          <NuxtLink to="/offers" class="hidden md:flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm border border-gray-200 hover:border-gray-300 transition-all">
            View All Offers <Icon name="lucide:arrow-right" size="14" />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="p in promotions" :key="p._id" class="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-3 mb-4">
              <span v-if="p.badgeText" :class="['px-3 py-1 rounded-full text-xs font-extrabold', p.badgeColor || 'bg-orange-100 text-orange-700']">{{ p.badgeText }}</span>
              <span class="text-xs text-gray-400 font-bold uppercase tracking-wider">{{ p.type }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{{ p.title }}</h3>
            <p v-if="p.description" class="text-gray-500 text-sm mb-4 line-clamp-2">{{ p.description }}</p>
            <div v-if="p.discountPercentage" class="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-extrabold">
              <Icon name="lucide:percent" size="14" /> {{ p.discountPercentage }}% OFF
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gifting Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop" alt="Gifting" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/80"></div>
          <div class="relative z-10 p-10 md:p-14 text-white max-w-lg">
            <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/20">
              <Icon name="lucide:gift" size="16" /> Gift Collection
            </div>
            <h2 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">The Perfect Snack Gift</h2>
            <p class="text-white/80 text-lg mb-8">Curated gift boxes for every occasion. Birthdays, holidays, and celebrations — we've got you covered.</p>
            <NuxtLink to="/products" class="inline-flex items-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl group">
              Shop Gifts
              <Icon name="lucide:arrow-right" size="20" class="group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-extrabold text-gray-900">{{ $t('featured_snacks') }}</h2>
        <NuxtLink to="/products" class="text-sm font-bold text-[#033958] hover:underline flex items-center gap-1">
          {{ $t('view_all') }} <Icon name="lucide:arrow-right" size="14" />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <NuxtLink v-for="p in products" :key="p._id" :to="`/products/${p.slug}`" class="group">
          <div class="aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-3 border border-gray-100 group-hover:shadow-lg transition-all duration-300">
            <img v-if="p.images?.[0]" :src="p.images[0]" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div v-else class="w-full h-full flex items-center justify-center"><Icon name="lucide:image" class="w-10 h-10 text-gray-300" /></div>
          </div>
          <h3 class="text-sm font-bold text-gray-900 group-hover:text-[#033958] transition-colors line-clamp-1">{{ p.name }}</h3>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-sm font-extrabold text-gray-900">{{ formatPrice(p.price) }}</span>
            <span v-if="p.compareAtPrice" class="text-xs text-gray-400 line-through">{{ formatPrice(p.compareAtPrice) }}</span>
          </div>
        </NuxtLink>
      </div>
      <div v-if="products.length === 0" class="text-center py-12 text-gray-400">{{ $t('loading_products') }}</div>
    </section>

    <!-- Holiday Banner -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src="@/assets/images/holiday.jpg" alt="Holiday" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 text-white">
            <div class="max-w-lg">
              <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-4 backdrop-blur-md border border-white/20">
                <Icon name="lucide:calendar-heart" size="16" /> Holiday Special
              </div>
              <h2 class="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">Holiday Season Savings!</h2>
              <p class="text-white/80 text-lg">Celebrate with our exclusive holiday snack collections. Up to 30% off select items.</p>
            </div>
            <NuxtLink to="/offers" class="shrink-0 inline-flex items-center gap-3 bg-white text-emerald-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl group">
              Shop Holiday Deals
              <Icon name="lucide:arrow-right" size="20" class="group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Join the WiseKings Community</h2>
        <p class="text-gray-400 mb-10 max-w-md mx-auto text-lg">Earn commissions, sell products, or become a partner. Your journey starts here.</p>
        <div class="flex justify-center gap-4 flex-col sm:flex-row">
          <NuxtLink to="/register" class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all">{{ $t('auth.create_account') }}</NuxtLink>
          <a href="http://localhost:3002" target="_blank" class="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center gap-2 justify-center">
            <Icon name="lucide:store" size="18" /> Become a Merchant
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { Product, Category } from '~/types'
import { useFetchProducts } from '@/composables/modules/products/useFetchProducts'
import { useFetchCategories } from '@/composables/modules/products/useFetchCategories'
import { marketing_api } from '@/api_factory/modules/marketing'
import { useCurrency } from '@/composables/useCurrency'
import hero1 from "@/assets/images/hero1.jpg"
import hero2 from "@/assets/images/hero2.jpg"
import hero3 from "@/assets/images/hero5.jpg" 

const { products, fetchProducts } = useFetchProducts()
const { categories, fetchCategories } = useFetchCategories()
const { locale } = useI18n()
const { selectedCurrency, formatPrice } = useCurrency()
const banners = ref<any[]>([])
const promotions = ref<any[]>([])

// Carousel
const currentSlide = ref(0)
let slideInterval: ReturnType<typeof setInterval> | null = null

const slides = [
  {
    badge: 'Premium Collection',
    icon: 'lucide:crown',
    image: hero1,
    title: 'premium_taste',
    subtitle: 'discover_artisan',
    cta: { text: 'elevate_taste', link: '/products' }
  },
  {
    badge: 'new_arrivals',
    icon: 'lucide:sparkles',
    image: hero2,
    title: 'new_flavors',
    subtitle: 'explore_latest',
    cta: { text: 'browse_new', link: '/products' }
  },
  {
    badge: 'limited_offers',
    icon: 'lucide:gem',
    image: hero3,
    title: 'exclusive_benefits',
    subtitle: 'discover_artisan',
    cta: { text: 'claim_offer', link: '/offers' }
  }
]

useSeoMeta({
  title: 'WiseKings | Premium Artisan Snacks & Global Confectionery',
  description: 'Experience the pinnacle of snacking with WiseKings. From gourmet nuts to handcrafted sweets, we deliver premium taste to your doorstep.',
  ogTitle: 'WiseKings | Premium Artisan Snacks',
  ogDescription: 'Luxury snacking redefined. Explore our elite collection today.',
  ogImage: slides[0].image,
  twitterCard: 'summary_large_image',
})

function startCarousel() {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 8000)
}

async function refreshData() {
  await Promise.allSettled([
    fetchProducts({ limit: 8 }),
    fetchCategories(),
    marketing_api.getBanners({ isActive: true, position: 'home' }).then(r => { banners.value = r?.data?.data || r?.data || [] }).catch(() => {}),
    marketing_api.getPromotions({ isActive: true }).then(r => { promotions.value = r?.data?.data || r?.data || [] }).catch(() => {}),
  ])
}

// Watch for locale or currency changes to refresh data
watch([locale, selectedCurrency], () => {
  refreshData()
})

onMounted(async () => {
  startCarousel()
  await refreshData()
})

onUnmounted(() => { if (slideInterval) clearInterval(slideInterval) })
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

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-leave-active {
  transition: all 0.4s ease-in;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-enter-active { transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-fade-leave-active { transition: all 0.6s ease-in; }
.slide-fade-enter-from { opacity: 0; filter: blur(10px); }
.slide-fade-leave-to { opacity: 0; filter: blur(5px); }
</style>
