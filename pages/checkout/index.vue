<template>
  <div class="w-full max-w-[100vw] bg-white mx-auto px-4 lg:px-8 py-8 md:py-16 min-h-screen overflow-x-hidden overflow-y-auto box-border">
    <CoreFullscreenLoader 
      :loading="submitting" 
      :title="loaderState.title" 
      :subtitle="loaderState.subtitle" 
      :active-step="loaderState.step"
      :progress="loaderState.progress"
      :show-cancel="showCancelButton"
      @cancel="cancelSubmitting"
    />
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-20 lg:pt-10">
      <!-- Checkout Form -->
      <div class="flex-1 space-y-8 md:space-y-12 min-w-0">
        <div class="space-y-2">
          <h1 class="text-4xl font-black text-gray-900 tracking-tight">{{ $t('common.checkout') }}</h1>
          <p class="text-sm font-medium text-[#033958]/80">{{ $t('common.complete_details') }}</p>
        </div>

        <div v-if="items.length === 0" class="p-10 md:p-20 text-center bg-gray-50 rounded-[40px] border border-gray-100">
          <p class="text-sm font-black text-gray-900 uppercase tracking-widest">{{ $t('common.cart_empty') }}</p>
          <NuxtLink to="/products" class="inline-flex items-center gap-2 text-[#033958] font-black text-xs uppercase tracking-widest mt-6 hover:gap-3 transition-all">
            {{ $t('common.continue_shopping') }}
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <form v-else @submit.prevent="handleCheckout" class="space-y-8 md:space-y-12">
          <!-- 2. Fulfillment Method -->
          <div class="space-y-4 md:space-y-6 px-1 md:px-2">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-600">
                <Icon name="lucide:truck" size="20" />
              </div>
              <h2 class="text-xs font-black uppercase tracking-[0.2em] text-[#033958]">
                {{ $t('common.fulfillment_method') }}
              </h2>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <button 
                v-for="method in [
                  { id: 'lagos_dispatch', icon: 'lucide:bike', label: $t('common.dispatch'), sub: 'Within Lagos' },
                  { id: 'waybill', icon: 'lucide:package-2', label: $t('common.waybill'), sub: 'Outside Lagos' },
                  { id: 'pickup', icon: 'lucide:store', label: $t('common.pickup'), sub: 'At Factory' }
                ]"
                :key="method.id"
                type="button" 
                @click="deliveryMethod = method.id"
                :class="[
                  'flex-1 min-w-[140px] p-4 rounded-2xl border-2 transition-all flex items-center gap-3 group text-left relative overflow-hidden',
                  deliveryMethod === method.id ? 'border-[#033958] bg-[#033958] text-white' : 'border-gray-100 bg-white hover:border-gray-200 text-gray-500'
                ]"
              >
                <Icon :name="method.icon" size="20" :class="deliveryMethod === method.id ? 'text-amber-400' : 'text-[#033958]/40'" />
                <div>
                  <p class="text-[10px] font-black uppercase tracking-widest leading-none mb-1">{{ method.label }}</p>
                  <p v-if="method.sub" class="text-[9px] font-bold opacity-60 uppercase whitespace-nowrap">{{ method.sub }}</p>
                </div>
                <div v-if="deliveryMethod === method.id" class="absolute -right-2 -bottom-2 opacity-10">
                  <Icon :name="method.icon" size="48" />
                </div>
              </button>
            </div>
          </div>

          <!-- 1. Contact & Delivery Details -->
          <div class="space-y-6 md:space-y-8 bg-gray-50 p-4 sm:p-6 md:p-10 rounded-3xl md:rounded-[40px] border border-gray-100 shadow-sm w-full box-border">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#033958] flex items-center justify-center text-white shadow-lg shadow-[#033958]/20">
                  <Icon :name="deliveryMethod === 'pickup' ? 'lucide:user-check' : 'lucide:map-pinned'" size="24" />
                </div>
                <div>
                  <h2 class="text-sm font-black uppercase tracking-[0.2em] text-[#033958]">
                    {{ deliveryMethod === 'pickup' ? 'Receiver Information' : 'Shipping Address' }}
                  </h2>
                  
                </div>
              </div>
              <!-- <div v-if="!isAuthenticated" class="text-right">
                <p class="text-sm font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">Guest Checkout Active</p>
              </div> -->
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Recipient Full Name (Compulsory) -->
              <div class="md:col-span-2">
                <CoreAnimatedInput 
                  v-model="address.fullName" 
                  label="Recipient Full Name *" 
                  required
                  :has-error="!address.fullName && submitting"
                />
              </div>

              <!-- Recipient WhatsApp Phone (Compulsory) -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-red-600 ml-1">Mandatory for Order Updates *</label>
                <CoreAnimatedInput 
                  v-model="address.phone" 
                  type="tel" 
                  label="Recipient WhatsApp Number *" 
                  required
                  :has-error="!address.phone && submitting"
                />
              </div>

              <div v-if="deliveryMethod === 'waybill'" class="mt-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                <div class="flex items-start gap-3 text-[#033958]">
                  <Icon name="lucide:info" size="18" class="mt-0.5 shrink-0 text-blue-500" />
                  <div class="space-y-1">
                    <p class="text-xs font-bold">Waybill: Delivery is within 5 days outside lagos</p>
                    <p class="text-xs font-bold">International Waybill: 2 to 3 weeks</p>
                  </div>
                </div>
              </div>
              <!-- Recipient Alternative Phone (Optional) -->
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Optional</label>
                <CoreAnimatedInput 
                  v-model="address.alternativePhone" 
                  type="tel" 
                  label="Recipient Alternative Number" 
                />
              </div>

              <!-- Recipient Email (Optional) -->
              <div class="md:col-span-2">
                <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Optional</label>
                <CoreAnimatedInput 
                  v-model="guestAuth.email" 
                  type="email" 
                  label="Recipient Email Address" 
                />
              </div>

              <!-- Factory Address for Pickup -->
              <div v-if="deliveryMethod === 'pickup'" class="md:col-span-2 p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-start gap-4 mt-2">
                <Icon name="lucide:store" class="text-amber-600 shrink-0 mt-1" size="24" />
                <div>
                  <h3 class="text-xs font-black text-amber-900 uppercase tracking-widest mb-1">Factory Pickup Location</h3>
                  <p class="text-sm font-bold text-amber-800">13, Sonubi street, off Bakare street ketu, Lagos</p>
                  <!-- <p class="text-xs font-medium text-amber-700/80 mt-2">Please ensure you bring your order ID and the WhatsApp phone number used above.</p> -->
                </div>
              </div>


              <!-- Physical Address - Only if not Pickup -->
              <template v-if="deliveryMethod !== 'pickup'">
                <div class="md:col-span-2 mt-4 pt-4 border-t border-gray-200/60">
                  <div v-if="!isEditingAddress && address.address" class="p-6 bg-white rounded-3xl border border-gray-100 flex items-start justify-between gap-4">
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                        <Icon name="lucide:map-pin" size="20" />
                      </div>
                      <div class="space-y-1">
                        <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">Delivery Address</p>
                        <p class="text-sm font-bold text-[#033958] leading-tight">{{ address.address }}</p>
                        <p class="text-xs text-gray-400 font-medium">{{ address.city }}, {{ address.state }}, {{ address.country }}</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      @click="isEditingAddress = true"
                      class="px-4 py-2 bg-gray-50 text-[#033958] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all shrink-0"
                    >
                      Edit
                    </button>
                  </div>
                  <div v-else class="space-y-6">
                    <div class="flex items-center justify-between mb-2">
                       <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Delivery Street Address *</label>
                       <button v-if="address.address" @click="isEditingAddress = false" type="button" class="text-[10px] font-black text-amber-600 uppercase tracking-widest">Cancel</button>
                    </div>
                    <CoreAddressAutocomplete 
                      v-model="address.address" 
                      label="Delivery Street Address *" 
                      placeholder="Search for your exact location..." 
                      @place-changed="(data: any) => {
                        address.address = data.address;
                        address.lat = data.lat;
                        address.lng = data.lng;
                        address.city = data.city;
                        address.state = data.state;
                        isEditingAddress = false;
                        
                        if (deliveryMethod === 'lagos_dispatch') {
                          shippingFee = 0
                        } else if (data.lat && data.lng) {
                          calculateFee(data.lat, data.lng, deliveryMethod)
                        }
                      }"
                    />
                    <div class="flex items-center gap-2 mt-2">
                        <button @click="detectLocation" type="button" class="flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest py-2 px-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all">
                           <Icon name="lucide:locate-fixed" size="14" />
                           {{ detectingLocation ? 'Detecting...' : 'Use Current Location' }}
                        </button>
                    </div>
                  </div>
                </div>
                <div class="space-y-2">
                  <CoreAnimatedInput v-model="address.city" label="City"  />
                </div>
                <div class="space-y-2">
                  <CoreSelectInput 
                    v-model="address.country" 
                    label="Country" 
                    :options="['Nigeria', 'UK', 'US', 'Canada']"
                  />
                </div>

                <div v-if="address.country === 'Canada'" class="md:col-span-2 p-6 bg-emerald-50 rounded-[30px] border border-emerald-100 flex items-center justify-between gap-6">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 ">
                      <Icon name="lucide:home" size="24" />
                    </div>
                    <div>
                      <p class="text-xs font-black text-emerald-900 uppercase tracking-widest">Home Delivery?</p>
                      <p class="text-xs font-medium text-emerald-800/60">Apply $4/kg surcharge for direct delivery to your door.</p>
                    </div>
                  </div>
                  <button 
                    type="button"
                    @click="isHomeDelivery = !isHomeDelivery"
                    :class="['px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all', isHomeDelivery ? 'bg-emerald-600 text-white  shadow-emerald-600/20' : 'bg-white text-emerald-600 border border-emerald-100']"
                  >
                    {{ isHomeDelivery ? 'Enabled' : 'Select' }}
                  </button>
                </div>

                <div v-if="shippingErrorMessage" class="md:col-span-2 p-6 bg-red-50 rounded-[30px] border border-red-100 flex items-center gap-4">
                  <Icon name="lucide:alert-circle" class="text-red-500" size="24" />
                  <p class="text-xs font-bold text-red-900">{{ shippingErrorMessage }}</p>
                </div>
              </template>
            </div>
          </div>

          

          </form>
      </div>

      <!-- Manifest Summary -->
      <aside class="w-full lg:w-[450px] xl:w-[500px] shrink-0 lg:sticky lg:top-32 h-fit mb-20 lg:mb-0">
        <div class="bg-amber-400 rounded-3xl md:rounded-[40px] p-5 sm:p-6 lg:p-8 shadow-amber-200/20 overflow-hidden group w-full box-border relative">
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
                  <div class="w-16 h-16 rounded-2xl bg-white/40 border border-white/20 overflow-hidden shrink-0 shadow-inner flex items-center justify-center p-2">
                    <img v-if="item.image" :src="item.image" class="max-w-full max-h-full object-contain" />
                  </div>
                  <div class="space-y-0.5">
                    <p class="text-base font-black text-[#033958] leading-tight line-clamp-2">{{ item.name }}</p>
                    <p class="text-xs font-black text-[#033958]/40 tracking-widest uppercase">Qty: {{ item.quantity }} × {{ formatPrice(item.price) }}</p>
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
              
              <div v-if="deliveryMethod !== 'pickup'" class="flex justify-between items-start">
                <span class="text-xs font-bold uppercase tracking-widest text-[#033958]/70">{{ $t('common.shipping') }} <span class="text-xs opacity-60">({{ $t(`common.${deliveryMethod}`) }})</span></span>
                <span class="text-[10px] font-bold text-[#033958]/60 bg-white/40 px-2 py-1 rounded-lg text-right leading-tight max-w-[160px]">Will be communicated <br/>via WhatsApp</span>
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
                  <p class="text-xs font-black uppercase tracking-widest text-[#033958]/60">{{ $t('common.redeem_points') }}</p>
                  <p class="text-xs font-bold text-[#033958] bg-white/40 px-2 py-0.5 rounded-lg">{{ user.points }} pts available</p>
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
                    :class="['px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all  active:scale-95', redeemPoints ? 'bg-[#033958] text-white' : 'bg-white text-[#033958] border border-[#033958]/10']"
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


          <div class="pt-4 space-y-3">
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-[#033958]/60">Payment Method</p>
            <!-- Bank Transfer - Active -->
            <div class="p-4 bg-white rounded-2xl border-2 border-[#033958]/20">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Icon name="lucide:banknote" size="20" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-black text-[#033958]">Bank Transfer</p>
                </div>
                <div class="bg-[#033958] text-white px-3 py-1.5 rounded-xl">
                  <p class="text-[11px] font-black uppercase tracking-widest">24hrs Delivery</p>
                </div>
              </div>
            </div>
            <!-- Paystack - Commented out for now -->
            <!-- <div class="p-4 bg-white/50 rounded-2xl border-2 border-gray-100 opacity-50">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Icon name="lucide:credit-card" size="20" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-black text-[#033958]">Pay with Paystack</p>
                </div>
                <div class="bg-blue-600 text-white px-3 py-1.5 rounded-xl">
                  <p class="text-[11px] font-black uppercase tracking-widest">48hrs Delivery</p>
                </div>
              </div>
            </div> -->
          </div>



<!-- WhatsApp Note + Actions -->
            <div class="space-y-3 pt-4">
              <div class="flex items-center gap-2 px-2 py-3 bg-white/30 rounded-2xl">
                <Icon name="lucide:message-circle" size="16" class="text-[#033958]/50 shrink-0" />
                <p class="text-[10px] font-bold text-[#033958]/60 leading-snug">By clicking below, your order will be sent to our team via WhatsApp for quick confirmation and processing.</p>
              </div>

              <button 
                @click="handleCheckout" 
                class="w-full py-5 bg-gray-950 hover:bg-[#033958] text-white rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.95]  shadow-gray-950/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:bg-gray-400"
                :disabled="submitting || items.length === 0 || !address.phone || !address.fullName"
              >
                <Icon name="lucide:lock" class="w-4 h-4" />
                {{ $t('common.complete_purchase') || 'Complete Purchase' }}
              </button>

              <div class="flex items-center justify-center gap-4 py-2">
                <div class="h-px flex-1 bg-gray-100"></div>
                <span class="text-xs font-black text-[#033958]/60 uppercase tracking-widest">Secured by WiseKings</span>
                <div class="h-px flex-1 bg-gray-100"></div>
              </div>
            </div>




            <div v-if="totalWeight > 0" class="flex items-center justify-between pt-4 border-t border-[#033958]/10 text-xs font-black uppercase tracking-widest text-[#033958]/40">
              <span>Total Weight</span>
              <span>{{ totalWeight }} KG</span>
            </div>
            
            
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
import { useCustomToast } from '@/composables/core/useCustomToast'

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
const { showToast } = useCustomToast()

const deliveryMethod = ref('lagos_dispatch')
const paymentMethod = ref('direct_transfer')
const showPaymentDropdown = ref(false)
const pointsToRedeem = ref(0)
const redeemPoints = ref(false)
const proofUrl = ref('')
const uploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const pickupLocations = ref<any[]>([])
const bankDetails = ref({ accountName: '', accountNumber: '', bankName: '' })
const guestAuth = ref({ email: '', password: '' })
const showPassword = ref(false)
const address = ref({ fullName: user.value?.fullName || '', phone: user.value?.phone || '', alternativePhone: '', address: '', city: '', state: '', country: 'Nigeria', zipCode: '', lat: 0, lng: 0 })

const isHomeDelivery = ref(false)
const shippingErrorMessage = ref('')
const showCancelButton = ref(false)
const isEditingAddress = ref(false)
const detectingLocation = ref(false)
let submittingTimeout: any = null

const cancelSubmitting = () => {
  submitting.value = false
  showCancelButton.value = false
  if (submittingTimeout) clearTimeout(submittingTimeout)
}

watch(submitting, (val) => {
  if (val) {
    showCancelButton.value = false
    submittingTimeout = setTimeout(() => {
      showCancelButton.value = true
    }, 10000) // Show cancel button after 10 seconds
  } else {
    if (submittingTimeout) clearTimeout(submittingTimeout)
    showCancelButton.value = false
  }
})

const loaderState = ref({
  title: 'Processing Order',
  subtitle: 'Please wait while we secure your transaction...',
  step: 1,
  progress: 10
})

// Calculate total weight
const totalWeight = computed(() => {
  return items.value.reduce((acc, item: any) => acc + (item.weight || 1) * item.quantity, 0)
})

// Debounce timer and state for shipping calculation
let debounceTimer: any = null
const lastQueryState = ref({ lat: 0, lng: 0, method: '', isHome: false, weight: 0 })

const refreshShippingFee = async () => {
  // Avoid redundant calls if the core parameters haven't changed
  if (
    lastQueryState.value.lat === address.value.lat && 
    lastQueryState.value.lng === address.value.lng &&
    lastQueryState.value.method === deliveryMethod.value &&
    lastQueryState.value.isHome === isHomeDelivery.value &&
    lastQueryState.value.weight === totalWeight.value
  ) {
    return 
  }

  shippingErrorMessage.value = ''
  if (debounceTimer) clearTimeout(debounceTimer)
  
  debounceTimer = setTimeout(async () => {
    // Update state to current values
    lastQueryState.value = { 
      lat: address.value.lat, 
      lng: address.value.lng, 
      method: deliveryMethod.value,
      isHome: isHomeDelivery.value,
      weight: totalWeight.value
    }

    // Force zero for lagos_dispatch as per user request (Manual communication via WhatsApp)
    if (deliveryMethod.value === 'lagos_dispatch') {
        shippingFee.value = 0
        distanceInfo.value = null
        return { fee: 0 }
    }

    const res = await calculateFee(
      address.value.lat, 
      address.value.lng, 
      deliveryMethod.value,
      address.value.country,
      totalWeight.value,
      isHomeDelivery.value
    )

    if (res?.error) {
      shippingErrorMessage.value = res.error
      shippingFee.value = 0
    }
  }, 2000) // Increased to 2000ms for responsiveness vs credit conservation
}

// Watch only relevant fields for shipping calculation
watch(
  [
    () => address.value.lat, 
    () => address.value.lng, 
    () => address.value.country, 
    deliveryMethod, 
    isHomeDelivery,
    totalWeight
  ], 
  () => {
    refreshShippingFee()
  }
)

const whatsappNumber = ref('')

onMounted(async () => {
  // Fetch global settings for WhatsApp and Bank Details
  try {
    const res = await GATEWAY_ENDPOINT.get('/settings') as any
    const data = res.data || res.data?.data || res
    whatsappNumber.value = data.whatsappNumber || '2349060012295'
    bankDetails.value = data.customerBankDetails || { accountName: '', accountNumber: '', bankName: '' }
    pickupLocations.value = data.pickupLocations || []
  } catch (e) {
    console.error('Failed to load global settings', e)
    whatsappNumber.value = '2349060012295'
  }

  // Auto-detect location for shipping calculation if not set
  if (!address.value.address && deliveryMethod.value !== 'pickup') {
    detectLocation()
  }
})

async function detectLocation() {
  if (!navigator.geolocation) {
    showToast({ title: 'Geolocation Not Supported', message: 'Your browser does not support geolocation.', toastType: 'error' })
    return
  }

  detectingLocation.value = true
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords
      address.value.lat = latitude
      address.value.lng = longitude

      // Try to reverse geocode using Google Maps Geocoder
      try {
        if (typeof google !== 'undefined' && google.maps && google.maps.Geocoder) {
          const geocoder = new google.maps.Geocoder()
          const latlng = { lat: latitude, lng: longitude }

          geocoder.geocode({ location: latlng }, (results: any, status: any) => {
            if (status === 'OK') {
              if (results[0]) {
                const place = results[0]
                address.value.address = place.formatted_address
                
                // Parse address components
                place.address_components.forEach((component: any) => {
                  const types = component.types
                  if (types.includes('locality')) {
                    address.value.city = component.long_name
                  } else if (types.includes('administrative_area_level_1')) {
                    address.value.state = component.long_name
                  } else if (types.includes('country')) {
                    address.value.country = component.long_name
                  }
                })

                showToast({ title: 'Location Detected', message: 'Your delivery address has been automatically populated.', toastType: 'success' })
              } else {
                showToast({ title: 'Location Found', message: 'Coordinates acquired, but no address found.', toastType: 'info' })
              }
            } else {
              console.error('Geocoder failed due to: ' + status)
              address.value.address = 'Detected Location (Coordinates Acquired)'
            }
          })
        } else {
          // Fallback if google maps is not loaded yet
          address.value.address = 'Detected Location (Coordinates Acquired)'
          showToast({ title: 'Location Detected', message: 'Coordinates acquired. Please confirm your address.', toastType: 'info' })
        }
        
        if (deliveryMethod.value === 'lagos_dispatch') {
            await calculateFee(latitude, longitude, 'lagos_dispatch')
        }
      } catch (err) {
        console.error('Reverse Geocoding failed', err)
      } finally {
        detectingLocation.value = false
      }
    },
    (error) => {
      detectingLocation.value = false
      console.warn('Geolocation error:', error)
      showToast({ title: 'Location Access Denied', message: 'Please search for your address manually.', toastType: 'info' })
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  )
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
    showToast({ title: 'Upload Success', message: 'Proof of payment asset secured.', toastType: 'success' })
  } catch (e) {
    console.error('Upload failed', e)
    showToast({ title: 'Upload Failed', message: 'Could not secure asset.', toastType: 'error' })
  } finally {
    uploading.value = false
  }
}

async function handleWhatsAppOrder(orderNumber?: string, manifestSnapshot?: any) {
  // Purely handles the WhatsApp redirection with a data snapshot to avoid reactive state loss
  let targetOrderNumber = orderNumber
  
  console.log('Initiating WhatsApp redirect for order:', targetOrderNumber, manifestSnapshot)

  try {
    const s = manifestSnapshot || {
        items: items.value,
        totalPrice: totalPrice.value,
        shippingFee: shippingFee.value,
        pointsToRedeem: pointsToRedeem.value,
        redeemPoints: redeemPoints.value,
        deliveryMethod: deliveryMethod.value,
        address: JSON.parse(JSON.stringify(address.value))
    }
    const targetAddress = s.address || address.value
    const itemsList = s.items.map((i: any) => `⭐ ${i.name} x ${i.quantity} => ${formatPrice(i.price * i.quantity)}`).join('\n')
    const total = s.totalPrice + s.shippingFee - (s.redeemPoints ? s.pointsToRedeem : 0)
    const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    
    // Explicitly fallback for translation keys
    const methodMap: Record<string, string> = {
      lagos_dispatch: 'Dispatch (Within Lagos)',
      waybill: 'Waybill (Outside Lagos)',
      pickup: 'Store Pickup'
    }
    const shippingMethodName = methodMap[s.deliveryMethod as keyof typeof methodMap] || s.deliveryMethod
    const pointsDiscount = s.redeemPoints ? s.pointsToRedeem : 0
    
    const message = encodeURIComponent(
      `✨ *New Order Received @ WISEKINGS VENTURES LIMITED* ✨\n\n` +
      `👑 *MANIFEST DETAILS*\n\n` +
      `#️⃣ Order Number  : *${targetOrderNumber || 'Pending'}*\n` +
      `🔆 Order Status  : 🟡 Pending\n` +
      `🗓 Date          : 📅 ${date}\n` +
      `💰 Total Amount  : *${formatPrice(total)}*\n\n` +
      `👤 *RECIPIENT DETAILS*\n\n` +
      `👤 Name: *${targetAddress.fullName || 'N/A'}*\n` +
      `📱 WhatsApp: *${targetAddress.phone || 'N/A'}*\n` +
      (targetAddress.alternativePhone ? `📞 Alt. Number: ${targetAddress.alternativePhone}\n` : '') +
      ((guestAuth.value.email || user.value?.email) ? `📧 Email: ${guestAuth.value.email || user.value?.email}\n` : '') +
      `\n` +
      `📦 *ORDER ITEMS*\n\n` +
      `${itemsList}\n\n` +
      `🏷 Subtotal: ${formatPrice(s.totalPrice)}\n` +
      (s.deliveryMethod === 'pickup'
        ? ``
        : `🚛 Shipping (${shippingMethodName}): _To be communicated_\n`
      ) +
      (pointsDiscount > 0 ? `🎁 Points Discount: -${formatPrice(pointsDiscount)}\n` : '') +
      `💵 *Grand Total: ${formatPrice(total)}*\n\n` +
      `🚚 *FULFILLMENT: ${shippingMethodName.toUpperCase()}*\n\n` +
      (s.deliveryMethod === 'pickup'
        ? `🏢 *Pickup Location*\n` +
          `📍 ${pickupLocations.value.find(l => l.isActive)?.name || 'WiseKings Factory'}\n` +
          `🏠 ${pickupLocations.value.find(l => l.isActive)?.address || '13, Sonubi street, off Bakare street ketu, Lagos'}\n` +
          `📞 ${pickupLocations.value.find(l => l.isActive)?.phone || '09060012295'}\n\n`
        : `🗺️ *Delivery Address*\n` +
          `🏠 ${targetAddress.address || 'N/A'}\n` +
          `🌇 ${targetAddress.city || 'N/A'}, ${targetAddress.state || 'N/A'}\n` +
          `🇳🇬 ${targetAddress.country || 'Nigeria'}\n\n`
      ) +
      (s.deliveryMethod === 'pickup'
        ? `Thank you for choosing WiseKings. Your order has been received and is being processed for pick up.\n\nKindly proceed to make payment to the account details below:\n\n`
        : `Thank you for choosing WiseKings. Your order has been received and is being processed. We shall get back to you shortly with the applicable delivery charge.\n\nKindly proceed to make payment to the account details below once the delivery fee has been communicated:\n\n`
      ) +
      `🏦 *PAYMENT DETAILS*\n\n` +
      `💳 Method: *Bank Transfer*\n` +
      `⏰ Estimated Delivery: *Within 24 hours*\n\n` +
      `🏦 *Bank Account Information*\n` +
      `🔹 Account Name: *${bankDetails.value?.accountName || 'Wisekings Ventures'}*\n` +
      `🔹 Account Number: *${bankDetails.value?.accountNumber || '6140536188'}*\n` +
      `🔹 Bank: *${bankDetails.value?.bankName || 'Opay'}*\n\n` +
      `*— WiseKings Team*`
    )


    const whatsappUrl = `https://wa.me/${whatsappNumber.value || '2349060012295'}?text=${message}`
    console.log('AGGRESSIVE REDIRECT:', whatsappUrl)
    
    // Clear cart before redirecting
    clearCart()
    
    // Aggressive redirection tactics - use multiple methods to ensure it triggers
    window.location.replace(whatsappUrl)
    window.location.href = whatsappUrl
    window.location.assign(whatsappUrl)
    
  } catch (err) {
    console.error('WhatsApp message construction failed', err)
    showToast({ title: 'Redirection Error', message: 'Could not generate WhatsApp link. Please contact support.', toastType: 'error' })
    submitting.value = false
  }
}

async function handleCheckout() {
  if (items.value.length === 0) return

  // 1. Mandatory Fields Validation
  if (!address.value.fullName || !address.value.phone) {
    showToast({ title: 'Mandatory Fields', message: 'Full Name and WhatsApp Phone Number are required.', toastType: 'error' })
    return
  }

  // 1b. Auth Validation
  if (!isAuthenticated.value) {
    if (!guestAuth.value.email) {
      showToast({ title: 'Email Required', message: 'Please provide your email to proceed.', toastType: 'error' })
      return
    }
  }

  submitting.value = true
  
  try {
    // STEP 1: AUTHENTICATION
    if (!isAuthenticated.value) {
      loaderState.value = {
        title: 'Authenticating Identity...',
        subtitle: 'Securing your royal manifest access',
        step: 1,
        progress: 30
      }

      const authRes = await GATEWAY_ENDPOINT.post('/auth/checkout-auth', {
        email: guestAuth.value.email,
        fullName: address.value.fullName,
        phone: address.value.phone
      }) as any
      
      const { setAuth } = useAuthState()
      const authData = authRes.data?.data || authRes.data || authRes
      if (authData.tokens) {
        setAuth(authData.user, authData.tokens)
      }
    }

    // STEP 2: ORDER CREATION
    loaderState.value = {
      title: 'Securing Your Manifest...',
      subtitle: 'Gathering your items for immediate processing',
      step: 2,
      progress: 60
    }

    const finalAmount = totalPrice.value + shippingFee.value - (redeemPoints.value ? pointsToRedeem.value : 0)
    
    const orderData = {
      items: items.value.map((i: any) => ({ 
        productId: i.productId, 
        name: i.name, 
        price: i.price, 
        quantity: i.quantity, 
        image: i.image,
        weight: i.weight || 1
      })),
      totalAmount: totalPrice.value,
      shippingFee: shippingFee.value,
      redeemPoints: redeemPoints.value,
      pointsToRedeem: pointsToRedeem.value,
      deliveryMethod: deliveryMethod.value,
      deliveryLocation: (deliveryMethod.value === 'delivery' || deliveryMethod.value === 'lagos_dispatch') ? { lat: address.value.lat, lng: address.value.lng } : undefined,
      shippingAddress: {
        ...address.value,
        phone: address.value.phone, // WhatsApp (Mandatory)
        email: guestAuth.value.email || user.value?.email || undefined
      },
      referralCode: referralCode.value || undefined,
      isHomeDelivery: isHomeDelivery.value,
      paymentProvider: paymentMethod.value === 'direct_transfer' ? 'direct_transfer' : 'paystack'
    }

    const orderRes = await createOrder(orderData) as any
    if (!orderRes) throw new Error('Order creation failed')
    
    const data = orderRes?.data || orderRes
    const orderId = data._id
    const orderNumber = data.orderNumber

    // STEP 3: REDIRECT
    loaderState.value = {
      title: paymentMethod.value === 'direct_transfer' ? 'Initiating Transfer Request...' : 'Redirecting to Payment Gateway...',
      subtitle: paymentMethod.value === 'direct_transfer' ? 'Preparing your WhatsApp order details' : 'Securing your card transaction environment',
      step: 3,
      progress: 90
    }

    // Capture SNAPSHOT before any redirects or clearing
    const manifestSnapshot = {
        items: JSON.parse(JSON.stringify(items.value)),
        totalPrice: totalPrice.value,
        shippingFee: shippingFee.value,
        pointsToRedeem: pointsToRedeem.value,
        redeemPoints: redeemPoints.value,
        deliveryMethod: deliveryMethod.value,
        address: JSON.parse(JSON.stringify(address.value))
    }

    if (paymentMethod.value === 'direct_transfer') {
      await handleWhatsAppOrder(orderNumber, manifestSnapshot)
      return
    }

    // Card Payment Flow
    const payment = await initializePayment({ 
      orderId, 
      email: user.value?.email || guestAuth.value.email, 
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
    navigateTo(`/checkout/success?orderId=${orderId}&method=card`)

  } catch (err: any) {
    console.error('Checkout failed', err)
    showToast({ 
      title: 'Order Processing Failed', 
      message: err.response?.data?.message || 'Something went wrong while processing your order. Please try again.', 
      toastType: 'error' 
    })
  } finally {
    submitting.value = false
  }
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
