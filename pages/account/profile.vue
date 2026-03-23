<template>
  <div class="max-w-3xl space-y-12">
    <div class="space-y-2">
      <h1 class="text-3xl font-black text-gray-900 tracking-tight">Profile Settings</h1>
      <p class="text-sm font-medium text-[#033958]/80">Personalize your snacking experience and security.</p>
    </div>

    <form @submit.prevent="handleUpdate" class="space-y-10">
      <!-- Personal Details -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 px-2">
          <div class="w-1 h-4 bg-[#033958] rounded-full"></div>
          <h2 class="text-sm font-black uppercase tracking-[0.25em] text-[#033958]/80">Identity Details</h2>
        </div>
        <div class="p-8 md:p-10 bg-gray-50/50 rounded-[40px] border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden group">
          <div class="space-y-2">
            <CoreAnimatedInput 
              v-model="form.fullName" 
              type="text" 
              label="Full Legal Name" 
              placeholder="John Doe"
            />
          </div>
          <div class="space-y-2">
            <CoreAnimatedInput 
              v-model="form.phone" 
              type="tel" 
              label="Contact Number" 
            />
          </div>
        </div>
      </section>

      <!-- Security Sync -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 px-2">
          <div class="w-1 h-4 bg-amber-500 rounded-full"></div>
          <h2 class="text-sm font-black uppercase tracking-[0.25em] text-[#033958]/80">Security Credentials</h2>
        </div>
        <div class="p-8 md:p-10 bg-white border border-gray-100 rounded-[40px]  relative overflow-hidden group">
          <div class="space-y-2 relative">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black uppercase tracking-[0.2em] text-[#033958]/80 ml-1">Primary Email Address</span>
              <div class="flex items-center gap-1.5 px-2 py-0.5 bg-gray-100 rounded-lg">
                <Icon name="lucide:shield-check" class="w-3 h-3 text-[#033958]/80" />
                <span class="text-sm font-black text-[#033958]/80 uppercase tracking-widest">Verified</span>
              </div>
            </div>
            <CoreAnimatedInput 
              v-model="form.email" 
              type="email" 
              label="Primary Email Address" 
              disabled 
            />
            <p class="text-sm font-bold text-[#033958]/60 mt-2 ml-1 flex items-center gap-2">
              <Icon name="lucide:info" size="12" />
              Manifest security protocol: Email cannot be modified.
            </p>
          </div>
        </div>
      </section>

      <div class="flex items-center justify-between pt-4">
        <p class="text-xs font-bold text-[#033958]/80 uppercase tracking-widest">Last updated: {{ new Date().toLocaleDateString() }}</p>
        <button type="submit" :disabled="loading" class="group px-12 py-5 bg-[#033958] text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em]  /30 hover:bg-emerald-600 hover:shadow-emerald-500/20 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-3">
          <Icon v-if="loading" name="lucide:rotate-cw" class="w-4 h-4 animate-spin" />
          <Icon v-else name="lucide:save" class="w-4 h-4 group-hover:scale-110 transition-transform" />
          {{ loading ? 'Syncing...' : 'Seal Changes' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthState } from '@/composables/useAuthState'
import { auth_api } from '@/api_factory/modules/auth'
import { useCustomToast } from '@/composables/core/useCustomToast'

definePageMeta({ layout: 'account' })
const { user, setAuth } = useAuthState()
const { showToast } = useCustomToast()
const loading = ref(false)

const form = ref({
  fullName: user.value?.fullName || '',
  phone: user.value?.phone || '',
  email: user.value?.email || ''
})

async function handleUpdate() {
  loading.value = true
  try {
    const res = await auth_api.updateProfile(form.value) as any
    const { accessToken, refreshToken } = useAuthState()
    setAuth(res.data, { accessToken: accessToken.value, refreshToken: refreshToken.value }) // Update user data while keeping tokens
    showToast({ title: 'Success', message: 'Profile updated successfully', toastType: 'success' })
  } catch (error: any) {
    showToast({ title: 'Error', message: error.message || 'Update failed', toastType: 'error' })
  } finally {
    loading.value = false
  }
}
</script>
