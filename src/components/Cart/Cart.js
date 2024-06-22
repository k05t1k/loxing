import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { Container, Typography, Button, Grid, Paper, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                {cart.map(item => (
                    <Grid item xs={12} key={item.id}>
                        <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, mr: 2 }}
                                image={item.image}
                                alt={item.name}
                            />
                            <div>
                                <Typography variant="h5" gutterBottom>
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {item.description}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {item.price}₽
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeFromCart(item.id)}
                                    sx={{ mr: 1 }}
                                >
                                    Удалить
                                </Button>
                                <Button
                                    component={Link}
                                    to={`/product/${item.id}`}
                                    variant="outlined"
                                    startIcon={<ControlPointIcon />}
                                    color="secondary"
                                >
                                    Информация
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Вы потратите: {totalPrice}₽
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;
