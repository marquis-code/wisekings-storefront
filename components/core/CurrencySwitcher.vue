<template>
  <div class="relative group" ref="dropdownRef">
    <button 
      @click="isOpen = !isOpen"
      :class="[
        'flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all font-black text-[10px] uppercase tracking-[0.2em] shadow-lg backdrop-blur-md',
        variant === 'dark' 
          ? 'bg-gray-950/40 text-white border border-white/10 hover:bg-gray-950/60' 
          : 'bg-white/80 text-gray-900 border border-gray-100 hover:bg-white shadow-xl shadow-gray-200/50'
      ]"
    >
      <div class="flex items-center gap-2">
        <span class="text-emerald-500 font-black">{{ selectedCurrency }}</span>
        <span class="opacity-40">{{ currentCurrencySymbol }}</span>
      </div>
      <Icon 
        name="lucide:chevron-down" 
        :class="['w-3 h-3 transition-transform duration-500', isOpen ? 'rotate-180' : '']" 
      />
    </button>

    <Transition name="fade-slide">
      <div 
        v-if="isOpen" 
        class="absolute bottom-full mb-3 right-0 w-48 bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden z-50 p-2"
      >
        <button
          v-for="curr in currencies"
          :key="curr.code"
          @click="selectCurrency(curr)"
          :class="[
            'w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all group/item',
            selectedCurrency === curr.code 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
              : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-600'
          ]"
        >
          <div class="flex flex-col items-start leading-none">
            <span class="text-[10px] font-black tracking-widest">{{ curr.code }}</span>
            <span :class="['text-[8px] mt-1 font-bold opacity-60']">{{ curr.name }}</span>
          </div>
          <span class="font-black border rounded-lg px-2 py-0.5 text-[10px]" :class="selectedCurrency === curr.code ? 'border-white/20' : 'border-gray-100'">{{ curr.symbol }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useCurrency } from '@/composables/useCurrency'

const { selectedCurrency, setCurrency } = useCurrency()
const currencies = [
  { code: 'NGN', symbol: '₦', name: 'Naira' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' }
]

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

defineProps({
  variant: {
    type: String,
    default: 'light'
  }
})

const currentCurrencySymbol = computed(() => currencies.find(c => c.code === selectedCurrency.value)?.symbol || '')

function selectCurrency(curr: any) {
  setCurrency(curr.code)
  isOpen.value = false
}

// Close on outside click
if (process.client) {
  onMounted(() => {
    document.addEventListener('click', (e) => {
      if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isOpen.value = false
      }
    })
    
    const saved = localStorage.getItem('selected_currency')
    if (saved) selectedCurrency.value = saved
  })
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(15px) scale(0.95);
}
</style>
