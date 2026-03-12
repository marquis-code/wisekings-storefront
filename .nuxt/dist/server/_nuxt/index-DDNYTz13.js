import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { a as useAuthState } from "../server.mjs";
import { u as useFetchOrders } from "./useFetchOrders-f7F6HpNi.js";
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
import "./orders-CBnaFfAv.js";
import "./axios.config-BkQMnnZW.js";
import "axios";
import "./useCustomToast-CwIASTqq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuthState();
    const { orders, loading } = useFetchOrders();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><div class="flex flex-col md:flex-row md:items-center justify-between gap-6"><div class="space-y-2"><h1 class="text-4xl font-black text-gray-900 tracking-tight">Account Overview</h1><div class="flex items-center gap-3"><div class="flex -space-x-2"><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden"><img${ssrRenderAttr("src", `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(user)?.fullName}${i}`)} class="w-full h-full object-cover"></div>`);
      });
      _push(`<!--]--></div><p class="text-xs font-bold text-gray-400">Join 2.4k+ Royal Members snacking smarter.</p></div></div><div class="flex items-center gap-4"><div class="px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center gap-3 group hover:border-[#033958]/20 transition-all cursor-default"><div class="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:crown",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div><p class="text-[9px] font-black uppercase tracking-widest text-gray-400">Tier Status</p><p class="text-xs font-black text-gray-900">ROYAL MEMBER</p></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="p-8 bg-gradient-to-br from-[#033958] to-[#022c45] rounded-[40px] shadow-2xl shadow-[#033958]/30 relative overflow-hidden group"><div class="absolute -right-6 -top-6 p-12 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:sparkles",
        size: "160"
      }, null, _parent));
      _push(`</div><div class="relative z-10 space-y-8"><div class="flex items-center justify-between"><div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:zap",
        class: "w-6 h-6 text-amber-400"
      }, null, _parent));
      _push(`</div><span class="px-3 py-1 bg-amber-400/20 text-amber-100 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-400/20">+12% this week</span></div><div><h2 class="font-black text-white/40 text-[10px] uppercase tracking-[0.3em]">Available Loyalty</h2><div class="flex items-baseline gap-3 mt-3"><span class="text-6xl font-black text-white tracking-tighter">${ssrInterpolate(unref(user)?.points || 0)}</span><span class="text-sm font-bold text-white/30 uppercase tracking-[0.2em]">WK Points</span></div></div><button class="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all"> Redeem Rewards </button></div></div><div class="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all flex flex-col justify-between group relative overflow-hidden"><div class="absolute -right-4 -bottom-4 p-8 opacity-5 text-[#033958] group-hover:scale-110 transition-transform duration-700">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:package",
        size: "140"
      }, null, _parent));
      _push(`</div><div class="relative z-10"><div class="flex items-center justify-between mb-8"><div class="w-12 h-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center group-hover:bg-[#033958] group-hover:text-white transition-all duration-500">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:box",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div></div><h2 class="font-black text-gray-400 text-[10px] uppercase tracking-[0.3em]">Shipments Pending</h2><p class="text-5xl font-black text-gray-900 mt-3 tracking-tighter">${ssrInterpolate(unref(orders).length.toString().padStart(2, "0"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "relative z-10 text-[10px] font-black uppercase tracking-widest text-[#033958] flex items-center gap-2 mt-10 group-hover:gap-3 transition-all border-t border-gray-50 pt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Track Active Manifests `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:move-right",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Track Active Manifests "),
              createVNode(_component_Icon, {
                name: "lucide:move-right",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all flex flex-col justify-between group relative overflow-hidden"><div class="absolute -right-4 -bottom-4 p-8 opacity-5 text-amber-600 group-hover:scale-110 transition-transform duration-700">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map",
        size: "140"
      }, null, _parent));
      _push(`</div><div class="relative z-10"><div class="flex items-center justify-between mb-8"><div class="w-12 h-12 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map-pin",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div></div><h2 class="font-black text-gray-400 text-[10px] uppercase tracking-[0.3em]">Saved Destinations</h2><p class="text-5xl font-black text-gray-900 mt-3 tracking-tighter">01</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/profile",
        class: "relative z-10 text-[10px] font-black uppercase tracking-widest text-amber-600 flex items-center gap-2 mt-10 group-hover:gap-3 transition-all border-t border-gray-50 pt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Preferences `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:fingerprint",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Manage Preferences "),
              createVNode(_component_Icon, {
                name: "lucide:fingerprint",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-12"><div class="lg:col-span-8 space-y-6"><div class="flex items-center justify-between px-2"><div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div><h3 class="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Transaction Pulse</h3></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "text-[10px] font-black uppercase tracking-widest text-[#033958] hover:gap-2 transition-all flex items-center gap-1 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` History `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:history",
              class: "w-3 h-3 group-hover:rotate-12 transition-transform"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" History "),
              createVNode(_component_Icon, {
                name: "lucide:history",
                class: "w-3 h-3 group-hover:rotate-12 transition-transform"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-gray-50/50 rounded-[40px] border border-gray-100 overflow-hidden">`);
      if (unref(loading)) {
        _push(`<div class="p-20 text-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-10 h-10 animate-spin mx-auto text-gray-200"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(orders).length === 0) {
        _push(`<div class="p-20 text-center space-y-4"><div class="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-gray-200 font-black flex items-center justify-center mx-auto text-gray-100 group">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:shapes",
          size: "40",
          class: "group-hover:scale-110 transition-transform"
        }, null, _parent));
        _push(`</div><div class="space-y-1"><p class="text-sm font-black text-gray-900 uppercase tracking-widest">No Manifests Found</p><p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your snacking history is currently blank.</p></div></div>`);
      } else {
        _push(`<div class="divide-y divide-gray-100"><!--[-->`);
        ssrRenderList(unref(orders).slice(0, 3), (order) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: order._id,
            to: `/account/orders/${order._id}`,
            class: "flex items-center justify-between p-8 hover:bg-white transition-all group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center gap-6"${_scopeId}><div class="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: order.status === "delivered" ? "lucide:check-circle-2" : "lucide:clock-4",
                  class: order.status === "delivered" ? "text-emerald-500" : "text-amber-500",
                  size: "24"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 leading-none"${_scopeId}>${ssrInterpolate(order.orderNumber)}</p><p class="text-sm font-black text-gray-900"${_scopeId}>${ssrInterpolate(order.items?.length)} Snacking Items</p></div></div><div class="text-right"${_scopeId}><p class="text-sm font-black text-gray-900"${_scopeId}>₦${ssrInterpolate(order.totalAmount.toLocaleString())}</p><p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1"${_scopeId}>${ssrInterpolate(new Date(order.createdAt).toLocaleDateString())}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center gap-6" }, [
                    createVNode("div", { class: "w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all" }, [
                      createVNode(_component_Icon, {
                        name: order.status === "delivered" ? "lucide:check-circle-2" : "lucide:clock-4",
                        class: order.status === "delivered" ? "text-emerald-500" : "text-amber-500",
                        size: "24"
                      }, null, 8, ["name", "class"])
                    ]),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 leading-none" }, toDisplayString(order.orderNumber), 1),
                      createVNode("p", { class: "text-sm font-black text-gray-900" }, toDisplayString(order.items?.length) + " Snacking Items", 1)
                    ])
                  ]),
                  createVNode("div", { class: "text-right" }, [
                    createVNode("p", { class: "text-sm font-black text-gray-900" }, "₦" + toDisplayString(order.totalAmount.toLocaleString()), 1),
                    createVNode("p", { class: "text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1" }, toDisplayString(new Date(order.createdAt).toLocaleDateString()), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div><div class="lg:col-span-4 space-y-8"><h3 class="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 px-2">Ecosystem</h3><div class="space-y-4"><div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-4 hover:border-[#033958]/20 transition-all group"><div class="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:gift",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><p class="text-xs font-black uppercase tracking-widest text-gray-900 leading-tight">Refer a Snack Enthusiast</p><p class="text-[10px] font-medium text-gray-400">Give ₦500, Get ₦500 in loyal points for every snack partner you bring.</p><button class="text-[9px] font-black uppercase tracking-[0.2em] text-[#033958] py-2 border-b border-[#033958]/10 w-fit group-hover:border-[#033958] transition-all">Copy Invite Link</button></div><div class="p-6 bg-[#033958]/5 border border-[#033958]/10 rounded-3xl flex items-center gap-4 group cursor-pointer hover:bg-[#033958]/10 transition-all"><div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#033958]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:message-square",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div><p class="text-[10px] font-black uppercase tracking-widest text-[#033958]">Concierge</p><p class="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em]">24/7 Support Desk</p></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DDNYTz13.js.map
