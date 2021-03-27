import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Contents> 
            <Product/>
            <Product/>
            </Contents>

        </Container>
    )
}

export default Home


const Container = styled.div`
    max-width:1500px;
    margin:0 auto;

`

const Banner = styled.div`
    background-image:url('https://imgur.com/SYHeuYM.jpg');
    min-height:600px;
    background-position:center;
    background-size:cover;
    mask-image:linear-gradient(to bottom,rgba(0,0,1),rgba(0,0,0,0))

`
const  Contents = styled.div`
    background:white;
    padding:10px;
    margin-top:-350px;
    display:flex;

`