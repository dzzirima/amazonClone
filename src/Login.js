import React from 'react'
import styled from 'styled-components'
import {auth,provider} from './firebase'

const Login = ({setUser}) => {


    const signIn = () =>{
        auth.signInWithPopup(provider).then((result) =>{
            let user = result.user
            let newUser =  {
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }
            setUser(newUser);
            localStorage.setItem('user',JSON.stringify(newUser))

        }).catch((error)=>{
            alert(error.message)
        })

    }
    return (
        <Container>
           <Content>
               <AmazonLogo>
               <img src ="/amazon.png" ></img>
               </AmazonLogo>
              
                <h1> Sign into  Amazon</h1>
                <LoginButton
                    onClick = {signIn}
                >
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
    box-shadow:0 1px 3px #f7f3e9;
    text-align:center;
`
const AmazonLogo = styled.div`
    img{
        height:100px;
        margin-bottom:40px;
    }
`
const LoginButton = styled.button`
    margin-top:50px;        
    background-color:#f0c14b;
    height:40px;
    border:2px solid #a88734;
    border-radius:4px;
    cursor:pointer;
`
