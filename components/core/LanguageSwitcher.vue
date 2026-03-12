<template>
  <div class="relative group">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white font-bold text-sm"
    >
      <Icon name="lucide:languages" class="w-4 h-4" />
      <span>{{ currentLocaleName }}</span>
      <Icon 
        name="lucide:chevron-down" 
        :class="['w-4 h-4 transition-transform duration-300', isOpen ? 'rotate-180' : '']" 
      />
    </button>

    <Transition name="fade-slide">
      <div v-if="isOpen" class="absolute top-full right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
        <div class="p-2 space-y-1">
          <button
            v-for="locale in locales"
            :key="locale.code"
            @click="setLocale(locale.code)"
            :class="[
              'w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all',
              currentLocale === locale.code ? 'bg-[#033958] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            ]"
          >
            <span>{{ locale.name }}</span>
            <Icon v-if="currentLocale === locale.code" name="lucide:check" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </Transition>
    
    <!-- Backdrop for closing -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false"></div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)

const currentLocale = computed(() => locale.value)
const currentLocaleName = computed(() => {
  const l = locales.value.find(loc => loc.code === locale.value)
  return l ? l.name : 'Language'
})

// Close on locale change
watch(locale, () => {
  isOpen.value = false
})
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
