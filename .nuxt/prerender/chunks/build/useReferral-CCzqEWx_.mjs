import { o as useCookie } from './server.mjs';
import { readonly } from 'file:///Users/mac/Documents/wisekings/storefront/node_modules/vue/index.mjs';

function useReferral() {
  const referralCode = useCookie("wk_referral", { maxAge: 60 * 60 * 24 * 30 });
  function captureFromUrl() {
    return;
  }
  return { referralCode: readonly(referralCode), captureFromUrl };
}

export { useReferral as u };
//# sourceMappingURL=useReferral-CCzqEWx_.mjs.map
