import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import { ref, defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-3eGD44Sm.js";
import { useRouter, useRoute } from "vue-router";
import { a as auth_api } from "./auth-BKPQueoF.js";
import { u as useCustomToast } from "./useCustomToast-CwIASTqq.js";
import { a as useAuthState } from "../server.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/hookable/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/mac/Documents/wisekings/storefront/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
import "./axios.config-BkQMnnZW.js";
import "axios";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
const useVerifyOtp = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const { setAuth } = useAuthState();
  const router = useRouter();
  const verifyOtp = async (payload) => {
    loading.value = true;
    try {
      const res = await auth_api.verifyOtp(payload);
      showToast({ title: "Success", message: "Email verified successfully", toastType: "success" });
      const d = res?.data || res;
      if (d?.user && (d?.accessToken || d?.tokens)) {
        const tokens = d.tokens || { accessToken: d.accessToken, refreshToken: d.refreshToken };
        setAuth(d.user, tokens);
        router.push("/");
      } else {
        router.push("/login");
      }
      return true;
    } catch (error) {
      showToast({ title: "Error", message: error.message || "Verification failed", toastType: "error" });
      return false;
    } finally {
      loading.value = false;
    }
  };
  return { loading, verifyOtp };
};
const useResendOtp = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const resendOtp = async (payload) => {
    loading.value = true;
    try {
      await auth_api.resendOtp(payload);
      showToast({ title: "Success", message: "OTP resent successfully. Check your email.", toastType: "success" });
      return true;
    } catch (error) {
      showToast({ title: "Error", message: error.message || "Failed to resend OTP", toastType: "error" });
      return false;
    } finally {
      loading.value = false;
    }
  };
  return { loading, resendOtp };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "otp",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const email = ref(route.query.email || "");
    const { loading } = useVerifyOtp();
    const { loading: resending } = useResendOtp();
    const otp = ref(["", "", "", "", "", ""]);
    ref([]);
    const countdown = ref(0);
    const otpValue = computed(() => otp.value.join(""));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="mb-10 lg:mb-12 cursor-pointer transition-transform hover:scale-105 inline-block"><img${ssrRenderAttr("src", _imports_0)} alt="WiseKings Logo" class="h-10 lg:h-12 w-auto object-contain"></div><div class="space-y-4 mb-10"><h1 class="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight"> Verify your email </h1><p class="text-gray-500 font-medium text-base lg:text-lg max-w-md"> We&#39;ve sent a 6-digit verification code to <span class="text-gray-900 font-bold">${ssrInterpolate(email.value)}</span>. Please enter it below. </p></div><form class="space-y-8 max-w-md"><div><div class="flex gap-3 justify-between"><!--[-->`);
      ssrRenderList(6, (digit, index) => {
        _push(`<input${ssrRenderAttr("value", otp.value[index])} type="text" maxlength="1" class="w-12 h-14 text-center text-2xl font-bold text-gray-900 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-gray-300">`);
      });
      _push(`<!--]--></div></div><button type="submit"${ssrIncludeBooleanAttr(unref(loading) || otpValue.value.length !== 6) ? " disabled" : ""} class="w-full flex items-center justify-center py-4 px-6 rounded-2xl text-white font-bold text-lg transition-all focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20">`);
      if (unref(loading)) {
        _push(`<span class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
        _push(` Verifying... </span>`);
      } else {
        _push(`<span>Verify Account</span>`);
      }
      _push(`</button><div class="text-center"><p class="text-gray-500 font-medium"> Didn&#39;t receive the code? <button type="button"${ssrIncludeBooleanAttr(unref(resending) || countdown.value > 0) ? " disabled" : ""} class="text-indigo-600 font-bold hover:text-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">${ssrInterpolate(countdown.value > 0 ? `Resend in ${countdown.value}s` : "Resend now")}</button></p></div><div class="text-center mt-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-gray-500 hover:text-gray-900 font-bold text-sm transition-colors flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` Back to Login `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "w-4 h-4"
              }),
              createTextVNode(" Back to Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/otp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=otp-DlYuWy8V.js.map
