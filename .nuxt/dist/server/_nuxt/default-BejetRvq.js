import { _ as __nuxt_component_0 } from "./nuxt-link-COB5qXTH.js";
import __nuxt_component_1 from "./index-DgwuGhDw.js";
import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext, nextTick, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { p as useI18n, a as useAuthState, h as useRuntimeConfig, d as useRoute } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { io } from "socket.io-client";
import { _ as _imports_0 } from "./logo-3eGD44Sm.js";
import { u as useCart } from "./useCart-DgXuvZfB.js";
import { u as useReferral } from "./useReferral-CCzqEWx_.js";
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, setLocale } = useI18n();
    const isOpen = ref(false);
    const currentLocale = computed(() => locale.value);
    const currentLocaleName = computed(() => {
      const l = locales.value.find((loc) => loc.code === locale.value);
      return l ? l.name : "Language";
    });
    watch(locale, () => {
      isOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))} data-v-3e40882b><button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white font-bold text-sm" data-v-3e40882b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:languages",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-3e40882b>${ssrInterpolate(unref(currentLocaleName))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: ["w-4 h-4 transition-transform duration-300", unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute top-full right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50" data-v-3e40882b><div class="p-2 space-y-1" data-v-3e40882b><!--[-->`);
        ssrRenderList(unref(locales), (locale2) => {
          _push(`<button class="${ssrRenderClass([
            "w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all",
            unref(currentLocale) === locale2.code ? "bg-[#033958] text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          ])}" data-v-3e40882b><span data-v-3e40882b>${ssrInterpolate(locale2.name)}</span>`);
          if (unref(currentLocale) === locale2.code) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "w-4 h-4"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isOpen)) {
        _push(`<div class="fixed inset-0 z-40" data-v-3e40882b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/LanguageSwitcher.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3e40882b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CurrencySwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCurrency = ref("NGN");
    const currencies = [
      { code: "NGN", symbol: "₦", name: "Naira" },
      { code: "USD", symbol: "$", name: "US Dollar" },
      { code: "EUR", symbol: "€", name: "Euro" },
      { code: "GBP", symbol: "£", name: "British Pound" }
    ];
    const isOpen = ref(false);
    const currentCurrencyCode = computed(() => selectedCurrency.value);
    const currentCurrencySymbol = computed(() => currencies.find((c) => c.code === selectedCurrency.value)?.symbol || "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))} data-v-6442b758><button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white font-bold text-sm" data-v-6442b758><span class="text-xs opacity-60" data-v-6442b758>Currency:</span><span class="flex items-center gap-1.5" data-v-6442b758><span class="font-black text-emerald-400" data-v-6442b758>${ssrInterpolate(unref(currentCurrencyCode))}</span><span data-v-6442b758>${ssrInterpolate(unref(currentCurrencySymbol))}</span></span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: ["w-4 h-4 transition-transform duration-300", unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute top-full right-0 mt-3 w-40 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50" data-v-6442b758><div class="p-2 space-y-1" data-v-6442b758><!--[-->`);
        ssrRenderList(currencies, (curr) => {
          _push(`<button class="${ssrRenderClass([
            "w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all",
            unref(selectedCurrency) === curr.code ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          ])}" data-v-6442b758><div class="flex flex-col items-start leading-none" data-v-6442b758><span class="text-xs font-black uppercase tracking-widest" data-v-6442b758>${ssrInterpolate(curr.code)}</span><span class="${ssrRenderClass(["text-[10px] mt-0.5", unref(selectedCurrency) === curr.code ? "text-emerald-100" : "text-gray-400"])}" data-v-6442b758>${ssrInterpolate(curr.name || "Global")}</span></div><span class="${ssrRenderClass([unref(selectedCurrency) === curr.code ? "border-white/20" : "border-gray-100", "font-bold border rounded px-1.5 text-[10px]"])}" data-v-6442b758>${ssrInterpolate(curr.symbol)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isOpen)) {
        _push(`<div class="fixed inset-0 z-40" data-v-6442b758></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/CurrencySwitcher.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6442b758"]]);
const useChat = () => {
  const config = useRuntimeConfig();
  const { accessToken } = useAuthState();
  const socket = ref(null);
  const messages = ref([]);
  const isConnected = ref(false);
  const isTyping = ref(false);
  const connect = (conversationId) => {
    if (socket.value) return;
    const socketUrl = config.public.apiBase.replace("/api/v1", "");
    socket.value = io(`${socketUrl}/chat`, {
      auth: {
        token: `Bearer ${accessToken.value}`
      }
    });
    socket.value.on("connect", () => {
      isConnected.value = true;
      if (conversationId) {
        joinRoom(conversationId);
      }
    });
    socket.value.on("disconnect", () => {
      isConnected.value = false;
    });
    socket.value.on("chat:message:new", (message) => {
      messages.value.push(message);
    });
    socket.value.on("chat:typing:state", (data) => {
      isTyping.value = data.isTyping;
    });
  };
  const joinRoom = (conversationId) => {
    socket.value?.emit("chat:join", conversationId);
  };
  const sendMessage = (conversationId, content) => {
    if (!socket.value) return;
    socket.value.emit("chat:message", { conversationId, content });
  };
  const sendTyping = (conversationId, typing) => {
    socket.value?.emit("chat:typing", { conversationId, isTyping: typing });
  };
  const disconnect = () => {
    socket.value?.disconnect();
    socket.value = null;
  };
  return {
    messages,
    isConnected,
    isTyping,
    connect,
    sendMessage,
    sendTyping,
    disconnect
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LiveChatWidget",
  __ssrInlineRender: true,
  setup(__props) {
    const { messages, isTyping } = useChat();
    const { user, isAuthenticated } = useAuthState();
    const route = useRoute();
    const currentUserId = computed(() => user.value?._id || "guest");
    const isOpen = ref(false);
    const newMessage = ref("");
    const unreadCount = ref(0);
    const messageContainer = ref(null);
    function scrollToBottom() {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    }
    function formatTime(date) {
      return new Date(date || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    watch(messages, () => {
      if (!isOpen.value) unreadCount.value++;
      nextTick(() => scrollToBottom());
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-6 right-6 z-[100] font-sans" }, _attrs))} data-v-21dc8a7f><button class="${ssrRenderClass([
        "w-10 h-10 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 z-[101]",
        unref(isOpen) ? "bg-gray-100 text-gray-900 rotate-90" : "bg-[#033958] text-white"
      ])}" data-v-21dc8a7f>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isOpen) ? "lucide:x" : "lucide:message-circle",
        size: "20"
      }, null, _parent));
      if (!unref(isOpen) && unref(unreadCount) > 0) {
        _push(`<span class="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center font-black border-2 border-white shadow-lg" data-v-21dc8a7f>${ssrInterpolate(unref(unreadCount))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute bottom-20 right-0 w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden flex flex-col pointer-events-auto" data-v-21dc8a7f><div class="bg-[#033958] p-8 text-white relative" data-v-21dc8a7f><div class="absolute top-0 right-0 p-4 opacity-10" data-v-21dc8a7f>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:crown",
          size: "120"
        }, null, _parent));
        _push(`</div><div class="flex items-center gap-4 relative z-10" data-v-21dc8a7f><div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md" data-v-21dc8a7f>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:headset",
          size: "24"
        }, null, _parent));
        _push(`</div><div data-v-21dc8a7f><h3 class="font-black text-xl tracking-tight" data-v-21dc8a7f>WiseKings Support</h3><div class="flex items-center gap-2 mt-1" data-v-21dc8a7f><div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" data-v-21dc8a7f></div><span class="text-xs font-bold text-white/70" data-v-21dc8a7f>Online &amp; Ready to Help</span></div></div></div></div>`);
        if (!unref(isAuthenticated)) {
          _push(`<div class="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500" data-v-21dc8a7f><div class="w-24 h-24 rounded-[2rem] bg-gray-50 flex items-center justify-center text-[#033958] shadow-inner" data-v-21dc8a7f>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:lock",
            size: "40"
          }, null, _parent));
          _push(`</div><div class="space-y-3" data-v-21dc8a7f><h4 class="text-xl font-black text-gray-900 tracking-tight" data-v-21dc8a7f>Members Only Chat</h4><p class="text-sm font-medium text-gray-400 leading-relaxed" data-v-21dc8a7f>Please sign in to your WiseKings account to start a conversation with our support team.</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/login?redirect=${unref(route).fullPath}`,
            class: "w-full py-4 bg-[#033958] text-white font-black rounded-2xl shadow-xl shadow-[#033958]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Sign in to WiseKings `);
              } else {
                return [
                  createTextVNode(" Sign in to WiseKings ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!--[--><div class="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50" data-v-21dc8a7f>`);
          if (unref(messages).length === 0) {
            _push(`<div class="flex flex-col items-center justify-center h-full text-center space-y-4 px-10" data-v-21dc8a7f><div class="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-[#033958]" data-v-21dc8a7f>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:sparkles",
              size: "40"
            }, null, _parent));
            _push(`</div><p class="text-gray-400 font-bold text-sm" data-v-21dc8a7f>Welcome back! How can we assist you today?</p><div class="flex flex-wrap justify-center gap-2" data-v-21dc8a7f><button class="px-4 py-2 bg-white rounded-full text-xs font-bold text-[#033958] border border-gray-100 hover:border-[#033958]/30 transition-all" data-v-21dc8a7f>Order status?</button><button class="px-4 py-2 bg-white rounded-full text-xs font-bold text-[#033958] border border-gray-100 hover:border-[#033958]/30 transition-all" data-v-21dc8a7f>Shipping info?</button></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(unref(messages), (msg, i) => {
            _push(`<div class="${ssrRenderClass(["flex w-full", msg.senderId === unref(currentUserId) ? "justify-end" : "justify-start"])}" data-v-21dc8a7f><div class="${ssrRenderClass([
              "max-w-[80%] p-4 rounded-3xl text-sm font-medium shadow-sm",
              msg.senderId === unref(currentUserId) ? "bg-[#033958] text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
            ])}" data-v-21dc8a7f>${ssrInterpolate(msg.content)} <div class="${ssrRenderClass(["text-[10px] mt-1 opacity-50", msg.senderId === unref(currentUserId) ? "text-white" : "text-gray-400"])}" data-v-21dc8a7f>${ssrInterpolate(formatTime(msg.createdAt))}</div></div></div>`);
          });
          _push(`<!--]-->`);
          if (unref(isTyping)) {
            _push(`<div class="flex justify-start" data-v-21dc8a7f><div class="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1" data-v-21dc8a7f><div class="w-1.5 h-1.5 bg-[#033958]/30 rounded-full animate-bounce" data-v-21dc8a7f></div><div class="w-1.5 h-1.5 bg-[#033958]/30 rounded-full animate-bounce [animation-delay:0.2s]" data-v-21dc8a7f></div><div class="w-1.5 h-1.5 bg-[#033958]/30 rounded-full animate-bounce [animation-delay:0.4s]" data-v-21dc8a7f></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="p-6 bg-white border-t border-gray-100" data-v-21dc8a7f><div class="relative flex items-center gap-3" data-v-21dc8a7f><input${ssrRenderAttr("value", unref(newMessage))} placeholder="Type your message..." class="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#033958]/10 rounded-2xl px-5 py-4 text-sm font-medium placeholder:text-gray-400 pr-12" data-v-21dc8a7f><button class="absolute right-2 w-10 h-10 bg-[#033958] text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#033958]/20" data-v-21dc8a7f>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:send",
            size: "18"
          }, null, _parent));
          _push(`</button></div><p class="text-[10px] text-center text-gray-300 mt-4 font-bold uppercase tracking-widest" data-v-21dc8a7f>Powered by WiseKings Real-time</p></div><!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/LiveChatWidget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-21dc8a7f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isAuthenticated } = useAuthState();
    const { totalItems } = useCart();
    useReferral();
    const route = useRoute();
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    watch(() => route.fullPath, () => {
      isMobileMenuOpen.value = false;
    });
    const navLinks = [
      { name: "Shop", path: "/products" },
      { name: "Categories", path: "/categories" },
      { name: "Special Offers", path: "/offers" },
      { name: "Our Story", path: "/about" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_CoreLanguageSwitcher = __nuxt_component_2;
      const _component_CoreCurrencySwitcher = __nuxt_component_3;
      const _component_CoreLiveChatWidget = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col font-sans selection:bg-[#033958]/10 selection:text-[#033958]" }, _attrs))}><header class="${ssrRenderClass(["fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-500 rounded-[2rem]", unref(isScrolled) ? "bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-3" : "bg-transparent py-5"])}"><div class="px-8 lg:px-12 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 group shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="h-10 w-auto" alt="Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "h-10 w-auto",
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-12"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.path,
          to: link.path,
          class: [
            unref(route).path === link.path ? "text-amber-500" : unref(isScrolled) ? "text-gray-900" : "text-white",
            "text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-amber-500 relative group/link"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name) + " ", 1),
                createVNode("span", { class: "absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "relative group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(["w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500", unref(isScrolled) ? "bg-gray-100 text-gray-900 group-hover:bg-[#033958] group-hover:text-white" : "bg-white/10 text-white group-hover:bg-white"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:shopping-bag",
              size: "20"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(totalItems) > 0) {
              _push2(`<span class="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center font-black border-2 border-white shadow-lg"${_scopeId}>${ssrInterpolate(unref(totalItems))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ["w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500", unref(isScrolled) ? "bg-gray-100 text-gray-900 group-hover:bg-[#033958] group-hover:text-white" : "bg-white/10 text-white group-hover:bg-white"]
              }, [
                createVNode(_component_Icon, {
                  name: "lucide:shopping-bag",
                  size: "20"
                })
              ], 2),
              unref(totalItems) > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center font-black border-2 border-white shadow-lg"
              }, toDisplayString(unref(totalItems)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isAuthenticated)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/account",
          class: ["hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-500", unref(isScrolled) ? "bg-gray-900 text-white hover:bg-[#033958]" : "bg-white/10 text-white hover:bg-white/20"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:user",
                size: "20"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:user",
                  size: "20"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: ["hidden sm:flex px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 shadow-xl overflow-hidden relative group", unref(isScrolled) ? "bg-gray-950 text-white hover:bg-[#033958]" : "bg-white text-gray-950 hover:bg-amber-400"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative z-10 transition-colors duration-500"${_scopeId}>Sign in</span>`);
            } else {
              return [
                createVNode("span", { class: "relative z-10 transition-colors duration-500" }, "Sign in")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<button class="${ssrRenderClass(["lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-500", unref(isScrolled) ? "bg-gray-100 text-gray-950" : "bg-white/10 text-white"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isMobileMenuOpen) ? "lucide:x" : "lucide:menu",
        size: "24"
      }, null, _parent));
      _push(`</button></div></div>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="lg:hidden absolute top-auto left-0 w-full bg-white/95 backdrop-blur-3xl border-t border-gray-100 mt-2 rounded-[2rem] shadow-2xl z-50 overflow-hidden"><div class="p-8 space-y-2"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.path,
            to: link.path,
            class: "block p-5 rounded-2xl text-[11px] font-black text-gray-500 hover:text-[#033958] hover:bg-[#033958]/5 transition-all tracking-[0.2em] uppercase",
            "active-class": "bg-[#033958]/10 text-[#033958]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="pt-8 mt-4 border-t border-gray-100 grid grid-cols-2 gap-4"><div class="p-5 bg-gray-50 rounded-2xl flex flex-col gap-3"><span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Global Reach</span>`);
        _push(ssrRenderComponent(_component_CoreLanguageSwitcher, { class: "scale-90 origin-left" }, null, _parent));
        _push(`</div><div class="p-5 bg-gray-50 rounded-2xl flex flex-col gap-3"><span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Pricing</span>`);
        _push(ssrRenderComponent(_component_CoreCurrencySwitcher, { class: "scale-90 origin-left" }, null, _parent));
        _push(`</div></div>`);
        if (!unref(isAuthenticated)) {
          _push(`<div class="pt-6">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/login",
            class: "flex items-center justify-center w-full py-5 bg-[#033958] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#033958]/20"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Enter the Kingdom`);
              } else {
                return [
                  createTextVNode("Enter the Kingdom")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="flex-1 overflow-x-hidden pb-20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-white border-t border-gray-100 pt-20 pb-10"><div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16"><div class="lg:col-span-2 space-y-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="h-10 w-auto" alt="Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "h-10 w-auto",
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-500 text-base leading-relaxed max-w-sm font-medium"> Experience the future of premium shopping. Quality products, seamless delivery, and a community of satisfied royalty. </p><div class="flex items-center gap-4"><a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#033958] hover:bg-[#033958]/5 transition-all">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:instagram",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#033958] hover:bg-[#033958]/5 transition-all">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:twitter",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#033958] hover:bg-[#033958]/5 transition-all">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:facebook",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a></div></div><div><h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Discovery</h4><div class="space-y-4 text-sm font-bold">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Products`);
          } else {
            return [
              createTextVNode("All Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Categories`);
          } else {
            return [
              createTextVNode("Categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/offers",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Special Offers`);
          } else {
            return [
              createTextVNode("Special Offers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Support</h4><div class="space-y-4 text-sm font-bold">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/orders",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Order Tracking`);
          } else {
            return [
              createTextVNode("Order Tracking")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shipping-policy",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shipping Policy`);
          } else {
            return [
              createTextVNode("Shipping Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/return-policy",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Return Policy`);
          } else {
            return [
              createTextVNode("Return Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Company</h4><div class="space-y-4 text-sm font-bold">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Story`);
          } else {
            return [
              createTextVNode("Our Story")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "block text-gray-500 hover:text-gray-950 transition-colors"
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
      _push(`</div></div><div class="lg:col-span-5 border-t border-gray-100 pt-8 -mb-4"><h4 class="text-gray-950 font-black text-sm uppercase tracking-widest mb-6">Join Our Network</h4><div class="flex flex-col sm:flex-row gap-4"><a href="http://localhost:3002" target="_blank" class="flex items-center gap-3 bg-emerald-50 border border-emerald-100 text-emerald-700 px-5 py-3.5 rounded-2xl font-bold text-sm hover:bg-emerald-100 hover:shadow-md transition-all group">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:store",
        size: "20"
      }, null, _parent));
      _push(` Become a Merchant `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:external-link",
        size: "14",
        class: "ml-auto opacity-50 group-hover:opacity-100 transition-opacity"
      }, null, _parent));
      _push(`</a><a href="http://localhost:3003" target="_blank" class="flex items-center gap-3 bg-orange-50 border border-orange-100 text-orange-700 px-5 py-3.5 rounded-2xl font-bold text-sm hover:bg-orange-100 hover:shadow-md transition-all group">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:handshake",
        size: "20"
      }, null, _parent));
      _push(` Partner With Us `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:external-link",
        size: "14",
        class: "ml-auto opacity-50 group-hover:opacity-100 transition-opacity"
      }, null, _parent));
      _push(`</a></div></div></div><div class="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"><p class="text-gray-400 text-xs font-bold">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} WiseKings. Engineered for Royals.</p></div></div></footer>`);
      _push(ssrRenderComponent(_component_CoreLiveChatWidget, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BejetRvq.js.map
