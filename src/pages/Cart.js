import React from 'react'
import {Button, Container, Col, Row, Table} from 'react-bootstrap'
import {useCart} from 'react-use-cart'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import { BsCartCheck, BsCartX } from 'react-icons/bs'


const Cart = () => {
    const [theme] = useThemeHook ();
    const {
        isEmpty,
        totaUniqueItem,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    
    
    return (
        
    )
}

export default Cart
