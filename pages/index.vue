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
                <NuxtLink :to="slides[currentSlide].cta.link" class="bg-amber-400 text-gray-950 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center gap-4 justify-center group/btn">
                  <Icon name="lucide:shopping-bag" size="18" />
                  Buy Now
                  <Icon name="lucide:arrow-right" size="18" class="group-hover/btn:translate-x-1 transition-transform" />
                </NuxtLink>
                <NuxtLink :to="slides[currentSlide].cta.link" class="bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4 justify-center">
                  {{ $t(slides[currentSlide].cta.text) }}
                </NuxtLink>
                <NuxtLink to="/categories" class="bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 justify-center">
                  <Icon name="lucide:aperture" size="20" class="text-amber-400" />
                  {{ $t('explore_luxury') }}
                </NuxtLink>
              </div>
            </div>
          </transition>

          <!-- Navigation Controls -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-8 mt-16">
            <div class="flex items-center gap-6">
              <div class="flex gap-3">
                <button 
                  v-for="(_, i) in slides" 
                  :key="i" 
                  @click="currentSlide = i"
                  :class="['h-1 rounded-full transition-all duration-700', currentSlide === i ? 'bg-amber-400 w-12' : 'bg-white/20 w-6 hover:bg-white/40']"
                ></button>
              </div>
              <div class="h-px w-12 bg-white/10"></div>
              <div class="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                0{{ currentSlide + 1 }} / 0{{ slides.length }}
              </div>
            </div>

            <div class="sm:ml-auto">
              <CoreLanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Banners (from API) - Asymmetrical Layout -->
    <section v-if="banners.length" class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 -mt-20 relative z-20 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <!-- Main Large Banner -->
        <div v-if="banners[0]" class="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-2 h-[400px] md:h-[500px]">
          <a :href="banners[0].link || '#'" class="block relative h-full">
            <img :src="banners[0].image" :alt="banners[0].title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
            <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
            
            <div class="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
              <div class="space-y-4">
                <span class="inline-block px-4 py-1.5 bg-amber-400 text-gray-950 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-2">Featured Now</span>
                <h3 class="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">{{ banners[0].title }}</h3>
                <p v-if="banners[0].description" class="text-white/60 text-sm md:text-base font-medium max-w-xl line-clamp-2 md:line-clamp-none overflow-y-auto max-h-[100px] mobile-scroll">{{ banners[0].description }}</p>
              </div>
            </div>
            <div class="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
              <Icon name="lucide:arrow-up-right" class="text-white" size="24" />
            </div>
          </a>
        </div>

        <!-- Sidebar Banners Stack -->
        <div class="md:col-span-4 flex flex-col gap-8">
            <div v-for="(b, i) in banners.slice(1, 3)" :key="b._id" 
              class="group relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-2 flex-1 min-h-[220px]"
            >
              <a :href="b.link || '#'" class="block relative h-full">
                <img :src="b.image" :alt="b.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                <div class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div class="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div class="space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black uppercase tracking-widest text-white mb-1">Exclusive</span>
                    <h3 class="text-xl font-black text-white leading-tight uppercase tracking-tight">{{ b.title }}</h3>
                    <div v-if="b.description" class="max-h-[60px] overflow-y-auto mobile-scroll">
                        <p class="text-white/50 text-[10px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{{ b.description }}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>

    <!-- Categories Section (Shifted down for layout flow) -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <Icon name="lucide:layers" size="14" /> Collections
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">{{ $t('shop_by_category') }}</h2>
        </div>
        <NuxtLink to="/categories" class="group flex items-center gap-3 bg-gray-50 text-gray-900 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#033958] hover:text-white transition-all">
          {{ $t('view_all') }} 
          <Icon name="lucide:arrow-right" size="16" class="group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <NuxtLink v-for="c in displayCategories" :key="c._id" :to="`/products?category=${c._id}`"
          class="group relative h-64 rounded-[3rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
        >
          <!-- Background Image -->
          <div class="absolute inset-0 z-0">
            <img 
              v-if="c.image" 
              :src="c.image" 
              :alt="c.name" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <Icon name="lucide:image" class="w-12 h-12 text-gray-200" />
            </div>
            <!-- Dynamic Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/90 group-hover:to-[#033958]/95 transition-all duration-500"></div>
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full p-8 flex flex-col justify-end">
            <span class="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Discover</span>
            <h3 class="text-xl font-black text-white tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">{{ c.name }}</h3>
            <div class="w-10 h-1 bg-amber-400 mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
          </div>
        </NuxtLink>
        <div v-if="displayCategories.length === 0" class="col-span-full py-20 text-center">
          <div class="w-16 h-16 border-4 border-gray-100 border-t-[#033958] rounded-full animate-spin mx-auto mb-6"></div>
          <p class="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Sourcing Collections...</p>
        </div>
      </div>
    </section>

    <!-- Promotions & Special Sections (Overhauled) -->
    <section v-if="promotions.length" class="relative py-32 overflow-hidden bg-gray-950">
      <!-- Decorative Backdrop -->
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#033958_0%,transparent_40%)] opacity-30"></div>
      <div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#f59e0b_0%,transparent_30%)] opacity-10"></div>
      
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-amber-400/20">
              <Icon name="lucide:zap" size="14" class="animate-pulse" /> Flash Offers
            </div>
            <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Hot <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Deals</span>
            </h2>
            <p class="text-white/40 max-w-xl font-medium text-lg italic">Unmissable limited-time offers curated for premium snack explorers.</p>
          </div>
          <NuxtLink to="/offers" class="bg-gray-800/50 backdrop-blur-3xl text-white px-8 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
            Explores All Deals <Icon name="lucide:arrow-right" size="16" />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="p in promotions" :key="p._id" class="group relative bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/5 hover:bg-white/10 transition-all duration-700 hover:-translate-y-4 shadow-2xl flex flex-col justify-between min-h-[400px]">
            <div>
                <div class="flex items-center justify-between mb-8">
                <span v-if="p.badgeText" :class="['px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm', p.badgeColor || 'bg-amber-400 text-gray-900']">{{ p.badgeText }}</span>
                <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-amber-400 group-hover:text-gray-900 transition-colors">
                    <Icon name="lucide:gift" size="20" />
                </div>
                </div>
                
                <h3 class="text-4xl font-black text-white mb-6 leading-tight group-hover:text-amber-400 transition-colors tracking-tighter">{{ p.title }}</h3>
                <div v-if="p.description" class="max-h-[120px] overflow-y-auto mobile-scroll pr-2">
                    <p class="text-white/40 text-sm mb-8 leading-relaxed font-medium" v-html="p.description"></p>
                </div>
            </div>
            
            <div class="flex items-center justify-between mt-auto">
              <div v-if="p.discountPercentage" class="text-5xl font-black text-white tracking-tighter">
                {{ p.discountPercentage }}<span class="text-amber-400 text-2xl">%</span> <span class="text-white/20 text-xs font-black uppercase tracking-widest ml-1">Off</span>
              </div>
              <Icon name="lucide:arrow-right-circle" size="40" class="text-white/10 group-hover:text-amber-400 transition-all group-hover:translate-x-1" />
            </div>

            <!-- Decorative corner accent -->
            <div class="absolute inset-0 bg-gradient-to-br from-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gifting Section -->
    <section class="py-16 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="relative rounded-[4rem] overflow-hidden shadow-2xl group/gifting">
          <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop" alt="Gifting" class="absolute inset-0 w-full h-full object-cover group-hover/gifting:scale-105 transition-transform duration-1000">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/40 to-transparent"></div>
          <div class="relative z-10 p-12 md:p-20 text-white max-w-2xl">
            <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-white/20">
              <Icon name="lucide:gift" size="18" class="text-amber-400" /> Gift Collection
            </div>
            <h2 class="text-4xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">Pure Joy<br/>Hand-Wrapped</h2>
            <p class="text-white/60 text-lg md:text-xl mb-10 max-w-md font-medium leading-relaxed">Curated gift boxes for every heartbeat. From anniversaries to grand celebrations.</p>
            <NuxtLink to="/products" class="inline-flex items-center gap-4 bg-white text-gray-950 px-10 py-5 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-2xl group">
              Shop Gifts
              <Icon name="lucide:arrow-right" size="20" class="group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Marketing Videos Section -->
    <section class="py-28 bg-gradient-to-b from-white to-[#FFF5F7] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 bg-pink-100/80 text-pink-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-sm">
              <Icon name="lucide:sparkles" size="14" class="animate-spin-slow" /> Taste the Vibe
            </div>
            <h2 class="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">
              Snack <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Storyboard</span>
            </h2>
            <p class="text-gray-500 max-w-xl font-medium text-lg leading-relaxed">
              From the first crunch to the sweet aftertaste – explore our artisan journey in motion. 
              <span class="text-pink-400">Swipe to discover more.</span>
            </p>
          </div>
          
          <div class="hidden md:flex gap-4">
            <button @click="scrollVideos('left')" class="w-14 h-14 rounded-full border-2 border-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all shadow-xl shadow-pink-100/20 active:scale-95">
              <Icon name="lucide:chevron-left" size="24" />
            </button>
            <button @click="scrollVideos('right')" class="w-14 h-14 rounded-full border-2 border-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all shadow-xl shadow-pink-100/20 active:scale-95">
              <Icon name="lucide:chevron-right" size="24" />
            </button>
          </div>
        </div>

        <!-- Swipable Video Container -->
        <div 
          ref="videoCarousel"
          class="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth items-center"
        >
          <div v-for="(video, index) in marketingVideos" :key="index" 
            class="flex-none w-[85%] sm:w-[45%] lg:w-[22%] snap-center group/video relative aspect-[9/16] rounded-[3.5rem] overflow-hidden shadow-2xl hover:shadow-pink-200/50 transition-all duration-700 hover:-translate-y-4 cursor-pointer"
            @click="handleVideoClick(index)"
          >
            <!-- Video Background -->
            <video 
              ref="videoPlayers"
              :src="video.src" 
              class="w-full h-full object-cover"
              autoplay 
              loop 
              muted 
              playsinline
              preload="metadata"
            ></video>

            <!-- Decorative Elements -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent opacity-70 group-hover/video:opacity-90 transition-opacity duration-500"></div>
            
            <!-- Floating Indicator -->
            <div class="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover/video:scale-110 transition-transform duration-500">
              <Icon 
                :name="unmutedVideoIndex === index ? 'lucide:volume-2' : 'lucide:volume-x'" 
                class="text-white" 
                size="24" 
              />
            </div>

            <!-- Content -->
            <div class="absolute bottom-10 left-10 right-10 text-white translate-y-6 group-hover/video:translate-y-0 transition-all duration-700 ease-out">
              <div class="w-12 h-1 bg-pink-400 mb-4 rounded-full origin-left scale-x-50 group-hover/video:scale-x-100 transition-transform duration-700"></div>
              <h3 class="text-2xl font-black mb-2 tracking-tight">{{ video.title }}</h3>
              <p class="text-white/80 text-sm font-medium leading-relaxed">{{ video.tagline }}</p>
              
              <div class="mt-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover/video:opacity-100 transition-opacity">
                <Icon name="lucide:maximize-2" size="14" class="text-pink-400 animate-pulse" /> Full Experience
              </div>
            </div>

            <!-- Border Accent -->
            <div class="absolute inset-0 border-[12px] border-white/0 group-hover/video:border-white/5 transition-all duration-1000 rounded-[3.5rem]"></div>
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
        <ProductCard v-for="p in products" :key="p._id" :product="p" />
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
          <a href="https://merchants.wisekings.ng/" target="_blank" class="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center gap-2 justify-center">
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
import hero1 from "@/assets/images/fresh1.jpg"
import hero2 from "@/assets/images/fresh2.jpg"
import hero3 from "@/assets/images/fresh4.jpg" 
import hero4 from "@/assets/images/fresh5.jpg"
import hero5 from "@/assets/images/fresh6.jpg"    
import hero6 from "@/assets/images/fresh7.jpg"    
import hero7 from "@/assets/images/fresh8.jpg"    
import video1 from "@/assets/videos/lv_0_20260107232154.mp4"
import video2 from "@/assets/videos/lv_0_20260110061946.mp4"
import video3 from "@/assets/videos/lv_0_20260207120010.mp4"
import video4 from "@/assets/videos/lv_0_20260208144149.mp4"
import video5 from "@/assets/videos/wisekings1.mp4"
import video6 from "@/assets/videos/wisekings2.mp4"

const { products, fetchProducts } = useFetchProducts()
const { categories, fetchCategories } = useFetchCategories()
const { locale } = useI18n()
const { selectedCurrency, formatPrice } = useCurrency()

const displayCategories = computed(() => {
  const desired = ['plantain chips', 'potato chips', 'popcorn']
  // Sort according to desired list, put others at the end
  return [...categories.value].sort((a, b) => {
    const aIdx = desired.indexOf(a.name.toLowerCase())
    const bIdx = desired.indexOf(b.name.toLowerCase())
    
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
    if (aIdx !== -1) return -1
    if (bIdx !== -1) return 1
    return a.name.localeCompare(b.name)
  }).slice(0, 4) // Show top 4
})
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
    title: 'Premium Taste',
    subtitle: 'Discover artisanal perfection in every handcrafted snack.',
    cta: { text: 'Elevate Taste', link: '/products' }
  },
  {
    badge: 'New Arrivals',
    icon: 'lucide:sparkles',
    image: hero2,
    title: 'New Flavours',
    subtitle: 'Explore our latest culinary creations, fresh from the kitchen.',
    cta: { text: 'Browse New', link: '/products' }
  },
  {
    badge: 'Limited Offers',
    icon: 'lucide:gem',
    image: hero3,
    title: 'Exclusive Benefits',
    subtitle: 'Join our elite community and unlock special member privileges.',
    cta: { text: 'Claim Offer', link: '/offers' }
  },
  {
    badge: 'Artisan Quality',
    icon: 'lucide:award',
    image: hero4,
    title: 'Handcrafted Love',
    subtitle: 'Every snack is crafted with passion and the finest ingredients.',
    cta: { text: 'Discover More', link: '/products' }
  },
  {
    badge: 'Global Flavours',
    icon: 'lucide:globe',
    image: hero5,
    title: 'Taste the World',
    subtitle: 'Exotic treats and international favourites curated just for you.',
    cta: { text: 'Explore Global', link: '/categories' }
  },
  {
    badge: 'Healthy Habits',
    icon: 'lucide:leaf',
    image: hero6,
    title: 'Guilt Free Joy',
    subtitle: 'Indulge in our selection of organic and wholesome snacks.',
    cta: { text: 'Shop Healthy', link: '/products' }
  },
  // {
  //   badge: 'Celebration Ready',
  //   icon: 'lucide:party-popper',
  //   image: hero7,
  //   title: 'Share the Joy',
  //   subtitle: 'The perfect companion for parties, movies, and family gatherings.',
  //   cta: { text: 'Party Packs', link: '/products' }
  // }
]

const marketingVideos = [
  { src: video1, title: 'Crunch Perfection', tagline: 'The sound of quality artisan snacking.' },
  { src: video2, title: 'Sweet Harmony', tagline: 'A delicate balance of flavours in every bite.' },
  { src: video5, title: 'Plantain Bliss', tagline: 'Nature’s goodness, crisped to golden perfection.' },
  { src: video6, title: 'Kitchen Secret', tagline: 'Peek behind the scenes of our master craft.' },
  { src: video3, title: 'Morning Fresh', tagline: 'Start your day with a burst of natural energy.' },
  { src: video4, title: 'Night Treats', tagline: 'The perfect end to your long productive day.' }
]

const videoPlayers = ref<HTMLVideoElement[]>([])
const videoCarousel = ref<HTMLElement | null>(null)
const unmutedVideoIndex = ref<number | null>(null)
const showWhatsAppMenu = ref(false)

function scrollVideos(direction: 'left' | 'right') {
  if (!videoCarousel.value) return
  const scrollAmount = videoCarousel.value.offsetWidth * 0.8
  videoCarousel.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

function handleVideoClick(index: number) {
  const player = videoPlayers.value[index]
  if (!player) return

  if (unmutedVideoIndex.value === index) {
    // If clicking the same video that is already unmuted, trigger fullscreen
    if (player.requestFullscreen) {
      player.requestFullscreen()
    } else if ((player as any).webkitRequestFullscreen) {
      (player as any).webkitRequestFullscreen()
    } else if ((player as any).msRequestFullscreen) {
      (player as any).msRequestFullscreen()
    }
  } else {
    // Mute all others
    videoPlayers.value.forEach((p, i) => {
      if (p) p.muted = i !== index
    })
    unmutedVideoIndex.value = index
  }
}

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
  50% { transform: scale(1.04) translate(-0.5%, -0.5%); }
  100% { transform: scale(1.08) translate(-1%, -1%); }
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

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

.mobile-scroll::-webkit-scrollbar {
  width: 4px;
}
.mobile-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}
.mobile-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.mobile-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
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
