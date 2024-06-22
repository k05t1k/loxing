import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import ProductList from '../../components/ProductList/ProductList';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: '80px' }}>
            <Box my={4}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Магазин Лавка Кости
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    У нас широкий асортимент выбора продуктов и прочих товаров
                    Только у нас вы можете найти гречку за 50 рублей и дезодорант за 100 рублей
                </Typography>
            </Box>

            <Box my={4}>
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                    Обратная связь
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Напишите нам
                </Typography>
                <FeedbackForm />
            </Box>

            <Box my={4}>
                <Typography variant="h5" component="h2" align="center" gutterBottom mb={5}>
                    Рекомендуемые товары
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <motion.div
                        initial={{ opacity: 0 }} // start with opacity 0
                        animate={{ opacity: 1 }} // animate to opacity 1
                        transition={{ duration: 0.5, delay: 0.5 }} // animate over 0.5 seconds, with a delay of 0.5 seconds
                    >
                        <ProductList limit={10} />
                    </motion.div>
                </Grid>
            </Box>
        </Container>
    );
};

export default HomePage;
