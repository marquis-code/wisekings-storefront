<template>
  <div>
    <!-- Hero Banner Carousel -->
    <!-- Hero Section (SumipSplash Style) -->
    <section class="relative bg-white pt-32 pb-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center relative z-10">
        <!-- Top Pill Badge -->
        <!-- <div class="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-gray-500 mb-12  animate-fade-in text-center mx-auto">
          <span>🍿</span>
          <span class="w-px h-3 bg-gray-200 mx-1"></span>
          <span>👑 WiseKings Snacking</span>
          <Icon name="lucide:arrow-right" size="12" class="text-[#033958]/60" />
          <span>🔍</span>
        </div> -->

          <!-- Main Typography Stack -->
          <div class="relative z-10 w-full text-center flex flex-col items-center pt-8 md:pt-2 pb-8">
            <!-- Business Name (Massive Focal Point) -->
            <h1 class="text-6xl md:text-9xl lg:text-[160px] font-black tracking-tighter leading-[0.85] uppercase mb-4 animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-br from-[#033958] via-gray-800 to-amber-500 pr-5 drop-shadow-xl filter">
              Wisekings
            </h1>

            <!-- Slogan -->
            <p class="text-lg md:text-2xl font-black text-amber-500 uppercase tracking-[0.3em] flex items-center justify-center gap-3 mb-8 animate-fade-in-up delay-[50ms]">
                <Icon name="lucide:award" class="text-amber-400" size="24" />
                Best in Value
            </p>

            <!-- Dynamic Product Selection (Prominent but smaller than brand) -->
            <div class="h-[60px] md:h-[100px] flex items-center justify-center animate-fade-in-up delay-100">
              <transition name="slide-up" mode="out-in">
                <span :key="currentSlide" 
                  class="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight uppercase"
                  :style="{ color: slides[currentSlide].color }"
                >
                  {{ slides[currentSlide].title }}
                </span>
              </transition>
            </div>

            <transition name="fade" mode="out-in">
              <p :key="currentSlide" class="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium mt-8 leading-relaxed px-4">
                {{ slides[currentSlide].subtitle.replace('Best in Value • ', '') }}
              </p>
            </transition>
          </div>

          <!-- Subtle Scroll/Slide Indicator -->
          <div class="absolute bottom-4 flex gap-2">
            <div 
              v-for="(_, i) in slides" :key="i"
              class="h-1 rounded-full transition-all duration-500"
              :class="currentSlide === i ? 'w-8' : 'w-2 bg-gray-200'"
              :style="{ backgroundColor: currentSlide === i ? slides[currentSlide].color : '' }"
            ></div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col items-center gap-6 mb-16 relative z-20">
          <NuxtLink :to="slides[currentSlide].cta.link" 
            class="text-white px-10 py-4 md:px-12 md:py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-4 group/btn shadow-2xl shadow-gray-900/20"
            :style="{ backgroundColor: slides[currentSlide].color || '#000' }"
          >
            <span>Order now</span>
            <Icon name="lucide:arrow-right" size="18" class="group-hover:translate-x-2 transition-transform" />
          </NuxtLink>
        </div>

        <!-- High-Speed Infinite Marquee (Desktop) -->
        <div class="hidden lg:flex justify-center mt-8 relative overflow-hidden w-full">
          <div class="flex animate-marquee-fast gap-8 py-4">
            <div v-for="(img, i) in [...heroGallery, ...heroGallery]" :key="i" 
              class="flex-shrink-0 w-48 h-[300px] rounded-[2rem] overflow-hidden border border-gray-100 bg-white hover:scale-105 transition-transform duration-500 p-4 flex items-center justify-center"
            >
              <img :src="img" class="max-w-full max-h-full object-contain" alt="Snack Variety">
            </div>
          </div>
        </div>

        <!-- Mobile Image Gallery (Scrollable) -->
        <div class="lg:hidden flex gap-4 overflow-x-auto no-scrollbar px-4 pb-6 mt-6 snap-x snap-mandatory">
          <div v-for="(img, i) in heroGallery" :key="i" 
            class="flex-shrink-0 w-48 h-[280px] bg-white rounded-[1.5rem] overflow-hidden snap-center border border-gray-100 p-4 flex items-center justify-center"
          >
            <img :src="img" class="max-w-full max-h-full object-contain" alt="Snack Variety">
          </div>
        </div>
      <!-- Background Accents -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div class="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-orange-50 rounded-full blur-[100px] opacity-40"></div>
      </div>
    </section>

    <!-- Categories Section (Compact & Horizontal) -->
    <section class="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">{{ $t('shop_by_category') }}</h2>
        <NuxtLink to="/categories" class="group flex items-center gap-2 text-amber-600 font-black text-xs uppercase tracking-widest hover:text-gray-900 transition-all">
          {{ $t('view_all') }} 
          <Icon name="lucide:arrow-right" size="14" class="group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <div class="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
        <NuxtLink v-for="c in displayCategories" :key="c.slug || c.name.toLowerCase().replace(/ /g, '-')" :to="`/products?category=${c.slug || c.name.toLowerCase().replace(/ /g, '-')}`"
          class="flex-shrink-0 w-[45%] md:flex-1 md:w-auto group relative h-48 md:h-64 rounded-[2rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 snap-center"
        >
          <!-- Background Image -->
          <div class="absolute inset-0 z-0">
            <img 
              v-if="c.image" 
              :src="c.image" 
              :alt="c.name" 
              class="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <Icon name="lucide:image" class="w-10 h-10 text-gray-200" />
            </div>
            <!-- Dynamic Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/80 group-hover:to-[#033958]/90 transition-all duration-500"></div>
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full p-6 flex flex-col justify-end">
            <h3 class="text-lg font-black text-white tracking-tight leading-none transition-transform duration-500">{{ c.name }}</h3>
            <div class="w-8 h-1 bg-amber-400 mt-2 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
          </div>
        </NuxtLink>
        <div v-if="displayCategories.length === 0" class="flex-1 py-10 text-center">
          <p class="text-[10px] font-black text-[#033958]/80 uppercase tracking-widest">Sourcing Collections...</p>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-extrabold text-gray-900">{{ $t('featured_snacks') }}</h2>
        <NuxtLink to="/products" class="text-sm font-bold text-[#033958] hover:underline flex items-center gap-1">
          {{ $t('view_all') }} <Icon name="lucide:arrow-right" size="14" />
        </NuxtLink>
      </div>
      <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"> -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          <ProductCard v-for="p in randomizedProducts" :key="p._id" :product="p" />
      </div>
      <div v-if="randomizedProducts.length === 0" class="text-center py-12 text-[#033958]/80">{{ $t('loading_products') }}</div>
    </section>

    <!-- Gifting Section -->
    <section class="py-8 md:py-16 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group/gifting">
          <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop" alt="Gifting" class="absolute inset-0 w-full h-full object-cover group-hover/gifting:scale-105 transition-transform duration-1000 bg-center">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent"></div>
          <div class="relative z-10 p-8 md:p-14 text-white max-w-3xl flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
            <div>
              <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 border border-white/20">
                <Icon name="lucide:gift" size="16" class="text-amber-400" /> Gift Collection
              </div>
              <h2 class="text-3xl md:text-5xl font-black mb-3 leading-[1] tracking-tighter">Curate a Special Occasion</h2>
              <p class="text-white/80 text-base mb-6 max-w-md font-medium leading-relaxed">Select your favorite plantain chips, pack them beautifully, and we'll deliver them anywhere in the world.</p>
              <NuxtLink to="/gifting" class="inline-flex items-center gap-4 bg-amber-500 text-gray-950 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all group">
                Start Curating
                <Icon name="lucide:arrow-right" size="18" class="group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Holiday Banner -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="relative rounded-3xl overflow-hidden ">
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
            <NuxtLink to="/offers" class="shrink-0 inline-flex items-center gap-3 bg-white text-emerald-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all  group">
              Shop Holiday Deals
              <Icon name="lucide:arrow-right" size="20" class="group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Continuity Carousel Section -->
    <section class="py-12 md:py-16 bg-gray-950 overflow-hidden relative">
      <div class="absolute inset-0 bg-[#033958]/20 mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-color-burn"></div>

      <div class="w-full px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <!-- Text Content -->
          <div class="lg:w-1/3 xl:w-1/4 space-y-6 text-left relative z-10">
            <div class="inline-flex items-center gap-2 text-[#FFC20E] font-bold uppercase tracking-widest text-sm border-b-2 border-[#FFC20E] pb-1">
              <Icon name="lucide:users" size="18" />
              Our Partners
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Meet the Company <br/> 
              <span class="text-[#FFC20E]">Behind the Brands</span>
            </h2>
            <p class="text-base text-white/90 font-medium leading-relaxed not-italic">
              We partner with West Africa's most prestigious retail chains to bring royalty-grade artisanal snacks directly to your favorite stores.
            </p>
          </div>

          <!-- End-to-End Carousel -->
          <div class="lg:w-2/3 xl:w-3/4 relative overflow-hidden h-[360px] flex items-center">
             <div class="flex animate-marquee-brand gap-6 group py-4">
               <div v-for="(brand, i) in brandShowcaseContinuity" :key="i" 
                 class="flex-shrink-0 w-72 bg-white/5 backdrop-blur-md rounded-[2rem] p-5 border border-white/10 hover:border-[#FFC20E]/50 transition-all duration-700 hover:-translate-y-2 group/card"
               >
                 <div class="h-32 w-full bg-white rounded-2xl overflow-hidden mb-4 p-4 flex items-center justify-center transition-all group-hover/card:bg-[#FFC20E]">
                    <img :src="brand.logo" class="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover/card:scale-110" :alt="brand.name">
                 </div>
                 <h3 class="text-lg font-black text-white mb-2 tracking-tighter">{{ brand.name }}</h3>
                 <p class="text-xs text-white/80 leading-relaxed line-clamp-3 font-medium">
                   {{ brand.miniBio }}
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Banners (from API) - Asymmetrical Layout -->
    <section v-if="banners.length" class="max-w-7xl mx-auto px-4 lg:px-8  relative z-20 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <!-- Main Large Banner -->
        <div v-if="banners[0]" class="md:col-span-8 group relative overflow-hidden rounded-[2.5rem]  transition-all duration-700 hover:-translate-y-2 h-[400px] md:h-[500px]">
          <a :href="banners[0].link || '#'" class="block relative h-full">
            <img :src="banners[0].image" :alt="banners[0].title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
            <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
            
            <div class="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
              <div class="space-y-4">
                <span class="inline-block px-4 py-1.5 bg-amber-400 text-gray-950 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-2">Featured Now</span>
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
              class="group relative overflow-hidden rounded-[2.5rem]  transition-all duration-700 hover:-translate-y-2 flex-1 min-h-[220px]"
            >
              <a :href="b.link || '#'" class="block relative h-full">
                <img :src="b.image" :alt="b.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                <div class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div class="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div class="space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-black uppercase tracking-widest text-white mb-1">Exclusive</span>
                    <h3 class="text-xl font-black text-white leading-tight uppercase tracking-tight">{{ b.title }}</h3>
                    <div v-if="b.description" class="max-h-[60px] overflow-y-auto mobile-scroll">
                        <p class="text-white/50 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{{ b.description }}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>

    <!-- Marketing Videos Section -->
    <section class="py-28 bg-gradient-to-b from-white to-[#FFF5F7] overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 bg-pink-100/80 text-pink-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] backdrop-blur-sm">
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
            <button @click="scrollVideos('left')" class="w-14 h-14 rounded-full border-2 border-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all  shadow-pink-100/20 active:scale-95">
              <Icon name="lucide:chevron-left" size="24" />
            </button>
            <button @click="scrollVideos('right')" class="w-14 h-14 rounded-full border-2 border-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all  shadow-pink-100/20 active:scale-95">
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
            class="flex-none w-[85%] sm:w-[45%] lg:w-[22%] snap-center group/video relative aspect-[9/16] rounded-[3.5rem] overflow-hidden  hover:shadow-pink-200/50 transition-all duration-700 hover:-translate-y-4 cursor-pointer"
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
              
              <div class="mt-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] opacity-40 group-hover/video:opacity-100 transition-opacity">
                <Icon name="lucide:maximize-2" size="14" class="text-pink-400 animate-pulse" /> Full Experience
              </div>
            </div>

            <!-- Border Accent -->
            <div class="absolute inset-0 border-[12px] border-white/0 group-hover/video:border-white/5 transition-all duration-1000 rounded-[3.5rem]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Animated Carousel -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 class="text-3xl md:text-5xl font-black text-gray-950 tracking-tighter">Our Artisan Collection</h2>
        <div class="h-px flex-1 bg-gray-100 mx-12 hidden md:block"></div>
        <NuxtLink to="/products" class="text-sm font-black uppercase tracking-widest text-amber-500 hover:text-gray-950 transition-colors">Explore All</NuxtLink>
      </div>

      <div class="relative flex overflow-x-hidden group">
        <div class="py-12 animate-marquee flex whitespace-nowrap gap-8 group-hover:pause">
          <div v-for="i in 10" :key="i" class="w-72 h-96 rounded-[3rem] overflow-hidden  transition-transform duration-500 hover:scale-105 hover:-rotate-2 border border-gray-100">
            <img :src="getArtisanImage(i)" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Artisan Snack">
          </div>
        </div>
        <div class="absolute top-0 py-12 animate-marquee2 flex whitespace-nowrap gap-8 group-hover:pause">
          <div v-for="i in 10" :key="i" class="w-72 h-96 rounded-[3rem] overflow-hidden  transition-transform duration-500 hover:scale-105 hover:-rotate-2 border border-gray-100">
            <img :src="getArtisanImage(i)" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Artisan Snack">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Join the WiseKings Community</h2>
        <p class="text-white mb-10 max-w-md mx-auto text-lg">Earn commissions, sell products, or become a partner. Your journey starts here.</p>
        <div class="flex justify-center gap-4 flex-col sm:flex-row">
          <NuxtLink to="/register" class="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg  transition-all">{{ $t('auth.create_account') }}</NuxtLink>
          <a href="https://merchants.wisekings.ng/" target="_blank" class="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg  transition-all flex items-center gap-2 justify-center">
            <Icon name="lucide:store" size="18" /> Become a Merchant
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import type { Product, Category } from '~/types'
import { useFetchProducts } from '@/composables/modules/products/useFetchProducts'
import { useFetchCategories } from '@/composables/modules/products/useFetchCategories'
import { marketing_api } from '@/api_factory/modules/marketing'
import { useCurrency } from '@/composables/useCurrency'
import plantainHero from "@/assets/images/plantain_hero.png"
import potatoHero from "@/assets/images/potato_hero.png"
import popcornHero from "@/assets/images/popcorn_hero.png"
import brandEbeano from "@/assets/images/brands/prince-ebeano-supermarket.png"
import brandHartleys from "@/assets/images/brands/hartleys.jpeg"
import brandJendol from "@/assets/images/brands/jendol-supermarket.png"
import brandSupersaver from "@/assets/images/brands/supersaver-market.jpg"
import brandLsg from "@/assets/images/brands/lsg_sky_chefs_logo.jpeg"
import brandOasis from "@/assets/images/brands/oasis-supermarket.jpg"

// Import existing images for bottom carousel or use a mix
import fresh1 from "@/assets/images/fresh1.jpg"
import fresh2 from "@/assets/images/fresh2.jpg"
import fresh4 from "@/assets/images/fresh4.jpg"
import fresh5 from "@/assets/images/fresh5.jpg"
import fresh6 from "@/assets/images/fresh6.jpg"
import video1 from "@/assets/videos/lv_0_20260107232154.mp4"
import video2 from "@/assets/videos/lv_0_20260110061946.mp4"
import video3 from "@/assets/videos/lv_0_20260207120010.mp4"
import video4 from "@/assets/videos/lv_0_20260208144149.mp4"
import video5 from "@/assets/videos/wisekings1.mp4"
import video6 from "@/assets/videos/wisekings2.mp4"

const { products, fetchProducts } = useFetchProducts()
const { categories, fetchCategories } = useFetchCategories()

const randomizedProducts = ref<Product[]>([])
let shuffleInterval: ReturnType<typeof setInterval> | null = null

const updateRandomProducts = () => {
  if (!products.value || products.value.length === 0) return
  randomizedProducts.value = [...products.value].slice(0, 8)
}

watch(products, (newProducts) => {
  if (newProducts && newProducts.length > 0) {
    updateRandomProducts()
  }
}, { deep: true })
const { locale } = useI18n()
const { selectedCurrency, formatPrice } = useCurrency()

const displayCategories = computed(() => {
  const desired = ['plantain chips', 'potato chips', 'popcorn']
  return [...categories.value].sort((a, b) => {
    const aIdx = desired.indexOf(a.name.toLowerCase())
    const bIdx = desired.indexOf(b.name.toLowerCase())
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
    if (aIdx !== -1) return -1
    if (bIdx !== -1) return 1
    return a.name.localeCompare(b.name)
  }).slice(0, 4)
})

const banners = ref<any[]>([])
const promotions = ref<any[]>([])
const currentSlide = ref(0)
let slideInterval: ReturnType<typeof setInterval> | null = null

const slides = [
  {
    badge: 'WiseKings Snacking',
    icon: 'lucide:crown',
    image: popcornHero,
    title: 'Popcorn',
    subtitle: 'Best in Value • Light, airy, and perfectly seasoned.',
    cta: { text: 'Order now', link: '/products' },
    color: '#005bb5' // Popcorn Blue
  },
  {
    badge: 'WiseKings Snacking',
    icon: 'lucide:sparkles',
    image: potatoHero,
    title: 'Potato Chips',
    subtitle: 'Best in Value • Crispy, golden, and satisfying.',
    cta: { text: 'Order now', link: '/products' },
    color: '#c53030' // Potato Red
  },
  {
    badge: 'WiseKings Snacking',
    icon: 'lucide:gem',
    image: plantainHero,
    title: 'Plantain Chips',
    subtitle: 'Best in Value • Sweet or savory, always majestic.',
    cta: { text: 'Order now', link: '/products' },
    color: '#1a472a' // Deep Green
  }
]

const brandShowcase = [
  {
    name: 'Prince Ebeano Supermarket',
    logo: brandEbeano,
    miniBio: 'Our VISION is to become the preferred retail chain store in West Africa. MISSION: establish world-class retail stores that meet daily needs in a professional environment.'
  },
  {
    name: 'Jendol Supermarket',
    logo: brandJendol,
    miniBio: 'Founded in 2016, Jendol is a multi-location grocery giant maintaining a conducive atmosphere with 13 stores across Lagos.'
  },
  {
    name: 'Supersaver Supermarket',
    logo: brandSupersaver,
    miniBio: 'A one-stop store offering self-service shopping for groceries, freshly baked goods, smoothies, and beauty products.'
  },
  {
    name: 'Hartleys Supermarket',
    logo: brandHartleys,
    miniBio: 'The place of choice for fresh produce. Driven by a lifelong commitment to "smiles in every aisle" and affordable quality.'
  },
  {
    name: 'LSG Sky Chefs',
    logo: brandLsg,
    miniBio: 'A global leader in airline catering and hospitality services, providing world-class culinary experiences to travelers worldwide.'
  },
  {
    name: 'Oasis Supermarket',
    logo: brandOasis,
    miniBio: 'A world-class one-stop retail store meeting daily needs with quality products in a friendly and professional environment.'
  }
]
const brandShowcaseContinuity = computed(() => [...brandShowcase, ...brandShowcase, ...brandShowcase])

const heroGallery = [
  fresh1,
  plantainHero,
  fresh2,
  potatoHero,
  fresh4,
  popcornHero
]

const stackIndex = ref(0)

watch(currentSlide, () => {
  // Sync stack shuffle with slide interval
  stackIndex.value = (stackIndex.value + 1) % heroGallery.length
})

const marketingVideos = [
  { src: video1, title: 'Crunch Perfection', tagline: 'The sound of quality artisan snacking.' },
  { src: video2, title: 'Sweet Harmony', tagline: 'A delicate balance of flavours in every bite.' },
  { src: video5, title: 'Plantain Bliss', tagline: 'Nature’s goodness, crisped to golden perfection.' },
  { src: video6, title: 'Kitchen Secret', tagline: 'Peek behind the scenes of our master craft.' },
  { src: video3, title: 'Morning Fresh', tagline: 'Start your day with a burst of natural energy.' },
  { src: video4, title: 'Night Treats', tagline: 'The perfect end to your long productive day.' }
]

const artisanImages = [fresh1, fresh2, fresh4, fresh5, fresh6, plantainHero, potatoHero, popcornHero]
function getArtisanImage(index: number) {
  return artisanImages[index % artisanImages.length]
}

const videoPlayers = ref<HTMLVideoElement[]>([])
const videoCarousel = ref<HTMLElement | null>(null)
const unmutedVideoIndex = ref<number | null>(null)

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
    if (player.requestFullscreen) player.requestFullscreen()
  } else {
    videoPlayers.value.forEach((p, i) => { if (p) p.muted = i !== index })
    unmutedVideoIndex.value = index
  }
}

useSeoMeta({
  title: 'WiseKings | Premium Artisan Snacks',
  description: 'Experience the pinnacle of snacking with WiseKings.',
  ogImage: slides[0].image,
})

function startCarousel() {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 8000)
}

async function refreshData() {
  await Promise.allSettled([
    fetchProducts({ limit: 50 }),
    fetchCategories(),
    marketing_api.getBanners({ isActive: true, position: 'home' }).then(r => { banners.value = r?.data?.data || r?.data || [] }).catch(() => {}),
    marketing_api.getPromotions({ isActive: true }).then(r => { promotions.value = r?.data?.data || r?.data || [] }).catch(() => {}),
  ])
}

watch([locale, selectedCurrency], () => refreshData())

onMounted(async () => {
  startCarousel()
  await refreshData()
  updateRandomProducts() // Initial load only, no shuffling
})

onUnmounted(() => { 
  if (slideInterval) clearInterval(slideInterval) 
})
</script>

<style>
.perspective-1000 {
  perspective: 1000px;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-fade-in-up {
  animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
.animate-marquee2 {
  animation: marquee2 40s linear infinite;
}
@keyframes marquee-fast {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee-fast {
  animation: marquee-fast 15s linear infinite;
}
.animate-marquee-fast:hover {
  animation-play-state: paused;
}

@keyframes marquee-brand {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
.animate-marquee-brand {
  animation: marquee-brand 40s linear infinite;
}
.animate-marquee-brand:hover {
  animation-play-state: paused;
}
.group:hover .animate-marquee,
.group:hover .animate-marquee2,
.animate-marquee-fast:hover {
  animation-play-state: paused;
}

.slide-up-enter-active { transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-leave-active { transition: all 0.4s ease-in; }
.slide-up-enter-from { opacity: 0; transform: translateY(40px); }
.slide-up-leave-to { opacity: 0; transform: translateY(-20px); }

.slide-fade-enter-active { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-fade-leave-active { transition: all 0.5s ease-in; }
.slide-fade-enter-from { opacity: 0; filter: blur(15px); transform: scale(0.95); }
.slide-fade-leave-to { opacity: 0; filter: blur(10px); transform: scale(1.05); }

.mobile-scroll::-webkit-scrollbar { width: 4px; }
.mobile-scroll::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.05); border-radius: 10px; }
.mobile-scroll::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 10px; }
.mobile-scroll::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
