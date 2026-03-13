<template>
  <div class="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
    <!-- Abstract Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse" style="animation-delay: 2s"></div>

    <!-- Success Card -->
    <div class="max-w-xl w-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-8 md:p-12 text-center relative z-10 slide-up">
      
      <!-- Animated Check Circle -->
      <div class="relative w-24 h-24 mx-auto mb-8">
        <div class="absolute inset-0 bg-green-100 rounded-full scale-125 animate-ping opacity-20"></div>
        <div class="relative w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-200 check-scale">
          <Icon name="lucide:check" class="w-12 h-12 text-white stroke-[3px]" />
        </div>
      </div>

      <!-- Text Content -->
      <div class="space-y-4 mb-10">
        <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Payment Success!
        </h1>
        <p class="text-slate-500 text-lg leading-relaxed max-w-sm mx-auto">
          Thank you for choosing <span class="text-green-600 font-semibold italic">WiseKings</span>. 
          Your order has been confirmed and we're preparing it for dispatch.
        </p>
      </div>

      <!-- Order Details Summary (Optional/Placeholder) -->
      <div v-if="orderId" class="bg-slate-50 rounded-2xl p-4 mb-10 flex items-center justify-between text-sm border border-slate-100">
        <div class="text-left">
          <p class="text-slate-400 uppercase tracking-widest font-bold text-[10px] mb-1">Order ID</p>
          <p class="text-slate-700 font-mono font-bold">#{{ orderId.slice(-8).toUpperCase() }}</p>
        </div>
        <div class="text-right">
          <p class="text-slate-400 uppercase tracking-widest font-bold text-[10px] mb-1">Status</p>
          <div class="flex items-center gap-1.5 text-green-600 font-bold uppercase text-[11px]">
            <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Confirmed
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="grid sm:grid-cols-2 gap-4">
        <NuxtLink to="/account/orders" 
          class="flex items-center justify-center gap-2 py-4 px-6 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:translate-y-[-2px] active:scale-95 shadow-lg shadow-slate-200">
          <Icon name="lucide:shopping-bag" class="w-5 h-5" />
          Track Order
        </NuxtLink>
        <NuxtLink to="/" 
          class="flex items-center justify-center gap-2 py-4 px-6 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:translate-y-[-2px] active:scale-95 shadow-sm">
          Continue Store
        </NuxtLink>
      </div>

      <!-- Social/Newsletter Placeholder -->
      <div class="mt-12 pt-8 border-t border-slate-100">
        <p class="text-slate-400 text-sm mb-4">Expect a confirmation email shortly.</p>
        <div class="flex justify-center gap-4 text-slate-400">
          <a href="https://www.instagram.com/wisekingsproducts/" target="_blank"><Icon name="lucide:instagram" class="w-5 h-5 cursor-pointer hover:text-green-500 transition-colors" /></a>
          <a href="https://x.com/WisekingsS" target="_blank"><Icon name="lucide:twitter" class="w-5 h-5 cursor-pointer hover:text-green-500 transition-colors" /></a>
          <a href="https://web.facebook.com/profile.php?id=61583785186822" target="_blank"><Icon name="lucide:facebook" class="w-5 h-5 cursor-pointer hover:text-green-500 transition-colors" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { clearCart } = useCart()
const { trackPurchase } = useAnalytics()
const route = useRoute()

const orderId = computed(() => route.query.orderId as string)

onMounted(() => {
  clearCart()
  if (orderId.value) {
    trackPurchase({
      id: orderId.value,
      totalAmount: 0 
    })
  }

  // Trigger confetti effect if available in the design system or via script
  // (Assuming we might add a library later, for now we have the CSS animations)
})

useHead({
  title: 'Order Confirmed | WiseKings'
})
</script>

<style scoped>
.slide-up {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.check-scale {
  animation: checkScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes checkScale {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.popup-anim {
  animation: popup 0.3s ease-out;
}

@keyframes popup {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
