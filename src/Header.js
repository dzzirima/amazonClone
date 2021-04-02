import React from 'react'
import styled  from 'styled-components'
import {
    Link
  } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header = ({ cartitems }) => {
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
            <HeaderLogo>
                <Link to = "/">
                <img src = {"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} alt = "logo"></img>

                </Link>
                
               
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne> Hello</OptionLineOne>
                    <OptionLineTwo> Take me Home broe...</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput  type = "text"></HeaderSearchInput>
                <HeaderSearchContainer>
                    <SearchIcon/>
                </HeaderSearchContainer>
            </HeaderSearch>

            <HeaderNavitems>
                <HeaderOption>
                    <OptionLineOne> Hello ,David</OptionLineOne>
                    <OptionLineTwo> Account & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne> Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                        <HeaderOptionCard>
                        <Link  to ="/cart">
                            <LocalMallIcon></LocalMallIcon>
                            <CartCount>{getCount()}</CartCount>
                            </Link>
                        </HeaderOptionCard> 
            </HeaderNavitems>

            
        </Container>
    )
}

export default Header

const HeaderLogo = styled.div`
    img{
        width:100px;
        margin-left:11px;
   
    }
    
`
const  Container = styled.div`
    height:60px;
    background-color:#0F1111;
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-between;
`
const HeaderOptionAddress = styled.div`
    padding-left:9px;
    padding-right:4px;
    display:flex;
    justify-content:center;
    align-items:center


`
const OptionLineOne = styled.div`
    font-weight:10;

`

const OptionLineTwo = styled.div`
    font-weight:700;


`

const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left:4px;
    background-color:white;

    :focus-within{
        box-shadow:0 0 0 3px #F90;

    }


`

const HeaderSearchInput = styled.input`
    flex-grow:1;
    height:40px;
    border:0px;
    :focus{
        outline:none
    }

`

const HeaderSearchContainer = styled.div`
    background-color:#febd69;
    width:45px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;

`
const HeaderNavitems = styled.div`
    display:flex


`
const HeaderOption = styled.div` 
    padding:10px 9px 10px 9px


`
const HeaderOptionCard = styled.div`
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-between;
    padding-right:10px;

    a{
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        text-decoration:none;
        
    }
`
const CartCount = styled.div`
    color:#F08804
`
