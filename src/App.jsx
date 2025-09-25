import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import ProductsList from "./pages/ProductsList"
import WishList from "./pages/WishList"
import LoginForm from "./pages/LoginForm"
import Cart from "./pages/Cart"
import { ProductsProvider } from './contexts/ProductsContext'

export default function App() {
  return (
    <>
      <Nav />
      <ProductsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList/:category" element={<ProductsList />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </ProductsProvider>
    </>
  )
}
