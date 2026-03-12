import { _ as __nuxt_component_0 } from './nuxt-link-COB5qXTH.mjs';
import __nuxt_component_1 from './index-DgwuGhDw.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { o as orders_api } from './orders-CBnaFfAv.mjs';
import { G as GATEWAY_ENDPOINT, u as useCustomToast } from './useCustomToast-CwIASTqq.mjs';
import { a as useAuthState } from './server.mjs';
import { u as useCart } from './useCart-DgXuvZfB.mjs';
import { u as useCurrency } from './useCurrency-n6dxvfT2.mjs';
import { u as useReferral } from './useReferral-CCzqEWx_.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/axios/index.js';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue-router/vue-router.node.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/consola/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/firebase/analytics/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/devalue/index.js';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/utils.mjs';

const useCreateOrder = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const createOrder = async (payload) => {
    loading.value = true;
    try {
      const res = await orders_api.create(payload);
      showToast({ title: "Success", message: "Order created successfully", toastType: "success" });
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Failed to create order", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, createOrder };
};
const payments_api = {
  initializePaystack: (payload) => GATEWAY_ENDPOINT.post("/payments/paystack/initialize", payload),
  initializeStripe: (payload) => GATEWAY_ENDPOINT.post("/payments/stripe/create-session", payload),
  initializePayment: (payload) => GATEWAY_ENDPOINT.post("/payments/initialize", payload)
};
const useInitializePayment = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const initializePaystack = async (payload) => {
    loading.value = true;
    try {
      const res = await payments_api.initializePaystack(payload);
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Payment initialization failed", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  const initializeStripe = async (payload) => {
    loading.value = true;
    try {
      const res = await payments_api.initializeStripe(payload);
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Payment initialization failed", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  const initializePayment = async (payload) => {
    loading.value = true;
    try {
      const res = await payments_api.initializePayment(payload);
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Payment initialization failed", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, initializePaystack, initializeStripe, initializePayment };
};
const useShipping = () => {
  const loading = ref(false);
  const shippingFee = ref(0);
  const distanceInfo = ref(null);
  const calculateFee = async (lat, lng) => {
    loading.value = true;
    try {
      const res = await GATEWAY_ENDPOINT.get("/shipping/calculate", { params: { lat, lng } });
      const data = res.data || res;
      shippingFee.value = data.fee;
      distanceInfo.value = data;
      return data;
    } catch (error) {
      console.error("Fee calculation error:", error);
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, shippingFee, distanceInfo, calculateFee };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const { items, totalPrice } = useCart();
    const { isAuthenticated, user } = useAuthState();
    useReferral();
    useCurrency();
    useCreateOrder();
    const { loading: submitting } = useInitializePayment();
    const { calculateFee, loading: calculatingFee, shippingFee, distanceInfo } = useShipping();
    const deliveryMethod = ref("pickup");
    const pointsToRedeem = ref(0);
    const redeemPoints = ref(false);
    const address = ref({ fullName: ((_a = user.value) == null ? void 0 : _a.fullName) || "", phone: ((_b = user.value) == null ? void 0 : _b.phone) || "", address: "", city: "", state: "", country: "Nigeria", zipCode: "", lat: 0, lng: 0 });
    watch(deliveryMethod, (val) => {
      if (val === "pickup") {
        shippingFee.value = 0;
        distanceInfo.value = null;
      } else if (address.value.lat && address.value.lng) {
        calculateFee(address.value.lat, address.value.lng);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20" }, _attrs))} data-v-3fdd95b5><div class="flex flex-col lg:flex-row gap-16" data-v-3fdd95b5><div class="flex-1 space-y-12" data-v-3fdd95b5><div class="space-y-2" data-v-3fdd95b5><h1 class="text-4xl font-black text-gray-900 tracking-tight" data-v-3fdd95b5>Checkout</h1><p class="text-sm font-medium text-gray-400" data-v-3fdd95b5>Complete your details to finalize your snacking manifest.</p></div>`);
      if (unref(items).length === 0) {
        _push(`<div class="p-20 text-center bg-gray-50 rounded-[40px] border border-gray-100" data-v-3fdd95b5><p class="text-sm font-black text-gray-900 uppercase tracking-widest" data-v-3fdd95b5>Your cart is empty</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "inline-flex items-center gap-2 text-[#033958] font-black text-xs uppercase tracking-widest mt-6 hover:gap-3 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Continue Shopping `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Continue Shopping "),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<form class="space-y-12" data-v-3fdd95b5>`);
        if (!unref(isAuthenticated)) {
          _push(`<div class="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-center justify-between gap-6" data-v-3fdd95b5><div class="flex items-center gap-4" data-v-3fdd95b5><div class="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600" data-v-3fdd95b5>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:user",
            class: "w-5 h-5"
          }, null, _parent));
          _push(`</div><p class="text-xs font-bold text-amber-900" data-v-3fdd95b5>Signed in users get exclusive rewards and faster checkout.</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/login?redirect=/checkout",
            class: "text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-amber-200/50 rounded-xl text-amber-900"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Sign In`);
              } else {
                return [
                  createTextVNode("Sign In")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-6" data-v-3fdd95b5><h2 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1" data-v-3fdd95b5>Fulfillment Method</h2><div class="grid grid-cols-2 gap-4" data-v-3fdd95b5><button type="button" class="${ssrRenderClass([unref(deliveryMethod) === "pickup" ? "border-[#033958] bg-[#033958]/5" : "border-gray-50 bg-gray-50 hover:border-gray-100", "p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-4 group"])}" data-v-3fdd95b5><div class="${ssrRenderClass([unref(deliveryMethod) === "pickup" ? "bg-[#033958] text-white shadow-xl shadow-[#033958]/20" : "bg-white text-gray-400", "w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"])}" data-v-3fdd95b5>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:store",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><div class="text-center" data-v-3fdd95b5><p class="${ssrRenderClass([unref(deliveryMethod) === "pickup" ? "text-[#033958]" : "text-gray-400", "text-xs font-black uppercase tracking-widest"])}" data-v-3fdd95b5>Store Pickup</p><p class="text-[10px] font-medium text-gray-400 mt-1" data-v-3fdd95b5>Ready in 2 hours \xB7 Free</p></div></button><button type="button" class="${ssrRenderClass([unref(deliveryMethod) === "delivery" ? "border-[#033958] bg-[#033958]/5" : "border-gray-50 bg-gray-50 hover:border-gray-100", "p-6 rounded-[32px] border-2 transition-all flex flex-col items-center gap-4 group"])}" data-v-3fdd95b5><div class="${ssrRenderClass([unref(deliveryMethod) === "delivery" ? "bg-amber-500 text-white shadow-xl shadow-amber-500/20" : "bg-white text-gray-400", "w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"])}" data-v-3fdd95b5>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:truck",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><div class="text-center" data-v-3fdd95b5><p class="${ssrRenderClass([unref(deliveryMethod) === "delivery" ? "text-amber-600" : "text-gray-400", "text-xs font-black uppercase tracking-widest"])}" data-v-3fdd95b5>Home Delivery</p><p class="text-[10px] font-medium text-gray-400 mt-1" data-v-3fdd95b5>We bring it to you \xB7 Calculated</p></div></button></div></div>`);
        if (unref(deliveryMethod) === "delivery") {
          _push(`<div class="space-y-6" data-v-3fdd95b5><h2 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1" data-v-3fdd95b5>Shipping Destination</h2><div class="p-8 bg-gray-50 rounded-[40px] border border-gray-100 space-y-6" data-v-3fdd95b5><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-3fdd95b5><div class="space-y-2" data-v-3fdd95b5><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1" data-v-3fdd95b5>Recipient Name</label><input${ssrRenderAttr("value", unref(address).fullName)} placeholder="Zipporah Jel" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all" required data-v-3fdd95b5></div><div class="space-y-2" data-v-3fdd95b5><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1" data-v-3fdd95b5>Contact Phone</label><input${ssrRenderAttr("value", unref(address).phone)} type="tel" placeholder="0814 762 6501" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all" required data-v-3fdd95b5></div></div><div class="space-y-2 relative" data-v-3fdd95b5><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1" data-v-3fdd95b5>Street Address</label><div class="relative group" data-v-3fdd95b5>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:map-pin",
            size: "18",
            class: "absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#033958] transition-colors"
          }, null, _parent));
          _push(`<input id="addressAutocomplete"${ssrRenderAttr("value", unref(address).address)} placeholder="Enter your street address in Lagos..." class="w-full pl-12 pr-5 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all" required data-v-3fdd95b5></div>`);
          if (unref(calculatingFee)) {
            _push(`<div class="flex items-center gap-2 mt-2 ml-2" data-v-3fdd95b5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:loader-2",
              class: "w-3 h-3 animate-spin text-amber-500"
            }, null, _parent));
            _push(`<span class="text-[10px] font-black uppercase tracking-widest text-amber-600" data-v-3fdd95b5>Calculating distance pricing...</span></div>`);
          } else if (unref(distanceInfo)) {
            _push(`<p class="text-[10px] font-black uppercase tracking-widest text-emerald-600 mt-2 ml-2 flex items-center gap-2" data-v-3fdd95b5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check-circle",
              size: "12"
            }, null, _parent));
            _push(` Distance: ${ssrInterpolate(unref(distanceInfo).distanceKm)}km detected </p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="grid grid-cols-2 gap-6" data-v-3fdd95b5><div class="space-y-2" data-v-3fdd95b5><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1" data-v-3fdd95b5>City</label><input${ssrRenderAttr("value", unref(address).city)} class="w-full px-5 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-xs font-bold text-gray-400 cursor-not-allowed" readonly required data-v-3fdd95b5></div><div class="space-y-2" data-v-3fdd95b5><input${ssrRenderAttr("value", unref(address).state)} class="w-full px-5 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-xs font-bold text-gray-400 cursor-not-allowed" readonly required data-v-3fdd95b5></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      }
      _push(`</div><aside class="w-full lg:w-[400px] shrink-0" data-v-3fdd95b5><div class="bg-[#033958] rounded-[40px] p-8 lg:p-10 shadow-2xl shadow-[#033958]/30 sticky top-10 overflow-hidden group" data-v-3fdd95b5><div class="absolute -right-10 -top-10 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000" data-v-3fdd95b5>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:receipt",
        size: "240"
      }, null, _parent));
      _push(`</div><div class="relative z-10 space-y-8" data-v-3fdd95b5><h2 class="text-xs font-black uppercase tracking-[0.3em] text-white/40" data-v-3fdd95b5>Manifest Summary</h2><div class="space-y-4 max-h-60 overflow-y-auto pr-2 scrollbar-hide" data-v-3fdd95b5><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<div class="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-0" data-v-3fdd95b5><div class="flex items-center gap-3" data-v-3fdd95b5><div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 overflow-hidden shrink-0" data-v-3fdd95b5>`);
        if (item.image) {
          _push(`<img${ssrRenderAttr("src", item.image)} class="w-full h-full object-cover" data-v-3fdd95b5>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-0.5" data-v-3fdd95b5><p class="text-[11px] font-black text-white leading-tight truncate w-32" data-v-3fdd95b5>${ssrInterpolate(item.name)}</p><p class="text-[9px] font-bold text-white/30 tracking-widest uppercase" data-v-3fdd95b5>Qty: ${ssrInterpolate(item.quantity)}</p></div></div><p class="text-xs font-black text-white" data-v-3fdd95b5>\u20A6${ssrInterpolate((item.price * item.quantity).toLocaleString())}</p></div>`);
      });
      _push(`<!--]--></div><div class="pt-8 border-t border-white/10 space-y-4" data-v-3fdd95b5><div class="flex justify-between items-center" data-v-3fdd95b5><span class="text-[10px] font-black uppercase tracking-widest text-white/40" data-v-3fdd95b5>Base Total</span><span class="text-xs font-black text-white" data-v-3fdd95b5>\u20A6${ssrInterpolate(unref(totalPrice).toLocaleString())}</span></div><div class="flex justify-between items-center text-xs" data-v-3fdd95b5><span class="text-[10px] font-black uppercase tracking-widest text-amber-400" data-v-3fdd95b5>Shipping (${ssrInterpolate(unref(deliveryMethod))})</span><span class="font-black text-amber-400" data-v-3fdd95b5>\u20A6${ssrInterpolate(unref(shippingFee).toLocaleString())}</span></div>`);
      if (unref(redeemPoints)) {
        _push(`<div class="flex justify-between items-center text-xs" data-v-3fdd95b5><span class="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1" data-v-3fdd95b5> Rewards Applied </span><span class="font-black text-emerald-400" data-v-3fdd95b5>-\u20A6${ssrInterpolate(unref(pointsToRedeem).toLocaleString())}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user) && unref(user).points > 0) {
        _push(`<div class="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-4" data-v-3fdd95b5><div class="flex items-center justify-between" data-v-3fdd95b5><p class="text-[10px] font-black uppercase tracking-widest text-white/60" data-v-3fdd95b5>Redeem Points</p><p class="text-[9px] font-bold text-amber-400" data-v-3fdd95b5>${ssrInterpolate(unref(user).points)} pts</p></div><div class="flex items-center gap-3" data-v-3fdd95b5><input${ssrRenderAttr("value", unref(pointsToRedeem))} type="number"${ssrRenderAttr("max", unref(user).points)} class="flex-1 bg-black/20 border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-white outline-none focus:ring-1 focus:ring-amber-500" placeholder="0" data-v-3fdd95b5><button type="button" class="${ssrRenderClass(["px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", unref(redeemPoints) ? "bg-amber-500 text-[#033958]" : "bg-white/10 text-white border border-white/20"])}" data-v-3fdd95b5>${ssrInterpolate(unref(redeemPoints) ? "Remove" : "Apply")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-6 border-t border-white/20 flex justify-between items-center" data-v-3fdd95b5><span class="text-xs font-black uppercase tracking-[0.2em] text-white" data-v-3fdd95b5>Grand Total</span><span class="text-4xl font-black text-white tracking-tighter" data-v-3fdd95b5>\u20A6${ssrInterpolate((unref(totalPrice) + unref(shippingFee) - (unref(redeemPoints) ? unref(pointsToRedeem) : 0)).toLocaleString())}</span></div></div><button class="w-full py-6 bg-white hover:bg-amber-500 text-[#033958] rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"${ssrIncludeBooleanAttr(unref(submitting) || unref(deliveryMethod) === "delivery" && !unref(distanceInfo)) ? " disabled" : ""} data-v-3fdd95b5>`);
      if (unref(submitting)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-4 h-4 animate-spin text-[#033958]"
        }, null, _parent));
      } else {
        _push(`<!--[--> Authorize Payment `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:shield-check",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</button>`);
      if (unref(deliveryMethod) === "delivery" && !unref(distanceInfo)) {
        _push(`<p class="text-[9px] font-bold text-white/30 text-center uppercase tracking-widest italic" data-v-3fdd95b5>Please set delivery address to calculate fee</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></aside></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fdd95b5"]]);

export { index as default };
//# sourceMappingURL=index-EWs50E2R.mjs.map
