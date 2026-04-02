// Capture referral code from URL (?ref=CODE) and persist in cookie
export function useReferral() {
    const referralCode = useCookie('wk_referral', { maxAge: 60 * 60 * 24 * 30 }) // 30 days
    const staffCode = useCookie('wk_staff_code', { maxAge: 60 * 60 * 24 * 30 }) // 30 days

    function captureFromUrl() {
        if (!import.meta.client) return
        const params = new URLSearchParams(window.location.search)
        
        const ref = params.get('ref')
        if (ref) referralCode.value = ref

        const staff = params.get('staff')
        if (staff) staffCode.value = staff
    }

    return { 
        referralCode: readonly(referralCode), 
        staffCode: readonly(staffCode),
        captureFromUrl 
    }
}
