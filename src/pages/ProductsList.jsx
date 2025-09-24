    import { Link, useParams } from "react-router-dom";
    import  ProductsContext  from "../contexts/ProductsContext"
    import { useContext, useEffect } from "react";

    export default function ProductsList() {

    const { category } = useParams();
    const { data, loading, error, price, setPrice, categories, setCategories, 
        rating, setRating, sortByPrice, setSortByPrice, setCart } = useContext(ProductsContext);

    let productData = data;

    // filte by price
    if (price) {
        productData = productData.filter((p) => p.productPrice >= price)
    }

    // filte by category
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
            setCategories(category)
        }
    }, [category, setCategories])

    if (categories.length > 0 && !categories.includes("All")) {
      productData = productData.filter((p) =>
        categories.includes(p.category.toLowerCase())
      );
    }

    // filter by rating
    if (rating) {
        productData = productData.filter((p) => p.rating >= Number(rating))
    }

    // filter by sort
    if (sortByPrice === "Low to High") {
    productData = [...productData].sort((a, b) => a.productPrice - b.productPrice);
    } else if (sortByPrice === "High to Low") {
    productData = [...productData].sort((a, b) => b.productPrice - a.productPrice);
    }

    // cart page
    function addToCart(product) {
        setCart((prevCart) => [...prevCart, product])
    }

    // clear filter
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
                            <h2 className="mt-4 text-capitalize p-3">{category} Products</h2>
                            {loading && <p>Loading...</p>}
                            {error && <p>Error...</p>}
                            {productData && productData.length > 0 ? ( 
                                 <div className="row px-5">
                                    {productData.map((item) => 
                                    <div className="col-md-3 p-3" key={item.id}>
                                      <div className="card h-100" style={{ minHeight: "400px" }}>
                                         <img src={item.productImage} alt={item.productName} />
                                      <div className="card-body">
                                          <h4 className="card-title">{item.productName}</h4>
                                          <p className="card-text">₹{item.productPrice}</p>
                                          <p className="card-text">{item.productDescription}</p>
                                          <Link to="/cart" className="text-decoration-none">
                                            <button className="btn btn-primary btn-sm" onClick={() => addToCart(item)}>
                                               Add to Cart
                                            </button>
                                         </Link>
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