# E-Commerce App

An e-commerce starter app built with React JS and Bootstrap that includes product browsing, filtering, wishlist & cart management, address & order handling, and a simple Express/MongoDB backend.

---

## Demo Link

[Live Demo](https://furniture-frontend-six.vercel.app/)  

---

## Quick Start

```
git clone https://github.com/Sharu2003-27/furniture_frontend.git
cd <furniture_frontend>
npm install
npm run dev  
```

## Technologies
- React JS
- React Router
- Node.js
- Express
- CORS
- MongoDB
- Bootstrap

## Demo Video
Watch a walkthrough (5 minutes) of all major features of this app:
[Loom Video Link](https://drive.google.com/file/d/1QL50OyAwltpIS-dJdVVxkkFQCMZ_IEcf/view?usp=sharing)

## Features

**Home**
- Displays featured product categories
- Allows users to filter product listings by clicking on categories

**Product Listing**
- Displays products in card format with image, name, price, rating, and action buttons
- Allows users to add products to cart or wishlist
- Filters products by category using multiple checkboxes
- Filters products by minimum rating using a slider
- Clears all applied filters using a clear filters button
- Sorts products by price in ascending or descending order
- Supports pagination or infinite scrolling for product browsing

**Product Detail**
- Displays complete product information including images, description, price, rating, and stock status
- Allows users to add products to cart or wishlist from the detail view

**Wishlist**
- Allows users to add and remove products from the wishlist
- Moves wishlist items to the cart and increments quantity if the item already exists

**Cart**
- Displays cart items with quantity controls
- Allows users to increase, decrease, or remove items
- Moves items from cart to wishlist
- Calculates price details including subtotal, optional taxes, and total amount
- Initiates checkout using a checkout button

**Addresses**
- Supports creating, updating, deleting, and selecting delivery addresses
- Allows users to choose an address during checkout

**Orders**
- Creates an order during checkout and stores it in the backend
- Displays an order success message after checkout
- Provides access to order history through the user profile

**Profile**
- Displays static user details
- Shows saved addresses and order history

**User Experience**
- Displays loading spinners while fetching data
- Shows toast notifications for cart, wishlist, and quantity actions
- Adapts the layout responsively using Bootstrap

## API Reference

### **GET /products**<br>	 
List all products<br>	 
Sample Response:<br>
```[{ _id, productName, productPrice, productImage, productDescription, productTitle,... }, …]```

### **GET /products/:id** <br>
get single product details<br>
Sample Response:
```{ _id, productName, ...}```

### **POST /products**<br>	 	
Add a new product. Request body: product object (see sample).<br>		
Sample Response:<br>
```{ message, savedProduct... }```

## Contact
For bugs or feature requests, please reach out to sharayu.borude27@gmail.com
