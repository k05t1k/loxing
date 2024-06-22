import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import {Card, Container, FormControl, InputLabel, MenuItem, Select, TextField, Grid} from '@mui/material';
import ProductList from "../../components/ProductList/ProductList";
import { motion } from 'framer-motion';

const Catalogue = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '20px'
    };

    return (
        <div>
            <Container maxWidth="md" sx={{ marginTop: '80px' }}>
                <Grid container spacing={2} justifyContent="center">
                    <motion.div
                        initial={{ opacity: 0 }} // start with opacity 0
                        animate={{ opacity: 1 }} // animate to opacity 1
                        transition={{ duration: 0.5, delay: 0.5 }} // animate over 0.5 seconds, with a delay of 0.5 seconds
                    >
                        <ProductList limit={10} />
                    </motion.div>
                </Grid>
            </Container>

        </div>
    );
};

export default Catalogue;
