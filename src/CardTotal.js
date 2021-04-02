import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function  CardTotal({getCount, getTotalPrice}){
    return (
        <Container>
           <Subtotal>
           Subtotal ({getCount()})<NumberFormat value={getTotalPrice()} displayType={'Subtotal'} thousandSeparator={true} prefix={'$'} />
           </Subtotal>
           <CheckoutButton>
               Proceed To Checkout:
           </CheckoutButton>
        </Container>
    )
}

export default CardTotal

const Container = styled.div`
    flex:0.2;
    background-color:#f7f3e9;
    padding-top:19px;
    padding:20px;
    
   
`
const Subtotal = styled.h2`
    padding-bottom:20px;

`
const CheckoutButton = styled.button`
    background-color:#f0c14b;
    padding :4px 8px;
    boarder:2px solid #a88734;
    border-radius:4px;
    cursor:pointer;
    font-size:16px;
    :hover{
        background-color:#ffefcf;
    }

`
