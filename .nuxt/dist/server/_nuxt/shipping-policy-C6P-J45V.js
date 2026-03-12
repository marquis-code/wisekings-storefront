import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./hero1-jqtTISVW.js";
import { c as useSeoMeta } from "../server.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
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
import "@iconify/vue";
import "firebase/analytics";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shipping-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Shipping Policy | WiseKings",
      description: "Learn about WiseKings shipping rates, delivery times, and order tracking.",
      ogTitle: "Shipping Policy | WiseKings",
      ogDescription: "Speedy and secure delivery for all WiseKings snacks."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}><section class="relative py-32 bg-gray-900 border-b border-gray-100 overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="Shipping Banner" class="absolute inset-0 w-full h-full object-cover opacity-40"><div class="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900"></div><div class="relative z-10 max-w-4xl mx-auto px-6 text-center"><h1 class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">Shipping Policy</h1><p class="text-gray-300 font-medium">Global Logistics &amp; Delivery Excellence</p></div></section><section class="py-20"><div class="max-w-3xl mx-auto px-6 prose prose-indigo"><p class="text-lg text-gray-600 leading-relaxed mb-8"> We strive to deliver your favourite snacks with speed and care. Our global logistics network ensures that your order reaches you in perfect condition. </p><h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">1. Order Processing</h2><p class="text-gray-600 mb-6"> All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. </p><h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">2. Shipping Rates &amp; Delivery Estimates</h2><p class="text-gray-600 mb-6 font-bold">Standard Delivery (3-5 business days):</p><ul class="list-disc pl-6 text-gray-600 mb-6"><li>Orders over ₦50,000: FREE</li><li>Orders under ₦50,000: ₦2,500 flat rate</li></ul><p class="text-gray-600 mb-6 font-bold">Express Delivery (1-2 business days):</p><ul class="list-disc pl-6 text-gray-600 mb-8"><li>All orders: ₦5,000</li></ul><h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">3. Shipment Confirmation &amp; Order Tracking</h2><p class="text-gray-600 mb-6"> You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours. </p><h2 class="text-2xl font-black text-gray-900 mt-12 mb-6 tracking-tight uppercase">4. International Shipping</h2><p class="text-gray-600 mb-12"> We currently ship to select international locations. Customs, duties, and taxes are the responsibility of the customer. Shipping rates for international orders are calculated at checkout. </p><div class="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 italic text-gray-500 text-center text-sm"> &quot;Your snacks are handled with the utmost priority, from our warehouse to your doorstep.&quot; </div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shipping-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=shipping-policy-C6P-J45V.js.map
