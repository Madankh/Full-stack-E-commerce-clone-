import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../component/Announcement";
import { Footer } from "../component/Footer";
import Navbar from "../component/Navbar";
import { Newsletter } from "../component/Newsletter";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethos"
import { addProduct } from "./redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div``;
const Wrapper = styled.div`
   padding:50px;
   display:flex;
 ${mobile({ padding: "10px", flexDirection: "column" })}
 `;
const ImgContainer = styled.div`
 flex:1;
`;
const Image = styled.img`
  width:100%;
  height:90vh;
  object-fit:cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
 flex:1;
 padding:0px 50px;
 ${mobile({ padding: "10px 0px" })}
`;

const Title = styled.h1`
   font-weight:200;
`;

const Desc = styled.p`
  margin:20px 0px;
`;

const Price = styled.span`
  font-weight:100;
  font-size:40px;
 `;

const FilterContainer = styled.div`
   display:flex;
   justify-content:space-between;
   width:50%;
   margin:30px 0px;
   ${mobile({ width: "100%" })}
 `;

const Filter = styled.div`
    display:flex;
    align-items:center;
 `;

const FilterTitle = styled.span`
   font-size:20px;
   font-weight:200
 `;

const FilterColor = styled.div`
   width:20px;
   height:20px;
   border-radius:50%;
   background-color: ${props => props.color};
   margin:0px 5px;
   cursor:pointer;
 `;

const FilterSize = styled.select`
   margin-left:10px;
   padding:5px
 `;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
   display:flex;
   align-items:center;
   width:100%;
   justify-content: space-between;
   ${mobile({ width: "100%" })}
 `;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
  
 `;


const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 5px 
`;

const Button = styled.button`
  padding:15px;
  border: 2px solid teal;
  color:white;
  margin:0px 10px;
  background-color : black;
  cursor:pointer;
  font-weight:500;
  ${mobile({})}

  &:hover{
      background-color:red
  }
`;
const Button1 = styled.button`
padding:15px;
color:white;
border: 2px solid teal;
background-color : black;
margin:0px 10px;
cursor:pointer;
font-weight:500;
${mobile({})}

&:hover{
    background-color:red;
    color:white
}
`

const ButtonContainer = styled.div`
margin:0px 80px;

`
const MainButtonContainer = styled.div`
 display:flex
`
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setproduct] = useState({});
  const [quantity, setquantity] = useState(1);
  //  const [color, setcolor] = useState("");
  //  const [size, setsize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/` + id);
        setproduct(res.data);
      } catch (error) {

      }
    };
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setquantity(quantity - 1)
    } else {
      setquantity(quantity + 1)
    }
  }

  const handleClick = () => {
    //update cart
    dispatch(
      addProduct({ ...product, quantity }));

  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>NPR {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* {product.color.map(c => (
                                 <FilterColor color={c} key={c}/> 
                                 ))} */}
              <FilterColor color={product.color} />
              {/* <FilterColor color="black"/> */}

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>{product.size}</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>

              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
          <MainButtonContainer>
              <ButtonContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
                <Link to="/cart">
                  <Button onClick={handleClick}>Buy</Button>
                </Link>
                <Button1>Video Call</Button1>
              </ButtonContainer>
          </MainButtonContainer>
            </AmountContainer>

          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}
export default Product