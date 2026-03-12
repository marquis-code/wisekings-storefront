import __nuxt_component_1$1 from './index-DgwuGhDw.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSlots, useId, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-COB5qXTH.mjs';
import { u as useFetchProducts, a as useFetchCategories } from './useFetchCategories-kKybYx7z.mjs';
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
import './products-CedEkygp.mjs';
import './useCustomToast-CwIASTqq.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/axios/index.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SelectInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    label: {},
    options: { default: () => [] },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    errorMessage: { default: "" },
    showError: { type: Boolean, default: true },
    hasError: { type: Boolean, default: false },
    position: { default: "standalone" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const showDropdown = ref(false);
    const isFocused = ref(false);
    ref(null);
    ref(null);
    const searchQuery = ref("");
    const inputId = useId();
    const getLabel = (option) => {
      if (typeof option === "string") return option;
      return option.label || option.name || option.value || option.code || String(option);
    };
    const getValue = (option) => {
      if (typeof option === "string") return option;
      return option.value || option.code || option.name || option;
    };
    const selectedLabel = computed(() => {
      const found = props.options.find((opt) => {
        const optValue = getValue(opt);
        return optValue === props.modelValue;
      });
      return found ? getLabel(found) : "";
    });
    const selectedOption = computed(() => {
      return props.options.find((opt) => {
        const optValue = getValue(opt);
        return optValue === props.modelValue;
      });
    });
    const filteredOptions = computed(() => {
      if (!searchQuery.value.trim()) {
        return props.options;
      }
      const query = searchQuery.value.toLowerCase();
      return props.options.filter((option) => {
        const label = getLabel(option).toLowerCase();
        return label.includes(query);
      });
    });
    const roundedClasses = computed(() => {
      switch (props.position) {
        case "top":
          return "rounded-t-xl rounded-b-sm";
        case "middle":
          return "rounded-sm";
        case "bottom":
          return "rounded-b-xl rounded-t-sm";
        case "standalone":
        default:
          return "rounded-xl";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2" }, _attrs))} data-v-468d7803><div class="relative input-container" data-v-468d7803><label${ssrRenderAttr("for", unref(inputId))} class="${ssrRenderClass([
        "absolute transition-all duration-300 ease-in-out pointer-events-none z-10",
        isFocused.value || __props.modelValue ? "text-xs text-gray-500 left-3 top-2" : "text-base text-gray-500 left-3 top-1/2 transform -translate-y-1/2"
      ])}" data-v-468d7803>${ssrInterpolate(__props.label)}</label><div class="${ssrRenderClass([
        "w-full py-4 pt-6 px-3 bg-gray-50 border border-gray-200 flex justify-between items-center cursor-pointer",
        "focus:outline-none focus:ring-1 focus:ring-[#033958] focus:border-[#033958] transition-all duration-300",
        roundedClasses.value,
        __props.disabled ? "opacity-50 cursor-not-allowed" : "",
        __props.hasError || __props.errorMessage && __props.showError ? "ring-1 ring-red-500 border-red-500" : ""
      ])}" data-v-468d7803><span class="text-gray-900" data-v-468d7803>`);
      if (slots["selected-label"] && selectedOption.value) {
        ssrRenderSlot(_ctx.$slots, "selected-label", { option: selectedOption.value }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(selectedLabel.value)}<!--]-->`);
      }
      _push(`</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "transform rotate-180": showDropdown.value }, "w-4 h-4 transition-transform duration-200"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-468d7803><path d="M6 9l6 6 6-6" data-v-468d7803></path></svg></div>`);
      if (showDropdown.value) {
        _push(`<div class="absolute z-20 mt-1 w-full bg-white shadow-xl rounded-md overflow-hidden" data-v-468d7803><div class="p-2 border-b-[0.5px] border-gray-50 sticky top-0 bg-white" data-v-468d7803><div class="relative" data-v-468d7803><svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-468d7803><circle cx="11" cy="11" r="8" data-v-468d7803></circle><path d="m21 21-4.35-4.35" data-v-468d7803></path></svg><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search..." class="w-full pl-9 pr-3 py-3 border border-gray-100 rounded-xl focus:border-[#033958]/30 outline-none text-sm bg-gray-50" data-v-468d7803></div></div><div class="max-h-60 overflow-y-auto p-1" data-v-468d7803><!--[-->`);
        ssrRenderList(filteredOptions.value, (option, index) => {
          _push(`<div class="p-3 font-semibold hover:bg-gray-50 rounded-xl cursor-pointer transition-all text-sm text-gray-700 flex items-center justify-between group" data-v-468d7803><div class="flex-1" data-v-468d7803>`);
          if (slots.default) {
            ssrRenderSlot(_ctx.$slots, "default", {
              option,
              index
            }, null, _push, _parent);
          } else {
            _push(`<!--[-->${ssrInterpolate(getLabel(option))}<!--]-->`);
          }
          _push(`</div>`);
          if (getValue(option) === __props.modelValue) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "w-4 h-4 text-[#033958]"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (filteredOptions.value.length === 0) {
          _push(`<div class="p-4 text-center text-sm text-gray-500" data-v-468d7803> No results found for &quot;${ssrInterpolate(searchQuery.value)}&quot; </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.errorMessage && __props.showError) {
        _push(`<div class="mt-2 flex items-center text-red-600 text-sm" data-v-468d7803><svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" data-v-468d7803><circle cx="12" cy="12" r="10" data-v-468d7803></circle><line x1="12" x2="12" y1="8" y2="12" data-v-468d7803></line><line x1="12" x2="12.01" y1="16" y2="16" data-v-468d7803></line></svg> ${ssrInterpolate(__props.errorMessage)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/SelectInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-468d7803"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { products, loading, total, fetchProducts } = useFetchProducts();
    const { categories } = useFetchCategories();
    const page = ref(1);
    const search = ref("");
    const categoryFilter = ref("");
    const sortBy = ref("");
    const categoryOptions = computed(() => {
      const options = categories.value.map((c) => ({
        label: c.name,
        value: c._id
      }));
      return [{ label: "All Categories", value: "" }, ...options];
    });
    const sortOptions = [
      { label: "Default Sorting", value: "" },
      { label: "Price: Low to High", value: "price-asc" },
      { label: "Price: High to Low", value: "price-desc" },
      { label: "A-Z Name", value: "name" }
    ];
    const totalPages = computed(() => Math.ceil(total.value / 12));
    async function handleFetch() {
      const params = { page: page.value, limit: 12, search: search.value || void 0, category: categoryFilter.value || void 0 };
      if (sortBy.value === "price-asc") {
        params.sortBy = "price";
        params.sortOrder = "asc";
      } else if (sortBy.value === "price-desc") {
        params.sortBy = "price";
        params.sortOrder = "desc";
      } else if (sortBy.value === "name") {
        params.sortBy = "name";
        params.sortOrder = "asc";
      }
      await fetchProducts(params);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_CoreSelectInput = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}><section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-gray-950"><div class="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover opacity-50 animate-ken-burns"><div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div></div><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20"><div class="max-w-2xl"><div class="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md border border-white/20 mb-6 font-sans">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shopping-bag",
        size: "14",
        class: "text-amber-400"
      }, null, _parent));
      _push(` The Full Collection </div><h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4"> Shop the<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Royal Vault</span></h1><p class="text-lg text-white/60 font-medium">Explore our meticulously curated selection of premium Nigerian snacks.</p></div></div></section><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="flex flex-col md:flex-row gap-8"><aside class="w-full md:w-64 flex-shrink-0 space-y-8"><div class="flex items-center gap-3 mb-6"><div class="w-8 h-8 rounded-lg bg-[#033958]/5 flex items-center justify-center text-[#033958]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:sliders-horizontal",
        size: "18"
      }, null, _parent));
      _push(`</div><h2 class="text-xl font-black text-gray-950 tracking-tight">Refine Manifest</h2></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_CoreSelectInput, {
        modelValue: unref(categoryFilter),
        "onUpdate:modelValue": [($event) => isRef(categoryFilter) ? categoryFilter.value = $event : null, ($event) => {
          page.value = 1;
          handleFetch();
        }],
        label: "Product Category",
        options: unref(categoryOptions)
      }, null, _parent));
      _push(ssrRenderComponent(_component_CoreSelectInput, {
        modelValue: unref(sortBy),
        "onUpdate:modelValue": [($event) => isRef(sortBy) ? sortBy.value = $event : null, ($event) => handleFetch()],
        label: "Sort Archive By",
        options: sortOptions
      }, null, _parent));
      _push(`</div></aside><div class="flex-1"><div class="flex items-center justify-between mb-6"><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Search products..." class="input max-w-xs"><p class="text-sm text-gray-400">${ssrInterpolate(unref(total))} products</p></div>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-20 text-gray-400">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-8 h-8 animate-spin mx-auto"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(products).length === 0) {
        _push(`<div class="text-center py-20 text-gray-400">No products found</div>`);
      } else {
        _push(`<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"><!--[-->`);
        ssrRenderList(unref(products), (p) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: p._id,
            to: `/products/${p.slug}`,
            class: "group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b;
              if (_push2) {
                _push2(`<div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3"${_scopeId}>`);
                if ((_a = p.images) == null ? void 0 : _a[0]) {
                  _push2(`<img${ssrRenderAttr("src", p.images[0])}${ssrRenderAttr("alt", p.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:image",
                    class: "w-10 h-10 text-gray-300"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`</div><h3 class="text-sm font-semibold text-gray-900 line-clamp-1"${_scopeId}>${ssrInterpolate(p.name)}</h3><div class="flex items-center gap-2 mt-1"${_scopeId}><span class="text-sm font-bold text-gray-900"${_scopeId}>\u20A6${ssrInterpolate(p.price.toLocaleString())}</span>`);
                if (p.compareAtPrice) {
                  _push2(`<span class="text-xs text-gray-400 line-through"${_scopeId}>\u20A6${ssrInterpolate(p.compareAtPrice.toLocaleString())}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (p.stock <= 5 && p.stock > 0) {
                  _push2(`<p class="text-xs text-amber-600 mt-1"${_scopeId}>Only ${ssrInterpolate(p.stock)} left!</p>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("div", { class: "aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3" }, [
                    ((_b = p.images) == null ? void 0 : _b[0]) ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: p.images[0],
                      alt: p.name,
                      class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full h-full flex items-center justify-center"
                    }, [
                      createVNode(_component_Icon, {
                        name: "lucide:image",
                        class: "w-10 h-10 text-gray-300"
                      })
                    ]))
                  ]),
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 line-clamp-1" }, toDisplayString(p.name), 1),
                  createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                    createVNode("span", { class: "text-sm font-bold text-gray-900" }, "\u20A6" + toDisplayString(p.price.toLocaleString()), 1),
                    p.compareAtPrice ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs text-gray-400 line-through"
                    }, "\u20A6" + toDisplayString(p.compareAtPrice.toLocaleString()), 1)) : createCommentVNode("", true)
                  ]),
                  p.stock <= 5 && p.stock > 0 ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs text-amber-600 mt-1"
                  }, "Only " + toDisplayString(p.stock) + " left!", 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (unref(totalPages) > 1) {
        _push(`<div class="flex justify-center gap-2 mt-8"><button${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""} class="btn-secondary btn-sm">Prev</button><span class="px-4 py-2 text-sm text-gray-500">${ssrInterpolate(unref(page))} / ${ssrInterpolate(unref(totalPages))}</span><button${ssrIncludeBooleanAttr(unref(page) >= unref(totalPages)) ? " disabled" : ""} class="btn-secondary btn-sm">Next</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B9ERjMu2.mjs.map
