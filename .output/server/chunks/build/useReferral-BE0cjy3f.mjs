import { f as useCookie } from './server.mjs';
import { readonly } from 'vue';

function useReferral() {
  const referralCode = useCookie("wk_referral", { maxAge: 60 * 60 * 24 * 30 });
  function captureFromUrl() {
    return;
  }
  return { referralCode: readonly(referralCode), captureFromUrl };
}

export { useReferral as u };
//# sourceMappingURL=useReferral-BE0cjy3f.mjs.map
