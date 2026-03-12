import { m as useState } from './server.mjs';

const useCurrency = () => {
  const selectedCurrency = useState("selected_currency", () => "NGN");
  const rates = useState("currency_rates", () => ({ NGN: 1, USD: 65e-5, EUR: 6e-4, GBP: 52e-5 }));
  const symbols = {
    NGN: "\u20A6",
    USD: "$",
    EUR: "\u20AC",
    GBP: "\xA3"
  };
  const setCurrency = (code) => {
    selectedCurrency.value = code;
    localStorage.setItem("selected_currency", code);
  };
  const formatPrice = (amount) => {
    const rate = rates.value[selectedCurrency.value] || 1;
    const converted = amount * rate;
    symbols[selectedCurrency.value] || selectedCurrency.value;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: selectedCurrency.value,
      minimumFractionDigits: 2
    }).format(converted);
  };
  return {
    selectedCurrency,
    setCurrency,
    formatPrice,
    rates
  };
};

export { useCurrency as u };
//# sourceMappingURL=useCurrency-n6dxvfT2.mjs.map
