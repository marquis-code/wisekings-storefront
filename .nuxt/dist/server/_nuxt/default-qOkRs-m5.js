import { _ as __nuxt_component_0 } from "./nuxt-link-E7rDAgD-.js";
import { c as useAuthState, a as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { u as useCart } from "./useCart-DgXuvZfB.js";
import { u as useReferral } from "./useReferral-BE0cjy3f.js";
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthenticated } = useAuthState();
    const { totalItems } = useCart();
    useReferral();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><header class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold"${_scopeId}>WK</div><span class="text-lg font-bold text-gray-900 hidden sm:block"${_scopeId}>WiseKings</span>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold" }, "WK"),
              createVNode("span", { class: "text-lg font-bold text-gray-900 hidden sm:block" }, "WiseKings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop`);
          } else {
            return [
              createTextVNode("Shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Categories`);
          } else {
            return [
              createTextVNode("Categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "relative p-2 rounded-full hover:bg-gray-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:shopping-bag",
              class: "w-5 h-5 text-gray-700"
            }, null, _parent2, _scopeId));
            if (unref(totalItems) > 0) {
              _push2(`<span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gray-900 text-white text-[10px] rounded-full flex items-center justify-center font-semibold"${_scopeId}>${ssrInterpolate(unref(totalItems))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:shopping-bag",
                class: "w-5 h-5 text-gray-700"
              }),
              unref(totalItems) > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute -top-0.5 -right-0.5 w-5 h-5 bg-gray-900 text-white text-[10px] rounded-full flex items-center justify-center font-semibold"
              }, toDisplayString(unref(totalItems)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isAuthenticated)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/account",
          class: "p-2 rounded-full hover:bg-gray-100 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:user",
                class: "w-5 h-5 text-gray-700"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:user",
                  class: "w-5 h-5 text-gray-700"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "btn-primary btn-sm"
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
      }
      _push(`</div></div></div></header><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-950 text-gray-400 py-12 mt-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 md:grid-cols-4 gap-8"><div><h4 class="text-white font-semibold mb-4">Shop</h4><div class="space-y-2 text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "block hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Products`);
          } else {
            return [
              createTextVNode("All Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "block hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Categories`);
          } else {
            return [
              createTextVNode("Categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h4 class="text-white font-semibold mb-4">Account</h4><div class="space-y-2 text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "block hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Orders`);
          } else {
            return [
              createTextVNode("Orders")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/profile",
        class: "block hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Profile`);
          } else {
            return [
              createTextVNode("Profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h4 class="text-white font-semibold mb-4">Company</h4><div class="space-y-2 text-sm"><span class="block">About</span><span class="block">Contact</span></div></div><div><h4 class="text-white font-semibold mb-4">Legal</h4><div class="space-y-2 text-sm"><span class="block">Privacy</span><span class="block">Terms</span></div></div></div><div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} WiseKings. All rights reserved.</p></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-qOkRs-m5.js.map
