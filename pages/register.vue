<template>
  <div class="min-h-[70vh] flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Create an account</h1>
        <p class="text-gray-500 mt-1">Join WiseKings today</p>
      </div>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div><label class="label">Full Name</label><input v-model="form.fullName" type="text" class="input" required /></div>
        <div><label class="label">Email</label><input v-model="form.email" type="email" class="input" required /></div>
        <div><label class="label">Phone</label><input v-model="form.phone" type="tel" class="input" /></div>
        <div><label class="label">Password</label><input v-model="form.password" type="password" class="input" required minlength="6" /></div>
        <button type="submit" class="btn-primary w-full" :disabled="loading">{{ loading ? 'Creating...' : 'Create Account' }}</button>
        <p class="text-center text-sm text-gray-500">Already have an account? <NuxtLink to="/login" class="text-gray-900 font-medium underline">Sign in</NuxtLink></p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegister } from '@/composables/modules/auth/useRegister'
import { useAuthState } from '@/composables/useAuthState'

const route = useRoute()
const form = ref({ fullName: '', email: '', phone: '', password: '' })
const { loading, register } = useRegister()
const { setAuth } = useAuthState()

async function handleRegister() {
  const res = await register(form.value)
  if (res?.data) {
    setAuth(res.data.user, res.data.tokens)
    navigateTo((route.query.redirect as string) || '/')
  }
}
</script>
