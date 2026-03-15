<template>
  <div class="relative group" ref="dropdownRef">
    <button 
      @click="isOpen = !isOpen"
      :class="[
        'flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all font-black text-[10px] uppercase tracking-[0.2em] shadow-lg backdrop-blur-md',
        variant === 'dark' 
          ? 'bg-gray-950/40 text-white border border-white/10 hover:bg-gray-950/60' 
          : 'bg-white/80 text-gray-900 border border-gray-100 hover:bg-white shadow-xl shadow-gray-200/50'
      ]"
    >
      <Icon :name="currentLocaleIcon" class="w-4 h-4" />
      <span>{{ currentLocaleName }}</span>
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
          v-for="loc in locales"
          :key="loc.code"
          @click="setLocale(loc.code)"
          :class="[
            'w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all group/item',
            currentLocale === loc.code 
              ? 'bg-[#033958] text-white shadow-lg shadow-[#033958]/20' 
              : 'text-gray-500 hover:bg-[#033958]/5 hover:text-[#033958]'
          ]"
        >
          <div class="flex items-center gap-3">
            <Icon :name="getLocaleIcon(loc.code)" class="w-4 h-4" />
            <span>{{ loc.name }}</span>
          </div>
          <Icon v-if="currentLocale === loc.code" name="lucide:check" class="w-3 h-3" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

defineProps({
  variant: {
    type: String,
    default: 'light'
  }
})

const currentLocale = computed(() => locale.value)
const currentLocaleName = computed(() => {
  const l = (locales.value as any[]).find(loc => loc.code === locale.value)
  return l ? l.name : 'Language'
})

const currentLocaleIcon = computed(() => getLocaleIcon(locale.value))

function getLocaleIcon(code: string) {
  const icons: Record<string, string> = {
    en: 'circle-flags:uk',
    fr: 'circle-flags:fr',
    es: 'circle-flags:es'
  }
  return icons[code] || 'lucide:languages'
}

// Close on locale change
watch(locale, () => {
  isOpen.value = false
})

// Close on outside click
if (process.client) {
  onMounted(() => {
    document.addEventListener('click', (e) => {
      if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isOpen.value = false
      }
    })
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
