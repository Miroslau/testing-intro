function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (!quantity) {
    throw new RangeError;
  }

  if (quantity > product.stock) {
    throw new RangeError;
  }

  const cartItem = cart.find((item) => item.id === product.id);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, stock: product.stock, quantity: quantity })
  }

  return cart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
