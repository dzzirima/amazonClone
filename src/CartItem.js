import styled  from 'styled-components'
import React from 'react'
import { db } from './firebase'

const CartItem = ({id,item}) => {
    let options = []
    for(let i = 1;i<Math.max(item.quantity +1 ,20); i++){
        options.push(<option value = {i}> Qty:{i}</option>)
    }

    const changeQuantity = (newQuantity) =>{
        //in the database change the quantiy
        db.collection('cartItems').doc(id).update({
            quantity:parseInt(newQuantity)
        })
    }


    // function to delete the items innthe cart'
    const deleteItem = (e) =>{
        e.preventDefault()
        db.collection("cartItems").doc(id).delete()

    }
    
    return (
        <Container>
            <ImageContainer> 
            <img  src = {item.image}/>
            </ImageContainer>
            <CartItemInfo>
                <CartItemInforTop> 
                    <h2>{item.name}</h2>
                    </CartItemInforTop>
                <CartItemInforBottom>
                    <CardItemQuantityContainer>
                        <select
                        value= {item.quantity}
                        onChange={(e) =>changeQuantity(e.target.value)}
                        >
                           {options}
                        </select>
                          
                    </CardItemQuantityContainer>
                    <CardItemDeleteContainer
                    onClick= {deleteItem}
                    > 
                     Delete
                     </CardItemDeleteContainer>

                </CartItemInforBottom>

            </CartItemInfo>

            <CartItemPrice>${item.price}</CartItemPrice>
            
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top:12px;
    padding-bottom:12px;
    display:flex;
    border-bottom:1px solid #DDD
`
const CardItemQuantityContainer = styled.div`
    select{
        border-radius:7px;
        background-color:#0F2F2;
        padding:8px;
        baox-shadow: 0 2px 5px rgba(15,17,17,.15);

    }
    select:focus{
        outline:none;
    }
`
const ImageContainer = styled.div`
    width:180px;
    height:180px;
    flex-shrink:0;
    flex-grow:0;
    margin-right:16px;
    img{
        object-fit:contain;
        height:100%;
        width:100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow:1;

`
const CartItemInforTop = styled.div`
    h2{
        font-size:18px;
    }
    // color:#007185
`
const CartItemInforBottom = styled.div`
    display:flex;
    margin-top:4px;
    align-items:center

`
const CardItemDeleteContainer = styled.div`
        color:#007185;
        margin-left:16px;
        cursor:pointer;


`
const CartItemPrice =  styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px;

`

