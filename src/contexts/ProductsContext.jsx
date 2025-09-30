import { createContext, useState } from "react";
import useFetch from "../Hooks/useFetch";
import useLocalStorage from '../Hooks/useLocalStorage'

const ProductsContext = createContext();
export default ProductsContext;

export function ProductsProvider({ children }) {
 
    const { data, loading, error } = useFetch("http://localhost:3000/products", [])

    const [price, setPrice] = useState("")
    const [categories, setCategories] = useState([])
    const [rating, setRating] = useState()
    const [sortByPrice, setSortByPrice] = useState()
    const [cart, setCart] = useLocalStorage("cart", [])
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])
    const [addresses, setAddresses] = useLocalStorage("addresses", [])
    const [selectedAddressId, setSelectedAddressId] = useLocalStorage("selectedAddressId", null)
    const [orders, setOrders] = useLocalStorage("orders", [])
    const [alertMessage, setAlertMessage] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    
    return (
          <ProductsContext.Provider value={{ data, loading, error, price, setPrice, categories, setCategories, 
            rating, setRating, sortByPrice, setSortByPrice, cart, setCart, wishlist, setWishlist, searchTerm, setSearchTerm,
            addresses, setAddresses, selectedAddressId, setSelectedAddressId, orders, setOrders, alertMessage, setAlertMessage }}>
            { children }
          </ProductsContext.Provider>
    )
}
