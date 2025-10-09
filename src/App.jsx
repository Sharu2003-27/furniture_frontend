import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import Nav from "./components/Nav"
import ProductsContext from "./contexts/ProductsContext"
import Home from "./pages/Home"
import ProductsList from "./pages/ProductsList"
import ProductDetails from "./pages/ProductDetails"
import WishList from "./pages/WishList"
import Address from "./pages/Address"
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import  { ProductsProvider }  from './contexts/ProductsContext'

export default function App() {
  function GlobalAlert() {
    const { alertMessage } = useContext(ProductsContext)
    if (!alertMessage) return null
    return (
      <div className="position-fixed top-0 start-50 translate-middle-x mt-3" style={{ zIndex: 1080 }}>
        <div className="alert alert-success shadow-sm px-4 py-2" role="alert">
          {alertMessage}
        </div>
      </div>
    )
  }
  return (
    <>
      <ProductsProvider>
      <Nav />
      <GlobalAlert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList/:category" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </ProductsProvider>
    </>
  )
} 
