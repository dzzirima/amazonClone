import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

const CardItems = ({cartitems }) => {
    return (
        <Container>
           <Title>Shopping Cart</Title>
           <hr/>
           
           <ItemsContainer>
               {
                   cartitems.map((item) =>(

                    <CartItem
                        id={item.id}
                        item= {item.product}
                
                    />
                   ))
               }  
           </ItemsContainer>
        </Container>
    )
}

export default CardItems

const Container = styled.div`

    background-color:#f3f4ed;
    flex:0.8;
    padding:20px;
    margin-right:18px;
    
`
const Title  = styled.div`
    margin-bottom:8px;
`

const ItemsContainer = styled.div`
`