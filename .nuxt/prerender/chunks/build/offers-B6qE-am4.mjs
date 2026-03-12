import __nuxt_component_1 from './index-DgwuGhDw.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-COB5qXTH.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/utils/lib/css/icon.mjs';
import './server.mjs';
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
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    options: {},
    modelValue: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(false);
    const dropdownRef = ref(null);
    const selected = computed(() => props.modelValue);
    const selectedLabel = computed(() => {
      const opt = props.options.find((o) => o.value === props.modelValue);
      return (opt == null ? void 0 : opt.label) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative",
        ref_key: "dropdownRef",
        ref: dropdownRef
      }, _attrs))}><div class="cursor-pointer">`);
      ssrRenderSlot(_ctx.$slots, "trigger", {
        isOpen: isOpen.value,
        selected: selected.value
      }, () => {
        _push(`<div class="${ssrRenderClass([
          "flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all font-medium text-sm",
          isOpen.value ? "border-[#033958] ring-2 ring-[#033958]/10 bg-white" : "border-gray-200 bg-gray-50 hover:border-gray-300"
        ])}"><span class="${ssrRenderClass(selected.value ? "text-gray-900" : "text-gray-400")}">${ssrInterpolate(selected.value ? selectedLabel.value : __props.placeholder)}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-down",
          size: "18",
          class: ["text-gray-400 transition-transform duration-200", isOpen.value ? "rotate-180" : ""]
        }, null, _parent));
        _push(`</div>`);
      }, _push, _parent);
      _push(`</div>`);
      if (isOpen.value) {
        _push(`<div class="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 py-2 max-h-60 overflow-y-auto"><!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<div class="${ssrRenderClass([
            "flex items-center gap-3 px-4 py-3 cursor-pointer transition-all text-sm font-medium",
            selected.value === option.value ? "bg-[#033958]/5 text-[#033958]" : "text-gray-700 hover:bg-gray-50"
          ])}">`);
          if (option.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: option.icon,
              size: "18",
              class: "flex-shrink-0"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(option.label)}</span>`);
          if (selected.value === option.value) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              size: "16",
              class: "ml-auto text-[#033958]"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/Dropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "offers",
  __ssrInlineRender: true,
  setup(__props) {
    const allProducts = ref([]);
    const loading = ref(true);
    const sortBy = ref("discount");
    const sortOptions = [
      { value: "discount", label: "Biggest Discount" },
      { value: "price-asc", label: "Price: Low to High" },
      { value: "price-desc", label: "Price: High to Low" },
      { value: "name", label: "Name: A-Z" }
    ];
    const offers = computed(() => {
      let items = allProducts.value.filter((p) => p.compareAtPrice && p.compareAtPrice > p.price);
      switch (sortBy.value) {
        case "discount":
          items.sort((a, b) => 1 - b.price / b.compareAtPrice - (1 - a.price / a.compareAtPrice));
          break;
        case "price-asc":
          items.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          items.sort((a, b) => b.price - a.price);
          break;
        case "name":
          items.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
      return items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_CoreDropdown = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}><section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-orange-600"><div class="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover opacity-40 animate-ken-burns"><div class="absolute inset-0 bg-gradient-to-t from-orange-700 via-orange-600/40 to-transparent"></div></div><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20 text-center"><div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 mx-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:flame",
        size: "14",
        class: "text-amber-400"
      }, null, _parent));
      _push(` Limited Time Deals </div><h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">Special Offers &amp; Deals</h1><p class="text-lg text-white/80 max-w-2xl mx-auto font-medium">Save big on your favourite snacks. Freshly baked deals updated weekly.</p></div></section><section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16"><div class="flex items-center justify-between mb-10"><h2 class="text-2xl font-extrabold text-gray-900">Today&#39;s Deals</h2>`);
      _push(ssrRenderComponent(_component_CoreDropdown, {
        modelValue: sortBy.value,
        "onUpdate:modelValue": ($event) => sortBy.value = $event,
        options: sortOptions,
        placeholder: "Sort by"
      }, null, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(8, (i) => {
          _push(`<div class="animate-pulse"><div class="bg-gray-100 rounded-3xl h-56"></div><div class="mt-4 h-5 bg-gray-100 rounded w-3/4"></div><div class="mt-2 h-4 bg-gray-50 rounded w-1/2"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (offers.value.length) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(offers.value, (product) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: product._id,
            to: `/products/${product.slug}`,
            class: "group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative rounded-3xl overflow-hidden h-56 bg-gray-50 border border-gray-100 group-hover:shadow-xl group-hover:shadow-orange-500/5 transition-all duration-300"${_scopeId}>`);
                if (product.images && product.images.length) {
                  _push2(`<img${ssrRenderAttr("src", product.images[0])}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId}>`);
                } else {
                  _push2(`<div class="flex items-center justify-center h-full"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:package",
                    size: "36",
                    class: "text-gray-300"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                if (product.compareAtPrice) {
                  _push2(`<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-lg"${_scopeId}>${ssrInterpolate(Math.round((1 - product.price / product.compareAtPrice) * 100))}% OFF </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="mt-5 px-1"${_scopeId}><h3 class="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1"${_scopeId}>${ssrInterpolate(product.name)}</h3><div class="flex items-center gap-2 mt-2"${_scopeId}><span class="text-lg font-extrabold text-gray-900"${_scopeId}>$${ssrInterpolate(product.price.toFixed(2))}</span>`);
                if (product.compareAtPrice) {
                  _push2(`<span class="text-sm text-gray-400 line-through"${_scopeId}>$${ssrInterpolate(product.compareAtPrice.toFixed(2))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative rounded-3xl overflow-hidden h-56 bg-gray-50 border border-gray-100 group-hover:shadow-xl group-hover:shadow-orange-500/5 transition-all duration-300" }, [
                    product.images && product.images.length ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: product.images[0],
                      alt: product.name,
                      class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center justify-center h-full"
                    }, [
                      createVNode(_component_Icon, {
                        name: "lucide:package",
                        size: "36",
                        class: "text-gray-300"
                      })
                    ])),
                    product.compareAtPrice ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-lg"
                    }, toDisplayString(Math.round((1 - product.price / product.compareAtPrice) * 100)) + "% OFF ", 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "mt-5 px-1" }, [
                    createVNode("h3", { class: "text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1" }, toDisplayString(product.name), 1),
                    createVNode("div", { class: "flex items-center gap-2 mt-2" }, [
                      createVNode("span", { class: "text-lg font-extrabold text-gray-900" }, "$" + toDisplayString(product.price.toFixed(2)), 1),
                      product.compareAtPrice ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-sm text-gray-400 line-through"
                      }, "$" + toDisplayString(product.compareAtPrice.toFixed(2)), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20"><div class="w-24 h-24 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-6">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:tag",
          size: "40",
          class: "text-amber-400"
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold text-gray-900 mb-2">No offers at the moment</h3><p class="text-gray-500 mb-6">Check back soon for deals and promotions!</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "inline-flex items-center gap-2 bg-[#033958] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#022a45] transition-all shadow-lg shadow-[#033958]/10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse All Snacks `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                size: "18"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Browse All Snacks "),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  size: "18"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=offers-B6qE-am4.mjs.map
