import { b as useRoute, d as useToast, u as useHead, a as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-E7rDAgD-.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useProductsApi } from "./useProductsApi-CvcxMqxs.js";
import { u as useCart } from "./useCart-DgXuvZfB.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useProductsApi();
    useCart();
    useToast();
    const product = ref(null);
    const loading = ref(true);
    const selectedImage = ref(0);
    const qty = ref(1);
    const savings = computed(() => {
      if (!product.value?.compareAtPrice) return 0;
      return Math.round((1 - product.value.price / product.value.compareAtPrice) * 100);
    });
    useHead(() => ({
      title: product.value ? `${product.value.name} — WiseKings` : "Product — WiseKings",
      meta: [{ name: "description", content: product.value?.description?.slice(0, 155) || "" }]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div class="text-center py-20">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-8 h-8 animate-spin mx-auto text-gray-400"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(product)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"><div><div class="aspect-square bg-gray-100 rounded-3xl overflow-hidden">`);
        if (unref(product).images?.[unref(selectedImage)]) {
          _push(`<img${ssrRenderAttr("src", unref(product).images[unref(selectedImage)])}${ssrRenderAttr("alt", unref(product).name)} class="w-full h-full object-cover">`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:image",
            class: "w-16 h-16 text-gray-300"
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
        if (unref(product).images?.length > 1) {
          _push(`<div class="flex gap-2 mt-4"><!--[-->`);
          ssrRenderList(unref(product).images, (img, i) => {
            _push(`<button class="${ssrRenderClass(["w-16 h-16 rounded-xl overflow-hidden border-2 transition-all", i === unref(selectedImage) ? "border-gray-900" : "border-transparent hover:border-gray-300"])}"><img${ssrRenderAttr("src", img)} class="w-full h-full object-cover"></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "text-sm text-gray-400 hover:text-gray-600 mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`← Back to shop`);
            } else {
              return [
                createTextVNode("← Back to shop")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="text-3xl font-bold text-gray-900">${ssrInterpolate(unref(product).name)}</h1><div class="flex items-center gap-3 mt-3"><span class="text-2xl font-bold text-gray-900">₦${ssrInterpolate(unref(product).price.toLocaleString())}</span>`);
        if (unref(product).compareAtPrice) {
          _push(`<span class="text-lg text-gray-400 line-through">₦${ssrInterpolate(unref(product).compareAtPrice.toLocaleString())}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).compareAtPrice) {
          _push(`<span class="badge bg-red-50 text-red-600 text-xs">Save ${ssrInterpolate(unref(savings))}%</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-gray-600 mt-4 leading-relaxed">${ssrInterpolate(unref(product).description)}</p>`);
        if (unref(product).stock > 0) {
          _push(`<div class="mt-6 flex items-center gap-4"><div class="flex items-center border border-gray-300 rounded-full"><button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:minus",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`</button><span class="w-10 text-center font-medium">${ssrInterpolate(unref(qty))}</span><button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:plus",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`</button></div><button class="btn-primary btn-lg flex-1">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:shopping-bag",
            class: "w-5 h-5"
          }, null, _parent));
          _push(` Add to Cart </button></div>`);
        } else {
          _push(`<p class="mt-6 text-red-600 font-medium">Out of stock</p>`);
        }
        _push(`<div class="mt-8 space-y-3 border-t border-gray-200 pt-6">`);
        if (unref(product).sku) {
          _push(`<div class="flex justify-between text-sm"><span class="text-gray-400">SKU</span><span class="text-gray-700">${ssrInterpolate(unref(product).sku)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between text-sm"><span class="text-gray-400">Category</span><span class="text-gray-700">${ssrInterpolate(typeof unref(product).category === "object" ? unref(product).category?.name : "—")}</span></div>`);
        if (unref(product).tags?.length) {
          _push(`<div class="flex gap-2 flex-wrap mt-2"><!--[-->`);
          ssrRenderList(unref(product).tags, (tag) => {
            _push(`<span class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-Z6Bj2mMR.js.map
