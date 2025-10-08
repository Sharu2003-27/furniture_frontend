import { useContext, useState, useEffect } from "react"
import ProductsContext from "../contexts/ProductsContext" 

export default function Cart() {
  
  const { cart, setCart, wishlist, setWishlist, setAlertMessage } = useContext(ProductsContext)

  const [quantity, setQuantity] = useState(
    cart.reduce((acc, curr) => {
      acc[curr._id] = curr.quantity || 1
      return acc
    }, {})  
  )

  useEffect(() => {
  if (cart.length > 0) {
    setAlertMessage("Updated cart quantities")
  }
}, [quantity])


  function incrementCounter(id) {
    setQuantity((prev) => ({
      ...prev, 
      [id]: prev[id] + 1
    })) 
  }

  function decrementCounter(id) {
    setQuantity((prev) => ({
      ...prev, 
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }))
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p._id !== id))
    setAlertMessage("Removed from cart")
  }

    function moveToWishlist(productId) {
    const product = cart.find((p) => p._id === productId)
    if (!product) return
    if (!wishlist.find((p) => p._id === product._id)) {
      setWishlist((prev) => [...prev, product])
    }
    removeFromCart(productId)
    setAlertMessage("Moved to wishlist")
  }

  function addToWishlist(product) {
    if (!wishlist.find((p) => p._id === product._id)) {
      setWishlist((prev) => [...prev, product])
    }
    setAlertMessage("Added to wishlist")
  }

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.productPrice * quantity[item._id])
    }, 0)
  }

  const calculateTotalDiscount = () => {
    return cart.reduce((total, item) => {
      return total + (item.productPrice * quantity[item._id] * 0.5)
    }, 0)
  }

  const subtotal = calculateSubtotal()
  const totalDiscount = calculateTotalDiscount()
  const deliveryCharges = 299
  const totalAmount = subtotal - totalDiscount + deliveryCharges
 
  return (
    <div>
      <section className="bg-body-secondary" style={{ minHeight: "100vh" }}>
        <h1 className="text-center p-5">MY CART ({cart.length})</h1>

        <div className="container">
          {cart && cart.length > 0 ? (
            <div className="row">
              <div className="col-md-8">
                {cart.map((item) => (
                  <div key={item._id} className="card mb-3 position-relative">
                    <button 
                      className="btn btn-light position-absolute" 
                      style={{ top: 8, left: 8 }}
                      title="Add to wishlist"
                      onClick={() => addToWishlist(item)}
                    >
                      ♥
                    </button>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img 
                          src={item.productImage} 
                          className="img-fluid rounded-start"
                          style={{ width: "100%", height: "100%" }}
                          alt={item.productName} 
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title">{item.productName}</h4>
                          <p>
                            <strong className="fs-5">₹{item.productPrice}</strong> {" "}
                            <span className="text-decoration-line-through text-muted">
                              ₹{item.productPrice * 2}
                            </span> 
                            <br />
                            <strong className="text-success fs-6">50% off</strong>
                          </p>
                          <div className="d-flex align-items-center mb-2">
                            <strong>Quantity: </strong>
                            <div className="d-flex align-items-center mx-3">
                              <button 
                                className="btn btn-outline-secondary btn-sm rounded-circle me-2"
                                onClick={() => decrementCounter(item._id)}
                                style={{ width: "35px", height: "35px" }}
                              > 
                                - 
                              </button> 
                              <span className="btn btn-secondary px-3"> 
                                {quantity[item._id]} 
                              </span>
                              <button 
                                className="btn btn-outline-secondary btn-sm rounded-circle ms-2"
                                onClick={() => incrementCounter(item._id)}
                                style={{ width: "35px", height: "35px" }}
                              > 
                                + 
                              </button>
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item._id)}>
                              Remove
                            </button>
                            <button className="btn btn-outline-primary btn-sm" onClick={() => moveToWishlist(item._id)}>
                              Move to Wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>  

              <div className="col-md-4">
                <div className="card p-3 sticky-top">
                  <h4><strong>Price Details</strong></h4>
                  <hr />

                  <div className="d-flex justify-content-between align-items-center">
                    <p>Price ({cart.reduce((total, item) => total + quantity[item._id], 0)} items)</p>
                    <p>₹{subtotal.toFixed(2)}</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <p>Discount</p>
                    <p className="text-success">-₹{totalDiscount.toFixed(2)}</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <p>Delivery Charges</p>
                    <p>₹{deliveryCharges}</p> 
                  </div>
                  <hr />

                  <div className="d-flex justify-content-between align-items-center">
                    <p><strong>TOTAL AMOUNT:</strong></p>
                    <p><strong>₹{totalAmount.toFixed(2)}</strong></p>
                  </div> 
                  <hr />

                  <p className="text-success">
                    You will save ₹{totalDiscount.toFixed(2)} on this order.
                  </p>
                  <a href="/address" className="btn btn-outline-secondary w-100 mb-2">Choose Address</a>
                  <a href="/checkout" className="btn btn-primary w-100">Checkout</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <h3>🛒 Your cart is empty</h3>
              <p className="text-muted">Add some items to get started!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}