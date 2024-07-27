import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/categories/electronics/products', {
                    params: {
                        n: 10,
                        page: 1,
                        sort: 'rating'
                    }
                });
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <h2>{product.name}</h2>
                            <p>Price: {product.price}</p>
                            <p>Rating: {product.rating}</p>
                        </li>
                    ))}
                </ul>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default ProductList;