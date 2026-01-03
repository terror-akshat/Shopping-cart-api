# 🛒 Shopping Cart API (In-Memory)

> A lightweight RESTful API to manage a user's temporary shopping cart using in-memory storage.
> This project is designed as a backend assignment demonstrating clean architecture, REST principles, and proper error handling.

# 📌 Features

- Add items to cart or update quantity
- Retrieve cart items with total price calculation
- Remove a specific item from the cart
- In-memory data storage (no database)
- Proper HTTP status codes & error handling
---

# 🧰 Tech Stack

- Node.js
- Express.js
- In-memory storage using JavaScript Map
---

# 🚀 Getting Started

### 1️⃣ Clone the Repository

```
git clone 
cd shopping-cart-api
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start the Server

```
npm start
```

> Server will run at:
> http://localhost:3000

---
# 📌 API Endpoints
## ➕ Add Item to Cart

### POST /cart/add
- Request Body
```
{
  "itemId": "101",
  "name": "Laptop",
  "price": 50000,
  "quantity": 1
}
```

## 📦 Get Cart Items
### GET /cart
- Response:

```
{
  "success": true,
  "data": {
    "items": [
      {
        "itemId": "101",
        "name": "Laptop",
        "price": 50000,
        "quantity": 1
      }
    ],
    "totalPrice": 50000
  }
}

```
## ❌ Remove Item from Cart
### DELETE /cart/:itemId
```
DELETE /cart/101
```
---

## 🔹Using cURL (Git Bash / WSL / Linux)

- cURL AddItem
```
curl -X POST http://localhost:3000/cart/add \
-H "Content-Type: application/json" \
-d '{
  "itemId": "101",
  "name": "Laptop",
  "price": 50000,
  "quantity": 1
}'

```
- cURL getItem
```
curl -X GET http://localhost:3000/cart
```

- cURL DeleteItem
```
url -X DELETE http://localhost:3000/cart/101
```
---

## ⚠️ Error Handling

| Scenario       | Status Code | Message               |
| -------------- | ----------- | --------------------- |
| Missing fields | 400         | Bad Request           |
| Item not found | 404         | Item not found        |
| Server error   | 500         | Internal Server Error |

---

## ✅ Submission Checklist
- ✔ RESTful API
- ✔ In-memory storage
- ✔ Proper folder structure
- ✔ Error handling
- ✔ README with test instructions
