<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Account Top Bar -->
    <header class="bg-white border-b border-gray-100 z-30">
      <div class="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <Icon name="lucide:arrow-left" class="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
          <span class="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors mt-0.5">Back to Shop</span>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <div class="text-right">
            <p class="text-[10px] font-black uppercase tracking-widest text-[#033958] leading-none">{{ user?.role || 'Customer' }}</p>
            <p class="text-xs font-bold text-gray-900">{{ user?.fullName }}</p>
          </div>
          <div class="w-8 h-8 rounded-full bg-[#033958] flex items-center justify-center text-white text-[10px] font-black">
            {{ user?.fullName?.charAt(0) || 'U' }}
          </div>
        </div>
      </div>
    </header>

    <div class="flex-1 flex max-w-[1440px] mx-auto w-full relative">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:block w-72 bg-white border-r border-gray-100 py-10 px-6 shrink-0 h-[calc(100vh-64px)] sticky top-16">
        <div class="space-y-8">
          <div>
            <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">Workspace</h3>
            <nav class="space-y-1">
              <NuxtLink v-for="item in menu" :key="item.path" :to="item.path" 
                class="flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group"
                :class="(item.path === '/account' ? route.path === '/account' : route.path.startsWith(item.path)) ? 'bg-[#033958] text-white shadow-xl shadow-[#033958]/20' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'"
              >
                <Icon :name="item.icon" class="w-5 h-5" :class="(item.path === '/account' ? route.path === '/account' : route.path.startsWith(item.path)) ? 'text-amber-400' : 'text-gray-400 group-hover:text-gray-900'" />
                <span class="text-xs font-black uppercase tracking-widest">{{ item.name }}</span>
              </NuxtLink>
            </nav>
          </div>

          <div class="pt-8 border-t border-gray-50">
            <button @click="handleLogout" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-2xl text-red-400 hover:bg-red-50 hover:text-red-500 transition-all font-black text-xs uppercase tracking-widest">
              <Icon name="lucide:log-out" class="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4 lg:p-10 min-h-0 min-w-0 bg-gray-50/50">
        <div class="bg-white rounded-[32px] border border-gray-100 shadow-sm min-h-full p-6 lg:p-10 relative overflow-hidden">
          <slot />
        </div>
      </main>
    </div>
    <CoreWhatsAppWidget />
    <CoreLiveChatWidget />
  </div>
</template>

<script setup lang="ts">
import { useAuthState } from '@/composables/useAuthState'
import { useLogout } from '@/composables/modules/auth/useLogout'
import { useConfirm } from '@/composables/core/useConfirm'

const { user } = useAuthState()
const { logout } = useLogout()
const { confirmLogout } = useConfirm()
const route = useRoute()

const menu = [
  { name: 'Dashboard', path: '/account', icon: 'lucide:layout-dashboard' },
  { name: 'My Orders', path: '/account/orders', icon: 'lucide:shopping-bag' },
  { name: 'Profile Settings', path: '/account/profile', icon: 'lucide:settings' },
  { name: 'Security', path: '/account/security', icon: 'lucide:shield-check' },
]

async function handleLogout() {
  if (await confirmLogout()) {
    await logout()
  }
}
</script>
