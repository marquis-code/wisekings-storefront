<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <section class="relative py-32 bg-gray-900 border-b border-gray-100 overflow-hidden">
      <img src="@/assets/images/hero1.jpg" alt="Shipping Banner" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">Shipping Policy</h1>
        <p class="text-gray-300 font-medium">Global Logistics & Delivery Excellence</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="max-w-3xl mx-auto px-6 prose prose-indigo">
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          We strive to deliver your favourite snacks with speed and care. Our global logistics network ensures that your order reaches you in perfect condition.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">1. Processing Your Order</h2>
        <p class="text-gray-600 mb-6 font-medium">
          We aim to get your snacks to you as fast as possible. Most orders are processed and ready for shipment within 1 to 2 business days.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">2. Shipping Options</h2>
        <div class="space-y-6 mb-8">
           <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center gap-4 mb-2">
                 <Icon name="lucide:truck" class="text-amber-500 w-6 h-6" />
                 <h3 class="text-lg font-black text-gray-900">Standard Delivery (3-5 Days)</h3>
              </div>
              <p class="text-sm text-gray-500 font-medium">Free for orders over <strong class="text-gray-900">₦50,000</strong>. For orders under this amount, a flat rate of ₦2,500 applies.</p>
           </div>

           <div class="p-6 bg-gray-900 text-white rounded-3xl shadow-xl">
              <div class="flex items-center gap-4 mb-2">
                 <Icon name="lucide:zap" class="text-amber-400 w-6 h-6" />
                 <h3 class="text-lg font-black uppercase tracking-tighter">Express Delivery (1-2 Days)</h3>
              </div>
              <p class="text-sm text-white/60 font-medium">Need it faster? Get priority shipping for a flat fee of <strong class="text-white">₦5,000</strong>.</p>
           </div>
        </div>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">3. Tracking Your Shipment</h2>
        <p class="text-gray-600 mb-6 font-medium">
          Once your order ships, we'll send you an email with a tracking link so you can follow its progress right to your door.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-12 tracking-tight uppercase">4. International Delivery</h2>
        <p class="text-gray-600 mb-12 font-medium">
          We are currently expanding our international shipping. Please note that custom duties or taxes may apply depending on your location.
        </p>

        <div class="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 italic text-gray-500 text-center text-sm">
          "Your snacks are handled with the utmost priority, from our warehouse to your doorstep."
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Shipping Policy | WiseKings',
  description: 'Learn about WiseKings shipping rates, delivery times, and order tracking.',
  ogTitle: 'Shipping Policy | WiseKings',
  ogDescription: 'Speedy and secure delivery for all WiseKings snacks.',
})
</script>
