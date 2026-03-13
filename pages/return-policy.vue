<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <section class="relative py-32 bg-gray-900 border-b border-gray-100 overflow-hidden">
      <img src="@/assets/images/hero6.jpg" alt="Return Banner" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">Return Policy</h1>
        <p class="text-gray-300 font-medium">Fairness and Transparency in Every Transaction</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="max-w-3xl mx-auto px-6 prose prose-indigo">
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          We want you to be completely satisfied with your purchase. If you are not satisfied, we are here to help.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">1. Returns & Exchanges</h2>
        <p class="text-gray-600 mb-6 font-medium">
          We want you to love your purchase. If something isn't right, returns must be started within <strong class="text-gray-900">48 hours</strong> of delivery, as we deal with fresh food products.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">2. Condition of Items</h2>
        <p class="text-gray-600 mb-6 font-medium">
           To be eligible for a refund, items must be unopened and in their original packaging with all seals intact. We cannot accept returns for items that have been opened or used.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">3. What Can't Be Returned</h2>
        <p class="text-gray-600 mb-6 font-medium">
          Items bought during clearance sales, personalized gift boxes, and custom snack packs cannot be returned or exchanged.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">4. Refunds</h2>
        <p class="text-gray-600 mb-6 font-medium">
           Once we receive and check your return, we will process your refund. You can choose to have it sent back to your original payment method or added as credit to your <strong class="text-[#033958]">WiseKings Wallet</strong>. This usually takes 5-10 business days.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-10 tracking-tight uppercase">5. Return Shipping</h2>
        <p class="text-gray-600 mb-10 font-medium">
          You will need to cover the shipping costs for returning items. We recommend using a shipping service that provides tracking to ensure it reaches us safely.
        </p>

        <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Need assistance?</p>
            <p class="text-sm font-black text-gray-900 tracking-tight">Support is available 24/7</p>
          </div>
          <NuxtLink to="/contact" class="px-8 py-3 bg-[#033958] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#044a70] transition-colors shadow-lg shadow-[#033958]/20">Contact Us</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Return Policy | WiseKings',
  description: 'Understand the return and refund process at WiseKings.',
  ogTitle: 'Return Policy | WiseKings',
  ogDescription: 'Hassle-free returns for your peace of mind.',
})
</script>
