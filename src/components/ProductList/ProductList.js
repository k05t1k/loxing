import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import {Grid} from "@mui/material";

const ProductList = ({ limit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data.slice(0, limit));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [limit]);

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;