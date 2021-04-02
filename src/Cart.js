import styled from 'styled-components'
import React from 'react'
import CardItems from './CardItems'
import CardTotal from './CardTotal'

const Cart = ({cartitems }) => {
    const getTotalPrice = () =>{
        let total = 0;
        cartitems.forEach(cartitem => {

            total += (cartitem.product.price * cartitem.product.quantity)            
        });
        return total;
    }
    const getCount = () =>{
        let count = 0;
        //loop through all the cart items
        cartitems.forEach(cartitem => {
            //add the quantity of the cart item to total
            count += cartitem.product.quantity
            
        });
        return count

    }
    
    


    return (
        <Container>
            <CardItems cartitems = {cartitems}></CardItems>
            <CardTotal getCount = {getCount} getTotalPrice = {getTotalPrice}></CardTotal>
            
            
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    padding:19px;
    align-items:flex-start;
`
