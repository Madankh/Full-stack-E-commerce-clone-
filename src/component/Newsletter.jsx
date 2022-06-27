
import {Send} from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;

`;
const Title = styled.h1`
   font-size:70px;
   margin:10px
`
const Description = styled.div`
  margin:10px;
  font-weight:300;
  margin-bottom:10px
  ${mobile({textAlign:"center" , fontSize:"1px"})}
`;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
`;
const Input = styled.input`
 border:none;
 width:100%;
 padding-left:20px
 
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  color: white
`;

export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <InputContainer>
              <Input placeholder='Enter your email'/>
              <Button>
                  <Send/>
              </Button>
            </InputContainer>
        </Container>
    )
}
