import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Loading from './Loading';
import Error from './Error';

function ProductDetailsList({ onAddToCart }) { 
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <div className="product-details-page">
            <ProductDetails product={product} onAddToCart={onAddToCart} /> 
        </div>
    );
}

export default ProductDetailsList;
