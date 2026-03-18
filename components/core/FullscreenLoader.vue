<template>
  <transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/90 backdrop-blur-xl">
      <div class="max-w-md w-full px-8 text-center space-y-12">
        <!-- Logo / Icon -->
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div class="relative w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl transition-transform duration-700 animate-bounce-subtle">
            <Icon name="lucide:shopping-cart" size="40" class="text-amber-500" />
          </div>
        </div>

        <!-- Text Content -->
        <div class="space-y-4">
          <h2 class="text-2xl font-black text-white tracking-tight leading-none">
            {{ title }}
          </h2>
          <p class="text-gray-400 text-sm font-medium tracking-wide">
            {{ subtitle }}
          </p>
        </div>

        <!-- Progress Indicator -->
        <div class="flex flex-col items-center gap-6">
          <div class="flex gap-2">
            <div v-for="i in 3" :key="i" 
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="activeStep >= i ? 'bg-amber-400 scale-125 shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'bg-white/10'"
            ></div>
          </div>
          
          <div class="w-full bg-white/5 h-1 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-1000 ease-out"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>

        <!-- Status Pill -->
        <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <Icon name="lucide:loader-2" class="w-4 h-4 text-amber-500 animate-spin" />
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Secure Protocol Active</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean;
  title: string;
  subtitle: string;
  activeStep: number;
  progress: number;
}>();
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}
</style>
