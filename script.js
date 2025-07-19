let cartItems = [];
const cartEl = document.getElementById("cart");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCart();
}

function updateCart() {
  cartCount.innerText = cartItems.length;
  cartItemsList.innerHTML = "";
  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
  cartTotal.innerText = total.toFixed(2);
}

function toggleCart() {
  cartEl.style.display = cartEl.style.display === "block" ? "none" : "block";
}

function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cartItems = [];
  updateCart();
  toggleCart();
}
