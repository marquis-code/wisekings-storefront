<template>
  <div class="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center gap-3 mb-6">
      <NuxtLink to="/account" class="text-gray-400 hover:text-gray-600"><Icon name="lucide:arrow-left" class="w-5 h-5" /></NuxtLink>
      <h1 class="text-2xl font-bold text-gray-900">Profile</h1>
    </div>
    <div class="space-y-4">
      <div><label class="label">Full Name</label><input :value="user?.fullName" class="input" disabled /></div>
      <div><label class="label">Email</label><input :value="user?.email" class="input" disabled /></div>
      <div><label class="label">Account Type</label><input :value="user?.userType" class="input capitalize" disabled /></div>
      <p class="text-xs text-gray-400">Contact support to update your profile information.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthState } from '@/composables/useAuthState'
const { user } = useAuthState()
</script>
