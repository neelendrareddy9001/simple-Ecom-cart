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
        items
    } = useCart();
    
    
    return (
        <div style={{height : '100vh', width : '100vw', background : 'green'}}>
            Cart Page
        </div>
    )
}

export default Cart
