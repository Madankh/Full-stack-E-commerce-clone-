import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import {sliderItems} from "./data"
import React,{useState} from "react";
import { mobile } from "../responsive";


const Container = styled.div`
   width: 100%;
   height: 100vh;
   position:relative;
   overflow:hidden;
   ${mobile({display:"none"})}
`;

const Arrow = styled.div`
   width: 50px;
   height:50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position:absolute;
   top:0;
   bottom:0;
   left:${props => props.direction === "left" && "10px"};
   right:${props => props.direction === "right" && "10px"};
   cursor:pointer;
   margin:auto;
   opacity:0.5;
`;

const Wrapper = styled.div`
  height:100%;
  transition: all 1.5s ease;
  display:flex;
  transform:translateX(${props=>props.slideIndex *-220}vh)
`;

const Slide = styled.div`
  width :100vm;
  height :100vh;
  display :flex;
  align-items :center;
  background-color: #${props=>props.bg}
`;
const ImgContainer = styled.div`
   height:100%;
   flex:1;
`;
const Image = styled.img`
   height:100%;
   margin-left:150px
`;

const InfoContainer = styled.div`
   flex:1;
   margin:200px;
`;
const Title = styled.h1`
    font-size:70px;

`
const Desc = styled.p`
   margin: 20px 0;
   font-size:20px;
   font-weight:500;
   letter-spacing: 2px;
`
const Button = styled.button`
   padding:10px;
   font-size:20px;
   background-color: white;
   border-radius:10px;
   border:none;
   cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0)
    const handleClick = (direction) =>{
        if(direction==="left"){
            setslideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else{
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide >

                    ))}
            
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
