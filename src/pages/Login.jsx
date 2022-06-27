import { useSelector } from 'react-redux'; 
import { useState} from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from "./redux/apiCalls";
import { useDispatch } from 'react-redux';

const Error = styled.span`
  color:red;
`;

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
   width:25%;
   padding:20px;
   background-color:white;
   ${mobile({width:"75%"})}
`;

const Title = styled.h1`
   font-size:34px;
   font-weight:300;
`;

const Form = styled.form`
   display:flex;
   flex-direction:column;
   
`;

const Input = styled.input`
   flex:1;
   min-width:40%;
   margin: 10px 0px;
   padding:10px;
   border-radius:10px;
   border:1px solid pink;
`;


const Button = styled.button`
   width:40%;
   border:none;
   padding:15px 20px;
   margin:20px 0px;
   background-color:teal;
   color:white;
   cursor:pointer;
   &:disabled{
      color:green;
      cursor:not-allowed
   }

`;
const Link = styled.a`
  margin:5px 0px;
  text-decoration:underline;
  cursor:pointer;
`;

const Login = () => {
   const [email , setUsername] = useState("");
   const [password , setPassword] = useState("");
   const dispatch = useDispatch();
   const {isFetching , error} = useSelector((state) => state.user);

   const handleClick = (e)=>{
      e.preventDefault();
      login(dispatch , {email , password});
   }
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input type={"email"} placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
                    <Input type={"password"} placeholder="password" onChange={(e)=> setPassword(e.target.value)} /><br/>
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                    {error && <Error>Something went wrong</Error>}
                    <Link>Forgot password</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
