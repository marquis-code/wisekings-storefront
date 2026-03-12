<template>
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
    <div class="flex flex-col lg:flex-row gap-16">
      <!-- Checkout Form -->
      <div class="flex-1 space-y-12">
        <div class="space-y-2">
          <h1 class="text-4xl font-black text-gray-900 tracking-tight">Checkout</h1>
          <p class="text-sm font-medium text-gray-400">Complete your details to finalize your snacking manifest.</p>
        </div>

        <div v-if="items.length === 0" class="p-20 text-center bg-gray-50 rounded-[40px] border border-gray-100">
          <p class="text-sm font-black text-gray-900 uppercase tracking-widest">Your cart is empty</p>
          <NuxtLink to="/products" class="inline-flex items-center gap-2 text-[#033958] font-black text-xs uppercase tracking-widest mt-6 hover:gap-3 transition-all">
            Continue Shopping
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
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Fulfillment Method</h2>
            <div class="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                @click="deliveryMethod = 'pickup'"
                class="p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-4 group"
                :class="deliveryMethod === 'pickup' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'pickup' ? 'bg-[#033958] text-white shadow-xl shadow-[#033958]/20' : 'bg-white text-gray-400'">
                  <Icon name="lucide:store" class="w-6 h-6" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-black uppercase tracking-widest" :class="deliveryMethod === 'pickup' ? 'text-[#033958]' : 'text-gray-400'">Store Pickup</p>
                  <p class="text-[10px] font-medium text-gray-400 mt-1">Ready in 2 hours · Free</p>
                </div>
              </button>

              <button 
                type="button" 
                @click="deliveryMethod = 'delivery'"
                class="p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-4 group"
                :class="deliveryMethod === 'delivery' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'delivery' ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/20' : 'bg-white text-gray-400'">
                  <Icon name="lucide:truck" class="w-6 h-6" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-black uppercase tracking-widest" :class="deliveryMethod === 'delivery' ? 'text-amber-600' : 'text-gray-400'">Home Delivery</p>
                  <p class="text-[10px] font-medium text-gray-400 mt-1">We bring it to you · Calculated</p>
                </div>
              </button>
            </div>
          </div>

          <!-- Shipping Details -->
          <div v-if="deliveryMethod === 'delivery'" class="space-y-6">
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Shipping Destination</h2>
            <div class="p-8 bg-gray-50 rounded-[40px] border border-gray-100 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Recipient Name</label>
                  <input v-model="address.fullName" placeholder="Zipporah Jel" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all" required />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Contact Phone</label>
                  <input v-model="address.phone" type="tel" placeholder="0814 762 6501" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all" required />
                </div>
              </div>

              <div class="space-y-2 relative">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Street Address</label>
                <div class="relative group">
                  <Icon name="lucide:map-pin" size="18" class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#033958] transition-colors" />
                  <input 
                    id="addressAutocomplete"
                    v-model="address.address" 
                    placeholder="Enter your street address in Lagos..." 
                    class="w-full pl-12 pr-5 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all" 
                    required 
                  />
                </div>
                <div v-if="calculatingFee" class="flex items-center gap-2 mt-2 ml-2">
                  <Icon name="lucide:loader-2" class="w-3 h-3 animate-spin text-amber-500" />
                  <span class="text-[10px] font-black uppercase tracking-widest text-amber-600">Calculating distance pricing...</span>
                </div>
                <p v-else-if="distanceInfo" class="text-[10px] font-black uppercase tracking-widest text-emerald-600 mt-2 ml-2 flex items-center gap-2">
                  <Icon name="lucide:check-circle" size="12" />
                  Distance: {{ distanceInfo.distanceKm }}km detected
                </p>
              </div>

              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">City</label>
                  <input v-model="address.city" class="w-full px-5 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-xs font-bold text-gray-400 cursor-not-allowed" readonly required />
                </div>
                <div class="space-y-2">
                  <input v-model="address.state" class="w-full px-5 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-xs font-bold text-gray-400 cursor-not-allowed" readonly required />
                </div>
              </div>
            </div>
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
            <h2 class="text-xs font-black uppercase tracking-[0.3em] text-white/40">Manifest Summary</h2>
            
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
                <p class="text-xs font-black text-white">₦{{ (item.price * item.quantity).toLocaleString() }}</p>
              </div>
            </div>

            <!-- Totals -->
            <div class="pt-8 border-t border-white/10 space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-[10px] font-black uppercase tracking-widest text-white/40">Base Total</span>
                <span class="text-xs font-black text-white">₦{{ totalPrice.toLocaleString() }}</span>
              </div>
              
              <div class="flex justify-between items-center text-xs">
                <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">Shipping ({{ deliveryMethod }})</span>
                <span class="font-black text-amber-400">₦{{ shippingFee.toLocaleString() }}</span>
              </div>

              <div v-if="redeemPoints" class="flex justify-between items-center text-xs">
                <span class="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                  Rewards Applied
                </span>
                <span class="font-black text-emerald-400">-₦{{ pointsToRedeem.toLocaleString() }}</span>
              </div>

              <!-- Loyalty Points -->
              <div v-if="user && user.points > 0" class="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div class="flex items-center justify-between">
                  <p class="text-[10px] font-black uppercase tracking-widest text-white/60">Redeem Points</p>
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
                    {{ redeemPoints ? 'Remove' : 'Apply' }}
                  </button>
                </div>
              </div>

              <div class="pt-6 border-t border-white/20 flex justify-between items-center">
                <span class="text-xs font-black uppercase tracking-[0.2em] text-white">Grand Total</span>
                <span class="text-4xl font-black text-white tracking-tighter">₦{{ (totalPrice + shippingFee - (redeemPoints ? pointsToRedeem : 0)).toLocaleString() }}</span>
              </div>
            </div>

            <button 
              @click="handleCheckout" 
              class="w-full py-6 bg-white hover:bg-amber-500 text-[#033958] rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
              :disabled="submitting || (deliveryMethod === 'delivery' && !distanceInfo)"
            >
              <Icon v-if="submitting" name="lucide:loader-2" class="w-4 h-4 animate-spin text-[#033958]" />
              <template v-else>
                Authorize Payment
                <Icon name="lucide:shield-check" class="w-4 h-4" />
              </template>
            </button>
            <p v-if="deliveryMethod === 'delivery' && !distanceInfo" class="text-[9px] font-bold text-white/30 text-center uppercase tracking-widest italic">Please set delivery address to calculate fee</p>
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

const { items, totalPrice, clearCart } = useCart()
const { isAuthenticated, user } = useAuthState()
const { referralCode } = useReferral()
const { selectedCurrency } = useCurrency()
const { createOrder } = useCreateOrder()
const { initializePayment, loading: submitting } = useInitializePayment()
const { calculateFee, loading: calculatingFee, shippingFee, distanceInfo } = useShipping()

const deliveryMethod = ref('pickup')
const pointsToRedeem = ref(0)
const redeemPoints = ref(false)
const address = ref({ fullName: user.value?.fullName || '', phone: user.value?.phone || '', address: '', city: '', state: '', country: 'Nigeria', zipCode: '', lat: 0, lng: 0 })

// Handle Google Maps Autocomplete
onMounted(() => {
  if (typeof google === 'undefined') return
  
  const input = document.getElementById('addressAutocomplete') as HTMLInputElement
  const autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: 'NG' },
    fields: ['address_components', 'geometry', 'formatted_address'],
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace()
    if (!place.geometry || !place.geometry.location) return

    address.value.address = place.formatted_address || ''
    address.value.lat = place.geometry.location.lat()
    address.value.lng = place.geometry.location.lng()

    // Parse city/state
    place.address_components?.forEach((comp: any) => {
      if (comp.types.includes('locality')) address.value.city = comp.long_name
      if (comp.types.includes('administrative_area_level_1')) address.value.state = comp.long_name
    })

    // Calculate dynamic fee
    calculateFee(address.value.lat, address.value.lng)
  })
})

// Watch delivery method to reset fee if pickup
watch(deliveryMethod, (val) => {
  if (val === 'pickup') {
    shippingFee.value = 0
    distanceInfo.value = null
  } else if (address.value.lat && address.value.lng) {
    calculateFee(address.value.lat, address.value.lng)
  }
})

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
