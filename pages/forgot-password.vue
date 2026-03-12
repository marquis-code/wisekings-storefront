<template>
  <div class="min-h-screen bg-white">
    <!-- Close Button -->
    <NuxtLink 
      to="/login" 
      class="fixed top-8 right-8 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-50 group"
    >
      <Icon name="lucide:x" size="20" class="group-hover:rotate-90 transition-transform duration-300" />
    </NuxtLink>

    <div class="max-w-7xl mx-auto px-6 lg:px-10 h-screen flex flex-col justify-center">
      <div class="max-w-md w-full mx-auto space-y-12">
        <div class="text-center">
          <div class="w-20 h-20 bg-[#033958]/5 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Icon name="lucide:key-round" size="32" class="text-[#033958]" />
          </div>
          <h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">Reset Access</h1>
          <p class="text-gray-500 font-medium">Enter your identity below to receive a secure recovery link.</p>
        </div>

        <form v-if="!submitted" @submit.prevent="handleReset" class="space-y-8">
          <div class="space-y-3">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Channel</label>
            <div class="relative group">
              <Icon name="lucide:mail" size="18" class="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#033958] transition-colors" />
              <input 
                v-model="email" 
                type="email" 
                placeholder="yours@example.com"
                class="w-full pl-14 pr-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] text-sm font-bold focus:ring-8 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all placeholder:text-gray-300"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full py-5 bg-gray-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-4 group"
            :disabled="loading"
          >
            <Icon v-if="loading" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
            <template v-else>
              Request Link
              <Icon name="lucide:send" class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </template>
          </button>
        </form>

        <div v-else class="text-center p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 animate-in fade-in zoom-in duration-500">
          <div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg shadow-emerald-500/20">
            <Icon name="lucide:check" size="28" />
          </div>
          <div class="space-y-2">
            <p class="text-lg font-black text-emerald-950 uppercase tracking-tight">Check your transmissions</p>
            <p class="text-xs font-bold text-emerald-600">A secure reset link has been dispatched to {{ email }}.</p>
          </div>
          <NuxtLink to="/login" class="inline-block text-[10px] font-black text-emerald-900 uppercase tracking-widest border-b-2 border-emerald-200 pb-1 hover:border-emerald-500 transition-all">Back to Command Center</NuxtLink>
        </div>

        <div class="pt-8 text-center">
            <NuxtLink to="/login" class="text-gray-400 font-bold hover:text-gray-900 transition-colors text-sm">Remembered? Return to login</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const loading = ref(false)
const submitted = ref(false)

const handleReset = async () => {
    loading.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    loading.value = false
    submitted.value = true
}

useSeoMeta({
  title: 'Reset Access | WiseKings',
  description: 'Recover your account access for the WiseKings platform.',
})
</script>
