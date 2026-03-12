<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <section class="relative py-32 bg-gray-900 border-b border-gray-100 overflow-hidden">
      <img src="@/assets/images/hero4.jpg" alt="Privacy Banner" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">Privacy Policy</h1>
        <p class="text-gray-300 font-medium">Last updated: March 12, 2026</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="max-w-3xl mx-auto px-6 prose prose-indigo">
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          At WiseKings, we take your privacy seriously. This policy describes how we collect, use, and handle your data when you use our platform.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">1. Information We Collect</h2>
        <p class="text-gray-600 mb-6">
          We collect information you provide directly to us (such as when you create an account, make a purchase, or contact support) and through automated means (such as cookies and analytics).
        </p>
        <ul class="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Account data: Name, email, phone number, and password.</li>
          <li>Transactional data: Payment details and order history.</li>
          <li>Technical data: IP address, browser type, and usage patterns.</li>
        </ul>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">2. How we use your data</h2>
        <p class="text-gray-600 mb-6">
          We use your data to provide, maintain, and improve our services, including processing transactions and communicating with you about your orders.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">3. Data Security</h2>
        <p class="text-gray-600 mb-6">
          We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. This includes SSL encryption for all data transmissions.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">4. Your Rights</h2>
        <p class="text-gray-600 mb-6">
          You have the right to access, correct, or delete your personal data. You can manage these settings through your account profile or by contacting our data protection officer.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">5. Contact Us</h2>
        <p class="text-gray-600 mb-10">
          If you have any questions about this Privacy Policy, please contact us at privacy@wisekings.systems.
        </p>

        <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">WiseKings Unified Enterprise</p>
          <NuxtLink to="/contact" class="text-sm font-black text-[#033958] hover:underline">Support Hub</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | WiseKings',
  description: 'Learn how WiseKings handles and protects your personal data.',
  ogTitle: 'Privacy Policy | WiseKings',
  ogDescription: 'Your privacy is our priority at WiseKings.',
})
</script>
