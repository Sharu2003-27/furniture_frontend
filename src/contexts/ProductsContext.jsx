import { createContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

const ProductsContext = createContext();
export default ProductsContext;

export function ProductProvider({ children }) {

    const { data, loading, error } = useFetch("http://localhost:3000/products", [])

    const [price, setPrice] = useState("")
    const [categories, setCategories] = useState([])
    const [rating, setRating] = useState()
    const [sortByPrice, setSortByPrice] = useState()
    const [cart, setCart] = useState([])
    const [datas, setDatas] = useState("")
    
    return (
        <>
          <ProductsContext.Provider value={{ data, loading, error, price, setPrice, categories, setCategories, 
            rating, setRating, sortByPrice, setSortByPrice, cart, setCart, datas, setDatas }}>
            { children }
          </ProductsContext.Provider>
        </>
    )
}
