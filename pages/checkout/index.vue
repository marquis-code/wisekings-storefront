<template>
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
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
          <div v-if="!isAuthenticated" class="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Icon name="lucide:user" class="w-5 h-5" />
              </div>
              <p class="text-xs font-bold text-amber-900">Signed in users get exclusive rewards and faster checkout.</p>
            </div>
            <NuxtLink to="/login?redirect=/checkout" class="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-amber-200/50 rounded-xl text-amber-900">Sign In</NuxtLink>
          </div>

          <!-- Fulfillment Toggle -->
          <div class="space-y-6">
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">{{ $t('common.fulfillment_method') }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            </div>
          </div>

          <!-- Payment Method -->
          <div class="space-y-6">
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Payment Method</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
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
              </button>

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
      <aside class="w-full lg:w-[400px] shrink-0">
        <div class="bg-[#033958] rounded-[40px] p-8 lg:p-10 shadow-2xl shadow-[#033958]/30 sticky top-10 overflow-hidden group">
          <div class="absolute -right-10 -top-10 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
            <Icon name="lucide:receipt" size="240" />
          </div>

          <div class="relative z-10 space-y-8">
            <h2 class="text-xs font-black uppercase tracking-[0.3em] text-white/40">{{ $t('common.manifest_summary') }}</h2>
            
            <div class="space-y-4 max-h-60 overflow-y-auto pr-2 scrollbar-hide">
              <div v-for="item in items" :key="item.productId" class="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 overflow-hidden shrink-0">
                    <img v-if="item.image" :src="item.image" class="w-full h-full object-cover" />
                  </div>
                  <div class="space-y-0.5">
                    <p class="text-[11px] font-black text-white leading-tight truncate w-32">{{ item.name }}</p>
                    <p class="text-[9px] font-bold text-white/30 tracking-widest uppercase">Qty: {{ item.quantity }}</p>
                  </div>
                </div>
                <p class="text-xs font-black text-white">{{ formatPrice(item.price * item.quantity) }}</p>
              </div>
            </div>

            <!-- Totals -->
            <div class="pt-8 border-t border-white/10 space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-[10px] font-black uppercase tracking-widest text-white/40">{{ $t('common.base_total') }}</span>
                <span class="text-xs font-black text-white">{{ formatPrice(totalPrice) }}</span>
              </div>
              
              <div class="flex justify-between items-center text-xs">
                <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">{{ $t('common.shipping') }} ({{ $t(`common.${deliveryMethod}`) }})</span>
                <span class="font-black text-amber-400">{{ formatPrice(shippingFee) }}</span>
              </div>

              <div v-if="redeemPoints" class="flex justify-between items-center text-xs">
                <span class="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                  {{ $t('common.rewards_applied') }}
                </span>
                <span class="font-black text-emerald-400">-{{ formatPrice(pointsToRedeem) }}</span>
              </div>

              <!-- Loyalty Points -->
              <div v-if="user && user.points > 0" class="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div class="flex items-center justify-between">
                  <p class="text-[10px] font-black uppercase tracking-widest text-white/60">{{ $t('common.redeem_points') }}</p>
                  <p class="text-[9px] font-bold text-amber-400">{{ user.points }} pts</p>
                </div>
                <div class="flex items-center gap-3">
                  <input 
                    v-model="pointsToRedeem" 
                    type="number" 
                    :max="user.points"
                    class="flex-1 bg-black/20 border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-white outline-none focus:ring-1 focus:ring-amber-500" 
                    placeholder="0"
                  />
                  <button 
                    type="button"
                    @click="redeemPoints = !redeemPoints"
                    :class="['px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all', redeemPoints ? 'bg-amber-500 text-[#033958]' : 'bg-white/10 text-white border border-white/20']"
                  >
                    {{ redeemPoints ? $t('common.remove') : $t('common.apply') }}
                  </button>
                </div>
              </div>

              <div class="pt-6 border-t border-white/20 flex justify-between items-center">
                <span class="text-xs font-black uppercase tracking-[0.2em] text-white">{{ $t('common.grand_total') }}</span>
                <span class="text-4xl font-black text-white tracking-tighter">{{ formatPrice(totalPrice + shippingFee - (redeemPoints ? pointsToRedeem : 0)) }}</span>
              </div>
            </div>

            <div class="space-y-4">
              <button 
                @click="handleCheckout" 
                class="w-full py-6 bg-white hover:bg-amber-500 text-[#033958] rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                :disabled="submitting || (deliveryMethod === 'lagos_dispatch' && !distanceInfo)"
              >
                <Icon v-if="submitting" name="lucide:loader-2" class="w-4 h-4 animate-spin text-[#033958]" />
                <template v-else>
                  {{ $t('common.authorize_payment') }}
                  <Icon name="lucide:shield-check" class="w-4 h-4" />
                </template>
              </button>

              <button 
                v-if="paymentMethod === 'direct_transfer'"
                @click="confirmDirectTransfer" 
                class="w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                :disabled="submitting || !proofUrl"
              >
                <Icon v-if="submitting" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
                <template v-else>
                  {{ $t('common.confirm_payment_made') }}
                  <Icon name="lucide:check-circle" class="w-4 h-4" />
                </template>
              </button>

              <button 
                @click="handleWhatsAppOrder" 
                class="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[32px] font-black text-[10px] uppercase tracking-[0.3em] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <Icon name="lucide:message-circle" class="w-4 h-4" />
                {{ $t('common.order_whatsapp') }}
              </button>
            </div>
            
            <p v-if="deliveryMethod === 'lagos_dispatch' && !distanceInfo" class="text-[9px] font-bold text-white/30 text-center uppercase tracking-widest italic">Please set delivery address to calculate fee</p>
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
const { selectedCurrency, formatPrice } = useCurrency()
const { createOrder } = useCreateOrder()
const { initializePayment, loading: submitting } = useInitializePayment()
const { calculateFee, loading: calculatingFee, shippingFee, distanceInfo } = useShipping()

const deliveryMethod = ref('pickup')
const paymentMethod = ref('card')
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

function handleWhatsAppOrder(orderNumber?: string) {
  const itemsList = items.value.map(i => `• ${i.name} (x${i.quantity}) - ${formatPrice(i.price * i.quantity)}`).join('\n')
  const total = totalPrice.value + shippingFee.value - (redeemPoints.value ? pointsToRedeem.value : 0)
  
  const message = encodeURIComponent(
    `*NEW SNACK MANIFEST (ORDER${orderNumber ? ': ' + orderNumber : ''})*\n\n` +
    `*Items:*\n${itemsList}\n\n` +
    `*Delivery Method:* ${deliveryMethod.value.replace('_', ' ').toUpperCase()}\n` +
    `*Payment Method:* ${paymentMethod.value === 'direct_transfer' ? 'DIRECT BANK TRANSFER' : 'ONLINE CARD'}\n` +
    `*Shipping Fee:* ${formatPrice(shippingFee.value)}\n` +
    `*Grand Total:* ${formatPrice(total)}\n\n` +
    `*Customer Details:*\n` +
    `Name: ${address.value.fullName || 'Not specified'}\n` +
    `Phone: ${address.value.phone || 'Not specified'}\n` +
    `Address: ${address.value.address || 'Pickup'}`
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
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
