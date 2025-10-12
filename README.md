# 🛋️ Furniture E-Commerce Website

A full-stack eCommerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The application allows users to browse products, apply filters, manage wishlists and carts, handle addresses, complete checkouts, and manage user profiles.

## ✨ Features

### 🛍️ Shopping Experience
- **Product Browsing**: Browse products by categories (Home Decor, Living Room, Kitchen & Dining, Bedroom)
- **Advanced Filtering**: 
  - Price range slider (₹500 - ₹250,000)
  - Category selection (multiple)
  - Rating filter (1-5 stars)
  - Price sorting (Low to High / High to Low)
  - Search by product name or description
- **Product Details**: Comprehensive product pages with size selection, quantity control, and detailed information

### 🛒 Cart & Checkout
- **Shopping Cart**: 
  - Add/remove items
  - Quantity management with +/- controls
  - Real-time price calculations
  - Move items between cart and wishlist
  - Persistent cart data (survives page refresh)
- **Order Processing**:
  - Address management (add, edit, delete, select)
  - Order review before placement
  - Order history tracking
  - Price breakdown (subtotal, discount, delivery charges)

### ❤️ Wishlist
- Save products for later
- Move items to cart
- Persistent storage across sessions

### 👤 User Features
- User profile page
- Order history with detailed item breakdown
- Multiple delivery address management
- Login/Authentication UI

### 💾 Data Persistence
All user data is persisted using localStorage:
- Shopping cart items (with quantities and sizes)
- Wishlist items
- Saved delivery addresses
- Selected address for checkout
- Complete order history

## 🎬 Demo

### Key Pages
1. **Home** (`/`) - Landing page with category navigation and promotional banners
2. **Products List** (`/productsList/:category`) - Product browsing with filters
3. **Product Details** (`/product/:id`) - Detailed product view with purchase options
4. **Cart** (`/cart`) - Shopping cart with quantity controls
5. **Wishlist** (`/wishList`) - Saved items
6. **Address** (`/address`) - Manage delivery addresses
7. **Checkout** (`/checkout`) - Order review and placement
8. **Profile** (`/profile`) - User profile and order history
9. **Login** (`/loginForm`) - Authentication page

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.x
- **Routing**: React Router DOM 6.x
- **Styling**: Bootstrap 5.x + Custom CSS
- **State Management**: React Context API
- **Data Fetching**: Fetch API with custom hooks
- **Storage**: Browser localStorage
- **Build Tool**: Vite

## 📁 Project Structure

```
furniture-store/
├── src/
│   ├── components/
│   │   └── Nav.jsx                    # Navigation bar
│   ├── contexts/
│   │   └── ProductsContext.jsx        # Global state management
│   ├── Hooks/
│   │   ├── useFetch.jsx               # Custom data fetching hook
│   │   └── useLocalStorage.jsx        # Custom localStorage hook
│   ├── pages/
│   │   ├── Home.jsx                   # Landing page
│   │   ├── ProductsList.jsx           # Products with filters
│   │   ├── ProductDetails.jsx         # Individual product view
│   │   ├── Cart.jsx                   # Shopping cart
│   │   ├── WishList.jsx               # Saved items
│   │   ├── Address.jsx                # Address management
│   │   ├── Checkout.jsx               # Order checkout
│   │   ├── Profile.jsx                # User profile & orders
│   │   └── LoginForm.jsx              # Authentication
│   ├── App.jsx                        # Main app component with routes
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
└── package.json
```

## 📖 Usage

### Adding Products to Cart
1. Browse products on the home page or products list
2. Click on a product to view details
3. Select a size (S/M/L/XL)
4. Choose quantity
5. Click "Add to Cart" or "Buy Now"

### Managing Cart
- Adjust quantities using +/- buttons
- Remove items with "Remove" button
- Move items to wishlist for later
- View price breakdown in the sidebar
- Proceed to checkout

### Placing an Order
1. Add items to cart
2. Click "Choose Address" or go to Address page
3. Add/select a delivery address
4. Go to Checkout page
5. Review order details
6. Click "Place Order"
7. View order in Profile page

### Using Filters
- **Price**: Drag the slider to set minimum price
- **Category**: Check multiple categories or select "All"
- **Rating**: Select minimum star rating
- **Sort**: Choose price sorting order
- **Search**: Type in the search bar to find products
- **Clear**: Reset all filters with the "Clear" button

## 🔌 API Configuration

### Expected API Response Format

### Modifying API Endpoint

Edit `src/contexts/ProductsContext.jsx`:
```javascript
const { data, loading, error } = useFetch("YOUR_API_URL_HERE", [])
```

## 🧩 Components Overview

### Custom Hooks

#### `useFetch(url, initialData)`
Handles data fetching with loading and error states.

**Returns:**
- `data`: Fetched data
- `loading`: Boolean loading state
- `error`: Error message (if any)

#### `useLocalStorage(key, initialValue)`
Manages persistent state with localStorage.

**Returns:**
- `storage`: Current value
- `updateStorage`: Update function
- `removeStorage`: Clear function

### Context Provider

#### `ProductsProvider`
Global state management for:
- Product data
- Cart items
- Wishlist items
- Filters (price, category, rating, sort)
- Search term
- Addresses
- Orders
- Alert messages

### Pages

#### `Home`
- Category navigation cards
- Promotional banners
- Seasonal collections

#### `ProductsList`
- Product grid with cards
- Sidebar with filters:
  - Price range slider
  - Category checkboxes
  - Rating radio buttons
  - Sort options
  - Clear filters button
- Search functionality
- Add to cart/wishlist from cards

#### `ProductDetails`
- Large product image with wishlist button
- Product information (name, price, description)
- Size selection (S/M/L/XL)
- Quantity selector
- Add to cart / Buy now buttons
- Payment & delivery information
- Return policy

#### `Cart`
- List of cart items with images
- Quantity controls per item
- Remove/Move to wishlist options
- Price details sidebar:
  - Subtotal
  - Discount (50% off)
  - Delivery charges (₹299)
  - Total amount
- Checkout button

#### `WishList`
- Grid of saved items
- Remove from wishlist
- Move to cart
- Empty state message

#### `Address`
- Form to add/edit addresses
- List of saved addresses
- Select/Edit/Delete actions
- Visual indicator for selected address

#### `Checkout`
- Selected delivery address display
- Order summary with items
- Price breakdown
- Place order button
- Validation (requires address & items)

#### `Profile`
- User information card
- Order history with:
  - Order ID & timestamp
  - Item details with quantities
  - Total amount
- Manage addresses button

#### `LoginForm`
- Email/password inputs
- Form validation
- Show/hide password toggle
- Back to home link

### Navigation (`Nav`)
- Logo (links to home)
- Search bar
- Login button
- Profile button
- Wishlist icon with count badge
- Cart icon with count badge
- Alert message display

## 🗄️ State Management

### Global State (Context)

### LocalStorage Keys
- `cart` - Shopping cart items
- `wishlist` - Saved items
- `addresses` - Delivery addresses
- `selectedAddressId` - Active address
- `orders` - Order history

## 🔄 User Flows

### Complete Shopping Flow
```
Home 
  → Select Category 
  → Browse Products (with filters)
  → View Product Details
  → Select Size & Quantity
  → Add to Cart
  → View Cart
  → Choose/Add Address
  → Review Checkout
  → Place Order
  → View in Profile
```

### Wishlist Flow
```
Product List/Details
  → Add to Wishlist
  → View Wishlist
  → Move to Cart (optional)
  → Continue Shopping or Checkout
```

### Address Management Flow
```
Checkout (no address)
  → Add Address Page
  → Fill Address Form
  → Save Address
  → Select Address
  → Back to Checkout
  → Place Order
```

## 🎨 Features in Detail

### Filtering Logic Priority

1. Search term (filters by name/description)
2. Category filter
3. Price filter (minimum)
4. Rating filter (minimum)
5. Sort by price (Low to High / High to Low)

### Alert System

Temporary notifications for user actions:
- "Added to cart"
- "Added to wishlist"
- "Moved to wishlist"
- "Removed from cart"
- "Removed from wishlist"
- "Updated cart quantities"

Auto-dismisses after CSS animation completes.
