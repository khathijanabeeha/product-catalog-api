// server.js
// Simple Product Catalog API using Node.js + Express
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory product data (at least 5 products, >=3 categories, mixed inStock)
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 45000, inStock: true },
  { id: 2, name: 'Office Chair', category: 'Furniture', price: 7000, inStock: false },
  { id: 3, name: 'Wireless Mouse', category: 'Accessories', price: 800, inStock: true },
  { id: 4, name: 'Desk Lamp', category: 'Home Decor', price: 1200, inStock: true },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 2200, inStock: false }
];

// Middleware: serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// GET /products — Return all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/categories — Return unique categories
app.get('/products/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// GET /products/instock — Return products where inStock === true
app.get('/products/instock', (req, res) => {
  const instock = products.filter(p => p.inStock === true);
  res.json(instock);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
