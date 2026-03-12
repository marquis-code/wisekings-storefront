import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl space-y-10" }, _attrs))}><div class="space-y-1"><h1 class="text-3xl font-black text-gray-900 tracking-tight">Security Settings</h1><p class="text-sm font-medium text-gray-400">Protect your account with two-factor authentication and password controls.</p></div><div class="p-8 bg-gray-50 rounded-[32px] border border-gray-100 space-y-8"><div class="flex items-center justify-between gap-6"><div class="space-y-1"><p class="text-sm font-black text-gray-900 uppercase tracking-widest">Multi-Factor Authentication</p><p class="text-xs font-medium text-gray-400">Add an extra layer of security to your account.</p></div><div class="inline-flex items-center p-1 bg-[#033958]/10 rounded-full w-12 h-6 cursor-pointer opacity-50"><div class="w-4 h-4 bg-white rounded-full"></div></div></div><div class="pt-8 border-t border-gray-100 flex items-center justify-between gap-6"><div class="space-y-1"><p class="text-sm font-black text-gray-900 uppercase tracking-widest">Change Password</p><p class="text-xs font-medium text-gray-400">Last changed 3 months ago.</p></div><button class="text-[10px] font-black uppercase tracking-widest text-[#033958] border border-[#033958]/20 px-4 py-2 rounded-xl hover:bg-[#033958] hover:text-white transition-all">Update</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=security-C79yLrW4.mjs.map
