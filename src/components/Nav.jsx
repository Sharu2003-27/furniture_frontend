import { Link } from "react-router-dom"
import { useContext, useMemo } from "react"
import ProductsContext from "../contexts/ProductsContext"

export default function Nav() {

    const { wishlist, cart } = useContext(ProductsContext)

    const cartCount = useMemo(() => {
        if (!Array.isArray(cart)) return 0
        return cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0)
    }, [cart])

    return (
        <div>
           
             <nav className="navbar bg-black border-bottom border-body" data-bs-theme="dark">
                <div className="container d-flex align-items-center justify-content-between">
                <Link to="/" className="mb-2 mb-md-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzUmOyXbeOmHGBbbhaMTY-L_C0b8dXy9Xbg&s" alt="furnitureLogo" 
                    className="img-fluid"
                     style={{ height: "80px", width: "120px" }}
                    />
                </Link> 
                <div className="d-flex flex-grow mx-4">
                   <span className="input-group-text">&#128269;</span>
                   <input type="text" placeholder="Search" className="form-control"/>
                </div>
                <ul className="nav d-flex align-items-center gap-2 gap-md-3 mt-2 mt-md-0">
                  <li className="nav-item">
                    <Link className="text-decoration-none" to="/loginForm">
                       <button className="d-inline p-2 text-bg-dark">Login</button>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center position-relative">
                     <Link className="" to="/wishList">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTiLZFHBfIciff-wEe4SOojLHF_vghdQ1pg&s" 
                        alt="wishlistLogo"
                        className="img-fluid"
                        style={{ height: "50px", width: "50px" }} />
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {wishlist.length}
                          </span>
                     </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center position-relative">
                     <Link className="" to="/cart">
                         <img src="data:image/png;base64,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" 
                         alt="cartLogo" 
                        className="img-fluid"
                        style={{ height: "50px", width: "50px" }} />
                           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                             {cartCount}
                           </span> 
                     </Link>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}