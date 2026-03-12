import __nuxt_component_1 from './index-DgwuGhDw.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { a as useAuthState } from './server.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const { user } = useAuthState();
    const loading = ref(false);
    const form = ref({
      fullName: ((_a = user.value) == null ? void 0 : _a.fullName) || "",
      phone: ((_b = user.value) == null ? void 0 : _b.phone) || "",
      email: ((_c = user.value) == null ? void 0 : _c.email) || ""
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

export { _sfc_main as default };
//# sourceMappingURL=profile-GbXDdGX7.mjs.map
