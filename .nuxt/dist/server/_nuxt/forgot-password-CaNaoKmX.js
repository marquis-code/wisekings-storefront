import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import { c as useSeoMeta } from "../server.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "firebase/analytics";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const loading = ref(false);
    const submitted = ref(false);
    useSeoMeta({
      title: "Reset Access | WiseKings",
      description: "Recover your account access for the WiseKings platform."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "fixed top-8 right-8 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-50 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:x",
              size: "20",
              class: "group-hover:rotate-90 transition-transform duration-300"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:x",
                size: "20",
                class: "group-hover:rotate-90 transition-transform duration-300"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-7xl mx-auto px-6 lg:px-10 h-screen flex flex-col justify-center"><div class="max-w-md w-full mx-auto space-y-12"><div class="text-center"><div class="w-20 h-20 bg-[#033958]/5 rounded-3xl flex items-center justify-center mx-auto mb-8">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:key-round",
        size: "32",
        class: "text-[#033958]"
      }, null, _parent));
      _push(`</div><h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">Reset Access</h1><p class="text-gray-500 font-medium">Enter your identity below to receive a secure recovery link.</p></div>`);
      if (!unref(submitted)) {
        _push(`<form class="space-y-8"><div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Channel</label><div class="relative group">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:mail",
          size: "18",
          class: "absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#033958] transition-colors"
        }, null, _parent));
        _push(`<input${ssrRenderAttr("value", unref(email))} type="email" placeholder="yours@example.com" class="w-full pl-14 pr-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] text-sm font-bold focus:ring-8 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all placeholder:text-gray-300" required></div></div><button type="submit" class="w-full py-5 bg-gray-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-4 group"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
        if (unref(loading)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:loader-2",
            class: "w-5 h-5 animate-spin"
          }, null, _parent));
        } else {
          _push(`<!--[--> Request Link `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:send",
            class: "w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          }, null, _parent));
          _push(`<!--]-->`);
        }
        _push(`</button></form>`);
      } else {
        _push(`<div class="text-center p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 animate-in fade-in zoom-in duration-500"><div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg shadow-emerald-500/20">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check",
          size: "28"
        }, null, _parent));
        _push(`</div><div class="space-y-2"><p class="text-lg font-black text-emerald-950 uppercase tracking-tight">Check your transmissions</p><p class="text-xs font-bold text-emerald-600">A secure reset link has been dispatched to ${ssrInterpolate(unref(email))}.</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "inline-block text-[10px] font-black text-emerald-900 uppercase tracking-widest border-b-2 border-emerald-200 pb-1 hover:border-emerald-500 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Command Center`);
            } else {
              return [
                createTextVNode("Back to Command Center")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<div class="pt-8 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-gray-400 font-bold hover:text-gray-900 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Remembered? Return to login`);
          } else {
            return [
              createTextVNode("Remembered? Return to login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgot-password-CaNaoKmX.js.map
