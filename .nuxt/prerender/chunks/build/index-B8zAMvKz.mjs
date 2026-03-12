import { c as buildAssetsURL } from '../nitro/nitro.mjs';
import __nuxt_component_1 from './index-DgwuGhDw.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-COB5qXTH.mjs';
import { defineComponent, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { u as useFetchProducts, a as useFetchCategories } from './useFetchCategories-kKybYx7z.mjs';
import { _ as _imports_0$1 } from './hero1-jqtTISVW.mjs';
import { _ as _imports_0$2 } from './hero2-BLjoqdhM.mjs';
import { _ as _imports_0$3 } from './hero5-D2ejfIpG.mjs';
import { c as useSeoMeta } from './server.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs';
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
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs';
import './products-CedEkygp.mjs';
import './useCustomToast-CwIASTqq.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/axios/index.js';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/firebase/analytics/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/devalue/index.js';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/unhead/dist/utils.mjs';

const _imports_0 = "" + buildAssetsURL("holiday.BcoQ3Wm-.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { products } = useFetchProducts();
    const { categories } = useFetchCategories();
    const banners = ref([]);
    const promotions = ref([]);
    const currentSlide = ref(0);
    const slides = [
      {
        badge: "Premium Collection",
        icon: "lucide:crown",
        image: _imports_0$1,
        title: "Premium Taste, Delivered Daily",
        subtitle: "Discover our artisan snacks crafted for royalty. From gourmet nuts to handcrafted sweets, quality is our promise.",
        cta: { text: "Elevate Your Taste", link: "/products" }
      },
      {
        badge: "New Arrivals",
        icon: "lucide:sparkles",
        image: _imports_0$2,
        title: "New Flavors, Bold Experiences",
        subtitle: "Explore our latest additions \u2014 unique spice blends and exotic textures that redefine the snacking experience.",
        cta: { text: "Browse New Drops", link: "/products" }
      },
      {
        badge: "Limited Offers",
        icon: "lucide:gem",
        image: _imports_0$3,
        title: "Exclusive Benefits, Royal Savings",
        subtitle: "High-end snacking shouldn't be a luxury. Join our membership for exclusive deals and up to 40% off.",
        cta: { text: "Claim Your Offer", link: "/offers" }
      }
    ];
    useSeoMeta({
      title: "WiseKings | Premium Artisan Snacks & Global Confectionery",
      description: "Experience the pinnacle of snacking with WiseKings. From gourmet nuts to handcrafted sweets, we deliver premium taste to your doorstep.",
      ogTitle: "WiseKings | Premium Artisan Snacks",
      ogDescription: "Luxury snacking redefined. Explore our elite collection today.",
      ogImage: slides[0].image,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative h-[95vh] min-h-[700px] flex items-center overflow-hidden bg-gray-950"><div class="absolute inset-0 z-0"><div class="absolute inset-0"><img${ssrRenderAttr("src", slides[currentSlide.value].image)} alt="Hero Background" class="w-full h-full object-cover opacity-60 animate-ken-burns"><div class="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent"></div><div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div></div><div class="absolute top-1/4 -left-20 w-96 h-96 bg-[#033958]/30 rounded-full blur-[150px] animate-pulse"></div><div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/20 rounded-full blur-[150px] animate-pulse-slow"></div></div><div class="max-w-7xl mx-auto px-8 lg:px-12 w-full relative z-10 lg:pt-20"><div class="max-w-3xl"><div class="space-y-8"><div class="inline-flex items-center gap-3 bg-white/10 text-white/90 px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase backdrop-blur-md border border-white/20">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: slides[currentSlide.value].icon,
        size: "18",
        class: "text-amber-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(slides[currentSlide.value].badge)}</div><h1 class="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">${ssrInterpolate(slides[currentSlide.value].title.split(",")[0])}<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-amber-400">${ssrInterpolate(slides[currentSlide.value].title.split(",")[1] || "")}</span></h1><p class="text-lg md:text-2xl text-white/60 max-w-xl font-medium leading-relaxed">${ssrInterpolate(slides[currentSlide.value].subtitle)}</p><div class="flex flex-col sm:flex-row gap-5 pt-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: slides[currentSlide.value].cta.link,
        class: "bg-white text-gray-950 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-2xl flex items-center gap-4 justify-center group/btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slides[currentSlide.value].cta.text)} `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-right",
              size: "18",
              class: "group-hover/btn:translate-x-1 transition-transform"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(slides[currentSlide.value].cta.text) + " ", 1),
              createVNode(_component_Icon, {
                name: "lucide:chevron-right",
                size: "18",
                class: "group-hover/btn:translate-x-1 transition-transform"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:aperture",
              size: "20",
              class: "text-amber-400"
            }, null, _parent2, _scopeId));
            _push2(` Explore Luxury `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:aperture",
                size: "20",
                class: "text-amber-400"
              }),
              createTextVNode(" Explore Luxury ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center gap-6 mt-16"><div class="flex gap-3"><!--[-->`);
      ssrRenderList(slides, (_, i) => {
        _push(`<button class="${ssrRenderClass(["h-1 rounded-full transition-all duration-700", currentSlide.value === i ? "bg-amber-400 w-12" : "bg-white/20 w-6 hover:bg-white/40"])}"></button>`);
      });
      _push(`<!--]--></div><div class="h-px flex-1 bg-white/10 max-w-[100px]"></div><div class="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]"> 0${ssrInterpolate(currentSlide.value + 1)} / 0${ssrInterpolate(slides.length)}</div></div></div></div></section>`);
      if (banners.value.length) {
        _push(`<section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 -mt-8 relative z-20"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(banners.value.slice(0, 3), (b) => {
          _push(`<a${ssrRenderAttr("href", b.link || "#")} class="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"><img${ssrRenderAttr("src", b.image)}${ssrRenderAttr("alt", b.title)} class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"></a>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16"><div class="flex items-center justify-between mb-8"><h2 class="text-2xl font-extrabold text-gray-900">Shop by Category</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "text-sm font-bold text-[#033958] hover:underline flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              size: "14"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" View all "),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                size: "14"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 md:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(unref(categories), (c) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: c._id,
          to: `/products?category=${c._id}`,
          class: "group relative h-48 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0 z-0"${_scopeId}>`);
              if (c.image) {
                _push2(`<img${ssrRenderAttr("src", c.image)}${ssrRenderAttr("alt", c.name)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"${_scopeId}>`);
              } else {
                _push2(`<div class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:image",
                  class: "w-10 h-10 text-gray-200"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`<div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent group-hover:from-[#033958]/90 transition-colors duration-500"${_scopeId}></div></div><div class="relative z-10 h-full p-6 flex flex-col justify-end"${_scopeId}><h3 class="text-lg font-black text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500"${_scopeId}>${ssrInterpolate(c.name)}</h3><div class="w-8 h-1 bg-amber-400 mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"${_scopeId}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute inset-0 z-0" }, [
                  c.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: c.image,
                    alt: c.name,
                    class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:image",
                      class: "w-10 h-10 text-gray-200"
                    })
                  ])),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent group-hover:from-[#033958]/90 transition-colors duration-500" })
                ]),
                createVNode("div", { class: "relative z-10 h-full p-6 flex flex-col justify-end" }, [
                  createVNode("h3", { class: "text-lg font-black text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500" }, toDisplayString(c.name), 1),
                  createVNode("div", { class: "w-8 h-1 bg-amber-400 mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (unref(categories).length === 0) {
        _push(`<div class="col-span-full py-20 text-center"><div class="w-16 h-16 border-4 border-gray-100 border-t-[#033958] rounded-full animate-spin mx-auto mb-4"></div><p class="text-sm font-bold text-gray-400 uppercase tracking-widest">Sourcing Categories...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      if (promotions.value.length) {
        _push(`<section class="bg-gradient-to-br from-amber-50 to-orange-50 py-16"><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"><div class="flex items-center justify-between mb-10"><div><h2 class="text-2xl font-extrabold text-gray-900 flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:flame",
          size: "24",
          class: "text-orange-500"
        }, null, _parent));
        _push(` Hot Deals &amp; Promotions </h2><p class="text-gray-500 mt-1 font-medium">Limited time offers on your favourite snacks</p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/offers",
          class: "hidden md:flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm border border-gray-200 hover:border-gray-300 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View All Offers `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                size: "14"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" View All Offers "),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  size: "14"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(promotions.value, (p) => {
          _push(`<div class="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"><div class="flex items-center gap-3 mb-4">`);
          if (p.badgeText) {
            _push(`<span class="${ssrRenderClass(["px-3 py-1 rounded-full text-xs font-extrabold", p.badgeColor || "bg-orange-100 text-orange-700"])}">${ssrInterpolate(p.badgeText)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-xs text-gray-400 font-bold uppercase tracking-wider">${ssrInterpolate(p.type)}</span></div><h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">${ssrInterpolate(p.title)}</h3>`);
          if (p.description) {
            _push(`<p class="text-gray-500 text-sm mb-4 line-clamp-2">${ssrInterpolate(p.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (p.discountPercentage) {
            _push(`<div class="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-extrabold">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:percent",
              size: "14"
            }, null, _parent));
            _push(` ${ssrInterpolate(p.discountPercentage)}% OFF </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"><div class="relative rounded-3xl overflow-hidden shadow-2xl"><img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Gifting" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/80"></div><div class="relative z-10 p-10 md:p-14 text-white max-w-lg"><div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/20">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:gift",
        size: "16"
      }, null, _parent));
      _push(` Gift Collection </div><h2 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">The Perfect Snack Gift</h2><p class="text-white/80 text-lg mb-8">Curated gift boxes for every occasion. Birthdays, holidays, and celebrations \u2014 we&#39;ve got you covered.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "inline-flex items-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Shop Gifts `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              size: "20",
              class: "group-hover:translate-x-1 transition-transform"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Shop Gifts "),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                size: "20",
                class: "group-hover:translate-x-1 transition-transform"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16"><div class="flex items-center justify-between mb-8"><h2 class="text-2xl font-extrabold text-gray-900">Featured Snacks</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-sm font-bold text-[#033958] hover:underline flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              size: "14"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" View all "),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                size: "14"
              })
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
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(`<div class="aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-3 border border-gray-100 group-hover:shadow-lg transition-all duration-300"${_scopeId}>`);
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
              _push2(`</div><h3 class="text-sm font-bold text-gray-900 group-hover:text-[#033958] transition-colors line-clamp-1"${_scopeId}>${ssrInterpolate(p.name)}</h3><div class="flex items-center gap-2 mt-1"${_scopeId}><span class="text-sm font-extrabold text-gray-900"${_scopeId}>\u20A6${ssrInterpolate((_b = p.price) == null ? void 0 : _b.toLocaleString())}</span>`);
              if (p.compareAtPrice) {
                _push2(`<span class="text-xs text-gray-400 line-through"${_scopeId}>\u20A6${ssrInterpolate((_c = p.compareAtPrice) == null ? void 0 : _c.toLocaleString())}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-3 border border-gray-100 group-hover:shadow-lg transition-all duration-300" }, [
                  ((_d = p.images) == null ? void 0 : _d[0]) ? (openBlock(), createBlock("img", {
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
                createVNode("h3", { class: "text-sm font-bold text-gray-900 group-hover:text-[#033958] transition-colors line-clamp-1" }, toDisplayString(p.name), 1),
                createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                  createVNode("span", { class: "text-sm font-extrabold text-gray-900" }, "\u20A6" + toDisplayString((_e = p.price) == null ? void 0 : _e.toLocaleString()), 1),
                  p.compareAtPrice ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-xs text-gray-400 line-through"
                  }, "\u20A6" + toDisplayString((_f = p.compareAtPrice) == null ? void 0 : _f.toLocaleString()), 1)) : createCommentVNode("", true)
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
      _push(`</section><section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"><div class="relative rounded-3xl overflow-hidden shadow-2xl"><img${ssrRenderAttr("src", _imports_0)} alt="Holiday" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80"></div><div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 text-white"><div class="max-w-lg"><div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-4 backdrop-blur-md border border-white/20">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:calendar-heart",
        size: "16"
      }, null, _parent));
      _push(` Holiday Special </div><h2 class="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">Holiday Season Savings!</h2><p class="text-white/80 text-lg">Celebrate with our exclusive holiday snack collections. Up to 30% off select items.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/offers",
        class: "shrink-0 inline-flex items-center gap-3 bg-white text-emerald-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Shop Holiday Deals `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              size: "20",
              class: "group-hover:translate-x-1 transition-transform"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Shop Holiday Deals "),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                size: "20",
                class: "group-hover:translate-x-1 transition-transform"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="bg-gray-900 text-white py-20"><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center"><h2 class="text-3xl md:text-4xl font-extrabold mb-4">Join the WiseKings Community</h2><p class="text-gray-400 mb-10 max-w-md mx-auto text-lg">Earn commissions, sell products, or become a partner. Your journey starts here.</p><div class="flex justify-center gap-4 flex-col sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Account`);
          } else {
            return [
              createTextVNode("Create Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="http://localhost:3002" target="_blank" class="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center gap-2 justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:store",
        size: "18"
      }, null, _parent));
      _push(` Become a Merchant </a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B8zAMvKz.mjs.map
