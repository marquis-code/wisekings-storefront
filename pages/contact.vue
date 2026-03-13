<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-gray-950">
      <div class="absolute inset-0 z-0">
        <img 
          src="@/assets/images/hero5.jpg" 
          class="w-full h-full object-cover opacity-40" 
          alt="Contact Hero"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md border border-white/20 mb-8 mx-auto">
           <Icon name="lucide:headset" size="14" class="text-amber-400" />
           24/7 Global Support
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">Get in Touch with<br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">WiseKings.</span></h1>
        <p class="text-xl text-white/60 font-medium max-w-2xl mx-auto">Have questions about our snacks or partnership opportunities? Our elite team is ready to assist you.</p>
      </div>
    </section>

    <!-- Support Hub -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 -mt-20 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Information -->
        <div class="lg:col-span-1 space-y-8">
          <div class="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <h2 class="text-2xl font-black text-gray-900 tracking-tight mb-8">Direct Access</h2>
            <div class="space-y-10">
              <div class="flex items-start gap-6 group">
                <div class="w-12 h-12 bg-[#033958]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#033958] transition-all duration-500 shrink-0">
                  <Icon name="lucide:mail" class="w-5 h-5 text-[#033958] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Send an Email</p>
                  <a href="mailto:support@wisekings.ng" class="text-lg font-black text-gray-900 hover:text-[#033958] transition-colors">support@wisekings.ng</a>
                </div>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-12 h-12 bg-emerald-500/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-500 shrink-0">
                  <Icon name="lucide:phone" class="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Call the Hub</p>
                  <a href="tel:+2348023225019" class="text-lg font-black text-gray-900 hover:text-emerald-600 transition-colors">+234 802 322 5019</a>
                </div>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-12 h-12 bg-amber-500/5 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-all duration-500 shrink-0">
                  <Icon name="lucide:map-pin" class="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p class="text-[10px] font-black text-gray-400 lowercase tracking-widest mb-1">Global Headquarters</p>
                  <p class="text-lg font-black text-gray-900 lowercase leading-tight">11, DEMOLA ALABI CLOSE, BEHIND PHILLIPS FACTORY, OJOTA, LAGOS STATE,<br/>NIGERIA</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#033958] p-10 rounded-[2.5rem] text-white">
            <h3 class="text-xl font-black mb-4">Partner Support?</h3>
            <p class="text-white/60 text-sm font-medium mb-8 leading-relaxed">Merchants and Partners should log in to their respective dashboards for priority ticket handling.</p>
            <div class="flex flex-col gap-3">
              <a href="http://localhost:3002" class="px-6 py-3 bg-white text-[#033958] rounded-xl font-black text-xs uppercase tracking-widest text-center hover:bg-gray-100 transition-colors">Merchant Portal</a>
              <a href="http://localhost:3001" class="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-black text-xs uppercase tracking-widest text-center hover:bg-white/20 transition-colors">Partner Dashboard</a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <div class="mb-12">
              <h2 class="text-3xl font-black text-gray-900 tracking-tight mb-4 uppercase">Direct Message</h2>
              <p class="text-gray-400 font-medium">Fill out the secure form below and we'll route your request to the appropriate department within 2 hours.</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-3">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Full Identity</label>
                  <input v-model="form.name" type="text" placeholder="John Doe" class="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] text-sm font-bold focus:ring-8 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all placeholder:text-gray-300" required />
                </div>
                <div class="space-y-3">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Channel</label>
                  <input v-model="form.email" type="email" placeholder="john@example.com" class="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] text-sm font-bold focus:ring-8 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all placeholder:text-gray-300" required />
                </div>
              </div>

              <div class="space-y-3">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Subject of Inquiry</label>
                <CoreSelectInput 
                  v-model="form.subject"
                  label="Select Inquiry Type"
                  :options="subjectOptions"
                  placeholder="General snack information"
                />
              </div>

              <div class="space-y-3">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Your Intelligence/Message</label>
                <textarea v-model="form.message" rows="6" placeholder="How can we help establish excellence today?" class="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-[2.5rem] text-sm font-bold focus:ring-8 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all placeholder:text-gray-300 resize-none" required></textarea>
              </div>

              <div class="pt-4">
                <button 
                  type="submit" 
                  :disabled="loading"
                  class="w-full md:w-auto px-12 py-5 bg-gray-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="loading">Transmitting...</span>
                  <template v-else>
                    Transmit Request
                    <Icon name="lucide:send" class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </template>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const subjectOptions = [
  'General snack information',
  'Order status & tracking',
  'Bulk/Wholesale inquiries',
  'Technical support',
  'Others'
]

const config = useRuntimeConfig()
const handleSubmit = async () => {
  if (!form.subject) {
    alert('Please select a subject for your inquiry.')
    return
  }

  loading.value = true
  try {
    const { data, error } = await useFetch('/contact', {
      baseURL: config.public.apiBase,
      method: 'POST',
      body: form
    })

    if (error.value) {
      throw new Error(error.value.message || 'Transmission failed')
    }

    alert('Inquiry successfully transmitted. Secure confirmation will be sent via email.')
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (err: any) {
    alert('Failed to transmit inquiry: ' + err.message)
  } finally {
    loading.value = false
  }
}

useSeoMeta({
  title: 'Contact Support | WiseKings',
  description: 'Get in touch with the WiseKings support team for inquiries, bulk orders, and technical assistance.',
  ogTitle: 'Contact Us | WiseKings',
  ogDescription: 'Ready to assist your snacking needs 24/7.',
})
</script>
