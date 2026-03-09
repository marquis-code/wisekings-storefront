import { a as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-E7rDAgD-.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useProductsApi } from './useProductsApi-CvcxMqxs.mjs';
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
    useProductsApi();
    const products = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const page = ref(1);
    const total = ref(0);
    const search = ref("");
    const categoryFilter = ref("");
    const sortBy = ref("");
    const totalPages = computed(() => Math.ceil(total.value / 12));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}><div class="flex flex-col md:flex-row gap-8"><aside class="w-full md:w-56 flex-shrink-0"><h2 class="text-lg font-bold text-gray-900 mb-4">Filters</h2><div class="space-y-4"><div><label class="label">Category</label><select class="input"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(categoryFilter)) ? ssrLooseContain(unref(categoryFilter), "") : ssrLooseEqual(unref(categoryFilter), "")) ? " selected" : ""}>All</option><!--[-->`);
      ssrRenderList(unref(categories), (c) => {
        _push(`<option${ssrRenderAttr("value", c._id)}${ssrIncludeBooleanAttr(Array.isArray(unref(categoryFilter)) ? ssrLooseContain(unref(categoryFilter), c._id) : ssrLooseEqual(unref(categoryFilter), c._id)) ? " selected" : ""}>${ssrInterpolate(c.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="label">Sort by</label><select class="input"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "") : ssrLooseEqual(unref(sortBy), "")) ? " selected" : ""}>Default</option><option value="price-asc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price-asc") : ssrLooseEqual(unref(sortBy), "price-asc")) ? " selected" : ""}>Price: Low \u2192 High</option><option value="price-desc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price-desc") : ssrLooseEqual(unref(sortBy), "price-desc")) ? " selected" : ""}>Price: High \u2192 Low</option><option value="name"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "name") : ssrLooseEqual(unref(sortBy), "name")) ? " selected" : ""}>Name</option></select></div></div></aside><div class="flex-1"><div class="flex items-center justify-between mb-6"><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Search products..." class="input max-w-xs"><p class="text-sm text-gray-400">${ssrInterpolate(unref(total))} products</p></div>`);
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
      _push(`</div></div></div>`);
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
//# sourceMappingURL=index-rSoKXyPd.mjs.map
