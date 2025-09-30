import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import ProductsList from "./pages/ProductsList"
import ProductDetails from "./pages/ProductDetails"
import WishList from "./pages/WishList"
import Address from "./pages/Address"
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"
import LoginForm from "./pages/LoginForm"
import Cart from "./pages/Cart"
import  { ProductsProvider }  from './contexts/ProductsContext'

export default function App() {
  return (
    <>
      <ProductsProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList/:category" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </ProductsProvider>
    </>
  )
} 
