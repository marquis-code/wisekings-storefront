import { a as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-E7rDAgD-.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useCart } from "./useCart-DgXuvZfB.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const { items, totalPrice } = useCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><h1 class="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>`);
      if (unref(items).length === 0) {
        _push(`<div class="text-center py-20">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:shopping-bag",
          class: "w-12 h-12 mx-auto text-gray-300 mb-4"
        }, null, _parent));
        _push(`<p class="text-gray-500 mb-4">Your cart is empty</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue Shopping`);
            } else {
              return [
                createTextVNode("Continue Shopping")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div class="space-y-4 mb-8"><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(`<div class="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl"><div class="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">`);
          if (item.image) {
            _push(`<img${ssrRenderAttr("src", item.image)} class="w-full h-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex-1 min-w-0">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/products/${item.slug}`,
            class: "text-sm font-semibold text-gray-900 hover:text-brand-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-sm text-gray-500 mt-0.5">₦${ssrInterpolate(item.price.toLocaleString())}</p></div><div class="flex items-center border border-gray-300 rounded-full"><button class="w-8 h-8 flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:minus",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</button><span class="w-8 text-center text-sm font-medium">${ssrInterpolate(item.quantity)}</span><button class="w-8 h-8 flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:plus",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</button></div><p class="text-sm font-bold text-gray-900 w-24 text-right">₦${ssrInterpolate((item.price * item.quantity).toLocaleString())}</p><button class="p-1 text-gray-400 hover:text-red-500">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div><div class="border-t border-gray-200 pt-4 space-y-3"><div class="flex justify-between text-lg font-bold"><span>Total</span><span>₦${ssrInterpolate(unref(totalPrice).toLocaleString())}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/checkout",
          class: "btn-primary w-full btn-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Proceed to Checkout`);
            } else {
              return [
                createTextVNode("Proceed to Checkout")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "btn-secondary w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue Shopping`);
            } else {
              return [
                createTextVNode("Continue Shopping")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cart-5R34Hxkr.js.map
