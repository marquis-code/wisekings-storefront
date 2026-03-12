import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as useAuthState } from "../server.mjs";
import "./axios.config-BkQMnnZW.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "firebase/analytics";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuthState();
    const loading = ref(false);
    const form = ref({
      fullName: user.value?.fullName || "",
      phone: user.value?.phone || "",
      email: user.value?.email || ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl space-y-12" }, _attrs))}><div class="space-y-2"><h1 class="text-3xl font-black text-gray-900 tracking-tight">Profile Settings</h1><p class="text-sm font-medium text-gray-400">Personalize your snacking experience and security.</p></div><form class="space-y-10"><section class="space-y-6"><div class="flex items-center gap-3 px-2"><div class="w-1 h-4 bg-[#033958] rounded-full"></div><h2 class="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Identity Details</h2></div><div class="p-8 md:p-10 bg-gray-50/50 rounded-[40px] border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden group"><div class="space-y-2"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Full Legal Name</label><input${ssrRenderAttr("value", unref(form).fullName)} type="text" placeholder="John Doe" class="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all shadow-sm"></div><div class="space-y-2"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Contact Number</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="+234..." class="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 focus:ring-4 focus:ring-[#033958]/5 focus:border-[#033958] outline-none transition-all shadow-sm"></div></div></section><section class="space-y-6"><div class="flex items-center gap-3 px-2"><div class="w-1 h-4 bg-amber-500 rounded-full"></div><h2 class="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Security Credentials</h2></div><div class="p-8 md:p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm relative overflow-hidden group"><div class="space-y-2 relative"><div class="flex items-center justify-between mb-2"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Primary Email Address</label><div class="flex items-center gap-1.5 px-2 py-0.5 bg-gray-100 rounded-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-3 h-3 text-gray-400"
      }, null, _parent));
      _push(`<span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Verified</span></div></div><input${ssrRenderAttr("value", unref(form).email)} type="email" disabled class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold text-gray-300 cursor-not-allowed italic"><p class="text-[9px] font-bold text-gray-300 mt-2 ml-1 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:info",
        size: "12"
      }, null, _parent));
      _push(` Manifest security protocol: Email cannot be modified. </p></div></div></section><div class="flex items-center justify-between pt-4"><p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="group px-12 py-5 bg-[#033958] text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-[#033958]/30 hover:bg-emerald-600 hover:shadow-emerald-500/20 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-3">`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:rotate-cw",
          class: "w-4 h-4 animate-spin"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:save",
          class: "w-4 h-4 group-hover:scale-110 transition-transform"
        }, null, _parent));
      }
      _push(` ${ssrInterpolate(unref(loading) ? "Syncing..." : "Seal Changes")}</button></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-GbXDdGX7.js.map
