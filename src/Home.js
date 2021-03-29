import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
import {db} from './firebase'



const Home = () => {
    const [products, setProducts] = useState([])

    const getProducts = () =>{
        var tempProducts = []

        db.collection("products").onSnapshot((snapshot) =>{
           
            tempProducts = snapshot.docs.map((doc) =>(
                {
                    id:doc.id,
                    product:doc.data(),
                }
            ));
            // put the products in the state
            setProducts(tempProducts)
        })
       
    }

    useEffect(() => {
        //  this make sure that the function is call once
        getProducts()
    }, [])
   
   
    console.log(products)
    return (
        <Container>
            <Banner></Banner>
            <Contents> 
            {
                products.map((data) =>
                    <Product
                    title = {data.product.name}
                    price = {data.product.price}
                    rating = {data.product.rating}
                    image = {data.product.image}  
                    />
                )
            }
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
