import React from 'react'
import styled from "styled-components"

const Container = styled.div`
 width:100%;

`;
const Button = styled.button`
   padding: 15px 30px;
   background-color:green;
   color:white;
   border-radius:14px;
   border:none;
  `;

  const Vertical = styled.div`
  top:50%;
  margin: 10px 50px 20px;
  position: absolute;
  width:100%;
  display:flex;
  alignItem:center;
  justify-content: center;
`;
const Verticall = styled.div`
position: absolute;
alignItem:center;
width:100%;
margin: 10px 50px 20px;
display:flex;
justify-content: center;
top:56%;
`;
// const ImgContainer = styled.div`
//    display:flex;
//    justify-content: center;
//    position: relative;
//    margin:10px 250px 20px;
// `;
// const Image = styled.img`
//   alignItem:center;
//   border-radius:50%;
//   top:40%;;
// `;
  const Text = styled.h4``;

const Success = () => {
    return (
        <Container>
           {/* <ImgContainer>
             <Image src="https://acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png" alt="" />
           </ImgContainer> */}
               
            
            <Vertical>
              <Button>Successfull</Button>
            </Vertical>
            <Verticall>
               <Text>Your order is being prepared. Thanks for choosing Suman Shop</Text>
            </Verticall>
        </Container>
    )
}

export default Success;
