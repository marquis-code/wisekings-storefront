import { _ as __nuxt_component_0 } from "./nuxt-link-E7rDAgD-.js";
import { a as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, ref, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useProductsApi } from "./useProductsApi-CvcxMqxs.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "@iconify/vue";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useProductsApi();
    const products = ref([]);
    const categories = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"><div class="max-w-2xl"><h1 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]"> Premium Quality.<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Delivered Fast.</span></h1><p class="mt-6 text-lg text-gray-600 max-w-lg">Discover our curated collection of premium products. Quality you can trust, prices you&#39;ll love.</p><div class="mt-8 flex gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop Now`);
          } else {
            return [
              createTextVNode("Shop Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "btn-secondary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Browse Categories`);
          } else {
            return [
              createTextVNode("Browse Categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent hidden lg:block"></div></section><section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><h2 class="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(categories), (c) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: c._id,
          to: `/categories/${c.slug}`,
          class: "group relative bg-gray-100 rounded-2xl p-6 h-40 flex items-end overflow-hidden hover:shadow-lg transition-all duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId}></div><h3 class="relative text-lg font-semibold text-gray-900 group-hover:text-white transition-colors"${_scopeId}>${ssrInterpolate(c.name)}</h3>`);
            } else {
              return [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                createVNode("h3", { class: "relative text-lg font-semibold text-gray-900 group-hover:text-white transition-colors" }, toDisplayString(c.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (unref(categories).length === 0) {
        _push(`<div class="col-span-full text-center py-8 text-gray-400">Loading categories...</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="flex items-center justify-between mb-8"><h2 class="text-2xl font-bold text-gray-900">Featured Products</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-sm font-medium text-gray-600 hover:text-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all →`);
          } else {
            return [
              createTextVNode("View all →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"><!--[-->`);
      ssrRenderList(unref(products), (p) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: p._id,
          to: `/products/${p.slug}`,
          class: "group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3"${_scopeId}>`);
              if (p.images?.[0]) {
                _push2(`<img${ssrRenderAttr("src", p.images[0])}${ssrRenderAttr("alt", p.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId}>`);
              } else {
                _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:image",
                  class: "w-10 h-10 text-gray-300"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div><h3 class="text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1"${_scopeId}>${ssrInterpolate(p.name)}</h3><div class="flex items-center gap-2 mt-1"${_scopeId}><span class="text-sm font-bold text-gray-900"${_scopeId}>₦${ssrInterpolate(p.price.toLocaleString())}</span>`);
              if (p.compareAtPrice) {
                _push2(`<span class="text-xs text-gray-400 line-through"${_scopeId}>₦${ssrInterpolate(p.compareAtPrice.toLocaleString())}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3" }, [
                  p.images?.[0] ? (openBlock(), createBlock("img", {
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
                createVNode("h3", { class: "text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1" }, toDisplayString(p.name), 1),
                createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                  createVNode("span", { class: "text-sm font-bold text-gray-900" }, "₦" + toDisplayString(p.price.toLocaleString()), 1),
                  p.compareAtPrice ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-xs text-gray-400 line-through"
                  }, "₦" + toDisplayString(p.compareAtPrice.toLocaleString()), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(products).length === 0) {
        _push(`<div class="text-center py-12 text-gray-400">Loading products...</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="bg-gray-900 text-white py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-bold mb-4">Join the WiseKings Community</h2><p class="text-gray-400 mb-8 max-w-md mx-auto">Earn commissions by referring customers. Become a merchant or partner today.</p><div class="flex justify-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "btn bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Started`);
          } else {
            return [
              createTextVNode("Get Started")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DcGx1Zr7.js.map
