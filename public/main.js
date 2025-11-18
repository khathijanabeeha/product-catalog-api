// public/main.js
const loadAllBtn = document.getElementById('loadAll');
const loadInStockBtn = document.getElementById('loadInStock');
const loadCategoriesBtn = document.getElementById('loadCategories');
const productsDiv = document.getElementById('products');
const outputDiv = document.getElementById('output');

function clearDisplay() {
  productsDiv.innerHTML = '';
  outputDiv.textContent = '';
}

function renderProducts(products) {
  clearDisplay();
  if (!products || products.length === 0) {
    outputDiv.textContent = 'No products to display.';
    return;
  }
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div><strong>${p.name}</strong></div>
      <div>Category: ${p.category}</div>
      <div>Price: ₹${p.price}</div>
      <div>Stock: <span class="${p.inStock ? 'stock-true' : 'stock-false'}">${p.inStock ? 'In Stock' : 'Out of stock'}</span></div>
    `;
    productsDiv.appendChild(card);
  });
}

async function fetchProducts(path = '/products') {
  try {
    outputDiv.textContent = 'Loading...';
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Network response not ok: ${res.status}`);
    const data = await res.json();
    if (path === '/products/categories') {
      clearDisplay();
      outputDiv.textContent = `Categories: ${Array.isArray(data.categories) ? data.categories.join(', ') : JSON.stringify(data)}`;
      return;
    }
    renderProducts(data);
  } catch (err) {
    clearDisplay();
    outputDiv.textContent = `Error: ${err.message}`;
    console.error(err);
  }
}

loadAllBtn.addEventListener('click', () => fetchProducts('/products'));
loadInStockBtn.addEventListener('click', () => fetchProducts('/products/instock'));
loadCategoriesBtn.addEventListener('click', () => fetchProducts('/products/categories'));

// Optional: auto-load all on page open
// fetchProducts('/products');
