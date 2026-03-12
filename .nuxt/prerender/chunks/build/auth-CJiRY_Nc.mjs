import { _ as __nuxt_component_0 } from './nuxt-link-COB5qXTH.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './hero5-D2ejfIpG.mjs';
import { _ as _imports_0$1 } from './logo-3eGD44Sm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs';
import './server.mjs';
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
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/firebase/analytics/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/devalue/index.js';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/utils.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex bg-white font-inter" }, _attrs))}><div class="hidden lg:flex lg:w-1/2 relative overflow-hidden"><div class="absolute inset-0 z-0 bg-black"><img${ssrRenderAttr("src", _imports_0)} alt="Delicious Snacks" class="w-full h-full object-cover opacity-60"></div><div class="relative z-10 flex flex-col justify-between p-12 w-full"><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-3 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="WiseKings Logo" class="w-auto h-14"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "WiseKings Logo",
            class: "w-auto h-14"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="max-w-md"><h1 class="text-5xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-up"> Premium Snacks, <span class="text-amber-400">Delivered Fresh</span></h1><p class="text-xl text-white/80 leading-relaxed"> Discover handpicked snacks from the best artisan makers. From crunchy chips to gourmet chocolates. </p></div><div class="flex items-center gap-4"><div class="flex -space-x-3"><!--[-->`);
  ssrRenderList(4, (i) => {
    _push(`<div class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm"><img${ssrRenderAttr("src", `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`)} alt="User Avatar"></div>`);
  });
  _push(`<!--]--></div><p class="text-sm font-medium text-white/80"><span class="text-white font-bold">10,000+</span> snack lovers and counting </p></div></div></div><div class="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 relative bg-white"><div class="absolute top-8 left-6 lg:hidden">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-8 h-8 bg-[#033958] rounded-lg flex items-center justify-center"${_scopeId}><span class="text-white font-black text-xs"${_scopeId}>WK</span></div><span class="text-xl font-bold tracking-tight text-gray-900"${_scopeId}>WiseKings</span>`);
      } else {
        return [
          createVNode("div", { class: "w-8 h-8 bg-[#033958] rounded-lg flex items-center justify-center" }, [
            createVNode("span", { class: "text-white font-black text-xs" }, "WK")
          ]),
          createVNode("span", { class: "text-xl font-bold tracking-tight text-gray-900" }, "WiseKings")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full max-w-md mx-auto space-y-8 animate-fade-in">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="absolute bottom-8 left-0 right-0 text-center px-6"><p class="text-sm text-gray-400"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} WiseKings. All rights reserved. </p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-CJiRY_Nc.mjs.map
