import {mobile} from "../responsive"
import styled from "styled-components"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
   width:100vw;
   height:100vh;
   background: linear-gradient(
       rgba(255,255,255,0.5),
       rgba(255,255,255,0.5)),
       url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
       display:flex;
       align-items:center;
       justify-content:center;
   
`;

const Wrapper = styled.div`
   width:40%;
   padding:20px;
   background-color:white;
   ${mobile({width:"75%"})}
`;

const Title = styled.h1`
   font-size:34px;
   font-weight:300;
`;

const Form = styled.form`
   align-items:center;
   margin:20px;
   justify-content:center;
`;

const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px 0px;
   padding:10px;
   border-radius:10px;
   border:1px solid pink;
`;

const Agreement = styled.span`
   font-size:12px;
   margin:20px 0px;
`;
const Button = styled.button`
   width:40%;
   border:none;
   padding:15px 20px;
   margin:20px 0px;
   background-color:teal;
   color:white;

`;

const Register = () => {
   const [name , setName] = useState("");
   const [lastname , SetLastname] = useState("");
   const [username , setUsername] = useState("");
   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const [comformpassword , setcomformPassword] = useState("");
   const dispatch = useDispatch();
   const {isFetching , error} = useSelector((state) => state.user);

   const handleClick = (e)=>{
      e.preventDefault();

   }

    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="name" onChange={()=> setName}/>
                    <Input placeholder="last name" onChange={()=> SetLastname} />
                    <Input placeholder="Username" onChange={()=> setUsername} />
                    <Input placeholder="Email" onChange={()=> setEmail}/>
                    <Input placeholder="password" type="password" onChange={()=> setPassword} />
                    <Input placeholder="confirm password"  onChange={()=> setcomformPassword}/><br />
                    <Agreement>By creating an account, I consent to the process of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement><br />
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
