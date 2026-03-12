import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { u as useFetchOrders } from "./useFetchOrders-f7F6HpNi.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "../server.mjs";
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
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
import "./orders-CBnaFfAv.js";
import "./axios.config-BkQMnnZW.js";
import "axios";
import "./useCustomToast-CwIASTqq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { orders, loading } = useFetchOrders();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10" }, _attrs))}><div class="flex items-center justify-between"><div class="space-y-1"><h1 class="text-3xl font-black text-gray-900 tracking-tight">Order Archives</h1><p class="text-sm font-medium text-gray-400">Review your past snout-tastic manifests and tracking history.</p></div><div class="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "text-gray-400 w-4 h-4"
      }, null, _parent));
      _push(`<input type="text" placeholder="Filter manifest ID..." class="bg-transparent text-xs font-bold outline-none w-32 placeholder:text-gray-300"></div></div>`);
      if (unref(loading)) {
        _push(`<div class="flex flex-col items-center justify-center py-24">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-10 h-10 animate-spin text-[#033958]/20"
        }, null, _parent));
        _push(`<p class="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Syncing with server...</p></div>`);
      } else if (unref(orders).length === 0) {
        _push(`<div class="text-center py-24 bg-gray-50/50 rounded-[40px] border border-dashed border-gray-200"><div class="w-20 h-20 bg-white rounded-[32px] shadow-sm flex items-center justify-center mx-auto mb-6 text-gray-200">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:package-open",
          size: "40"
        }, null, _parent));
        _push(`</div><h3 class="text-sm font-black text-gray-900 uppercase tracking-widest">No Manifests Found</h3><p class="text-xs font-medium text-gray-400 mt-2 mb-8 uppercase tracking-widest">Your snacking history is currently blank.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "px-8 py-4 bg-[#033958] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#033958]/20 transition-all hover:-translate-y-0.5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Start a Manifest `);
            } else {
              return [
                createTextVNode(" Start a Manifest ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-4"><!--[-->`);
        ssrRenderList(unref(orders), (o) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: o._id,
            to: `/account/orders/${o._id}`,
            class: "group relative bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 hover:border-[#033958]/20 hover:shadow-2xl hover:shadow-gray-200/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center gap-6"${_scopeId}><div class="w-16 h-16 rounded-[24px] bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#033958] transition-all duration-500 overflow-hidden shrink-0"${_scopeId}>`);
                if (o.items?.[0]?.image) {
                  _push2(`<img${ssrRenderAttr("src", o.items[0].image)} class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"${_scopeId}>`);
                } else {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:package",
                    class: "w-8 h-8 text-gray-300 group-hover:text-white"
                  }, null, _parent2, _scopeId));
                }
                _push2(`</div><div class="space-y-1"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]"${_scopeId}>Manifest ID</span><code class="text-xs font-black text-[#033958] tracking-widest"${_scopeId}>${ssrInterpolate(o.orderNumber)}</code></div><p class="text-sm font-black text-gray-900"${_scopeId}>${ssrInterpolate(o.items?.length || 0)} items · Ready for dispatch</p><p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest"${_scopeId}>${ssrInterpolate(new Date(o.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }))}</p></div></div><div class="flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0"${_scopeId}><p class="text-lg font-black text-gray-900 tracking-tighter"${_scopeId}>₦${ssrInterpolate(o.totalAmount.toLocaleString())}</p><div class="${ssrRenderClass([o.status === "delivered" || o.status === "completed" ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-amber-50 border-amber-100 text-amber-600", "flex items-center gap-2 px-3 py-1.5 rounded-full border"])}"${_scopeId}><div class="${ssrRenderClass([o.status === "delivered" || o.status === "completed" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></div><span class="text-[10px] font-black uppercase tracking-widest"${_scopeId}>${ssrInterpolate(o.status)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center gap-6" }, [
                    createVNode("div", { class: "w-16 h-16 rounded-[24px] bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#033958] transition-all duration-500 overflow-hidden shrink-0" }, [
                      o.items?.[0]?.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: o.items[0].image,
                        class: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      }, null, 8, ["src"])) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "lucide:package",
                        class: "w-8 h-8 text-gray-300 group-hover:text-white"
                      }))
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]" }, "Manifest ID"),
                        createVNode("code", { class: "text-xs font-black text-[#033958] tracking-widest" }, toDisplayString(o.orderNumber), 1)
                      ]),
                      createVNode("p", { class: "text-sm font-black text-gray-900" }, toDisplayString(o.items?.length || 0) + " items · Ready for dispatch", 1),
                      createVNode("p", { class: "text-[10px] font-bold text-gray-400 uppercase tracking-widest" }, toDisplayString(new Date(o.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0" }, [
                    createVNode("p", { class: "text-lg font-black text-gray-900 tracking-tighter" }, "₦" + toDisplayString(o.totalAmount.toLocaleString()), 1),
                    createVNode("div", {
                      class: ["flex items-center gap-2 px-3 py-1.5 rounded-full border", o.status === "delivered" || o.status === "completed" ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-amber-50 border-amber-100 text-amber-600"]
                    }, [
                      createVNode("div", {
                        class: ["w-1.5 h-1.5 rounded-full", o.status === "delivered" || o.status === "completed" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"]
                      }, null, 2),
                      createVNode("span", { class: "text-[10px] font-black uppercase tracking-widest" }, toDisplayString(o.status), 1)
                    ], 2)
                  ])
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Olzl80Ao.js.map
