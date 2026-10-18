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
function changeQuantity(cart, id, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError;
  }

  const cartIndex = cart.findIndex((item) => item.id === id);

  if (cartIndex !== -1) {
    const cartItem = cart[cartIndex];
    if (newQuantity > cartItem.stock) {
      throw new RangeError();
    }
    cart[cartIndex] = {...cart[cartIndex], quantity: newQuantity};
  }

  return cart;
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function calculateOrderTotal() { }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
