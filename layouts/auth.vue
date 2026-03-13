<template>
  <div class="min-h-screen flex bg-white font-inter">
    <!-- Left Side: Image and Branding -->
    <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden sticky top-0 h-screen">
      <div class="absolute inset-0 z-0 bg-black">
        <img 
          src="@/assets/images/hero5.jpg" 
          alt="Delicious Snacks" 
          class="w-full h-full object-cover opacity-60"
        >
      </div>
      
      <div class="relative z-10 flex flex-col justify-between p-12 w-full">
        <div>
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <img src="@/assets/images/logo.jpg" alt="WiseKings Logo" class="w-auto h-14" />
            <!-- <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <span class="text-[#033958] font-black text-sm">WK</span>
            </div>
            <span class="text-2xl font-extrabold tracking-tight text-white group-hover:text-white/90 transition-colors">WiseKings</span> -->
          </NuxtLink>
        </div>

        <div class="max-w-md">
          <h1 class="text-5xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-up">
            Premium Snacks, <span class="text-amber-400">Delivered Fresh</span>
          </h1>
          <p class="text-xl text-white/80 leading-relaxed">
            Discover handpicked snacks from the best artisan makers. From crunchy chips to gourmet chocolates.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex -space-x-3">
            <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
              <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`" alt="User Avatar">
            </div>
          </div>
          <p class="text-sm font-medium text-white/80">
            <span class="text-white font-bold">10,000+</span> snack lovers and counting
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side: Form Content -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 relative bg-white">
      <div class="absolute top-8 left-6 lg:hidden">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-[#033958] rounded-lg flex items-center justify-center">
            <span class="text-white font-black text-xs">WK</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-gray-900">WiseKings</span>
        </NuxtLink>
      </div>

      <div class="w-full max-w-md mx-auto space-y-8 animate-fade-in">
        <slot />
      </div>
      
      <div class="absolute bottom-8 left-0 right-0 text-center px-6">
        <p class="text-sm text-gray-400">
          &copy; {{ new Date().getFullYear() }} WiseKings. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-in { animation: fade-in 1s ease-out forwards; }
.font-inter { font-family: 'Inter', sans-serif; }
</style>
