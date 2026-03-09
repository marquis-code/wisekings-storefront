import { _ as __nuxt_component_0 } from "./nuxt-link-E7rDAgD-.js";
import { b as useRoute, a as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useOrdersApi } from "./useOrdersApi-oOcSUVnT.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "@iconify/vue";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useOrdersApi();
    const order = ref(null);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "text-gray-400 hover:text-gray-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "w-5 h-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-2xl font-bold text-gray-900">Order Details</h1></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-16">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-8 h-8 animate-spin mx-auto text-gray-400"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(order)) {
        _push(`<div class="space-y-6"><div class="flex items-center justify-between"><code class="text-lg font-bold text-gray-900">${ssrInterpolate(unref(order).orderNumber)}</code><span class="${ssrRenderClass([unref(order).status === "delivered" || unref(order).status === "completed" ? "badge-success" : "badge-warning", "text-sm"])}">${ssrInterpolate(unref(order).status)}</span></div><div class="border border-gray-200 rounded-2xl divide-y divide-gray-100"><!--[-->`);
        ssrRenderList(unref(order).items, (item) => {
          _push(`<div class="flex items-center gap-4 p-4"><div class="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">`);
          if (item.image) {
            _push(`<img${ssrRenderAttr("src", item.image)} class="w-full h-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex-1"><p class="text-sm font-medium text-gray-900">${ssrInterpolate(item.name)}</p><p class="text-xs text-gray-500">Qty: ${ssrInterpolate(item.quantity)}</p></div><p class="text-sm font-medium">₦${ssrInterpolate((item.price * item.quantity).toLocaleString())}</p></div>`);
        });
        _push(`<!--]--></div><div class="border border-gray-200 rounded-2xl p-4 space-y-2"><div class="flex justify-between text-sm"><span class="text-gray-500">Subtotal</span><span>₦${ssrInterpolate(unref(order).totalAmount.toLocaleString())}</span></div><div class="flex justify-between text-sm"><span class="text-gray-500">Shipping</span><span>₦${ssrInterpolate((unref(order).shippingFee || 0).toLocaleString())}</span></div><div class="flex justify-between text-sm font-bold border-t pt-2"><span>Total</span><span>₦${ssrInterpolate((unref(order).totalAmount + (unref(order).shippingFee || 0)).toLocaleString())}</span></div></div>`);
        if (unref(order).shippingAddress) {
          _push(`<div class="border border-gray-200 rounded-2xl p-4"><h3 class="font-semibold text-gray-900 mb-2">Shipping Address</h3><p class="text-sm text-gray-600">${ssrInterpolate(unref(order).shippingAddress.fullName)}</p><p class="text-sm text-gray-500">${ssrInterpolate(unref(order).shippingAddress.address)}, ${ssrInterpolate(unref(order).shippingAddress.city)}, ${ssrInterpolate(unref(order).shippingAddress.state)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-BTJuc0CO.js.map
