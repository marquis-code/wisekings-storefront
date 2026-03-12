import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { ref, defineComponent, mergeProps, useSSRContext, h, render, withCtx, createVNode, unref, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { a as useAuthState, n as navigateTo, e as useNuxtApp, d as useRoute } from "../server.mjs";
import { a as auth_api } from "./auth-BKPQueoF.js";
import { u as useCustomToast } from "./useCustomToast-CwIASTqq.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ufo/dist/index.mjs";
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
import "/Users/mac/Documents/wisekings/storefront/node_modules/klona/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/destr/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/ohash/dist/index.mjs";
import "/Users/mac/Documents/wisekings/storefront/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "firebase/analytics";
import "./axios.config-BkQMnnZW.js";
import "axios";
const useLogout = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const { logout: clearAuth } = useAuthState();
  const logout = async () => {
    loading.value = true;
    try {
      await auth_api.logout();
      clearAuth();
      showToast({ title: "Success", message: "Logged out", toastType: "success" });
      navigateTo("/login");
    } catch (err) {
      clearAuth();
      navigateTo("/login");
    } finally {
      loading.value = false;
    }
  };
  return { loading, logout };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmModal",
  __ssrInlineRender: true,
  props: {
    title: {},
    message: {},
    confirmText: {},
    cancelText: {},
    confirmClass: {},
    icon: {},
    resolve: { type: Function }
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      if (isOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/60 backdrop-blur-sm" }, _attrs))} data-v-f196097a>`);
        if (isOpen.value) {
          _push(`<div class="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100" data-v-f196097a><div class="p-8 text-center" data-v-f196097a><div class="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-6" data-v-f196097a>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: __props.icon || "lucide:alert-triangle",
            class: "w-8 h-8 text-amber-500"
          }, null, _parent));
          _push(`</div><h3 class="text-xl font-bold text-gray-900 mb-2" data-v-f196097a>${ssrInterpolate(__props.title)}</h3><p class="text-gray-500 text-sm leading-relaxed mb-8" data-v-f196097a>${ssrInterpolate(__props.message)}</p><div class="flex flex-col gap-3" data-v-f196097a><button class="${ssrRenderClass(["w-full py-4 rounded-2xl font-bold transition-all shadow-lg", __props.confirmClass || "bg-gray-900 text-white hover:bg-black shadow-gray-900/10"])}" data-v-f196097a>${ssrInterpolate(__props.confirmText || "Confirm")}</button><button class="w-full py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 transition-all" data-v-f196097a>${ssrInterpolate(__props.cancelText || "Cancel")}</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/ConfirmModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ConfirmModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f196097a"]]);
const useConfirm = () => {
  const nuxtApp = useNuxtApp();
  const openConfirm = (options) => {
    return new Promise((resolve) => {
      const container = (void 0).createElement("div");
      (void 0).body.appendChild(container);
      const vnode = h(ConfirmModal, {
        ...options,
        resolve: (result) => {
          resolve(result);
          setTimeout(() => {
            render(null, container);
            (void 0).body.removeChild(container);
          }, 500);
        }
      });
      vnode.appContext = nuxtApp.vueApp._context;
      render(vnode, container);
    });
  };
  const confirmLogout = () => {
    return openConfirm({
      title: "Sign Out",
      message: "Are you sure you want to sign out of your account?",
      confirmText: "Sign Out",
      confirmClass: "bg-rose-600 text-white hover:bg-rose-700 shadow-rose-600/20",
      icon: "lucide:log-out"
    });
  };
  const confirmDelete = (title = "Delete Item", message = "This action cannot be undone. Are you sure?") => {
    return openConfirm({
      title,
      message,
      confirmText: "Delete",
      confirmClass: "bg-rose-600 text-white hover:bg-rose-700 shadow-rose-600/20",
      icon: "lucide:trash-2"
    });
  };
  return { openConfirm, confirmLogout, confirmDelete };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuthState();
    useLogout();
    useConfirm();
    const route = useRoute();
    const menu = [
      { name: "Dashboard", path: "/account", icon: "lucide:layout-dashboard" },
      { name: "My Orders", path: "/account/orders", icon: "lucide:shopping-bag" },
      { name: "Profile Settings", path: "/account/profile", icon: "lucide:settings" },
      { name: "Security", path: "/account/security", icon: "lucide:shield-check" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col" }, _attrs))}><header class="bg-white border-b border-gray-100 z-30"><div class="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors mt-0.5"${_scopeId}>Back to Shop</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors"
              }),
              createVNode("span", { class: "text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors mt-0.5" }, "Back to Shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-3"><div class="text-right"><p class="text-[10px] font-black uppercase tracking-widest text-[#033958] leading-none">${ssrInterpolate(unref(user)?.role || "Customer")}</p><p class="text-xs font-bold text-gray-900">${ssrInterpolate(unref(user)?.fullName)}</p></div><div class="w-8 h-8 rounded-full bg-[#033958] flex items-center justify-center text-white text-[10px] font-black">${ssrInterpolate(unref(user)?.fullName?.charAt(0) || "U")}</div></div></div></header><div class="flex-1 flex max-w-[1440px] mx-auto w-full relative"><aside class="hidden lg:block w-72 bg-white border-r border-gray-100 py-10 px-6 shrink-0 h-[calc(100vh-64px)] sticky top-16"><div class="space-y-8"><div><h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">Workspace</h3><nav class="space-y-1"><!--[-->`);
      ssrRenderList(menu, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: ["flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group", (item.path === "/account" ? unref(route).path === "/account" : unref(route).path.startsWith(item.path)) ? "bg-[#033958] text-white shadow-xl shadow-[#033958]/20" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: ["w-5 h-5", (item.path === "/account" ? unref(route).path === "/account" : unref(route).path.startsWith(item.path)) ? "text-amber-400" : "text-gray-400 group-hover:text-gray-900"]
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs font-black uppercase tracking-widest"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: item.icon,
                  class: ["w-5 h-5", (item.path === "/account" ? unref(route).path === "/account" : unref(route).path.startsWith(item.path)) ? "text-amber-400" : "text-gray-400 group-hover:text-gray-900"]
                }, null, 8, ["name", "class"]),
                createVNode("span", { class: "text-xs font-black uppercase tracking-widest" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="pt-8 border-t border-gray-50"><button class="flex items-center gap-3 px-4 py-3.5 w-full rounded-2xl text-red-400 hover:bg-red-50 hover:text-red-500 transition-all font-black text-xs uppercase tracking-widest">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:log-out",
        class: "w-5 h-5"
      }, null, _parent));
      _push(` Sign Out </button></div></div></aside><main class="flex-1 p-4 lg:p-10 min-h-0 min-w-0 bg-gray-50/50"><div class="bg-white rounded-[32px] border border-gray-100 shadow-sm min-h-full p-6 lg:p-10 relative overflow-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=account-B7F2oyD5.js.map
