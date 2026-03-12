<template>
  <div>
    <div class="mb-8 text-center lg:text-left pt-20">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
      <p class="text-gray-500 font-medium">Join WiseKings and discover premium snacks.</p>
    </div>

    <form @submit.prevent="handleRegister" class="space-y-5">
      <div class="space-y-4">
        <div class="space-y-2">
          <label for="fullName" class="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">
              <Icon name="lucide:user" size="18" />
            </div>
            <input id="fullName" v-model="form.fullName" type="text" placeholder="John Doe" required
              class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400">
          </div>
        </div>

        <div class="space-y-2">
          <label for="email" class="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">
              <Icon name="lucide:mail" size="18" />
            </div>
            <input id="email" v-model="form.email" type="email" placeholder="name@example.com" required
              class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400">
          </div>
        </div>

        <div class="space-y-2">
          <label for="phone" class="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">
              <Icon name="lucide:phone" size="18" />
            </div>
            <input id="phone" v-model="form.phone" type="tel" placeholder="+234 800 0000 000"
              class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400">
          </div>
        </div>

        <div class="space-y-2">
          <label for="password" class="text-sm font-semibold text-gray-700 ml-1">Password</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">
              <Icon name="lucide:lock" size="18" />
            </div>
            <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" required
              class="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400">
            <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors">
              <Icon :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'" size="18" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-start space-x-2 px-1">
        <input id="terms" type="checkbox" required class="mt-1 w-4 h-4 rounded border-gray-300 text-[#033958] focus:ring-[#033958] cursor-pointer">
        <label for="terms" class="text-sm font-medium text-gray-600 cursor-pointer select-none leading-relaxed">
          I agree to the <NuxtLink to="/terms" class="text-[#033958] font-bold hover:underline">Terms of Service</NuxtLink> and <NuxtLink to="/privacy" class="text-[#033958] font-bold hover:underline">Privacy Policy</NuxtLink>.
        </label>
      </div>

      <button 
        type="submit" 
        class="w-full bg-[#033958] hover:bg-[#022a45] text-white font-bold py-4 rounded-2xl shadow-xl shadow-[#033958]/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
        :disabled="loading"
      >
        <span v-if="loading">Creating account...</span>
        <template v-else>
          Create Account
          <Icon name="lucide:user-plus" size="18" class="group-hover:translate-x-1 transition-transform" />
        </template>
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
import { useAuthState } from '@/composables/useAuthState'

definePageMeta({ layout: 'auth' })

const route = useRoute()
const form = reactive({ fullName: '', email: '', phone: '', password: '' })
const showPassword = ref(false)
const { loading, register } = useRegister()
const { setAuth } = useAuthState()

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
</script>
