import { Facebook, Instagram, Mail, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
  display:flex;
  ${mobile({flexDirection:"column"})}

`;
const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  margin:10px
`;

const Logo = styled.h1``
const Description = styled.p`
   margin:20px 0px;
`
const SocialContainer = styled.div`
  display:flex;  
`
const SocialIcon = styled.div`
   width:40px;
   height:40px;
   border-radius:50%;
   color:white;
   background-color:#${props=>props.color};
   display:flex;
   align-items:center;
   justify-content:center;
   margin:3px
`;

const Center = styled.div`
  flex:1;
  padding:10px;

`;

const Title = styled.h3`
   margin-bottom:30px;
`;

const List = styled.ul`
  margin:0;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  list-style:none;
`;
const ListItem = styled.li`
  width:50%;
  margin-bottom:10px
`

const Right = styled.div`
  flex:1;
  padding:10px;
  ${mobile({backgroundColor:"#eee"})}
  
`;
const ContactItem = styled.div`
   margin-bottom:20px;
   aling-items:center;
   display:flex;
`;

const Payment = styled.img`
   width:50%;
`;


export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Ecom.</Logo>
                <Description>
                    There are many variation of passages of lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ducimus sed earum non architecto numquam modi corporis sapiente, recusandae vitae nostrum illum omnis adipisci facilis. Harum dolore quisquam quae at.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook/>
                    </SocialIcon >
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <YouTube/>
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
              <Title>Userful Links</Title>
              <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

              </List>
            </Center>
            <Right>
              <Title>Contact</Title>
              <ContactItem>< Room style={{marginRight:"10px"}}/> 622 Suman khadkas the world</ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/> +980 511 8752</ContactItem>
              <ContactItem> <Mail style={{marginRight:"10px"}}/> Contact@khadka.email</ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>
        </Container>
    )
}
