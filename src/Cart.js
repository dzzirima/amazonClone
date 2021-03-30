import styled from 'styled-components'
import React from 'react'
import CardItems from './CardItems'
import CardTotal from './CardTotal'

const Cart = ({cartitems }) => {
    


    return (
        <Container>
            <CardItems cartitems = {cartitems}></CardItems>
            <CardTotal></CardTotal>
            
            
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    padding:19px;
`
