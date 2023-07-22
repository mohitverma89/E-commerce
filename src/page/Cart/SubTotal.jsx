import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { Span } from '../../assets/styles';
import { clearCart } from "../../services/features/cart/cartSlice";

export const SubTotal = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <Card elevation={15} sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
            <CardContent >
                <Typography sx={{ display: "inline" }}>
                    Subtotal ({cart?.cartTotalQuantity} items):
                </Typography>
                <Span> ₹ {cart?.cartTotalAmount}</Span>
            </CardContent>
            <CardActions >
                <Button color='success' variant='contained'>Checkout</Button>
            </CardActions>
        </Card>
    )
}
