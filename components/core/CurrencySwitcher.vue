<template>
  <div class="relative group">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white font-bold text-sm"
    >
      <span class="text-xs opacity-60">Currency:</span>
      <span class="flex items-center gap-1.5">
        <span class="font-black text-emerald-400">{{ currentCurrencyCode }}</span>
        <span>{{ currentCurrencySymbol }}</span>
      </span>
      <Icon 
        name="lucide:chevron-down" 
        :class="['w-4 h-4 transition-transform duration-300', isOpen ? 'rotate-180' : '']" 
      />
    </button>

    <Transition name="fade-slide">
      <div v-if="isOpen" class="absolute top-full right-0 mt-3 w-40 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
        <div class="p-2 space-y-1">
          <button
            v-for="curr in currencies"
            :key="curr.code"
            @click="selectCurrency(curr)"
            :class="[
              'w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all',
              selectedCurrency === curr.code ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            ]"
          >
            <div class="flex flex-col items-start leading-none">
                <span class="text-xs font-black uppercase tracking-widest">{{ curr.code }}</span>
                <span :class="['text-[10px] mt-0.5', selectedCurrency === curr.code ? 'text-emerald-100' : 'text-gray-400']">{{ curr.name || 'Global' }}</span>
            </div>
            <span class="font-bold border rounded px-1.5 text-[10px]" :class="selectedCurrency === curr.code ? 'border-white/20' : 'border-gray-100'">{{ curr.symbol }}</span>
          </button>
        </div>
      </div>
    </Transition>
    
    <!-- Backdrop -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false"></div>
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

const currentCurrencyCode = computed(() => selectedCurrency.value)
const currentCurrencySymbol = computed(() => currencies.find(c => c.code === selectedCurrency.value)?.symbol || '')

function selectCurrency(curr: any) {
  setCurrency(curr.code)
  isOpen.value = false
}

onMounted(() => {
  const saved = localStorage.getItem('selected_currency')
  if (saved) selectedCurrency.value = saved
})
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0; transform: translateY(-10px);
}
</style>
