import { _ as __nuxt_component_0 } from './nuxt-link-E7rDAgD-.mjs';
import { c as useAuthState, a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuthApi } from './useAuthApi-Baa0Sr5U.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuthState();
    useAuthApi();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><h1 class="text-2xl font-bold text-gray-900 mb-2">My Account</h1><p class="text-gray-500 mb-8">Welcome back, ${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.fullName)}</p><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "p-6 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:package",
              class: "w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-3"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-gray-900"${_scopeId}>My Orders</h2><p class="text-sm text-gray-500 mt-1"${_scopeId}>Track and manage your orders</p>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:package",
                class: "w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-3"
              }),
              createVNode("h2", { class: "font-semibold text-gray-900" }, "My Orders"),
              createVNode("p", { class: "text-sm text-gray-500 mt-1" }, "Track and manage your orders")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/profile",
        class: "p-6 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:user",
              class: "w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-3"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-semibold text-gray-900"${_scopeId}>Profile</h2><p class="text-sm text-gray-500 mt-1"${_scopeId}>Update your details</p>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:user",
                class: "w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-3"
              }),
              createVNode("h2", { class: "font-semibold text-gray-900" }, "Profile"),
              createVNode("p", { class: "text-sm text-gray-500 mt-1" }, "Update your details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="p-6 border border-gray-200 rounded-2xl hover:border-red-300 transition-colors group text-left">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:log-out",
        class: "w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors mb-3"
      }, null, _parent));
      _push(`<h2 class="font-semibold text-gray-900 group-hover:text-red-600">Sign Out</h2><p class="text-sm text-gray-500 mt-1">Log out of your account</p></button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CPCerXd-.mjs.map
