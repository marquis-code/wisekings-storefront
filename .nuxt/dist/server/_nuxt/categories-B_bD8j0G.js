import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./axios.config-BkQMnnZW.js";
import { c as useSeoMeta } from "../server.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
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
import "firebase/analytics";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ref([]);
    const loading = ref(true);
    useSeoMeta({
      title: "Snack Categories | WiseKings Curation",
      description: "Browse our curated collection of artisan snacks. Find your favorite flavors across our specialized categories.",
      ogTitle: "Explore Snack Categories | WiseKings",
      ogDescription: "From gourmet nuts to handcrafted sweets, discover excellence in every category."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}><section class="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-gray-950"><div class="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover opacity-50 animate-ken-burns"><div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div></div><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 pt-20 text-center"><div class="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md border border-white/20 mb-6 font-sans mx-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:grid-3x3",
        size: "14",
        class: "text-amber-400"
      }, null, _parent));
      _push(` Curation </div><h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">Explore Categories</h1><p class="text-lg text-white/60 font-medium max-w-2xl mx-auto">Browse our curated collection of snacks by category. Find your favorites faster.</p></div></section><section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">`);
      if (loading.value) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="animate-pulse"><div class="bg-gray-100 rounded-3xl h-56"></div><div class="mt-4 h-5 bg-gray-100 rounded w-3/4"></div><div class="mt-2 h-4 bg-gray-50 rounded w-1/2"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (categories.value.length) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"><!--[-->`);
        ssrRenderList(categories.value, (cat) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: cat._id,
            to: `/products?category=${cat._id}`,
            class: "group block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative rounded-[2.5rem] overflow-hidden h-72 bg-gray-50 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-gray-200"${_scopeId}>`);
                if (cat.image) {
                  _push2(`<img${ssrRenderAttr("src", cat.image)}${ssrRenderAttr("alt", cat.name)} class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:shopping-basket",
                    size: "48",
                    class: "text-gray-200"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`<div class="absolute inset-0 bg-gradient-to-t from-[#033958] via-[#033958]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"${_scopeId}></div><div class="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:arrow-up-right",
                  size: "20",
                  class: "text-white"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"${_scopeId}><h3 class="text-2xl font-black text-white tracking-tight mb-2 uppercase"${_scopeId}>${ssrInterpolate(cat.name)}</h3><p class="text-white/60 text-xs font-bold uppercase tracking-widest line-clamp-1"${_scopeId}>Explore Collection</p></div></div><div class="mt-6 px-4 group-hover:translate-x-1 transition-transform duration-500"${_scopeId}><h3 class="text-xl font-black text-gray-900 leading-none group-hover:text-[#033958] transition-colors uppercase tracking-tight"${_scopeId}>${ssrInterpolate(cat.name)}</h3><p class="text-sm text-gray-400 mt-2 font-medium line-clamp-2 leading-relaxed"${_scopeId}>${ssrInterpolate(cat.description || "Discover our exclusively curated selection of premium snacks.")}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative rounded-[2.5rem] overflow-hidden h-72 bg-gray-50 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-gray-200" }, [
                    cat.image ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: cat.image,
                      alt: cat.name,
                      class: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
                    }, [
                      createVNode(_component_Icon, {
                        name: "lucide:shopping-basket",
                        size: "48",
                        class: "text-gray-200"
                      })
                    ])),
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-[#033958] via-[#033958]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" }),
                    createVNode("div", { class: "absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-up-right",
                        size: "20",
                        class: "text-white"
                      })
                    ]),
                    createVNode("div", { class: "absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500" }, [
                      createVNode("h3", { class: "text-2xl font-black text-white tracking-tight mb-2 uppercase" }, toDisplayString(cat.name), 1),
                      createVNode("p", { class: "text-white/60 text-xs font-bold uppercase tracking-widest line-clamp-1" }, "Explore Collection")
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 px-4 group-hover:translate-x-1 transition-transform duration-500" }, [
                    createVNode("h3", { class: "text-xl font-black text-gray-900 leading-none group-hover:text-[#033958] transition-colors uppercase tracking-tight" }, toDisplayString(cat.name), 1),
                    createVNode("p", { class: "text-sm text-gray-400 mt-2 font-medium line-clamp-2 leading-relaxed" }, toDisplayString(cat.description || "Discover our exclusively curated selection of premium snacks."), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20"><div class="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:folder-open",
          size: "40",
          class: "text-gray-300"
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold text-gray-900 mb-2">No categories yet</h3><p class="text-gray-500">Check back soon — we&#39;re adding new snack categories!</p></div>`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=categories-B_bD8j0G.js.map
