import { useContext, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import ProductsContext from "../contexts/ProductsContext"

export default function Checkout() {
  const { cart, setCart, addresses, selectedAddressId, orders, setOrders, alertMessage, setAlertMessage } = useContext(ProductsContext)
  const navigate = useNavigate()

  const selectedAddress = useMemo(() => addresses.find(a => a.id === selectedAddressId), [addresses, selectedAddressId])
  const totals = useMemo(() => {
    const qty = cart.reduce((sum, i) => sum + (i.quantity || 1), 0)
    const subtotal = cart.reduce((sum, i) => sum + (i.productPrice * (i.quantity || 1)), 0)
    const discount = subtotal * 0.5
    const delivery = cart.length > 0 ? 299 : 0
    const total = subtotal - discount + delivery
    return { qty, subtotal, discount, delivery, total }
  }, [cart])

  function placeOrder() {
    if (!cart.length) {
      setAlertMessage("Your cart is empty")
      return
    }
    if (!selectedAddress) {
      setAlertMessage("Please select an address before checkout")
      return
    }
    const newOrder = {
      id: Date.now().toString(),
      items: cart,
      address: selectedAddress,
      amount: totals.total,
      placedAt: new Date().toISOString()
    }
    setOrders([newOrder, ...orders])
    setCart([])
    setAlertMessage("Order placed successfully")
    navigate("/profile")
  }

  return (
    <div className="container py-4">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card p-3 mb-3">
            <h5>Delivery Address</h5>
            {selectedAddress ? (
              <div>
                <div><strong>{selectedAddress.name}</strong> ({selectedAddress.phone})</div>
                <div className="text-muted">{selectedAddress.line1}{selectedAddress.line2 ? `, ${selectedAddress.line2}` : ''}</div>
                <div className="text-muted">{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</div>
                <Link to="/address" className="btn btn-link p-0">Change</Link>
              </div>
            ) : (
              <div>
                <p className="text-muted mb-2">No address selected.</p>
                <Link to="/address" className="btn btn-primary btn-sm">Add/Select Address</Link>
              </div>
            )}
          </div>

          <div className="card p-3">
            <h5>Order Summary</h5>
            {cart.map(item => (
              <div key={item._id + (item.size || '')} className="d-flex justify-content-between border-bottom py-2">
                <div>
                  <div>{item.productName} {item.size ? `(Size: ${item.size})` : ''}</div>
                  <div className="text-muted">Qty: {item.quantity || 1}</div>
                </div>
                <div>₹{(item.productPrice * (item.quantity || 1)).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 sticky-top">
            <h5>Price Details</h5>
            <div className="d-flex justify-content-between"><span>Items</span><span>{totals.qty}</span></div>
            <div className="d-flex justify-content-between"><span>Subtotal</span><span>₹{totals.subtotal.toFixed(2)}</span></div>
            <div className="d-flex justify-content-between"><span>Discount</span><span className="text-success">-₹{totals.discount.toFixed(2)}</span></div>
            <div className="d-flex justify-content-between"><span>Delivery</span><span>₹{totals.delivery}</span></div>
            <hr />
            <div className="d-flex justify-content-between"><strong>Total</strong><strong>₹{totals.total.toFixed(2)}</strong></div>
            <button className="btn btn-success w-100 mt-3" disabled={!selectedAddress || !cart.length} onClick={placeOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}



