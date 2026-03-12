import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { ref, defineComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { o as orders_api } from "./orders-CBnaFfAv.js";
import { u as useCustomToast } from "./useCustomToast-CwIASTqq.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import { d as useRoute } from "../server.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "./axios.config-BkQMnnZW.js";
import "axios";
const useFetchOrderById = () => {
  const loading = ref(false);
  const order = ref(null);
  const { showToast } = useCustomToast();
  const fetchOrder = async (id) => {
    loading.value = true;
    try {
      const res = await orders_api.getById(id);
      order.value = res.data || res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Failed to fetch order", toastType: "error" });
    } finally {
      loading.value = false;
    }
  };
  return { loading, order, fetchOrder };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const { order, loading } = useFetchOrderById();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10" }, _attrs))}><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:text-gray-900 transition-all border border-gray-100"
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
      _push(`<div class="space-y-1"><h1 class="text-3xl font-black text-gray-900 tracking-tight">Order Manifest</h1><p class="text-sm font-medium text-gray-400 uppercase tracking-widest">Transaction Status &amp; Details</p></div></div>`);
      if (unref(loading)) {
        _push(`<div class="flex flex-col items-center justify-center py-24">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-10 h-10 animate-spin text-[#033958]/20"
        }, null, _parent));
        _push(`<p class="mt-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Opening manifest...</p></div>`);
      } else if (unref(order)) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-10"><div class="lg:col-span-12 space-y-8"><div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100"><div class="space-y-1"><span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Reference</span><code class="text-xl font-black text-[#033958] tracking-widest">${ssrInterpolate(unref(order).orderNumber)}</code></div><div class="flex items-center gap-3"><div class="text-right"><span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Status</span><p class="${ssrRenderClass([unref(order).status === "delivered" ? "text-emerald-500" : "text-amber-500", "text-xs font-black uppercase tracking-widest"])}">${ssrInterpolate(unref(order).status)}</p></div><div class="${ssrRenderClass([unref(order).status === "delivered" ? "bg-emerald-50 text-emerald-500" : "bg-amber-50 text-amber-500", "w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-100"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(order).status === "delivered" ? "lucide:check-circle" : "lucide:clock",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div></div></div><div class="space-y-4"><h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400 px-2">Purchase List</h3><div class="bg-gray-50/50 rounded-[32px] border border-gray-50 overflow-hidden"><!--[-->`);
        ssrRenderList(unref(order).items, (item) => {
          _push(`<div class="p-6 flex items-center justify-between border-b border-gray-50 last:border-0 hover:bg-white transition-colors"><div class="flex items-center gap-5"><div class="w-16 h-16 bg-white rounded-2xl border border-gray-100 overflow-hidden">`);
          if (item.image) {
            _push(`<img${ssrRenderAttr("src", item.image)} class="w-full h-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div><p class="text-sm font-black text-gray-900">${ssrInterpolate(item.name)}</p><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">₦${ssrInterpolate(item.price.toLocaleString())} · Qty: ${ssrInterpolate(item.quantity)}</p></div></div><p class="text-sm font-black text-gray-900">₦${ssrInterpolate((item.price * item.quantity).toLocaleString())}</p></div>`);
        });
        _push(`<!--]--></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-10"><div class="p-8 bg-[#033958] rounded-[40px] shadow-2xl shadow-[#033958]/20 relative overflow-hidden group"><div class="absolute -right-4 -top-4 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:receipt",
          size: "120"
        }, null, _parent));
        _push(`</div><div class="relative z-10 space-y-6 text-white/50"><div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest"><span>Subtotal</span><span class="text-white">₦${ssrInterpolate(unref(order).totalAmount.toLocaleString())}</span></div><div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest"><span>Shipping Fee</span><span class="text-white">₦${ssrInterpolate((unref(order).shippingFee || 0).toLocaleString())}</span></div><div class="pt-6 border-t border-white/10 flex justify-between items-center"><span class="text-xs font-black uppercase tracking-[0.2em] text-white">Grand Total</span><span class="text-3xl font-black text-white tracking-tighter">₦${ssrInterpolate((unref(order).totalAmount + (unref(order).shippingFee || 0)).toLocaleString())}</span></div></div></div>`);
        if (unref(order).shippingAddress) {
          _push(`<div class="p-8 bg-gray-50 rounded-[40px] border border-gray-100 flex flex-col justify-between"><div><div class="flex items-center gap-3 mb-6">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:truck",
            class: "text-[#033958]"
          }, null, _parent));
          _push(`<h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-900">Destination</h3></div><div class="space-y-4"><div><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recipient</p><p class="text-sm font-black text-gray-900">${ssrInterpolate(unref(order).shippingAddress.fullName)}</p></div><div><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Address</p><p class="text-sm font-bold text-gray-600 leading-relaxed">${ssrInterpolate(unref(order).shippingAddress.address)}, ${ssrInterpolate(unref(order).shippingAddress.city)}, ${ssrInterpolate(unref(order).shippingAddress.state)}</p></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-Bjvbw2vx.js.map
