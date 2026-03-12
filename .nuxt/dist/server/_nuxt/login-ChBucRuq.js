import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import { ref, defineComponent, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as auth_api } from "./auth-BKPQueoF.js";
import { u as useCustomToast } from "./useCustomToast-CwIASTqq.js";
import { useRouter } from "vue-router";
import { d as useRoute, a as useAuthState, e as useNuxtApp } from "../server.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "./axios.config-BkQMnnZW.js";
import "axios";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/h3/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/defu/dist/defu.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "firebase/analytics";
const useLogin = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const router = useRouter();
  const login = async (payload) => {
    loading.value = true;
    try {
      const res = await auth_api.login(payload);
      const data = res?.data || res;
      if (data?.mfaRequired) {
        showToast({
          title: "OTP Required",
          message: "Please enter the code sent to your email",
          toastType: "info"
        });
        router.push(`/otp?email=${encodeURIComponent(payload.email)}`);
        return { mfaRequired: true };
      }
      if (data?.user) {
        showToast({ title: "Success", message: "Login successful", toastType: "success" });
        return { data };
      }
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Login failed", toastType: "error" });
      if (err.message && err.message.toLowerCase().includes("verify your email")) {
        router.push(`/otp?email=${encodeURIComponent(payload.email)}`);
      }
      return null;
    } finally {
      loading.value = false;
    }
  };
  const socialLogin = async (idToken) => {
    loading.value = true;
    try {
      const res = await auth_api.socialLogin({ idToken });
      showToast({ title: "Success", message: "Social login successful", toastType: "success" });
      return res;
    } catch (err) {
      showToast({ title: "Error", message: err.message || "Social login failed", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, login, socialLogin };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const { loading } = useLogin();
    useAuthState();
    const { $fbAuth, $googleProvider } = useNuxtApp();
    const { signInWithPopup } = ([__temp, __restore] = withAsyncContext(() => import("firebase/auth")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-10 text-center lg:text-left pt-20"><h2 class="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2><p class="text-gray-500 font-medium">Sign in to discover premium snacks.</p></div><form class="space-y-6"><div class="space-y-5"><div class="space-y-2"><label for="email" class="text-sm font-semibold text-gray-700 ml-1">Email Address</label><div class="relative group"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mail",
        size: "18"
      }, null, _parent));
      _push(`</div><input id="email"${ssrRenderAttr("value", email.value)} type="email" placeholder="name@example.com" required class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400"></div></div><div class="space-y-2"><div class="flex items-center justify-between px-1"><label for="password" class="text-sm font-semibold text-gray-700">Password</label>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/forgot-password",
        class: "text-sm font-bold text-[#033958] hover:text-[#033958]/80 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Forgot password?`);
          } else {
            return [
              createTextVNode("Forgot password?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative group"><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#033958] transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:lock",
        size: "18"
      }, null, _parent));
      _push(`</div><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", password.value, null)}${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="••••••••" required class="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#033958]/20 focus:border-[#033958] transition-all outline-none font-medium placeholder:text-gray-400"><button type="button" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: showPassword.value ? "lucide:eye-off" : "lucide:eye",
        size: "18"
      }, null, _parent));
      _push(`</button></div></div></div><div class="flex items-center space-x-2 px-1"><input id="remember" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#033958] focus:ring-[#033958] cursor-pointer"><label for="remember" class="text-sm font-medium text-gray-600 cursor-pointer select-none">Remember for 30 days</label></div><button type="submit" class="w-full bg-[#033958] hover:bg-[#022a45] text-white font-bold py-4 rounded-2xl shadow-xl shadow-[#033958]/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(`<span>Signing in...</span>`);
      } else {
        _push(`<!--[--> Sign in `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-right",
          size: "18",
          class: "group-hover:translate-x-1 transition-transform"
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</button><div class="relative py-4"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-200"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500 font-medium">Or continue with</span></div></div><button type="button" class="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-icon",
        size: "20"
      }, null, _parent));
      _push(`<span>Login with Google</span></button><div class="pt-4 text-center"><p class="text-gray-500 font-medium"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-[#033958] font-extrabold hover:text-[#022a45] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create account`);
          } else {
            return [
              createTextVNode("Create account")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-ChBucRuq.js.map
