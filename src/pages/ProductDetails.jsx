import { useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import ProductsContext from "../contexts/ProductsContext"

export default function ProductDetails() {
    const { id } = useParams()
    const { data, setCart, wishlist, setWishlist, setAlertMessage } = useContext(ProductsContext)
    const [selectedSize, setSelectedSize] = useState("")
    const [quantity, setQuantity] = useState(1)

    // Find the product by ID
    const product = data?.find(item => item._id === id)
    
    if (!product) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <h2>Product not found</h2>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        )
    }

    const sizes = ["S", "M", "L", "XL"]
    const originalPrice = product.productPrice * 2
    const discount = originalPrice - product.productPrice
    const discountPercentage = Math.round((discount / originalPrice) * 100)

    function addToCart() {
        const cartItem = {
            ...product,
            quantity: quantity,
            size: selectedSize
        }
        setCart((prevCart) => {
            const existing = prevCart.find((p) => p._id === cartItem._id && p.size === cartItem.size)
            if (existing) {
                return prevCart.map((p) => (p._id === cartItem._id && p.size === cartItem.size) ? { ...p, quantity: (p.quantity || 1) + quantity } : p)
            }
            return [...prevCart, cartItem]
        })
        setAlertMessage("Added to cart")
    }

    function addToWishlist() {
        if (!wishlist.find((p) => p._id === product._id)) {
            setWishlist((prev) => [...prev, product])
            setAlertMessage("Added to wishlist")
        }
    }

    function buyNow() {
        addToCart()
        // Redirect to cart page
        window.location.href = "/cart"
    }

    return (
        <div className="container py-5">
            <div className="row">
                {/* Product Image */}
                <div className="col-md-6">
                    <div className="position-relative">
                        <img 
                            src={product.productImage} 
                            alt={product.productName}
                            className="img-fluid rounded"
                            style={{ width: "100%", height: "500px", objectFit: "cover" }}
                        />
                        <button 
                            className="btn btn-light position-absolute top-0 end-0 m-3"
                            onClick={addToWishlist}
                            title="Add to Wishlist"
                        >
                            ♥
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <div className="ps-4">
                        <h1 className="mb-3">{product.productName}</h1>
                        
                        {/* Rating */}
                        <div className="mb-3">
                            <div className="d-flex align-items-center">
                                <div className="text-warning me-2">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                                <span className="text-muted">({product.rating || 4.5} rating)</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <div className="d-flex align-items-center">
                                <h2 className="text-primary me-3">₹{product.productPrice}</h2>
                                <span className="text-decoration-line-through text-muted me-2">
                                    ₹{originalPrice}
                                </span>
                                <span className="badge bg-success">{discountPercentage}% OFF</span>
                            </div>
                            <p className="text-success mb-0">You save ₹{discount}</p>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <h5>Description</h5>
                            <p className="text-muted">{product.productDescription}</p>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-4">
                            <h5>Size</h5>
                            <div className="d-flex gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline-secondary'}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-4">
                            <h5>Quantity</h5>
                            <div className="d-flex align-items-center">
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </button>
                                <span className="mx-3 fs-5">{quantity}</span>
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mb-4">
                            <div className="d-flex gap-3">
                                <button 
                                    className="btn btn-primary btn-lg px-4"
                                    onClick={addToCart}
                                    disabled={!selectedSize}
                                >
                                    Add to Cart
                                </button>
                                <button 
                                    className="btn btn-success btn-lg px-4"
                                    onClick={buyNow}
                                    disabled={!selectedSize}
                                >
                                    Buy Now
                                </button>
                            </div>
                            {!selectedSize && (
                                <p className="text-danger mt-2">Please select a size</p>
                            )}
                        </div>

                        {/* Additional Information */}
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Payment Options</h6>
                                <ul className="list-unstyled text-muted">
                                    <li>• Credit/Debit Card</li>
                                    <li>• UPI</li>
                                    <li>• Net Banking</li>
                                    <li>• EMI Available</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h6>Delivery Options</h6>
                                <ul className="list-unstyled text-muted">
                                    <li>• Free delivery on orders above ₹999</li>
                                    <li>• Express delivery (1-2 days)</li>
                                    <li>• Standard delivery (3-5 days)</li>
                                    <li>• Cash on delivery available</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h6>Return Policy</h6>
                            <p className="text-muted">
                                Easy 30-day return policy. Items must be in original condition with tags attached. 
                                Free pickup for returns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
