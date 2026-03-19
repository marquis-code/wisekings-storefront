<template>
  <transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-xl">
      <div class="max-w-md w-full px-8 text-center space-y-12">
        <!-- Logo / Icon -->
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div class="relative w-28 h-28 bg-white border border-gray-100 shadow-sm rounded-[2.5rem] flex items-center justify-center  transition-transform duration-700 animate-bounce-subtle">
            <Icon name="lucide:shopping-cart" size="48" class="text-amber-500" />
          </div>
        </div>

        <!-- Text Content -->
        <div class="space-y-4">
          <h2 class="text-3xl md:text-4xl font-black text-[#033958] tracking-tight leading-none">
            {{ title }}
          </h2>
          <p class="text-[#033958]/70 text-base font-bold tracking-wide">
            {{ subtitle }}
          </p>
        </div>

        <!-- Progress Indicator -->
        <div class="flex flex-col items-center gap-6">
          <div class="flex gap-2">
            <div v-for="i in 3" :key="i" 
              class="w-2.5 h-2.5 rounded-full transition-all duration-300"
              :class="activeStep >= i ? 'bg-[#033958] scale-125' : 'bg-gray-200'"
            ></div>
          </div>
          
          <div class="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-amber-400 to-[#FFC20E] transition-all duration-1000 ease-out"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>

        <!-- Status Pill -->
        <div class="flex flex-col items-center gap-4">
          <div class="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full">
            <Icon name="lucide:loader-2" class="w-5 h-5 text-amber-500 animate-spin" />
            <span class="text-sm font-black uppercase tracking-[0.2em] text-[#033958]">Secure Protocol Active</span>
          </div>
          
          <button 
            v-if="showCancel" 
            @click="$emit('cancel')"
            class="text-xs font-black uppercase tracking-widest text-[#033958]/40 hover:text-[#033958] transition-colors border-b border-gray-200 pb-1 mt-2"
          >
            Cancel and Return
          </button>
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
  showCancel?: boolean;
}>();

defineEmits(['cancel']);
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
