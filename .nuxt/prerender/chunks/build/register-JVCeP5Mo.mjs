import __nuxt_component_1 from './index-DgwuGhDw.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-COB5qXTH.mjs';
import { defineComponent, reactive, ref, withCtx, createTextVNode, unref, useSSRContext } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/server-renderer/index.mjs';
import { a as auth_api } from './auth-BKPQueoF.mjs';
import { u as useCustomToast } from './useCustomToast-CwIASTqq.mjs';
import { d as useRoute, a as useAuthState } from './server.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/axios/index.js';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs';
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

const useRegister = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const register = async (payload) => {
    loading.value = true;
    try {
      const res = await auth_api.register(payload);
      showToast({ title: "Success", message: "Registration successful", toastType: "success" });
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Registration failed", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, register };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const form = reactive({ fullName: "", email: "", phone: "", password: "" });
    const showPassword = ref(false);
    const { loading } = useRegister();
    useAuthState();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 text-center lg:text-left pt-20"><h2 class="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2><p class="text-gray-500 font-medium">Join WiseKings and discover premium snacks.</p></div><form class="space-y-5"><div class="space-y-4"><div class="space-y-2"><label for="fullName" class="text-sm font-semibold text-gray-700 ml-1">Full Name</label><div class="relative group"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:user",
        size: "18"
      }, null, _parent));
      _push(`</div><input id="fullName"${ssrRenderAttr("value", form.fullName)} type="text" placeholder="John Doe" required class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400"></div></div><div class="space-y-2"><label for="email" class="text-sm font-semibold text-gray-700 ml-1">Email Address</label><div class="relative group"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mail",
        size: "18"
      }, null, _parent));
      _push(`</div><input id="email"${ssrRenderAttr("value", form.email)} type="email" placeholder="name@example.com" required class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400"></div></div><div class="space-y-2"><label for="phone" class="text-sm font-semibold text-gray-700 ml-1">Phone Number</label><div class="relative group"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:phone",
        size: "18"
      }, null, _parent));
      _push(`</div><input id="phone"${ssrRenderAttr("value", form.phone)} type="tel" placeholder="+234 800 0000 000" class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400"></div></div><div class="space-y-2"><label for="password" class="text-sm font-semibold text-gray-700 ml-1">Password</label><div class="relative group"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:lock",
        size: "18"
      }, null, _parent));
      _push(`</div><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", form.password, null)}${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required class="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400"><button type="button" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: showPassword.value ? "lucide:eye-off" : "lucide:eye",
        size: "18"
      }, null, _parent));
      _push(`</button></div></div></div><div class="flex items-start space-x-2 px-1"><input id="terms" type="checkbox" required class="mt-1 w-4 h-4 rounded border-gray-300 text-[#033958] focus:ring-[#033958] cursor-pointer"><label for="terms" class="text-sm font-medium text-gray-600 cursor-pointer select-none leading-relaxed"> I agree to the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-[#033958] font-bold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` and `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-[#033958] font-bold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </label></div><button type="submit" class="w-full bg-[#033958] hover:bg-[#022a45] text-white font-bold py-4 rounded-2xl shadow-xl shadow-[#033958]/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(`<span>Creating account...</span>`);
      } else {
        _push(`<!--[--> Create Account `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:user-plus",
          size: "18",
          class: "group-hover:translate-x-1 transition-transform"
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</button><div class="pt-2 text-center"><p class="text-gray-500 font-medium"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-[#033958] font-extrabold hover:text-[#022a45] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-JVCeP5Mo.mjs.map
