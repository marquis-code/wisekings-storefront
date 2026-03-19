<template>
  <div>
    <div class="mb-8 text-center lg:text-left pt-20">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
      <p class="text-gray-500 font-medium">Join WiseKings and discover premium snacks.</p>
    </div>

    <form @submit.prevent="handleRegister" class="space-y-5">
      <div class="space-y-4">
        <div class="space-y-2">
          <CoreAnimatedInput 
            v-model="form.fullName" 
            type="text" 
            label="Full Name" 
            autocomplete="name" 
            placeholder="John Doe"
            required
          />
        </div>

        <div class="space-y-2">
          <CoreAnimatedInput 
            v-model="form.email" 
            type="email" 
            label="Email Address" 
            autocomplete="email" 
            placeholder="name@example.com"
            required
          />
        </div>

        <div class="space-y-2">
          <CoreAnimatedInput 
            v-model="form.phone" 
            type="tel" 
            label="Phone Number" 
            autocomplete="tel" 
            placeholder="+234 800 0000 000"
          />
        </div>

        <div class="space-y-2">
          <CoreAnimatedInput 
            v-model="form.password" 
            type="password" 
            label="Password" 
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <div class="flex items-start space-x-2 px-1">
        <input id="terms" type="checkbox" required class="custom-checkbox">
        <label for="terms" class="text-sm font-medium text-gray-600 cursor-pointer select-none leading-relaxed">
          I agree to the <NuxtLink to="/terms" class="text-[#033958] font-bold hover:underline">Terms of Service</NuxtLink> and <NuxtLink to="/privacy" class="text-[#033958] font-bold hover:underline">Privacy Policy</NuxtLink>.
        </label>
      </div>

      <button 
        type="submit" 
        class="w-full bg-[#033958] hover:bg-[#022a45] text-white font-bold py-4 rounded-2xl  /10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
        :disabled="loading || socialLoading"
      >
        <span v-if="loading">Creating account...</span>
        <template v-else>
          Create Account
          <Icon name="lucide:user-plus" size="18" class="group-hover:translate-x-1 transition-transform" />
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
        :disabled="loading || socialLoading"
      >
        <Icon name="logos:google-icon" size="20" />
        <span>Continue with Google</span>
      </button>

      <div class="pt-2 text-center">
        <p class="text-gray-500 font-medium">
          Already have an account? 
          <NuxtLink to="/login" class="text-[#033958] font-extrabold hover:text-[#022a45] transition-colors">Sign in</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRegister } from '@/composables/modules/auth/useRegister'
import { useLogin } from '@/composables/modules/auth/useLogin'
import { useAuthState } from '@/composables/useAuthState'
import { useFirebase } from '@/composables/useFirebase'

definePageMeta({ layout: 'auth' })

const route = useRoute()
const form = reactive({ fullName: '', email: '', phone: '', password: '' })
const showPassword = ref(false)
const socialLoading = ref(false)
const { loading, register } = useRegister()
const { socialLogin } = useLogin()
const { setAuth } = useAuthState()
const { initFirebase } = useFirebase()

async function handleRegister() {
  const res = await register(form)
  if (res) {
    const data = res.data || res;
    if (data.requireOtp) {
      navigateTo(`/otp?email=${encodeURIComponent(form.email)}`)
    } else if (data.tokens) {
      setAuth(data.user, data.tokens)
      navigateTo((route.query.redirect as string) || '/')
    }
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
