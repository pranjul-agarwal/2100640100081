import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/categories/electronics/products/${match.params.productId}`);
                setProduct(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [match.params.productId]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default ProductDetails;