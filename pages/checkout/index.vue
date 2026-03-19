<template>
  <div class="max-w-[1440px] bg-white mx-auto px-4 lg:px-8 py-10 md:py-20 min-h-screen overflow-x-hidden">
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

        <form v-else @submit.prevent="handleCheckout" class="space-y-12">

          <!-- Fulfillment Toggle -->
          <div class="space-y-6">
            <h2 class="text-sm font-extrabold uppercase tracking-[0.2em] text-[#033958] flex items-center gap-2">
              <Icon name="lucide:package-check" size="18" />
              {{ $t('common.fulfillment_method') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                type="button" 
                @click="deliveryMethod = 'lagos_dispatch'"
                class="relative z-10 p-4 rounded-[28px] border-2 transition-all flex flex-col items-center gap-3 group cursor-pointer"
                :class="deliveryMethod === 'lagos_dispatch' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'lagos_dispatch' ? 'bg-amber-500 text-white  shadow-amber-500/10' : 'bg-white text-[#033958]/80'">
                  <Icon name="lucide:truck" class="w-5 h-5" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-black uppercase tracking-widest" :class="deliveryMethod === 'lagos_dispatch' ? 'text-amber-600' : 'text-[#033958]/80'">{{ $t('common.dispatch') }}</p>
                  <p class="text-sm font-medium text-[#033958]/80 mt-0.5 line-clamp-1">{{ $t('common.within_lagos') }}</p>
                </div>
              </button>

              <button 
                type="button" 
                @click="deliveryMethod = 'waybill'"
                class="relative z-10 p-4 rounded-[28px] border-2 transition-all flex flex-col items-center gap-3 group cursor-pointer"
                :class="deliveryMethod === 'waybill' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'waybill' ? 'bg-[#033958] text-white  /10' : 'bg-white text-[#033958]/80'">
                  <Icon name="lucide:package" class="w-5 h-5" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-black uppercase tracking-widest" :class="deliveryMethod === 'waybill' ? 'text-amber-600' : 'text-[#033958]/80'">{{ $t('common.waybill') }}</p>
                  <p class="text-sm font-medium text-[#033958]/80 mt-0.5 line-clamp-1">{{ $t('common.outside_lagos') }}</p>
                </div>
              </button>

              <button 
                type="button" 
                @click="deliveryMethod = 'pickup'"
                class="relative z-10 p-4 rounded-[28px] border-2 transition-all flex flex-col items-center gap-3 group cursor-pointer"
                :class="deliveryMethod === 'pickup' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="deliveryMethod === 'pickup' ? 'bg-[#033958] text-white  /10' : 'bg-white text-[#033958]/80'">
                  <Icon name="lucide:store" class="w-5 h-5" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-black uppercase tracking-widest" :class="deliveryMethod === 'pickup' ? 'text-[#033958]' : 'text-[#033958]/80'">{{ $t('common.pickup') }}</p>
                  <p class="text-sm font-medium text-[#033958]/80 mt-0.5 line-clamp-1">{{ $t('common.at_store') }}</p>
                </div>
              </button>
            </div>
          </div>

          <!-- Contact & Delivery -->
          <transition name="slide-fade">
            <div class="space-y-8 bg-gray-50 p-4 md:p-6 rounded-[30px] md:rounded-[40px] border border-gray-100">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-2xl bg-[#033958] flex items-center justify-center text-white  /10">
                    <Icon :name="deliveryMethod === 'pickup' ? 'lucide:user' : 'lucide:map-pin'" size="20" />
                  </div>
                  <h2 class="text-sm font-extrabold uppercase tracking-widest text-[#033958]">
                    {{ deliveryMethod === 'pickup' ? 'Contact Information' : 'Contact & Delivery Details' }}
                  </h2>
                </div>
                <div v-if="!isAuthenticated" class="text-right">
                  <p class="text-sm font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">Guest Checkout Active</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Email Identity -->
                <div v-if="!isAuthenticated" class="md:col-span-2">
                  <CoreAnimatedInput 
                    v-model="guestAuth.email" 
                    type="email" 
                    label="Account Email" 
                    autocomplete="email" 
                    placeholder="Enter your email"
                  />
                  <p class="text-sm font-medium text-[#033958]/80 ml-1 uppercase tracking-tight">This email is used to setup an account with WiseKings</p>
                </div>

                <div class="space-y-2">
                  <CoreAnimatedInput 
                    v-model="address.fullName" 
                    label="Full Name" 
                    placeholder="Enter recipient name"
                  />
                </div>
                <div class="space-y-2">
                  <CoreAnimatedInput 
                    v-model="address.phone" 
                    type="tel" 
                    label="Phone Number" 
                    placeholder="+234 ..."
                  />
                </div>

                <!-- Physical Address - Conditional for Pickup -->
                <template v-if="deliveryMethod !== 'pickup'">
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
                    <CoreAnimatedInput 
                      v-model="address.city" 
                      label="City" 
                      placeholder="City"
                    />
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
          </transition>

          <!-- Payment Method -->
          <div class="space-y-6">
            <h2 class="text-sm font-extrabold uppercase tracking-[0.2em] text-[#033958] flex items-center gap-2">
              <Icon name="lucide:wallet" size="18" />
              Payment Method
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                type="button" 
                @click="paymentMethod = 'direct_transfer'"
                class="p-6 rounded-[32px] border-2 transition-all flex items-center gap-4 group"
                :class="paymentMethod === 'direct_transfer' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="paymentMethod === 'direct_transfer' ? 'bg-amber-500 text-white' : 'bg-white text-[#033958]/80'">
                  <Icon name="lucide:banknote" class="w-6 h-6" />
                </div>
                <div class="text-left">
                  <p class="text-sm font-black uppercase tracking-widest" :class="paymentMethod === 'direct_transfer' ? 'text-amber-600' : 'text-[#033958]/80'">Bank Transfer (Manual)</p>
                  <p class="text-sm font-medium text-[#033958]/80 mt-0.5">Priority Delivery</p>
                </div>
              </button>

              <button 
                type="button" 
                @click="paymentMethod = 'card'"
                class="p-6 rounded-[32px] border-2 transition-all flex items-center gap-4 group"
                :class="paymentMethod === 'card' ? 'border-[#033958] bg-[#033958]/5' : 'border-gray-50 bg-gray-50 hover:border-gray-100'"
              >
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="paymentMethod === 'card' ? 'bg-[#033958] text-white' : 'bg-white text-[#033958]/80'">
                  <Icon name="lucide:credit-card" class="w-6 h-6" />
                </div>
                <div class="text-left">
                  <p class="text-sm font-black uppercase tracking-widest" :class="paymentMethod === 'card' ? 'text-[#033958]' : 'text-[#033958]/80'">Pay with Card (Option 2)</p>
                  <p class="text-sm font-medium text-[#033958]/80 mt-0.5">Stripe / Paystack</p>
                </div>
              </button>
            </div>

            <!-- Payment Route Details (Bold and Outside) -->
            <div v-if="paymentMethod" class="p-6 bg-white rounded-[32px] border-2 border-[#033958]/10  animate-pulse-subtle">
              <div v-if="paymentMethod === 'direct_transfer'" class="flex items-start gap-4 text-amber-600">
                <Icon name="lucide:zap" class="mt-1 shrink-0" size="24" />
                <p class="text-sm font-black uppercase tracking-tight leading-tight">
                  <span class="text-amber-500">Immediate Processing:</span> Payment with Bank transfer will be processed immediately and delivered within 24hrs.
                </p>
              </div>
              <div v-if="paymentMethod === 'card'" class="flex items-start gap-4 text-[#033958]">
                <Icon name="lucide:clock" class="mt-1 shrink-0" size="24" />
                <p class="text-sm font-black uppercase tracking-tight leading-tight">
                  <span class="text-blue-500">Standard Processing:</span> Payment with card as an option will be processed and delivered within 72hrs.
                </p>
              </div>
            </div>

            <!-- Direct Transfer Note (Commented out as requested) -->
            <!-- <transition name="fade">
              <div v-if="paymentMethod === 'direct_transfer'" class="p-8 bg-amber-50/50 rounded-[40px] border border-amber-100 space-y-8">
                <div class="space-y-4">
                  <div class="flex items-center justify-between px-2">
                    <h3 class="text-xs font-black uppercase tracking-[0.2em] text-[#033958]/80">Proof of Payment</h3>
                    <span class="text-sm font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-2 py-0.5 rounded-md">Optional</span>
                  </div>
                  
                  <div 
                    class="relative group cursor-pointer"
                    @click="fileInput?.click()"
                  >
                    <div class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    
                    <div class="relative h-48 bg-white rounded-[2rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center p-6 transition-all group-hover:border-amber-400">
                      <template v-if="!proofUrl">
                        <div class="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                          <Icon :name="uploading ? 'lucide:loader-2' : 'lucide:upload-cloud'" :class="uploading ? 'animate-spin' : ''" size="32" />
                        </div>
                        <p class="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{{ uploading ? 'Processing Assets...' : 'Drop Receipt Here' }}</p>
                        <p class="text-sm text-[#033958]/80 font-medium tracking-tight">Tap to browse your files (JPEG, PNG)</p>
                      </template>
                      <template v-else>
                        <img :src="proofUrl" class="absolute inset-0 w-full h-full object-contain p-2 rounded-[2rem] opacity-20" />
                        <div class="relative z-10 flex flex-col items-center gap-3">
                          <div class="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center  shadow-emerald-200 animate-bounce-subtle">
                            <Icon name="lucide:check-circle" size="28" />
                          </div>
                          <p class="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">Asset Secured</p>
                          <button @click.stop="proofUrl = ''" class="text-sm font-bold text-[#033958]/80 hover:text-red-500 uppercase tracking-widest mt-2 border-b border-gray-100">Remove and Retry</button>
                        </div>
                      </template>
                      <input ref="fileInput" type="file" class="hidden" accept="image/*" @change="handleFileUpload" />
                    </div>
                  </div>
                </div>
              </div>
            </transition> -->
          </div>
        </form>
      </div>

      <!-- Manifest Summary -->
      <aside class="w-full lg:w-[500px] shrink-0 lg:sticky lg:top-32 h-fit">
        <div class="bg-amber-400 rounded-[30px] md:rounded-[40px] p-6 lg:p-8  shadow-amber-200/20 overflow-hidden group">
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
              
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-widest text-[#033958]/70">{{ $t('common.shipping') }} <span class="text-xs opacity-60">({{ $t(`common.${deliveryMethod}`) }})</span></span>
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

            <!-- Actions -->
            <div class="space-y-3 pt-4">
              <button 
                @click="handleCheckout" 
                class="w-full py-5 bg-gray-950 hover:bg-[#033958] text-white rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.95]  shadow-gray-950/20 flex items-center justify-center gap-3 disabled:opacity-50"
                :disabled="submitting || items.length === 0"
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
            
            <p v-if="deliveryMethod === 'lagos_dispatch' && !distanceInfo && address.country === 'Nigeria'" class="text-xs font-black text-[#033958]/40 text-center uppercase tracking-widest mt-4">
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
const pointsToRedeem = ref(0)
const redeemPoints = ref(false)
const proofUrl = ref('')
const uploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const pickupLocations = ref<any[]>([])
const bankDetails = ref({ accountName: '', accountNumber: '', bankName: '' })
const guestAuth = ref({ email: '', password: '' })
const showPassword = ref(false)
const address = ref({ fullName: user.value?.fullName || '', phone: user.value?.phone || '', address: '', city: '', state: '', country: 'Nigeria', zipCode: '', lat: 0, lng: 0 })

const isHomeDelivery = ref(false)
const shippingErrorMessage = ref('')
const showCancelButton = ref(false)
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
})



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
        deliveryMethod: deliveryMethod.value
    }
    const itemsList = s.items.map((i: any) => `⭐ ${i.name} x ${i.quantity} => ${formatPrice(i.price * i.quantity)} (${formatPrice(i.price)}/ea)`).join('\n')
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
      `👑 *Manifest Details*\n` +
      `#️⃣ Order Number  : *${targetOrderNumber || 'Pending'}*\n` +
      `🔆 Order Status  : 🟡 Pending\n` +
      `🗓 Date          : 📅 ${date}\n` +
      `📧 Email         : ✉️ ${user.value?.email || 'Guest'}\n` +
      `💰 Total Amount  : *${formatPrice(total)}*\n\n` +
      `🔍 *Order details:* \n\n` +
      `${itemsList}\n\n` +
      `--------------------------------\n\n` +
      `🏷 Subtotal: ${formatPrice(s.totalPrice)}\n` +
      `🚛 Shipping: 🚚 ${shippingMethodName} [${formatPrice(s.shippingFee)}]\n` +
      (pointsDiscount > 0 ? `🎁 Points Discount: -${formatPrice(pointsDiscount)}\n` : '') +
      `💵 *Grand Total: ${formatPrice(total)}*\n\n` +
      `--------------------------------\n\n` +
      (deliveryMethod.value === 'pickup' 
        ? `🏢 *Pickup Location:*\n\n` +
          `📍 Name: *${pickupLocations.value.find(l => l.isActive)?.name || 'Main Factory'}*\n` +
          `🏠 Address: ${pickupLocations.value.find(l => l.isActive)?.address || '13, Sonubi street, off Bakare street ketu, Lagos'}\n` +
          `📞 Contact: ${pickupLocations.value.find(l => l.isActive)?.phone || 'N/A'}\n\n`
        : `🗺️ *Billing Address:*\n\n` +
          `👤 Name: *${address.value.fullName || 'N/A'}*\n` +
          `📞 Phone: *${address.value.phone || 'N/A'}*\n` +
          `🏠 Address: ${address.value.address || 'N/A'}\n` +
          `🌇 City: ${address.value.city || 'N/A'}\n` +
          `📍 State: ${address.value.state || 'N/A'}\n` +
          `🇳🇬 Country: ${address.value.country || 'Nigeria'}\n\n` +
          `--------------------------------\n\n` +
          `🚚 *Shipping Address:*\n\n` +
          `👤 Name: *${address.value.fullName || 'N/A'}*\n` +
          `📞 Phone: *${address.value.phone || 'N/A'}*\n` +
          `🏠 Address: ${address.value.address || 'N/A'}\n` +
          `🌇 City: ${address.value.city || 'N/A'}\n` +
          `📍 State: ${address.value.state || 'N/A'}\n\n`
      ) +
      `--------------------------------\n\n` +
      `💳 *Payment Method:* 🏦 Direct Bank Transfer\n\n` +
      `Thank you for choosing *WiseKings*, your order has been received and is being processed. We shall get back to you shortly.\n\n` +
      `To complete your order, kindly proceed to make your payment using the bank details below:\n\n` +
      `🏦 *Payment Instructions (Direct Transfer)*\n` +
      `Account Name: *${bankDetails.value?.accountName || 'WISEKINGS VENTURES LIMITED'}*\n` +
      `Account Number: *${bankDetails.value?.accountNumber || 'N/A'}*\n` +
      `Bank Name: *${bankDetails.value?.bankName || 'N/A'}*\n\n` +
      `--------------------------------\n\n` +
      `*Wisekings Team*`
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

  // 1. Auth Validation
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
      shippingAddress: (deliveryMethod.value === 'delivery' || deliveryMethod.value === 'lagos_dispatch') ? address.value : undefined,
      referralCode: referralCode.value || undefined,
      isHomeDelivery: isHomeDelivery.value,
      paymentProvider: paymentMethod.value === 'direct_transfer' ? 'direct_transfer' : 'card'
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
        deliveryMethod: deliveryMethod.value
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
