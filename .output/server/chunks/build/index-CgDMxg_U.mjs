import { _ as __nuxt_component_0 } from './nuxt-link-E7rDAgD-.mjs';
import { c as useAuthState, d as useToast, a as __nuxt_component_1, e as useNuxtApp } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useCart } from './useCart-DgXuvZfB.mjs';
import { u as useReferral } from './useReferral-BE0cjy3f.mjs';
import { u as useOrdersApi } from './useOrdersApi-oOcSUVnT.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

function usePaymentsApi() {
  const { $api } = useNuxtApp();
  return {
    initializePaystack(data) {
      return $api("/payments/paystack/initialize", { method: "POST", body: data });
    },
    initializeStripe(data) {
      return $api("/payments/stripe/create-session", { method: "POST", body: data });
    }
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { items, totalPrice } = useCart();
    const { isAuthenticated } = useAuthState();
    useReferral();
    useOrdersApi();
    usePaymentsApi();
    useToast();
    const submitting = ref(false);
    const paymentMethod = ref("paystack");
    const address = ref({ fullName: "", phone: "", address: "", city: "", state: "", country: "Nigeria", zipCode: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><h1 class="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>`);
      if (unref(items).length === 0) {
        _push(`<div class="text-center py-16 text-gray-400"><p>Your cart is empty. `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "text-brand-600 underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Shop now`);
            } else {
              return [
                createTextVNode("Shop now")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p></div>`);
      } else {
        _push(`<form class="space-y-8">`);
        if (!unref(isAuthenticated)) {
          _push(`<div class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/login?redirect=/checkout",
            class: "underline font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Sign in`);
              } else {
                return [
                  createTextVNode("Sign in")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` or `);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/register?redirect=/checkout",
            class: "underline font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`create an account`);
              } else {
                return [
                  createTextVNode("create an account")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` to continue. </div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isAuthenticated)) {
          _push(`<div class="space-y-4"><h2 class="text-lg font-semibold text-gray-900">Shipping Address</h2><div class="grid grid-cols-2 gap-4"><div class="col-span-2"><label class="label">Full Name</label><input${ssrRenderAttr("value", unref(address).fullName)} class="input" required></div><div class="col-span-2"><label class="label">Phone</label><input${ssrRenderAttr("value", unref(address).phone)} class="input" required></div><div class="col-span-2"><label class="label">Address</label><input${ssrRenderAttr("value", unref(address).address)} class="input" required></div><div><label class="label">City</label><input${ssrRenderAttr("value", unref(address).city)} class="input" required></div><div><label class="label">State</label><input${ssrRenderAttr("value", unref(address).state)} class="input" required></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border border-gray-200 rounded-2xl p-4 space-y-3"><h2 class="text-lg font-semibold text-gray-900">Order Summary</h2><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(`<div class="flex justify-between text-sm"><span class="text-gray-600">${ssrInterpolate(item.name)} \xD7 ${ssrInterpolate(item.quantity)}</span><span class="font-medium">\u20A6${ssrInterpolate((item.price * item.quantity).toLocaleString())}</span></div>`);
        });
        _push(`<!--]--><div class="border-t pt-3 flex justify-between text-lg font-bold"><span>Total</span><span>\u20A6${ssrInterpolate(unref(totalPrice).toLocaleString())}</span></div></div>`);
        if (unref(isAuthenticated)) {
          _push(`<div><h2 class="text-lg font-semibold text-gray-900 mb-3">Payment Method</h2><div class="flex gap-3"><button type="button" class="${ssrRenderClass(["flex-1 p-4 border rounded-xl text-center transition-all", unref(paymentMethod) === "paystack" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"])}"><p class="font-semibold text-gray-900">Paystack</p><p class="text-xs text-gray-400">Cards, Bank Transfer</p></button><button type="button" class="${ssrRenderClass(["flex-1 p-4 border rounded-xl text-center transition-all", unref(paymentMethod) === "stripe" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"])}"><p class="font-semibold text-gray-900">Stripe</p><p class="text-xs text-gray-400">International Cards</p></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isAuthenticated)) {
          _push(`<button type="submit" class="btn-primary w-full btn-lg"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""}>`);
          if (unref(submitting)) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:loader-2",
              class: "w-5 h-5 animate-spin"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(unref(submitting) ? "Processing..." : `Pay \u20A6${unref(totalPrice).toLocaleString()}`)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CgDMxg_U.mjs.map
