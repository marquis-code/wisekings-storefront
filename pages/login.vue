<template>
  <div class="min-h-[70vh] flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p class="text-gray-500 mt-1">Sign in to your account</p>
      </div>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div><label class="label">Email</label><input v-model="email" type="email" class="input" required /></div>
        <div><label class="label">Password</label><input v-model="password" type="password" class="input" required /></div>
        <button type="submit" class="btn-primary w-full" :disabled="loading">{{ loading ? 'Signing in...' : 'Sign in' }}</button>
        <p class="text-center text-sm text-gray-500">Don't have an account? <NuxtLink to="/register" class="text-gray-900 font-medium underline">Register</NuxtLink></p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/modules/auth/useLogin'
import { useAuthState } from '@/composables/useAuthState'

const route = useRoute()
const email = ref('')
const password = ref('')
const { loading, login } = useLogin()
const { setAuth } = useAuthState()

async function handleLogin() {
  const res = await login({ email: email.value, password: password.value })
  if (res?.data) {
    setAuth(res.data.user, res.data.tokens)
    navigateTo((route.query.redirect as string) || '/')
  }
}
</script>
