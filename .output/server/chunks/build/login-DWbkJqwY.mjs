import { _ as __nuxt_component_0 } from './nuxt-link-E7rDAgD-.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as useRoute, c as useAuthState, d as useToast } from './server.mjs';
import { u as useAuthApi } from './useAuthApi-Baa0Sr5U.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const errorMsg = ref("");
    useAuthApi();
    useAuthState();
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[70vh] flex items-center justify-center px-4" }, _attrs))}><div class="w-full max-w-md"><div class="text-center mb-8"><h1 class="text-2xl font-bold text-gray-900">Welcome back</h1><p class="text-gray-500 mt-1">Sign in to your account</p></div><form class="space-y-4"><div><label class="label">Email</label><input${ssrRenderAttr("value", unref(email))} type="email" class="input" required></div><div><label class="label">Password</label><input${ssrRenderAttr("value", unref(password))} type="password" class="input" required></div><button type="submit" class="btn-primary w-full"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>${ssrInterpolate(unref(loading) ? "Signing in..." : "Sign in")}</button>`);
      if (unref(errorMsg)) {
        _push(`<p class="text-red-500 text-sm text-center">${ssrInterpolate(unref(errorMsg))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-center text-sm text-gray-500">Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-gray-900 font-medium underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DWbkJqwY.mjs.map
