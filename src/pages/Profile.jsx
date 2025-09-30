import { useContext } from "react"
import { Link } from "react-router-dom"
import ProductsContext from "../contexts/ProductsContext"

export default function Profile() {
  const { orders } = useContext(ProductsContext)
  const user = { name: "John Doe", email: "john@example.com", phone: "+91 98765 43210" }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <h4>Profile</h4>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Phone:</strong> {user.phone}</div>
            <Link to="/address" className="btn btn-primary btn-sm mt-2">Manage Addresses</Link>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3">
            <h4>Order History</h4>
            {orders.length === 0 && <p className="text-muted">No orders yet.</p>}
            {orders.map(order => (
              <div key={order.id} className="border rounded p-2 mb-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <div><strong>Order #{order.id}</strong></div>
                    <div className="text-muted">{new Date(order.placedAt).toLocaleString()}</div>
                  </div>
                  <div><strong>₹{order.amount.toFixed(2)}</strong></div>
                </div>
                <div className="mt-2">
                  {order.items.map(i => (
                    <div key={i._id + (i.size || '')} className="d-flex justify-content-between">
                      <div>{i.productName} {i.size ? `(Size: ${i.size})` : ''} x {i.quantity || 1}</div>
                      <div>₹{(i.productPrice * (i.quantity || 1)).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



