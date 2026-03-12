<template>
  <div class="min-h-screen flex flex-col font-sans selection:bg-[#033958]/10 selection:text-[#033958]">
    <!-- Header -->
    <!-- Header -->
    <header :class="['fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-500 rounded-[2rem]', isScrolled ? 'bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-3' : 'bg-transparent py-5']">
      <div class="px-8 lg:px-12 flex items-center justify-between">
        <!-- Brand -->
        <NuxtLink to="/" class="flex items-center gap-3 group shrink-0">
          <img src="@/assets/images/logo.jpg" class="h-10 w-auto" alt="Logo" />
          <!-- <div class="w-11 h-11 rounded-2xl bg-[#033958] flex items-center justify-center text-white text-lg font-black shadow-2xl shadow-[#033958]/40 group-hover:rotate-12 transition-all duration-500">WK</div>
          <div class="flex flex-col">
            <span :class="['text-2xl font-black tracking-tighter leading-none transition-colors duration-500', isScrolled ? 'text-gray-950' : 'text-white']">WiseKings</span>
            <span :class="['text-[9px] font-bold uppercase tracking-[0.3em] opacity-60 transition-colors duration-500', isScrolled ? 'text-[#033958]' : 'text-amber-400']">Engineered for Royals</span>
          </div> -->
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-12">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            :class="[
              route.path === link.path ? 'text-amber-500' : (isScrolled ? 'text-gray-900' : 'text-white'),
              'text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-amber-500 relative group/link'
            ]"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-6">
          <NuxtLink to="/cart" class="relative group">
            <div :class="['w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500', isScrolled ? 'bg-gray-100 text-gray-900 group-hover:bg-[#033958] group-hover:text-white' : 'bg-white/10 text-white group-hover:bg-white']">
               <Icon name="lucide:shopping-bag" size="20" />
            </div>
            <span v-if="totalItems > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center font-black border-2 border-white shadow-lg">{{ totalItems }}</span>
          </NuxtLink>

          <NuxtLink v-if="isAuthenticated" to="/account" :class="['hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-500', isScrolled ? 'bg-gray-900 text-white hover:bg-[#033958]' : 'bg-white/10 text-white hover:bg-white/20']">
            <Icon name="lucide:user" size="20" />
          </NuxtLink>
          <NuxtLink v-else to="/login" :class="['hidden sm:flex px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 shadow-xl overflow-hidden relative group', isScrolled ? 'bg-gray-950 text-white hover:bg-[#033958]' : 'bg-white text-gray-950 hover:bg-amber-400']">
            <span class="relative z-10 transition-colors duration-500">Sign in</span>
          </NuxtLink>

          <!-- Mobile Toggle -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="['lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-500', isScrolled ? 'bg-gray-100 text-gray-950' : 'bg-white/10 text-white']"
          >
            <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <transition name="menu-drop">
        <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-auto left-0 w-full bg-white/95 backdrop-blur-3xl border-t border-gray-100 mt-2 rounded-[2rem] shadow-2xl z-50 overflow-hidden">
          <div class="p-8 space-y-2">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path"
              class="block p-5 rounded-2xl text-[11px] font-black text-gray-500 hover:text-[#033958] hover:bg-[#033958]/5 transition-all tracking-[0.2em] uppercase"
              active-class="bg-[#033958]/10 text-[#033958]"
            >
              {{ link.name }}
            </NuxtLink>
            
            <div class="pt-8 mt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div class="p-5 bg-gray-50 rounded-2xl flex flex-col gap-3">
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Global Reach</span>
                <CoreLanguageSwitcher class="scale-90 origin-left" />
              </div>
              <div class="p-5 bg-gray-50 rounded-2xl flex flex-col gap-3">
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Pricing</span>
                <CoreCurrencySwitcher class="scale-90 origin-left" />
              </div>
            </div>

            <div v-if="!isAuthenticated" class="pt-6">
              <NuxtLink to="/login" class="flex items-center justify-center w-full py-5 bg-[#033958] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#033958]/20">Enter the Kingdom</NuxtLink>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="flex-1 overflow-x-hidden pb-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div class="lg:col-span-2 space-y-6">
            <NuxtLink to="/" class="flex items-center gap-3">
               <img src="@/assets/images/logo.jpg" class="h-10 w-auto" alt="Logo" />
              <!-- <div class="w-10 h-10 rounded-xl bg-[#033958] flex items-center justify-center text-white text-base font-black">WK</div>
              <span class="text-xl font-black text-gray-900 tracking-tight">WiseKings</span> -->
            </NuxtLink>
            <p class="text-gray-500 text-base leading-relaxed max-w-sm font-medium">
              Experience the future of premium shopping. Quality products, seamless delivery, and a community of satisfied royalty.
            </p>
            <div class="flex items-center gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#033958] hover:bg-[#033958]/5 transition-all"><Icon name="lucide:instagram" class="w-5 h-5" /></a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#033958] hover:bg-[#033958]/5 transition-all"><Icon name="lucide:twitter" class="w-5 h-5" /></a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#033958] hover:bg-[#033958]/5 transition-all"><Icon name="lucide:facebook" class="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Discovery</h4>
            <div class="space-y-4 text-sm font-bold">
              <NuxtLink to="/products" class="block text-gray-500 hover:text-gray-950 transition-colors">All Products</NuxtLink>
              <NuxtLink to="/categories" class="block text-gray-500 hover:text-gray-950 transition-colors">Categories</NuxtLink>
              <NuxtLink to="/offers" class="block text-gray-500 hover:text-gray-950 transition-colors">Special Offers</NuxtLink>
            </div>
          </div>
          
          <div>
            <h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Support</h4>
            <div class="space-y-4 text-sm font-bold">
              <NuxtLink to="/account/orders" class="block text-gray-500 hover:text-gray-950 transition-colors">Order Tracking</NuxtLink>
              <NuxtLink to="/shipping-policy" class="block text-gray-500 hover:text-gray-950 transition-colors">Shipping Policy</NuxtLink>
              <NuxtLink to="/return-policy" class="block text-gray-500 hover:text-gray-950 transition-colors">Return Policy</NuxtLink>
            </div>
          </div>
          
          <div>
            <h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Company</h4>
            <div class="space-y-4 text-sm font-bold">
              <NuxtLink to="/about" class="block text-gray-500 hover:text-gray-950 transition-colors">Our Story</NuxtLink>
              <NuxtLink to="/contact" class="block text-gray-500 hover:text-gray-950 transition-colors">Contact Us</NuxtLink>
              <NuxtLink to="/privacy" class="block text-gray-500 hover:text-gray-950 transition-colors">Privacy Policy</NuxtLink>
              <NuxtLink to="/terms" class="block text-gray-500 hover:text-gray-950 transition-colors">Terms of Service</NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-5 border-t border-gray-100 pt-8 -mb-4">
            <h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Join Our Network</h4>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="http://localhost:3002" target="_blank" class="flex items-center gap-3 bg-emerald-50 border border-emerald-100 text-emerald-700 px-5 py-3.5 rounded-2xl font-bold text-sm hover:bg-emerald-100 hover:shadow-md transition-all group">
                <Icon name="lucide:store" size="20" />
                Become a Merchant
                <Icon name="lucide:external-link" size="14" class="ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="http://localhost:3003" target="_blank" class="flex items-center gap-3 bg-orange-50 border border-orange-100 text-orange-700 px-5 py-3.5 rounded-2xl font-bold text-sm hover:bg-orange-100 hover:shadow-md transition-all group">
                <Icon name="lucide:handshake" size="20" />
                Partner With Us
                <Icon name="lucide:external-link" size="14" class="ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-gray-400 text-xs font-bold">&copy; {{ new Date().getFullYear() }} WiseKings. Engineered for Royals.</p>
          <!-- <div class="flex items-center gap-6">
            <Icon name="lucide:credit-card" class="w-6 h-6 text-gray-200" />
            <span class="w-px h-4 bg-gray-100"></span>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span class="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">Systems Operational</span>
            </div>
          </div> -->
        </div>
      </div>
    </footer>
    <CoreLiveChatWidget />
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuthState()
const { totalItems } = useCart()
const { captureFromUrl } = useReferral()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Scroll listener for floating effect
if (process.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}

// Close menu when route changes
watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
})

const navLinks = [
  { name: 'Shop', path: '/products' },
  { name: 'Categories', path: '/categories' },
  { name: 'Special Offers', path: '/offers' },
  { name: 'Our Story', path: '/about' },
]

onMounted(() => captureFromUrl())
</script>

<style>
/* Simple Menu Drop Transition */
.menu-drop-enter-active, .menu-drop-leave-active {
  transition: all 0.3s ease-out;
}
.menu-drop-enter-from, .menu-drop-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Pop Animation for Badge */
.pop-enter-active {
  animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes pop-in {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
