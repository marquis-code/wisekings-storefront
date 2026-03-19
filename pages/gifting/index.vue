<template>
  <main class="min-h-screen bg-gray-50 pt-24 pb-16">
    <div class="max-w-4xl mx-auto px-4 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-10 text-[#033958]">
        <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight">Curate a Gift</h1>
        <p class="text-lg opacity-80 max-w-xl mx-auto">
          Hand-wrap joy. Select your favorite chips, tell us where to send them, and we will package it perfectly for any occasion.
        </p>
      </div>

      <!-- Success State -->
      <div v-if="submitted" class="bg-white rounded-3xl p-10 md:p-16 text-center shadow-lg border border-gray-100 flex flex-col items-center">
        <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500">
          <Icon name="lucide:check-circle" size="40" />
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Request Received!</h2>
        <p class="text-gray-500 max-w-md mx-auto mb-8">
          Thank you for choosing WiseKings. We have sent a confirmation email to <strong>{{ form.senderDetails.email }}</strong>. Once your curation is reviewed, we will send an invoice for payment.
        </p>
        <button @click="resetForm" class="bg-[#033958] text-white px-8 py-3 rounded-full font-bold hover:bg-[#033958]/90 transition-all">
          Curate Another Gift
        </button>
      </div>

      <!-- Form -->
      <form v-else @submit.prevent="handleSubmit" class="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-gray-100 space-y-12">
        
        <!-- Section 1: Product Curation -->
        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-black">1</div>
            <h2 class="text-xl font-bold text-gray-900">Select Products</h2>
          </div>
          
          <div v-if="fetchingProducts" class="py-10 text-center text-gray-500">Loading products...</div>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="product in products" :key="product._id" class="border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:border-amber-200 transition-colors">
              <img :src="product.images[0]" :alt="product.name" class="w-16 h-16 object-cover rounded-xl bg-gray-50" />
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 text-sm line-clamp-1">{{ product.name }}</h3>
                <p class="text-xs text-gray-500">{{ formatPrice(product.price) }} / pack</p>
              </div>
              <div class="flex items-center bg-gray-50 rounded-full overflow-hidden border border-gray-200">
                <button type="button" @click="updateQuantity(product._id, -1)" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">-</button>
                <span class="w-8 text-center text-sm font-bold">{{ getQuantity(product._id) }}</span>
                <button type="button" @click="updateQuantity(product._id, 1)" class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">+</button>
              </div>
            </div>
          </div>
          <p v-if="productError" class="text-red-500 text-sm mt-4 font-medium">{{ productError }}</p>
        </section>

        <hr class="border-gray-100" />

        <!-- Section 2: Recipient Details -->
        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-black">2</div>
            <h2 class="text-xl font-bold text-gray-900">Recipient Details</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Recipient Name</label>
              <input v-model="form.recipientDetails.name" required type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="E.g. Jane Doe" />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Recipient Phone</label>
              <input v-model="form.recipientDetails.phone" required type="tel" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="+234..." />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
              <input v-model="form.recipientDetails.address" required type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="Full delivery address" />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Country / Region</label>
              <input v-model="form.recipientDetails.country" required type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="Nigeria, USA, UK, etc." />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Occasion</label>
              <select v-model="form.recipientDetails.occasion" required class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors bg-white">
                <option value="" disabled>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Corporate Event</option>
                <option>Just Because</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </section>

        <hr class="border-gray-100" />

        <!-- Section 3: Sender Details -->
        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-black">3</div>
            <h2 class="text-xl font-bold text-gray-900">Your Details</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
              <input v-model="form.senderDetails.name" required type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Your Phone</label>
              <input v-model="form.senderDetails.phone" required type="tel" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="+234..." />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-bold text-gray-700 mb-2">Your Email <span class="text-xs font-normal text-gray-400">(For invoice & receipt)</span></label>
              <input v-model="form.senderDetails.email" required type="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors" placeholder="john@example.com" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-bold text-gray-700 mb-2">Special Instructions / Gift Note</label>
              <textarea v-model="form.specialInstructions" rows="3" class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#033958] transition-colors placeholder:text-gray-400" placeholder="Write a note to include, or any special delivery requests..."></textarea>
            </div>
          </div>
        </section>

        <div class="pt-6">
          <button type="submit" :disabled="submitting" class="w-full md:w-auto bg-amber-500 text-[#033958] px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
            <Icon v-if="submitting" name="lucide:loader-2" class="animate-spin" size="18" />
            {{ submitting ? 'Submitting...' : 'Submit Request' }}
          </button>
          <p class="text-sm text-gray-500 mt-4 font-medium text-center md:text-left">No payment required yet. We will review and email you an invoice.</p>
        </div>

      </form>

    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useFetchProducts } from '@/composables/modules/products/useFetchProducts'
import { useCreateGifting } from '@/composables/modules/gifting/create'
import { useCurrency } from '@/composables/useCurrency'

const { products, fetchProducts, loading: fetchingProducts } = useFetchProducts()
const { createGiftingRequest, loading: submitting } = useCreateGifting()
const { formatPrice } = useCurrency()

const submitted = ref(false)
const productError = ref('')

const form = reactive({
  senderDetails: { name: '', email: '', phone: '' },
  recipientDetails: { name: '', phone: '', address: '', country: '', occasion: '' },
  specialInstructions: '',
  selectedProducts: {} as Record<string, number>
})

const getQuantity = (id: string) => {
  return form.selectedProducts[id] || 0
}

const updateQuantity = (id: string, delta: number) => {
  productError.value = ''
  const current = form.selectedProducts[id] || 0
  const next = current + delta
  if (next >= 0) {
    if (next === 0) {
      delete form.selectedProducts[id]
    } else {
      form.selectedProducts[id] = next
    }
  }
}

const handleSubmit = async () => {
  const selectedIds = Object.keys(form.selectedProducts)
  if (selectedIds.length === 0) {
    productError.value = 'Please select at least one product to curate.'
    return
  }

  const payload = {
    senderDetails: { ...form.senderDetails },
    recipientDetails: { ...form.recipientDetails },
    specialInstructions: form.specialInstructions,
    products: selectedIds.map(id => ({
      product: id,
      quantity: form.selectedProducts[id]
    }))
  }

  const res = await createGiftingRequest(payload)
  if (res) {
    submitted.value = true
  }
}

const resetForm = () => {
  form.senderDetails = { name: '', email: '', phone: '' }
  form.recipientDetails = { name: '', phone: '', address: '', country: '', occasion: '' }
  form.specialInstructions = ''
  form.selectedProducts = {}
  submitted.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  fetchProducts({ limit: 50 })
})
</script>
