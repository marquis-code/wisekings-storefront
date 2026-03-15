<template>
  <div class="max-w-[1440px] bg-white mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-screen">
    <div class="flex flex-col lg:flex-row gap-16">
      <!-- Checkout Form -->
      <div class="flex-1 space-y-12">
        <div class="space-y-2">
          <h1 class="text-4xl font-black text-gray-900 tracking-tight">{{ $t('common.checkout') }}</h1>
          <p class="text-sm font-medium text-gray-400">{{ $t('common.complete_details') }}</p>
        </div>

        <div v-if="items.length === 0" class="p-20 text-center bg-gray-50 rounded-[40px] border border-gray-100">
          <p class="text-sm font-black text-gray-900 uppercase tracking-widest">{{ $t('common.cart_empty') }}</p>
          <NuxtLink to="/products" class="inline-flex items-center gap-2 text-[#033958] font-black text-xs uppercase tracking-widest mt-6 hover:gap-3 transition-all">
            {{ $t('common.continue_shopping') }}
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <form v-else @submit.prevent="handleCheckout" class="space-y-12">
          <!-- Auth Reminder -->
          <div v-if="!isAuthenticated" class="p-8 bg-amber-50 rounded-[40px] border-2 border-amber-100 flex items-center justify-between gap-8 shadow-sm">
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 rounded-3xl bg-white flex items-center justify-center text-amber-600 shadow-sm">
                <Icon name="lucide:user" size="28" />
              </div>
              <div>
                <p class="text-base font-black text-amber-900">Signed in?</p>
                <p class="text-sm font-medium text-amber-800/60">Unlock exclusive rewards and faster checkout.</p>
              </div>
            </div>
            <NuxtLink to="/login?redirect=/checkout" class="text-xs font-black uppercase tracking-widest px-8 py-4 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all">Sign In</NuxtLink>
          </div>

          <!-- Fulfillment Toggle -->
          <div class="space-y-6">
            <h2 class="text-sm font-extrabold uppercase tracking-[0.2em] text-[#033958] flex items-center gap-2">
              <Icon name="lucide:package-check" size="18" />
              {{ $t('common.fulfillment_method') }}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                type="button" 
                @click="deliveryMethod = 'lagos_dispatch'"
                class="p-4 rounded-[28px] border-2 transition-all flex flex-col items-center gap-3 group"
                :class="deliveryMethod === 'lagos_dispatch' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'lagos_dispatch' ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/20' : 'bg-white text-gray-400'">
                  <Icon name="lucide:truck" class="w-5 h-5" />
                </div>
                <div class="text-center">
                  <p class="text-[10px] font-black uppercase tracking-widest" :class="deliveryMethod === 'lagos_dispatch' ? 'text-amber-600' : 'text-gray-400'">{{ $t('common.dispatch') }}</p>
                  <p class="text-[9px] font-medium text-gray-400 mt-0.5 line-clamp-1">{{ $t('common.within_lagos') }}</p>
                </div>
              </button>

              <button 
                type="button" 
                @click="deliveryMethod = 'waybill'"
                class="p-4 rounded-[28px] border-2 transition-all flex flex-col items-center gap-3 group"
                :class="deliveryMethod === 'waybill' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'waybill' ? 'bg-[#033958] text-white shadow-xl shadow-[#033958]/20' : 'bg-white text-gray-400'">
                  <Icon name="lucide:package" class="w-5 h-5" />
                </div>
                <div class="text-center">
                  <p class="text-[10px] font-black uppercase tracking-widest" :class="deliveryMethod === 'waybill' ? 'text-amber-600' : 'text-gray-400'">{{ $t('common.waybill') }}</p>
                  <p class="text-[9px] font-medium text-gray-400 mt-0.5 line-clamp-1">{{ $t('common.outside_lagos') }}</p>
                </div>
              </button>

              <button 
                type="button" 
                @click="deliveryMethod = 'pickup'"
                class="p-4 rounded-[28px] border-2 transition-all flex flex-col items-center gap-3 group"
                :class="deliveryMethod === 'pickup' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'pickup' ? 'bg-[#033958] text-white shadow-xl shadow-[#033958]/20' : 'bg-white text-gray-400'">
                  <Icon name="lucide:store" class="w-5 h-5" />
                </div>
                <div class="text-center">
                  <p class="text-[10px] font-black uppercase tracking-widest" :class="deliveryMethod === 'pickup' ? 'text-[#033958]' : 'text-gray-400'">{{ $t('common.pickup') }}</p>
                  <p class="text-[9px] font-medium text-gray-400 mt-0.5 line-clamp-1">{{ $t('common.at_store') }}</p>
                </div>
              </button>
            </div>
          </div>

          <!-- Shipping Address -->
          <transition name="slide-fade">
            <div v-if="deliveryMethod !== 'pickup'" class="space-y-8 bg-gray-50 p-8 rounded-[40px] border border-gray-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-[#033958] flex items-center justify-center text-white shadow-lg shadow-[#033958]/20">
                  <Icon name="lucide:map-pin" size="20" />
                </div>
                <h2 class="text-sm font-extrabold uppercase tracking-widest text-[#033958]">{{ $t('common.shipping_destination') }}</h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input v-model="address.fullName" type="text" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:border-[#033958] focus:ring-0 outline-none transition-all shadow-sm" placeholder="Enter recipient name">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Phone Number</label>
                  <input v-model="address.phone" type="tel" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:border-[#033958] focus:ring-0 outline-none transition-all shadow-sm" placeholder="+234 ...">
                </div>
                <div class="md:col-span-2">
                  <CoreAddressAutocomplete 
                    v-model="address.address" 
                    label="Street Address" 
                    placeholder="Search for your address..." 
                    @place-changed="(data: any) => {
                      address.address = data.address;
                      address.lat = data.lat;
                      address.lng = data.lng;
                      address.city = data.city;
                      address.state = data.state;
                      
                      if (deliveryMethod === 'lagos_dispatch' && data.lat && data.lng) {
                        calculateFee(data.lat, data.lng, 'lagos_dispatch')
                      }
                    }"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">City</label>
                  <input v-model="address.city" type="text" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:border-[#033958] focus:ring-0 outline-none transition-all shadow-sm" placeholder="City">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">State</label>
                  <input v-model="address.state" type="text" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:border-[#033958] focus:ring-0 outline-none transition-all shadow-sm" placeholder="Lagos, FCT, etc.">
                </div>
              </div>
            </div>
          </transition>

          <!-- Payment Method -->
          <div class="space-y-6">
            <h2 class="text-sm font-extrabold uppercase tracking-[0.2em] text-[#033958] flex items-center gap-2">
              <Icon name="lucide:wallet" size="18" />
              Payment Method
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- <button 
                type="button" 
                @click="paymentMethod = 'card'"
                class="p-6 rounded-[32px] border-2 transition-all flex items-center gap-4 group"
                :class="paymentMethod === 'card' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="paymentMethod === 'card' ? 'bg-[#033958] text-white' : 'bg-white text-gray-400'">
                  <Icon name="lucide:credit-card" class="w-6 h-6" />
                </div>
                <div class="text-left">
                  <p class="text-[11px] font-black uppercase tracking-widest" :class="paymentMethod === 'card' ? 'text-[#033958]' : 'text-gray-400'">Pay with Card</p>
                  <p class="text-[9px] font-medium text-gray-400 mt-0.5">Stripe / Paystack</p>
                </div>
              </button> -->

              <button 
                type="button" 
                @click="paymentMethod = 'direct_transfer'"
                class="p-6 rounded-[32px] border-2 transition-all flex items-center gap-4 group"
                :class="paymentMethod === 'direct_transfer' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="paymentMethod === 'direct_transfer' ? 'bg-amber-500 text-white' : 'bg-white text-gray-400'">
                  <Icon name="lucide:banknote" class="w-6 h-6" />
                </div>
                <div class="text-left">
                  <p class="text-[11px] font-black uppercase tracking-widest" :class="paymentMethod === 'direct_transfer' ? 'text-amber-600' : 'text-gray-400'">{{ $t('common.direct_transfer') }}</p>
                  <p class="text-[9px] font-medium text-gray-400 mt-0.5">Manual Verification</p>
                </div>
              </button>
            </div>

            <!-- Direct Transfer Info & Upload -->
            <transition name="fade">
              <div v-if="paymentMethod === 'direct_transfer'" class="p-8 bg-amber-50/50 rounded-[40px] border border-amber-100 space-y-6">
                <div class="p-6 bg-white rounded-3xl border border-amber-100 shadow-sm space-y-4">
                  <div class="flex items-center gap-3 text-amber-600 mb-2">
                    <Icon name="lucide:info" size="18" />
                    <p class="text-[10px] font-black uppercase tracking-widest">{{ $t('common.bank_instruction') }}</p>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div class="space-y-1">
                      <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">{{ $t('common.account_name') }}</p>
                      <p class="text-xs font-bold text-gray-900">{{ bankDetails.accountName || '...' }}</p>
                    </div>
                    <div class="space-y-1">
                      <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">{{ $t('common.account_number') }}</p>
                      <p class="text-xs font-bold text-gray-900 select-all">{{ bankDetails.accountNumber || '...' }}</p>
                    </div>
                    <div class="space-y-1">
                      <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">{{ $t('common.bank_name') }}</p>
                      <p class="text-xs font-bold text-gray-900">{{ bankDetails.bankName || '...' }}</p>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <h3 class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">{{ $t('common.upload_proof') }}</h3>
                  <div 
                    class="relative h-40 rounded-3xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 hover:border-amber-500 transition-all cursor-pointer overflow-hidden group"
                    @click="$refs.fileInput.click()"
                  >
                    <template v-if="!proofUrl">
                      <div class="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-500 transition-all">
                        <Icon :name="uploading ? 'lucide:loader-2' : 'lucide:camera'" :class="uploading ? 'animate-spin' : ''" size="24" />
                      </div>
                      <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">{{ uploading ? 'Uploading...' : 'Click to upload receipt' }}</p>
                    </template>
                    <template v-else>
                      <img :src="proofUrl" class="absolute inset-0 w-full h-full object-cover group-hover:opacity-50 transition-opacity" />
                      <div class="relative z-10 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full text-[9px] font-black uppercase tracking-widest">
                        <Icon name="lucide:check" size="14" />
                        Uploaded
                      </div>
                    </template>
                    <input ref="fileInput" type="file" class="hidden" accept="image/*" @change="handleFileUpload" />
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </form>
      </div>

      <!-- Manifest Summary -->
      <aside class="w-full lg:w-[450px] shrink-0">
        <div class="bg-amber-400 rounded-[40px] p-8 lg:p-10 shadow-2xl shadow-amber-200/50 sticky top-32 overflow-hidden group">
          <!-- Subtle Decorative Pattern -->
          <div class="absolute -right-10 -top-10 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000 text-[#033958]">
            <Icon name="lucide:receipt" size="240" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>

          <div class="relative z-10 space-y-8">
            <h2 class="text-sm font-black uppercase tracking-[0.3em] text-[#033958]/60 border-b border-[#033958]/10 pb-4">{{ $t('common.manifest_summary') }}</h2>
            
            <div class="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <div v-for="item in items" :key="item.productId" class="flex items-start justify-between gap-4 py-4 border-b border-[#033958]/5 last:border-0">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl bg-white/40 border border-white/20 overflow-hidden shrink-0 shadow-inner">
                    <img v-if="item.image" :src="item.image" class="w-full h-full object-contain p-2" />
                  </div>
                  <div class="space-y-0.5">
                    <p class="text-base font-black text-[#033958] leading-tight line-clamp-2">{{ item.name }}</p>
                    <p class="text-[10px] font-black text-[#033958]/40 tracking-widest uppercase">Qty: {{ item.quantity }} × {{ formatPrice(item.price) }}</p>
                  </div>
                </div>
                <p class="text-sm font-black text-[#033958] whitespace-nowrap pt-1">{{ formatPrice(item.price * item.quantity) }}</p>
              </div>
            </div>

            <!-- Totals Section -->
            <div class="pt-6 border-t-2 border-[#033958]/10 space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-xs font-black uppercase tracking-widest text-[#033958]/60">{{ $t('common.base_total') }}</span>
                <span class="text-lg font-black text-[#033958]">{{ formatPrice(totalPrice) }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-widest text-[#033958]/70">{{ $t('common.shipping') }} <span class="text-[10px] opacity-60">({{ $t(`common.${deliveryMethod}`) }})</span></span>
                <span class="text-lg font-black text-[#033958]">{{ formatPrice(shippingFee) }}</span>
              </div>

              <div v-if="redeemPoints" class="flex justify-between items-center">
                <span class="text-xs font-black uppercase tracking-widest text-emerald-700 flex items-center gap-1">
                  {{ $t('common.rewards_applied') }}
                </span>
                <span class="font-black text-emerald-700">-{{ formatPrice(pointsToRedeem) }}</span>
              </div>

              <!-- Loyalty Rewards Interaction -->
              <div v-if="user && user.points > 0" class="p-4 bg-[#033958]/5 rounded-3xl border border-[#033958]/10 space-y-3">
                <div class="flex items-center justify-between">
                  <p class="text-[10px] font-black uppercase tracking-widest text-[#033958]/60">{{ $t('common.redeem_points') }}</p>
                  <p class="text-[10px] font-bold text-[#033958] bg-white/40 px-2 py-0.5 rounded-lg">{{ user.points }} pts available</p>
                </div>
                <div class="flex items-center gap-2">
                  <input 
                    v-model="pointsToRedeem" 
                    type="number" 
                    :max="user.points"
                    class="flex-1 bg-white/30 border-transparent rounded-xl px-4 py-2 text-xs font-black text-[#033958] outline-none focus:ring-1 focus:ring-[#033958]" 
                    placeholder="0"
                  />
                  <button 
                    type="button"
                    @click="redeemPoints = !redeemPoints"
                    :class="['px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95', redeemPoints ? 'bg-[#033958] text-white' : 'bg-white text-[#033958] border border-[#033958]/10']"
                  >
                    {{ redeemPoints ? $t('common.remove') : $t('common.apply') }}
                  </button>
                </div>
              </div>

              <div class="pt-6 border-t-2 border-[#033958]/20 flex justify-between items-center">
                <span class="text-base font-black uppercase tracking-[0.2em] text-[#033958]">{{ $t('common.grand_total') }}</span>
                <span class="text-3xl font-black text-[#033958] tracking-tighter">{{ formatPrice(totalPrice + shippingFee - (redeemPoints ? pointsToRedeem : 0)) }}</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-3 pt-4">
              <button 
                v-if="paymentMethod === 'direct_transfer'"
                @click="confirmDirectTransfer" 
                class="w-full py-5 bg-[#033958] hover:bg-[#022d46] text-white rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.95] shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                :disabled="submitting || !proofUrl"
              >
                <Icon v-if="submitting" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
                <template v-else>
                  {{ $t('common.confirm_payment_made') }}
                  <Icon name="lucide:check-circle" class="w-4 h-4" />
                </template>
              </button>

              <button 
                @click="() => handleWhatsAppOrder()" 
                class="w-full py-4 bg-white hover:bg-emerald-50 text-emerald-600 border-2 border-emerald-600/10 rounded-[32px] font-black text-[10px] uppercase tracking-[0.3em] transition-all active:scale-[0.95] flex items-center justify-center gap-3"
              >
                <Icon name="logos:whatsapp-icon" class="w-4 h-4" />
                {{ $t('common.order_whatsapp') }}
              </button>
            </div>
            
            <p v-if="deliveryMethod === 'lagos_dispatch' && !distanceInfo" class="text-[10px] font-black text-[#033958]/40 text-center uppercase tracking-widest mt-4">
              <Icon name="lucide:map-pin" size="12" class="mr-1" />
              Set delivery address for fee
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCreateOrder } from '@/composables/modules/orders/useCreateOrder'
import { useInitializePayment } from '@/composables/modules/payments/useInitializePayment'
import { useShipping } from '@/composables/modules/shipping/useShipping'
import { useAuthState } from '@/composables/useAuthState'
import { useCart } from '@/composables/useCart'
import { useCurrency } from '@/composables/useCurrency'
import { useReferral } from '@/composables/useReferral'

declare const google: any

import { GATEWAY_ENDPOINT } from "@/api_factory/axios.config"

const { items, totalPrice, clearCart } = useCart()
const { isAuthenticated, user } = useAuthState()
const { referralCode } = useReferral()
const { locale, t } = useI18n()
const { selectedCurrency, formatPrice } = useCurrency()
const { createOrder } = useCreateOrder()
const { initializePayment, loading: submitting } = useInitializePayment()
const { calculateFee, loading: calculatingFee, shippingFee, distanceInfo } = useShipping()

const deliveryMethod = ref('lagos_dispatch')
const paymentMethod = ref('direct_transfer')
const pointsToRedeem = ref(0)
const redeemPoints = ref(false)
const proofUrl = ref('')
const uploading = ref(false)
const bankDetails = ref({ accountName: '', accountNumber: '', bankName: '' })
const address = ref({ fullName: user.value?.fullName || '', phone: user.value?.phone || '', address: '', city: '', state: '', country: 'Nigeria', zipCode: '', lat: 0, lng: 0 })

// Add debounced watch for address changes to trigger fee calc
watch(address, (newVal) => {
  if (deliveryMethod.value === 'lagos_dispatch' && newVal.lat && newVal.lng) {
    calculateFee(newVal.lat, newVal.lng, 'lagos_dispatch')
  }
}, { deep: true })

const whatsappNumber = ref('')

onMounted(async () => {
  // Fetch global settings for WhatsApp and Bank Details
  try {
    const res = await GATEWAY_ENDPOINT.get('/settings') as any
    const data = res.data || res.data?.data || res
    whatsappNumber.value = data.whatsappNumber || '2348023225019'
    bankDetails.value = data.customerBankDetails || { accountName: '', accountNumber: '', bankName: '' }
  } catch (e) {
    console.error('Failed to load global settings', e)
    whatsappNumber.value = '2348023225019'
  }
})

async function handleFileUpload(event: any) {
  const file = event.target.files[0]
  if (!file) return

  uploading.value = true
  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await GATEWAY_ENDPOINT.post('/uploads/image/payment_proofs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }) as any
    proofUrl.value = res.data?.url || res.url
  } catch (e) {
    console.error('Upload failed', e)
  } finally {
    uploading.value = false
  }
}

async function confirmDirectTransfer() {
    if (!proofUrl.value) return
    
    // Create the order first
    const finalAmount = totalPrice.value + shippingFee.value - (redeemPoints.value ? pointsToRedeem.value : 0)
    const orderData = {
        items: items.value.map((i) => ({ productId: i.productId, name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
        totalAmount: totalPrice.value,
        shippingFee: shippingFee.value,
        redeemPoints: redeemPoints.value,
        pointsToRedeem: pointsToRedeem.value,
        deliveryMethod: deliveryMethod.value,
        deliveryLocation: (deliveryMethod.value === 'delivery' || deliveryMethod.value === 'lagos_dispatch') ? { lat: address.value.lat, lng: address.value.lng } : undefined,
        shippingAddress: deliveryMethod.value !== 'pickup' ? address.value : undefined,
        referralCode: referralCode.value || undefined,
        paymentProvider: 'direct_transfer'
    }

    try {
        const orderRes = await createOrder(orderData) as any
        const data = orderRes?.data || orderRes
        const orderId = data._id

        // Submit proof
        await GATEWAY_ENDPOINT.post(`/orders/${orderId}/submit-proof`, { proofUrl: proofUrl.value })
        
        // Trigger WhatsApp
        handleWhatsAppOrder(data.orderNumber)
        
        clearCart()
        navigateTo('/checkout/success')
    } catch (e) {
        console.error('Direct transfer failed', e)
    }
}

// Watch delivery method to reset fee if pickup
watch(deliveryMethod, (val) => {
  if (val === 'pickup') {
    shippingFee.value = 0
    distanceInfo.value = null
  } else if (val === 'waybill') {
    calculateFee(0, 0, 'waybill')
  } else if (val === 'lagos_dispatch' && address.value.lat && address.value.lng) {
    calculateFee(address.value.lat, address.value.lng, 'lagos_dispatch')
  }
})

async function handleWhatsAppOrder(orderNumber?: string) {
  if (submitting.value) return
  
  // If orderNumber isn't provided, create the order in the backend first
  let targetOrderNumber = orderNumber
  if (!targetOrderNumber) {
    try {
      const orderData = {
        items: items.value.map((i) => ({ productId: i.productId, name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
        totalAmount: totalPrice.value,
        shippingFee: shippingFee.value,
        redeemPoints: redeemPoints.value,
        pointsToRedeem: pointsToRedeem.value,
        deliveryMethod: deliveryMethod.value,
        deliveryLocation: (deliveryMethod.value === 'delivery' || deliveryMethod.value === 'lagos_dispatch') ? { lat: address.value.lat, lng: address.value.lng } : undefined,
        shippingAddress: deliveryMethod.value !== 'pickup' ? address.value : undefined,
        referralCode: referralCode.value || undefined,
        paymentProvider: 'whatsapp'
      }
      const res = await createOrder(orderData) as any
      const data = res?.data || res
      targetOrderNumber = data.orderNumber
      
      // Submit proof if it's already uploaded (direct transfer context)
      if (proofUrl.value && data._id) {
          await GATEWAY_ENDPOINT.post(`/orders/${data._id}/submit-proof`, { proofUrl: proofUrl.value })
      }
    } catch (e) {
      console.error('Failed to create order before WhatsApp redirect', e)
    }
  }

  const itemsList = items.value.map(i => `⭐ ${i.name} x ${i.quantity} => ${formatPrice(i.price * i.quantity)}`).join('\n')
  const total = totalPrice.value + shippingFee.value - (redeemPoints.value ? pointsToRedeem.value : 0)
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  
  const message = encodeURIComponent(
    `✨ *New Order Received @ WISEKINGS VENTURES LIMITED* ✨\n\n` +
    `👑 *Manifest Details*\n` +
    `#️⃣ Order Number  : *${targetOrderNumber || 'Pending'}*\n` +
    `🔆 Order Status  : pending\n` +
    `🗓 Date          : ${date}\n` +
    `📧 Email         : ${user.value?.email || 'Guest'}\n` +
    `💰 Total Amount  : *${formatPrice(total)}*\n\n` +
    `🔍 *Order details:* \n\n` +
    `${itemsList}\n\n` +
    `--------------------------------\n\n` +
    `🏷️ Subtotal: ${formatPrice(totalPrice.value)}\n` +
    `🚛 Shipping: ${t(`common.${deliveryMethod.value}`)}\n` +
    `💵 *Grand Total: ${formatPrice(total)}*\n\n` +
    `--------------------------------\n\n` +
    `🗺️ *Billing Address:*\n\n` +
    `👤 ${address.value.fullName || 'N/A'}\n` +
    `📞 ${address.value.phone || 'N/A'}\n` +
    `🏠 ${address.value.address || 'N/A'}\n` +
    `🌇 ${address.value.city || 'N/A'}\n` +
    `📍 ${address.value.state || 'N/A'}\n` +
    `🇳🇬 ${address.value.country || 'Nigeria'}\n\n` +
    `--------------------------------\n\n` +
    `🚚 *Shipping Address:*\n\n` +
    `👤 ${address.value.fullName || 'N/A'}\n` +
    `📞 ${address.value.phone || 'N/A'}\n` +
    `🏠 ${address.value.address || 'N/A'}\n` +
    `🌇 ${address.value.city || 'N/A'}\n` +
    `📍 ${address.value.state || 'N/A'}\n\n` +
    `--------------------------------\n\n` +
    `💳 *Payment Method:* Direct Bank Transfer\n` +
    `✨ *Thank you for choosing WiseKings!* ✨`
  )

  window.open(`https://wa.me/${whatsappNumber.value}?text=${message}`, '_blank')
}

async function handleCheckout() {
  const finalAmount = totalPrice.value + shippingFee.value - (redeemPoints.value ? pointsToRedeem.value : 0)
  
  const orderData = {
    items: items.value.map((i) => ({ productId: i.productId, name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
    totalAmount: totalPrice.value,
    shippingFee: shippingFee.value,
    redeemPoints: redeemPoints.value,
    pointsToRedeem: pointsToRedeem.value,
    deliveryMethod: deliveryMethod.value,
    deliveryLocation: deliveryMethod.value === 'delivery' ? { lat: address.value.lat, lng: address.value.lng } : undefined,
    shippingAddress: deliveryMethod.value === 'delivery' ? address.value : undefined,
    referralCode: referralCode.value || undefined,
  }
  
  const order = await createOrder(orderData) as any
  if (!order) return

  const data = order?.data || order
  const orderId = data._id

  const payment = await initializePayment({ 
    orderId, 
    email: user.value?.email || (address.value.fullName + '@guest.com'), 
    amount: finalAmount, 
    currency: selectedCurrency.value,
    callbackUrl: `${window.location.origin}/checkout/success` 
  }) as any

  const pData = payment?.data || payment

  if (pData?.authorization_url) { 
    window.location.href = pData.authorization_url; 
    return 
  } else if (pData?.url) {
    window.location.href = pData.url;
    return
  }

  clearCart()
  navigateTo('/checkout/success')
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(3, 57, 88, 0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(3, 57, 88, 0.2);
}
</style>
