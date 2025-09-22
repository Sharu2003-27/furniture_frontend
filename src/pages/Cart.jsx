import { useContext } from "react"
import ProductsContext from "../contexts/ProductsContext"

export default function Cart() {
  const { cart } = useContext(ProductsContext)

  return (
    <div>
      <section className="container py-4">
        <h1 className="text-center">MY CART ({cart.length})</h1>

        <div>
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <div className="card mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={item.productImage} 
                      className="img-fluid rounded-start" 
                      alt={item.productName} 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.productName}</h5>
                      <p className="card-text">₹ {item.productPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">🛒 Cart is empty</p>
          )}
        </div>
      </section>
    </div>
  )
}
