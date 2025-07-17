const products = [
  {
    name: "iPhone 13",
    category: "Phones",
    condition: "Used - Excellent",
    description: "128GB, Unlocked. Selling to upgrade to newer model.",
    image: "https://via.placeholder.com/300x200?text=iPhone+13",
  },
  {
    name: "Dell XPS 13",
    category: "Laptops",
    condition: "Like New",
    description: "2022 Model, 16GB RAM. Barely used.",
    image: "https://via.placeholder.com/300x200?text=Dell+XPS+13",
  },
  {
    name: "Apple Watch SE",
    category: "Wearables",
    condition: "Good Condition",
    description: "Works perfectly. Selling because I got a newer one.",
    image: "https://via.placeholder.com/300x200?text=Apple+Watch+SE",
  },
  {
    name: "Samsung Galaxy S21",
    category: "Phones",
    condition: "Used",
    description: "Screen protector included. 256GB.",
    image: "https://via.placeholder.com/300x200?text=Galaxy+S21",
  },
  {
    name: "MacBook Pro M1",
    category: "Laptops",
    condition: "Like New",
    description: "14-inch, M1 chip, fast and reliable. Comes with charger.",
    image: "https://via.placeholder.com/300x200?text=MacBook+Pro+M1",
  },
  {
    name: "Fitbit Charge 5",
    category: "Wearables",
    condition: "Very Good",
    description: "Includes band and charger. Great for fitness tracking.",
    image: "https://via.placeholder.com/300x200?text=Fitbit+Charge+5",
  },
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(filterText = "", category = "") {
  productGrid.innerHTML = "";
  const filtered = products.filter(p => {
    const matchText = p.name.toLowerCase().includes(filterText.toLowerCase()) ||
                      p.description.toLowerCase().includes(filterText.toLowerCase());
    const matchCategory = category === "" || p.category === category;
    return matchText && matchCategory;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p class="text-gray-500 col-span-3">No matching gadgets found.</p>`;
    return;
  }

  filtered.forEach(p => {
    const card = `
      <div class="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
        <img src="${p.image}" alt="${p.name}" class="rounded mb-3 w-full h-40 object-cover"/>
        <h4 class="font-semibold text-lg">${p.name}</h4>
        <p class="text-gray-600 text-sm mb-1">${p.condition}</p>
        <p class="text-sm text-gray-800 mb-4">${p.description}</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
      </div>
    `;
    productGrid.innerHTML += card;
  });
}

searchInput.addEventListener("input", () => {
  renderProducts(searchInput.value, categoryFilter.value);
});

categoryFilter.addEventListener("change", () => {
  renderProducts(searchInput.value, categoryFilter.value);
});

renderProducts();
