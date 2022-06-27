import React from 'react';
import styled from "styled-components";
import StripeCheckout from 'react-stripe-checkout';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');



const Container = styled.div`
  top:50%;
  margin: 0;
  position: absolute;
  width:100%;
  display:flex;
  justify-content: center;
`;
const Button = styled.button`
   padding: 15px 30px;
   background-color:black;
   color:white;
   border-radius:14px;
   align-item:center;
   border:none;
  `

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const ontoken = (token) => {
    setStripeToken(token);
    console.log(token)
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        
       const res = await axios.post(
        "http://localhost:5000/api/checkout/payment",
        {
          tokenId: stripeToken.id,
          amount: 2000,
        }
        );
        navigate.push('/success')
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  } ,[stripeToken , navigate]);

    return (
        <Container>
          <StripeCheckout
            name='Suman Shop'
            image='https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg'
            billingAddress
            shippingAddress
            token={ontoken}
            description='Your total amount is $30'
            amount={3000}
            stripeKey='pk_test_51KAR5fGxstmIv5vUGyz4nPJtasuKdDqDMiA1jzej4S4cton8ZtZsmsLr8cMlnOy3b8vvnk5yC0RCDAIOc9TyC49U00x31qvcsG'
          >
            <Button>Pay Now</Button>
          </StripeCheckout>
        </Container>
    )
}

export default Pay
