const cartItems = [];
const cartList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartBox = document.getElementById('cart');
const searchInput = document.getElementById('search-input');

document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCart();
}

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
  cartCount.textContent = cartItems.length;
  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  alert('Checkout complete!');
  cartItems.length = 0;
  updateCart();
  toggleCart();
}

function filterCategory(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  document.querySelectorAll('.product-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});
