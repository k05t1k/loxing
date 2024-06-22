import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { TextField, Button, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { CREDENTIALS } from './CREDENTIALS';

const FeedbackForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = (data) => {
        const emailData = {
            name: data.name,
            email: data.email,
            message: data.message
        };

        emailjs.send(CREDENTIALS.serviceId, CREDENTIALS.templateId, emailData, CREDENTIALS.userId)
            .then((result) => {
                console.log(result.text);
                reset();
            }, (error) => {
                console.error(error.text);
            });
    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit(sendEmail)}>
            <FormControl fullWidth margin="normal" required error={!!errors.name}>
                <InputLabel htmlFor="name" shrink>Имя</InputLabel>
                <TextField id="name" {...register('name', { required: true })} />
                <FormHelperText>{errors.name && 'Поле обязательно для заполнения'}</FormHelperText>
            </FormControl>

            <FormControl fullWidth margin="normal" required error={!!errors.email}>
                <InputLabel htmlFor="email" shrink>Email</InputLabel>
                <TextField id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                <FormHelperText>{errors.email && 'Введите корректный email'}</FormHelperText>
            </FormControl>

            <FormControl fullWidth margin="normal" required error={!!errors.message}>
                <InputLabel htmlFor="message" shrink>Сообщение</InputLabel>
                <TextField id="message" multiline rows={4} {...register('message', { required: true })} />
                <FormHelperText>{errors.message && 'Поле обязательно для заполнения'}</FormHelperText>
            </FormControl>

            <Button type="submit" variant="contained" color="secondary">
                Отправить
            </Button>
        </form>
    );
};

export default FeedbackForm;
