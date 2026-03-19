<template>
  <div>
    <div class="mb-10 text-center lg:text-left pt-20">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
      <p class="text-gray-500 font-medium">Sign in to discover premium snacks.</p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-6">
      <div class="space-y-5">
        <div class="space-y-2">
          <CoreAnimatedInput 
            v-model="email" 
            type="email" 
            label="Email Address" 
            autocomplete="email" 
            placeholder="name@example.com"
            required
          />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between px-1 mb-2">
            <span></span>
            <NuxtLink to="/forgot-password" class="text-sm font-bold text-[#033958] hover:text-[#033958]/80 transition-colors">Forgot password?</NuxtLink>
          </div>
          <CoreAnimatedInput 
            v-model="password" 
            type="password" 
            label="Password" 
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <div class="flex items-center space-x-2 px-1">
        <input id="remember" type="checkbox" class="custom-checkbox">
        <label for="remember" class="text-sm font-medium text-gray-600 cursor-pointer select-none">Remember for 30 days</label>
      </div>

      <button 
        type="submit" 
        class="w-full bg-[#033958] hover:bg-[#022a45] text-white font-bold py-4 rounded-2xl  /10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
        :disabled="loading"
      >
        <span v-if="loading">Signing in...</span>
        <template v-else>
          Sign in
          <Icon name="lucide:arrow-right" size="18" class="group-hover:translate-x-1 transition-transform" />
        </template>
      </button>

      <div class="relative py-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500 font-medium">Or continue with</span>
        </div>
      </div>

      <button 
        type="button" 
        @click="handleSocialLogin"
        class="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-2xl  active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
        :disabled="loading"
      >
        <Icon name="logos:google-icon" size="20" />
        <span>Login with Google</span>
      </button>

      <div class="pt-4 text-center">
        <p class="text-gray-500 font-medium">
          Don't have an account? 
          <NuxtLink to="/register" class="text-[#033958] font-extrabold hover:text-[#022a45] transition-colors">Create account</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLogin } from '@/composables/modules/auth/useLogin'
import { useAuthState } from '@/composables/useAuthState'
import { useFirebase } from '@/composables/useFirebase'

definePageMeta({ layout: 'auth' })

const route = useRoute()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const socialLoading = ref(false)
const { loading, login, socialLogin } = useLogin()
const { setAuth } = useAuthState()
const { initFirebase } = useFirebase()

async function handleLogin() {
  const res = await login({ email: email.value, password: password.value })
  console.log(res)
  if (res?.data?.user) {
    setAuth(res.data.user, res.data.tokens)
    navigateTo((route.query.redirect as string) || '/account')
  }
}

async function handleSocialLogin() {
  socialLoading.value = true;
  try {
    const firebase = await initFirebase();
    if (!firebase) return; // Silent return if not on client
    
    const { signInWithPopup } = await import('firebase/auth')
    const result = await signInWithPopup(firebase.fbAuth, firebase.googleProvider)
    const idToken = await result.user.getIdToken()
    const res = await socialLogin(idToken)
    
    if (res?.data) {
      setAuth(res.data.user, res.data.tokens)
      navigateTo((route.query.redirect as string) || '/')
    }
  } catch (error: any) {
    console.error('Social login error:', error)
  } finally {
    socialLoading.value = false;
  }
}
</script>
