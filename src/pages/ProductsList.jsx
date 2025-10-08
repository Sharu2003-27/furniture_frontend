import { Link, useParams } from "react-router-dom";
import  ProductsContext  from "../contexts/ProductsContext"
import { useContext, useEffect } from "react";

export default function ProductsList() {

const { category } = useParams();
const { data, loading, error, price, setPrice, categories, setCategories, 
    rating, setRating, sortByPrice, setSortByPrice, setCart, wishlist, setWishlist, searchTerm, setAlertMessage } = useContext(ProductsContext);

let productData = data;

if (price) {
    productData = productData.filter((p) => p.productPrice >= price)
}

function handleCategoryChange(event) {
     const { value, checked } = event.target

     if (checked) {
        setCategories((prev) => [...prev, value])
     } else {
        setCategories((prev) => prev.filter((cat) => cat !== value))
     }
}

useEffect(() => {
    if (category) {
        // ensure categories is an array and respects "All"
        if (category === "All") {
            setCategories(["All"]) 
        } else {
            setCategories([category])
        }
    }
}, [category, setCategories])

if (categories.length > 0 && !categories.includes("All")) {
  productData = productData.filter((p) =>
    categories.includes(p.category.toLowerCase())
  );
}


if (rating) {
    productData = productData.filter((p) => p.rating >= Number(rating))
}

if (searchTerm && searchTerm.trim() !== "") {
    const term = searchTerm.toLowerCase()
    productData = productData.filter((p) =>
      (p.productName && p.productName.toLowerCase().includes(term)) ||
      (p.productDescription && p.productDescription.toLowerCase().includes(term))
    )
}

if (sortByPrice === "Low to High") {
productData = [...productData].sort((a, b) => a.productPrice - b.productPrice);
} else if (sortByPrice === "High to Low") {
productData = [...productData].sort((a, b) => b.productPrice - a.productPrice);
}

function addToCart(product, e) {
   e.preventDefault(); // Prevent navigation
   setCart((prevCart) => {
     const existing = prevCart.find((p) => p._id === product._id)
     if (existing) {
       return prevCart.map((p) => p._id === product._id ? { ...p, quantity: (p.quantity || 1) + 1 } : p)
     }
     return [...prevCart, { ...product, quantity: 1 }]
   });
   setAlertMessage("Added to cart")
}

function addToWishlist(product, e) {
   e.preventDefault(); // Prevent navigation
   if (!wishlist.find((p) => p._id === product._id)) {
     setWishlist((prev) => [...prev, product])
     setAlertMessage("Added to wishlist")
   } else {
     setAlertMessage("Already in wishlist")
   }
}

function clearFilters() {
    setPrice("")
    setCategories([])
    setRating("")
    setSortByPrice("")
}

  return (      
        <div>
            <section>
                <div className="row">
                    <div className="col-md-2 p-5">

                        <div className="py-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="fs-5"><strong>Filters</strong></p>
                            <p className="fs-5" style={{ cursor: "pointer" }} onClick={clearFilters}>
                                <u>Clear</u>
                            </p>
                          </div>
                        </div> 

                        <div className="py-2">
                         <p className="fs-5"><strong>Price</strong></p>
                             <div className="d-flex justify-content-between">
                                 <span>500</span>
                                 <span>10000</span>
                                 <span>250000</span>
                             </div>
                             <input type="range" max={250000} min={500} step={100} className="form-range" 
                             onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="py-2">
                            <p className="fs-5"><strong>Category</strong></p>
                            <div>
                                <label htmlFor="all">
                                    <input type="checkbox" id="all" value="All" 
                                      checked={categories.includes("All")}
                                      onChange={handleCategoryChange} /> All Products
                                </label>
                                <br />
                                <label htmlFor="homeDecor">
                                    <input type="checkbox" id="homeDecor" value="home-decor"
                                      checked={categories.includes("home-decor")} 
                                      onChange={handleCategoryChange} /> Home Decor
                                </label>
                                <br /> 
                                <label htmlFor="livingRoom"> 
                                    <input type="checkbox" id="livingRoom" value="living-room" 
                                      checked={categories.includes("living-room")}
                                      onChange={handleCategoryChange} /> Living Room
                                </label> 
                                <br />
                                <label htmlFor="kitchen"> 
                                    <input type="checkbox" id="kitchen" value="kitchen" 
                                      checked={categories.includes("kitchen")}
                                     onChange={handleCategoryChange} /> Kitchen & Dining
                                </label>
                                <br />
                                <label htmlFor="bedroom"> 
                                    <input type="checkbox" id="bedroom" value="bedroom" 
                                     checked={categories.includes("bedroom")}
                                     onChange={handleCategoryChange} /> Bedroom
                                </label>
                            </div>
                        </div>

                        <div className="py-2">
                            <div>
                                <p className="fs-5"><strong>Rating</strong></p>
                                <label htmlFor="five">
                                    <input type="radio" id="five" value={5} name="rating" 
                                    onChange={(e) => setRating(e.target.value)} /> 5 ⭐
                                </label>
                                <br />
                                <label htmlFor="four">
                                    <input type="radio" id="four" value={4} name="rating"
                                    onChange={(e) => setRating(e.target.value)} /> 4 ⭐
                                </label>
                                <br />
                                <label htmlFor="three">
                                    <input type="radio" id="three" value={3} name="rating" 
                                    onChange={(e) => setRating(e.target.value)} /> 3 ⭐
                                </label>
                                <br />
                                <label htmlFor="two">
                                    <input type="radio" id="two" value={2} name="rating" 
                                    onChange={(e) => setRating(e.target.value)}  /> 2 ⭐
                                </label>
                                <br />
                                <label htmlFor="one">
                                    <input type="radio" id="one" value={1} name="rating"
                                     onChange={(e) => setRating(e.target.value)} /> 1 ⭐
                                </label>
                            </div>
                        </div>

                        <div className="py-2">
                            <div>
                                <p className="fs-5"><strong>Sort By Price</strong></p>
                                <label htmlFor="low">
                                    <input type="radio" id="low" value="Low to High" name="sort"
                                     onChange={(e) => setSortByPrice(e.target.value)} /> Low to High
                                </label>
                                <br />
                                <label htmlFor="high">
                                    <input type="radio" id="high" value="High to Low" name="sort"
                                     onChange={(e) => setSortByPrice(e.target.value)} /> High to Low
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 bg-light"> 
                        <h2 className="mt-3 text-capitalize px-3">{category} Products</h2>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error...</p>}
                        {productData && productData.length > 0 ? ( 
                             <div className="row px-3 px-md-4 g-3 g-md-4">
                                {productData.map((item) => 
                                <div className="col-6 col-md-4 col-lg-3" key={item._id}>
                                  <div className="card h-100 shadow-sm border-0">
                                     <Link to={`/product/${item._id}`}>
                                       <img src={item.productImage} alt={item.productName} className="img-fluid rounded-top" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                                     </Link>
                                  <div className="card-body">
                                      <Link to={`/product/${item._id}`} className="text-decoration-none">
                                        <h6 className="card-title text-truncate" title={item.productName}>{item.productName}</h6>
                                      </Link>
                                      <p className="card-text mb-2"><strong>₹{item.productPrice}</strong></p>
                                      <p className="card-text text-muted small" style={{ minHeight: "38px" }}>{item.productDescription?.slice(0, 60)}{item.productDescription && item.productDescription.length > 60 ? '…' : ''}</p>
                                      <button className="btn btn-primary btn-sm w-100" onClick={(e) => addToCart(item, e)}>
                                         Add to Cart
                                      </button>
                                     <button className="btn btn-outline-danger btn-sm w-100 mt-2" onClick={(e) => addToWishlist(item, e)}>
                                       ♥ Wishlist
                                     </button>
                                  </div>
                                  </div>
                                </div>
                             )}
                             </div>
                         ) : (
                             <p>Product list not found.</p>
                         )
                      }
                    </div>
                </div>
            </section>               
       </div>
    )
}