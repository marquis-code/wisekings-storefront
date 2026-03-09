import { _ as __nuxt_component_0 } from './nuxt-link-E7rDAgD-.mjs';
import { a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useOrdersApi();
    const orders = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><div class="flex items-center gap-3 mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
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
      _push(`<h1 class="text-2xl font-bold text-gray-900">My Orders</h1></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-16">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-8 h-8 animate-spin mx-auto text-gray-400"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(orders).length === 0) {
        _push(`<div class="text-center py-16 text-gray-400">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:package",
          class: "w-12 h-12 mx-auto mb-4 opacity-50"
        }, null, _parent));
        _push(`<p class="mb-4">No orders yet</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Start Shopping`);
            } else {
              return [
                createTextVNode("Start Shopping")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(orders), (o) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: o._id,
            to: `/account/orders/${o._id}`,
            class: "block p-4 border border-gray-200 rounded-2xl hover:border-gray-400 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b;
              if (_push2) {
                _push2(`<div class="flex items-center justify-between mb-2"${_scopeId}><code class="text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(o.orderNumber)}</code><span class="${ssrRenderClass(o.status === "delivered" || o.status === "completed" ? "badge-success" : "badge-warning")}"${_scopeId}>${ssrInterpolate(o.status)}</span></div><div class="flex items-center justify-between text-sm"${_scopeId}><span class="text-gray-500"${_scopeId}>${ssrInterpolate(((_a = o.items) == null ? void 0 : _a.length) || 0)} items</span><span class="font-medium text-gray-900"${_scopeId}>\u20A6${ssrInterpolate(o.totalAmount.toLocaleString())}</span></div><p class="text-xs text-gray-400 mt-1"${_scopeId}>${ssrInterpolate(new Date(o.createdAt).toLocaleDateString())}</p>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                    createVNode("code", { class: "text-sm font-medium text-gray-900" }, toDisplayString(o.orderNumber), 1),
                    createVNode("span", {
                      class: o.status === "delivered" || o.status === "completed" ? "badge-success" : "badge-warning"
                    }, toDisplayString(o.status), 3)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between text-sm" }, [
                    createVNode("span", { class: "text-gray-500" }, toDisplayString(((_b = o.items) == null ? void 0 : _b.length) || 0) + " items", 1),
                    createVNode("span", { class: "font-medium text-gray-900" }, "\u20A6" + toDisplayString(o.totalAmount.toLocaleString()), 1)
                  ]),
                  createVNode("p", { class: "text-xs text-gray-400 mt-1" }, toDisplayString(new Date(o.createdAt).toLocaleDateString()), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Blv9ULj_.mjs.map
