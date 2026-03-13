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
        <p class="text-gray-600 mb-6 font-medium">
          We collect information that helps us provide you with a better shopping experience. This includes:
        </p>
        <ul class="list-none pl-0 text-gray-600 mb-8 space-y-4">
          <li class="flex items-start gap-3">
            <Icon name="lucide:user" class="text-amber-500 shrink-0 mt-1" />
            <span><strong class="text-gray-900">Personal Details:</strong> Your name, email address, and phone number when you create an account.</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="lucide:shopping-cart" class="text-amber-500 shrink-0 mt-1" />
            <span><strong class="text-gray-900">Order Information:</strong> Your payment details and delivery address to process your purchases.</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="lucide:monitor" class="text-amber-500 shrink-0 mt-1" />
            <span><strong class="text-gray-900">Usage Data:</strong> Basic technical info like your IP address and browser type to improve our website.</span>
          </li>
        </ul>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">2. How We Use Your Information</h2>
        <p class="text-gray-600 mb-6 font-medium">
          We use your data strictly to manage your orders, provide customer support, and send you important updates about your purchases. We do not sell your personal information to third parties.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">3. Keeping Your Data Safe</h2>
        <p class="text-gray-600 mb-6 font-medium">
          We use standard security measures, including encryption, to protect your information. Our team regularly monitors our systems to ensure your data remains secure.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">4. Your Choice</h2>
        <p class="text-gray-600 mb-6 font-medium">
          You are in control of your data. You can view, update, or request to delete your personal information at any time through your account settings or by reaching out to us.
        </p>

        <h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">5. Contact Our Team</h2>
        <p class="text-gray-600 mb-10 font-medium">
          If you have any questions about how we handle your privacy, please email us at <a href="mailto:privacy@wisekings.systems" class="text-[#033958] font-bold underline">privacy@wisekings.systems</a>.
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
