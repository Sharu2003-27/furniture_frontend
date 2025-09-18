import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <div>
            <main className="p-5 bg-dark-subtle" >
                <section className='text-center'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card p-4 bg-black'>
                                <Link to={`/productsList/home-decor`} className='text-decoration-none'>
                                    <h4 className='text-white'>Home Decor</h4>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card p-4 bg-black'>
                                <Link to={`/productsList/living-room`} className='text-decoration-none'>
                                    <h4 className='text-white'>Living Room</h4>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card p-4 bg-black'>
                                <Link to={`/productsList/kitchen`} className='text-decoration-none'>
                                    <h4 className='text-white'>Kitchen & Dining</h4>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card p-4 bg-black'>
                                <Link to={`/productsList/bedroom`} className='text-decoration-none'>
                                    <h4 className='text-white'>Bedroom</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-3">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/012/148/629/original/interior-design-concept-sale-of-home-decorations-and-furniture-during-promotions-and-discounts-it-is-surrounded-by-beds-sofas-armchairs-and-advertising-spaces-banner-pastel-background-3d-render-video.jpg" 
                    alt="diwali offer" 
                    className="img-fluid p-2"
                    style={{maxHeight: "700px", width: "100%"}}/>
                </section>

                <section className="p-3">
                    <div className="row">   
                        <div className="col-md-6">
                            <div className="card h-100 d-flex flex-row">
                                <img src="https://i.ytimg.com/vi/KvZHL8D-RAE/maxresdefault.jpg" 
                                alt="winter sale 1"
                                className="img-fluid"
                                style={{ width: "50%", objectFit: "cover" }} />
                                <div className="card-body p-5">
                                    <h4>Winter Collection</h4>
                                    <p>Winterize Your Home, Warm Your Soul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100 d-flex flex-row">
                                <img src="https://www.coversandall.com/blog/wp-content/uploads/2021/11/Tips-to-Winterize-and-Store-Your-Outdoor-Furniture.png"
                                 alt="" 
                                 className="img-fluid"
                                 style={{ width: "50%", objectFit: "cover" }} />
                                 <div className="card-body p-5">
                                    <h4>Winter Collection</h4>
                                    <p>Turn Your Home into a Winter Haven.</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
} 