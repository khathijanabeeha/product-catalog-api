# Product Catalog API

## 1. Project Description
The Product Catalog API is a simple Node.js and Express-based application that provides product data through REST API endpoints. It also includes a frontend HTML page that fetches and displays product information using the Fetch API.  
The project demonstrates basic API creation, routing, static file serving, and frontend-backend interaction.

### Technologies Used
- Node.js  
- Express.js  
- HTML  
- CSS  
- JavaScript (Fetch API)

---

## 2. Project Structure
product-catalog-api/
│
├── public/
│ ├── index.html # Frontend UI
│ └── main.js # Fetches and displays product data
│
├── server.js # Express server + API endpoints
├── package.json
├── .gitignore
└── README.md

yaml
Copy code

---

## 3. API Documentation

### **📌 Endpoint 1: Get All Products**
**URL Path:** `/products`  
**HTTP Method:** GET  
**Description:** Returns an array of all available products.  

**Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 45000,
    "inStock": true
  }
]
📌 Endpoint 2: Get Unique Categories
URL Path: /products/categories
HTTP Method: GET
Description: Returns a list of unique product categories.

Sample Response:

json
Copy code
{
  "categories": ["Electronics", "Accessories", "Furniture"]
}
📌 Endpoint 3: Get In-Stock Products
URL Path: /products/instock
HTTP Method: GET
Description: Returns only the products that are currently in stock (inStock: true).

Sample Response:

json
Copy code
[
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 45000,
    "inStock": true
  }
]
4. Installation & Setup Instructions
Step 1 — Clone the Repository
bash
Copy code
git clone YOUR_GITHUB_LINK
cd product-catalog-api
Step 2 — Install Dependencies
bash
Copy code
npm install
Step 3 — Run the Server
bash
Copy code
node server.js
(or)

bash
Copy code
npm start
Step 4 — Access the API
Open your browser and visit:

All products → http://localhost:3000/products

Categories → http://localhost:3000/products/categories

In-stock products → http://localhost:3000/products/instock

Step 5 — Access the Frontend Page
Visit:

arduino
Copy code
http://localhost:3000/
5. GitHub Repository Link
🔗 Repository: https://github.com/khathijanabeeha/product-catalog-api.git

6. Author Information
YOUR NAME: Khathija Nabeeha