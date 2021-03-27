import React from 'react'
import styled from 'styled-components'


function Product() {

    

    return (
        <Container>
            <Title>
                title
            </Title>
            <Price>
                price
            </Price>
            <Rating>
                
            </Rating>
            <Image src={'https://www.game.co.za/medias/740985-EA-1200x1200.jpg?context=bWFzdGVyfGltYWdlc19vbmVjb218MjMxNjk5fGltYWdlL2pwZWd8aGQ3L2hjNy84OTIzMjk5MTE5MTM0LmpwZ3wxMDYzZDY0NTQyMWM4OGRkMDkzYzJhODkwNjJlZTIwZTg0M2Q3MTYyNDMwNGNjMzg3NzQ3NTc3MGE3YjBhMDQz'} />
            <ActionSection>
                <AddToCartButton
                   
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span``
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`