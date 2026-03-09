<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
    <div v-if="items.length === 0" class="text-center py-16 text-gray-400">
      <p>Your cart is empty. <NuxtLink to="/products" class="text-brand-600 underline">Shop now</NuxtLink></p>
    </div>
    <form v-else @submit.prevent="handleCheckout" class="space-y-8">
      <!-- Login prompt -->
      <div v-if="!isAuthenticated" class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <NuxtLink to="/login?redirect=/checkout" class="underline font-medium">Sign in</NuxtLink> or <NuxtLink to="/register?redirect=/checkout" class="underline font-medium">create an account</NuxtLink> to continue.
      </div>

      <!-- Shipping -->
      <div v-if="isAuthenticated" class="space-y-4">
        <h2 class="text-lg font-semibold text-gray-900">Shipping Address</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2"><label class="label">Full Name</label><input v-model="address.fullName" class="input" required /></div>
          <div class="col-span-2"><label class="label">Phone</label><input v-model="address.phone" class="input" required /></div>
          <div class="col-span-2"><label class="label">Address</label><input v-model="address.address" class="input" required /></div>
          <div><label class="label">City</label><input v-model="address.city" class="input" required /></div>
          <div><label class="label">State</label><input v-model="address.state" class="input" required /></div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="border border-gray-200 rounded-2xl p-4 space-y-3">
        <h2 class="text-lg font-semibold text-gray-900">Order Summary</h2>
        <div v-for="item in items" :key="item.productId" class="flex justify-between text-sm">
          <span class="text-gray-600">{{ item.name }} × {{ item.quantity }}</span>
          <span class="font-medium">₦{{ (item.price * item.quantity).toLocaleString() }}</span>
        </div>
        <div class="border-t pt-3 flex justify-between text-lg font-bold"><span>Total</span><span>₦{{ totalPrice.toLocaleString() }}</span></div>
      </div>

      <!-- Payment -->
      <div v-if="isAuthenticated">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Payment Method</h2>
        <div class="flex gap-3">
          <button type="button" @click="paymentMethod = 'paystack'" :class="['flex-1 p-4 border rounded-xl text-center transition-all', paymentMethod === 'paystack' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300']">
            <p class="font-semibold text-gray-900">Paystack</p><p class="text-xs text-gray-400">Cards, Bank Transfer</p>
          </button>
          <button type="button" @click="paymentMethod = 'stripe'" :class="['flex-1 p-4 border rounded-xl text-center transition-all', paymentMethod === 'stripe' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300']">
            <p class="font-semibold text-gray-900">Stripe</p><p class="text-xs text-gray-400">International Cards</p>
          </button>
        </div>
      </div>

      <button v-if="isAuthenticated" type="submit" class="btn-primary w-full btn-lg" :disabled="submitting">
        <Icon v-if="submitting" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
        {{ submitting ? 'Processing...' : `Pay ₦${totalPrice.toLocaleString()}` }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useCreateOrder } from '@/composables/modules/orders/useCreateOrder'
import { useInitializePayment } from '@/composables/modules/payments/useInitializePayment'

const { items, totalPrice, clearCart } = useCart()
const { isAuthenticated, user } = useAuthState()
const { referralCode } = useReferral()
const { createOrder } = useCreateOrder()
const { initializePaystack, initializeStripe, loading: submitting } = useInitializePayment()

const paymentMethod = ref('paystack')
const address = ref({ fullName: '', phone: '', address: '', city: '', state: '', country: 'Nigeria', zipCode: '' })

async function handleCheckout() {
  const orderData = {
    items: items.value.map((i) => ({ productId: i.productId, name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
    totalAmount: totalPrice.value,
    shippingAddress: address.value,
    referralCode: referralCode.value || undefined,
  }
  const order = await createOrder(orderData)
  if (!order) return

  const orderId = order?.data?._id || order?._id

  if (paymentMethod.value === 'paystack') {
    const payment = await initializePaystack({ orderId, email: user.value!.email, amount: totalPrice.value, callbackUrl: `${window.location.origin}/checkout/success` })
    if (payment?.data?.authorization_url) { window.location.href = payment.data.authorization_url; return }
  } else {
    const payment = await initializeStripe({ orderId, email: user.value!.email, amount: totalPrice.value, successUrl: `${window.location.origin}/checkout/success`, cancelUrl: `${window.location.origin}/checkout` })
    if (payment?.data?.url) { window.location.href = payment.data.url; return }
  }

  clearCart()
  navigateTo('/checkout/success')
}
</script>
