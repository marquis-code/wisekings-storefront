<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">My Account</h1>
    <p class="text-gray-500 mb-8">Welcome back, {{ user?.fullName }}</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <NuxtLink to="/account/orders" class="p-6 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors group">
        <Icon name="lucide:package" class="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-3" />
        <h2 class="font-semibold text-gray-900">My Orders</h2>
        <p class="text-sm text-gray-500 mt-1">Track and manage your orders</p>
      </NuxtLink>
      <NuxtLink to="/account/profile" class="p-6 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors group">
        <Icon name="lucide:user" class="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-3" />
        <h2 class="font-semibold text-gray-900">Profile</h2>
        <p class="text-sm text-gray-500 mt-1">Update your details</p>
      </NuxtLink>
      <button @click="handleLogout" class="p-6 border border-gray-200 rounded-2xl hover:border-red-300 transition-colors group text-left">
        <Icon name="lucide:log-out" class="w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors mb-3" />
        <h2 class="font-semibold text-gray-900 group-hover:text-red-600">Sign Out</h2>
        <p class="text-sm text-gray-500 mt-1">Log out of your account</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogout } from '@/composables/modules/auth/useLogout'
import { useAuthState } from '@/composables/useAuthState'

const { user } = useAuthState()
const { logout, loading: loggingOut } = useLogout()

async function handleLogout() {
  await logout()
}
</script>
