import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FavoritesContext } from '../../contexts/FavoritesContext/FavoritesContext';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { Container, Grid, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const ProductInfoPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToFavorites, removeFromFavorites, isInFavorites } = useContext(FavoritesContext);
    const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToFavorites = () => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const handleCartAction = () => {
        if (isInCart(product.id)) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    if (!product) {
        return <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#9c27b0', textAlign: 'center'}}>
            <div>Загрузка...</div>
        </Typography>
    }

    return (
        <Container maxWidth="md" sx={{ marginTop: '80px' }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {product.description}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#9c27b0'}}>
                        Цена: {product.price}₽
                    </Typography>
                    <Button variant="contained" sx={{marginBottom: '2px'}} startIcon={isInFavorites(product.id) ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />} onClick={handleAddToFavorites} color="secondary">
                        {isInFavorites(product.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
                    </Button>
                    <Button variant="contained" sx={{marginBottom: '2px'}} color="secondary" onClick={handleCartAction}>
                        {isInCart(product.id) ? <RemoveShoppingCartIcon/> : <ShoppingCartIcon/>}
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', margin: '10px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductInfoPage;
