import { useContext } from "react"
import { Link } from "react-router-dom"
import ProductsContext from "../contexts/ProductsContext"

export default function Profile() {
  const { orders } = useContext(ProductsContext)

  const user = {
    name: "Sharayu Borude",
    email: "sharayub@gmail.com",
    phone: "+91 98765 43210",
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-4">
            <div className="text-center mb-3">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                   style={{ width: "80px", height: "80px", fontSize: "32px" }}>
                {user.name.charAt(0)}
              </div>
            </div>
            <h4 className="text-center mb-3">{user.name}</h4>
            
            <div className="mb-3">
              <label className="text-muted small">Email</label>
              <p className="mb-2">{user.email}</p>
            </div>
            
            <div className="mb-3">
              <label className="text-muted small">Phone</label>
              <p className="mb-2">{user.phone}</p>
            </div>
            
            <hr />
            
            <Link to="/address" className="btn btn-primary btn-sm w-100">
              Manage Addresses
            </Link>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card p-3">
            <h4 className="mb-3">Order History</h4>
            {orders.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No orders yet.</p>
                <Link to="/productsList/All" className="btn btn-primary">
                  Start Shopping
                </Link>
              </div>
            )}
            {orders.map(order => (
              <div key={order.id} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <div><strong>Order #{order.id}</strong></div>
                    <div className="text-muted small">{new Date(order.placedAt).toLocaleString()}</div>
                  </div>
                  <div className="text-end">
                    <div><strong>₹{order.amount.toFixed(2)}</strong></div>
                    <span className="badge bg-success">Delivered</span>
                  </div>
                </div>
                
                <hr className="my-2" />
                
                <div className="mt-2">
                  {order.items.map(i => (
                    <div key={i._id + (i.size || '')} className="d-flex justify-content-between py-1">
                      <div className="text-muted">
                        {i.productName} {i.size ? `(Size: ${i.size})` : ''} x {i.quantity || 1}
                      </div>
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