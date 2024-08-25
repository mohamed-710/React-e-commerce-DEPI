import React from 'react';
import "../Details.css";
import { Link } from 'react-router-dom';

function ProductDetails({ product, onAddToCart }) {
    return (
        <div className="d-flex flex-column h-100 align-items-center" id="product-container">
            <div className="container my-5">
                <Link to="/" className="back-button">&#8592; Home</Link>
                <section>
                    <div className="card rounded mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img 
                                    className="img-fluid rounded rounded-left" 
                                    src={product.images[0]} 
                                    alt={product.title} 
                                />
                            </div>
                            <div className="col-md-6 p-5 align-self-center">
                                <h5 className="font-weight-normal mb-3">{product.title}</h5>
                                <p className="text-muted">{product.description}</p>
                                <ul className="list-unstyled font-small mt-5 mb-0">
                                    <li>
                                        <p className="text-uppercase mb-2"><strong>Stock</strong></p>
                                        <p className="text-muted mb-4">{product.stock}</p>
                                    </li>
                                    <li>
                                        <p className="text-uppercase mb-2"><strong>Category</strong></p>
                                        <p className="text-muted mb-4">{product.category}</p>
                                    </li>
                                    <li>
                                        <p className="text-uppercase mb-2"><strong>Brand</strong></p>
                                        <p className="text-muted mb-4">{product.brand}</p>
                                    </li>
                                    <li>
                                        <p className="text-uppercase mb-2"><strong>Price</strong></p>
                                        <p className="text-muted mb-4">${product.price}</p>
                                    </li>
                                </ul>

                                {!product.stock ? (
                                    <div className="px-2 text-white bg-danger rounded-2">
                                        Not Available Now!
                                    </div>
                                ) : (
                                    <button 
                                        className="btn btn-outline-primary"
                                        onClick={() => onAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductDetails;
