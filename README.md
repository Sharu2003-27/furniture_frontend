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
- Featured categories, clickable to filter product listing.

**Product Listing**
- Product card: image, name, price, rating, Add to Cart, Add to Wishlist.
- Sidebar filters:
- Category: multiple checkboxes.
- Ratings: a slider to select minimum rating.
- Clear Filters button.
- Sort by Price: radio — Low → High, High → Low.
- Pagination or infinite scroll (optional).

**Product Detail**
- Full details: images, description, price, rating, stock, Add to Cart, Add to Wishlist.

**Wishlist**
- Add/remove items.
- Move item to cart (increments quantity if already present).

**Cart**
- Show items with quantity controls (+ / −), remove, move to wishlist.
- Price details: subtotal, taxes (optional), total.
- Checkout button

**Addresses**
- CRUD for addresses; select one for checkout.

**Orders**
- Create order on checkout; save in backend.
- Order success message and order history accessible via profile.

**Profile**
- Static user details; addresses; order history.

**UX**
- Loading spinners while fetching data.
- Toast alerts for actions (add/remove/quantity change/move between cart & wishlist).
- Responsive layout with Bootstrap.
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