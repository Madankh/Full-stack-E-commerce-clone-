import React from 'react';
import styled from 'styled-components';
import { Search, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
   background-color : black;
   height: 75px;
   ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex:1;
  display:flex;
`;
const Center = styled.div`
  display:flex;
  background-color:white;
  flex:1;
  padding:12px 30px;
  border-radius:20px;
  justify-content: center;
  align-items: center;
  text-align:center;
`;
const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({ flex: 3, justifyContent: "center" })}
`;
const CompanyLogo = styled.h1`
  color:white;
  font-weight:600;
  font-size:24px;
  cursor:pointer;
  ${mobile({ display: "none" })}
`;

const MenuItem = styled.div`
color:white;
 font-size:14px;
 cursor: pointer;
 margin-left:25px;
 ${mobile({ fontSize: "12px", marginLeft: "4px" })}
`;

const Select = styled.select`

`;

const Input = styled.input`
  margin:0px 8px;
  border: 0.5px solid lightgray;
  width:100%;
  border:none;
  outline: none;
  ${mobile({ width: "50px" })}
`;
 
// Input:focus`
//    border: 1px solid #1670BE;
//     box-shadow: 0 0 3px #1670BE;
//     outline-offset: 0px;
//     outline: none;
// `



const Logo = styled.img`
  font-weight:bold;
  margin:10px;
  ${mobile({ fontSize: "24px" })}
`;
// const Right = styled.div`
//  flex:1;
// `;

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <CompanyLogo>Logo</CompanyLogo>
        </Left>
        <Center>
          <SearchOutlined/>
          <Input placeholder='Search Products.....' />
          {/* <Select/> */}
          <select style={{border:'none' , outline:'none'}}>
            <option>Product</option>
            <option>Shop</option>
          </select>
          </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>

  )
}

export default Navbar
