
import { useContext } from "react"
import ProductsContext from "../contexts/ProductsContext"
import { Link } from "react-router-dom"

export default function WishList() {
    const { wishlist, setWishlist, setCart } = useContext(ProductsContext)

    function removeFromWishlist(id) {
        setWishlist((prev) => prev.filter((p) => p._id !== id))
    }

    function moveToCart(product) {
        setCart((prev) => [...prev, { ...product, quantity: 1 }])
        removeFromWishlist(product._id)
    }

    return (
        <div>
          <section className="bg-body-secondary" style={{ minHeight: "100vh" }}>
            <h1 className="text-center p-5">My Wishlist ({wishlist.length})</h1>

            <div className="container">
              {wishlist && wishlist.length > 0 ? (
                <div className="row">
                  {wishlist.map((item) => (
                    <div key={item._id} className="col-md-3 p-3">
                      <div className="card h-100">
                        <img src={item.productImage} alt={item.productName} />
                        <div className="card-body">
                          <h4 className="card-title">{item.productName}</h4>
                          <p className="card-text">₹{item.productPrice}</p>
                          <div className="d-flex gap-2">
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => removeFromWishlist(item._id)}>
                              Remove
                            </button>
                            <Link to="/cart" className="text-decoration-none">
                              <button className="btn btn-primary btn-sm" onClick={() => moveToCart(item)}>
                                Move to Cart
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <h3>Your wishlist is empty</h3>
                </div>
              )}
            </div>
          </section>
        </div>
    )
}