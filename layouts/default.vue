<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold">WK</div>
            <span class="text-lg font-bold text-gray-900 hidden sm:block">WiseKings</span>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink to="/products" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Shop</NuxtLink>
            <NuxtLink to="/categories" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Categories</NuxtLink>
          </nav>

          <div class="flex items-center gap-3">
            <NuxtLink to="/cart" class="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Icon name="lucide:shopping-bag" class="w-5 h-5 text-gray-700" />
              <span v-if="totalItems > 0" class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gray-900 text-white text-[10px] rounded-full flex items-center justify-center font-semibold">{{ totalItems }}</span>
            </NuxtLink>
            <template v-if="isAuthenticated">
              <NuxtLink to="/account" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Icon name="lucide:user" class="w-5 h-5 text-gray-700" />
              </NuxtLink>
            </template>
            <template v-else>
              <NuxtLink to="/login" class="btn-primary btn-sm">Sign in</NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1"><slot /></main>

    <!-- Footer -->
    <footer class="bg-gray-950 text-gray-400 py-12 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 class="text-white font-semibold mb-4">Shop</h4>
            <div class="space-y-2 text-sm"><NuxtLink to="/products" class="block hover:text-white">All Products</NuxtLink><NuxtLink to="/categories" class="block hover:text-white">Categories</NuxtLink></div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Account</h4>
            <div class="space-y-2 text-sm"><NuxtLink to="/account/orders" class="block hover:text-white">Orders</NuxtLink><NuxtLink to="/account/profile" class="block hover:text-white">Profile</NuxtLink></div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <div class="space-y-2 text-sm"><span class="block">About</span><span class="block">Contact</span></div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Legal</h4>
            <div class="space-y-2 text-sm"><span class="block">Privacy</span><span class="block">Terms</span></div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {{ new Date().getFullYear() }} WiseKings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuthState()
const { totalItems } = useCart()
const { captureFromUrl } = useReferral()
onMounted(() => captureFromUrl())
</script>
