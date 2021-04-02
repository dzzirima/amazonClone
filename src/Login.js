import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
           <Content>
               <AmazonLogo>
               <img src ="/amazon.png" ></img>
               </AmazonLogo>
              
                <h1> Sign into  Amazon</h1>
                <LoginButton>
                    Sign in With Google
                </LoginButton>
               
           </Content>
            
        </Container>
    )
}

export default Login


const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:#a3d2ca;
    display:grid;
    place-items:center;

`
const Content = styled.div`
    padding:100px;
    background-color:#5eaaa8;
    border-radius:5px;
    box-shadow:0 1px 3px #f7f3e9
`
const AmazonLogo = styled.div`
    img{
        height:100px;
    }
`
const LoginButton = styled.button`
`
