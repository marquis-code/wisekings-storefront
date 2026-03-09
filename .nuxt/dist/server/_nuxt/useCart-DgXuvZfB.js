import { computed, readonly, ref } from "vue";
const items = ref([]);
function useCart() {
  const totalItems = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0));
  const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0));
  function addItem(product, qty = 1) {
    const existing = items.value.find((i) => i.productId === product._id);
    if (existing) {
      existing.quantity += qty;
    } else {
      items.value.push({ productId: product._id, name: product.name, price: product.price, image: product.images?.[0] || "", quantity: qty, slug: product.slug });
    }
  }
  function removeItem(productId) {
    items.value = items.value.filter((i) => i.productId !== productId);
  }
  function updateQuantity(productId, qty) {
    const item = items.value.find((i) => i.productId === productId);
    if (item) {
      item.quantity = Math.max(1, qty);
    }
  }
  function clearCart() {
    items.value = [];
  }
  return { items: readonly(items), totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart };
}
export {
  useCart as u
};
//# sourceMappingURL=useCart-DgXuvZfB.js.map
